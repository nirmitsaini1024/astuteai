"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Logooo from "@/assets/logooo.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignOutButton } from '@clerk/nextjs'

// Mock data for the table
const allTableData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@example.com`,
  date: new Date(2024, 2, 15 - index).toISOString().split("T")[0],
  status: ["Active", "Inactive", "Pending"][Math.floor(Math.random() * 3)],
}));

const ITEMS_PER_PAGE = 8;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(allTableData);

  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const currentTableData = tableData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleStatusChange = (id: number, newStatus: string) => {
    setTableData(
      tableData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex overflow-hidden">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 left-0 z-50 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Link href={"/"}>
            <div className="flex items-center pl-8">
              <Image
                src={Logooo}
                height={40}
                width={40}
                className="object-contain"
                alt="Stute.ai Logo"
              />

              <span className="text-white font-semibold text-lg">stute.ai</span>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
              >
                <LayoutDashboard size={20} />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
              >
                <Users size={20} />
                Users
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
              >
                <Settings size={20} />
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 text-red-400"
          >
            <LogOut size={20} />
            <SignOutButton />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-gray-800 p-4 flex items-center justify-between">
          {/* Sidebar toggle button for mobile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu size={24} />
          </button>

          {/* Right-aligned user button */}
          <div className="ml-auto mr-4">
            <UserButton />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Stats Cards */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Active Users</h3>
              <p className="text-3xl font-bold">789</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Users List</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 lg:px-6 py-3 text-left">Name</th>
                    <th className="px-4 lg:px-6 py-3 text-left">Email</th>
                    <th className="px-4 lg:px-6 py-3 text-left hidden sm:table-cell">
                      Date
                    </th>
                    <th className="px-4 lg:px-6 py-3 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentTableData.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-700 hover:bg-gray-750"
                    >
                      <td className="px-4 lg:px-6 py-4">{user.name}</td>
                      <td className="px-4 lg:px-6 py-4">{user.email}</td>
                      <td className="px-4 lg:px-6 py-4 hidden sm:table-cell">
                        {user.date}
                      </td>
                      <td className="px-4 lg:px-6 py-4">
                        <select
                          value={user.status}
                          onChange={(e) =>
                            handleStatusChange(user.id, e.target.value)
                          }
                          className={`px-2 py-1 rounded text-sm bg-transparent border ${
                            user.status === "Active"
                              ? "border-green-500 text-green-500"
                              : user.status === "Inactive"
                              ? "border-red-500 text-red-500"
                              : "border-yellow-500 text-yellow-500"
                          }`}
                        >
                          <option value="Active" className="bg-gray-800">
                            Active
                          </option>
                          <option value="Inactive" className="bg-gray-800">
                            Inactive
                          </option>
                          <option value="Pending" className="bg-gray-800">
                            Pending
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="p-4 border-t border-gray-700 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
                {Math.min(currentPage * ITEMS_PER_PAGE, tableData.length)} of{" "}
                {tableData.length} entries
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="px-4 py-2 rounded bg-gray-700">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
