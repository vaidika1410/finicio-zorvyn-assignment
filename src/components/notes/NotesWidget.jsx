import { useState, useEffect } from "react";
import { useFinanceStore } from "../../store/useFinanceStore";
import { motion, AnimatePresence } from "framer-motion";
import { NotebookPen } from "lucide-react";
import { useRef } from "react";

const NotesWidget = () => {
    const { darkMode } = useFinanceStore();

    const panelRef = useRef(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [open, setOpen] = useState(false);
    const [notes, setNotes] = useState(() => {
        const saved = localStorage.getItem("notes");
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
            }

            if (e.key === "Enter") {
                addNote();
            }
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [input]);

    const addNote = () => {
        if (!input.trim()) return;

        const newNote = {
            id: Date.now(),
            text: input,
            completed: false,
        };

        setNotes([newNote, ...notes]);
        setInput("");
    };

    const toggleNote = (id) => {
        setNotes((prev) =>
            prev.map((note) =>
                note.id === id
                    ? { ...note, completed: !note.completed }
                    : note
            )
        );
    };

    const deleteNote = (id) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    return (
        <>
            {/* FLOATING BUTTON */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen((prev) => !prev);
                }}
                className={`fixed lg:bottom-6 lg:right-4 md:right-6 md:bottom-6 right-4 bottom-18 z-50 p-3 rounded-full
                shadow-[0_0_20px_rgba(215,121,62,0.4)]
                    ${darkMode
                        ? "bg-[#d7793e] text-white"
                        : "bg-[#d7793e] text-white"
                    }`}
            >
                <NotebookPen size={18} />
            </button>

            {/* PANEL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        onMouseDown={(e) => e.stopPropagation()}
                        drag
                        dragMomentum={false}
                        dragElastic={0.2}
                        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                        onDragEnd={(event, info) => {
                            setPosition((prev) => ({
                                x: prev.x + info.offset.x,
                                y: prev.y + info.offset.y,
                            }));
                        }}
                        animate={{
                            x: position.x,
                            y: position.y,
                            opacity: 1,
                            scale: 1,
                        }}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        dragHandleSelector=".drag-handle"
                        className={`fixed lg:bottom-20 lg:right-8 bottom-32 right-2 md:bottom-22 md:right-6 translate-x-0 translate-y-0 w-[300px] max-h-[400px] lg:w-[30vw] lg:min-h-[40vh] md:w-[50vw] md:min-h-[40vh] overflow-y-auto z-999 rounded-2xl p-6
                        ${darkMode
                                ? "bg-[#0c06034f] border border-[rgba(215,121,62,0.19)] backdrop-blur-lg shadow-[0_0_30px_rgba(215,121,62,0.15)]"
                                : "bg-white/5 backdrop-blur-lg border border-gray-200 shadow-lg"
                            }`}
                    >
                        <div className="drag-handle cursor-move mb-3 flex justify-between items-center">
                            <h2 className="lg:text-lg text-sm font-semibold">My Notes</h2>
                            <span className="text-xs opacity-50">drag</span>
                        </div>

                        {/* INPUT */}
                        <div className="flex gap-2 mb-3">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Add a task..."
                                className={`flex-1 p-2 text-sm rounded-lg outline-none
                                    ${darkMode
                                        ? "bg-white/5 border border-white/10 text-white"
                                        : "bg-white border border-gray-300"
                                    }`}
                            />
                            <button
                                onClick={addNote}
                                className="px-3 pb-1 rounded-md bg-[#d7793e] text-white font-bold text-xl hover:opacity-90"
                            >
                                +
                            </button>
                        </div>

                        {/* LIST */}
                        <div className="flex flex-col gap-2">
                            {notes.length === 0 && (
                                <p className="text-xs opacity-60">No tasks yet</p>
                            )}

                            {notes.map((note) => (
                                <div
                                    key={note.id}
                                    className="flex items-center justify-between text-sm"
                                >
                                    <div
                                        key={note.id}
                                        className="flex items-center justify-between text-sm gap-2"
                                    >
                                        <div
                                            onClick={() => toggleNote(note.id)}
                                            className="flex items-center gap-2 flex-1 cursor-pointer"
                                        >
                                            {/* Checkbox */}
                                            <div
                                                className={`w-4 h-4 rounded border flex items-center justify-center
      ${note.completed
                                                        ? "bg-[#d7793e] border-[#d7793e]"
                                                        : darkMode
                                                            ? "border-white/20"
                                                            : "border-gray-400"
                                                    }`}
                                            >
                                                {note.completed && (
                                                    <span className="text-white text-[10px]">✓</span>
                                                )}
                                            </div>

                                            {/* Text */}
                                            <span
                                                className={`${note.completed
                                                    ? "line-through opacity-50"
                                                    : ""
                                                    }`}
                                            >
                                                {note.text}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => deleteNote(note.id)}
                                        className="text-red-400 font-bold text-sm ml-2"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    </ motion.div>
                )}
            </ AnimatePresence>
        </>
    );
};

export default NotesWidget;