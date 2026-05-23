"use client";
import React from "react";
import Sidebar from "@/components/layout/sidebar";
export default function DashboardLayout({ children, }) {
    return (<div className="relative flex min-h-screen bg-gradient-to-br from-white via-gray-50/30 to-white">    
      <Sidebar />

      <main className="flex-1 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>);
}
