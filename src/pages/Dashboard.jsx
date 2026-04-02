import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />

            <div>
                <Navbar />         
                
                <div className="h-screen w-full flex items-center justify-center">
                    <h1>Dashboard</h1>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;