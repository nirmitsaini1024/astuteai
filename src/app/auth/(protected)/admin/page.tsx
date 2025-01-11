"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Trash,
  Download,
  Activity,
  UserPlus,
  ArrowUpDown,
} from "lucide-react";
import Image from "next/image";
import Logooo from "@/assets/logooo.png";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

const ITEMS_PER_PAGE = 6;

function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState<any[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc" | null;
  }>({
    key: "",
    direction: null,
  });

  const { toast } = useToast();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setTableData(data);
        setTotalUsers(data.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" | null = "asc";

    if (sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = null;
      }
    }

    setSortConfig({ key, direction });
  };

  const getSortedData = (data: any[]) => {
    if (!sortConfig.key || !sortConfig.direction) return data;

    return [...data].sort((a, b) => {
      if (sortConfig.key === "dateTaken") {
        const dateA = new Date(a[sortConfig.key]).getTime();
        const dateB = new Date(b[sortConfig.key]).getTime();
        return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
      }

      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key)
      return <ArrowUpDown size={16} className="ml-2 opacity-50" />;
    if (sortConfig.direction === "asc")
      return <ArrowUpDown size={16} className="ml-2 text-violet-400" />;
    if (sortConfig.direction === "desc")
      return (
        <ArrowUpDown size={16} className="ml-2 text-violet-400 rotate-180" />
      );
    return <ArrowUpDown size={16} className="ml-2 opacity-50" />;
  };

  const totalPages = Math.ceil(totalUsers / ITEMS_PER_PAGE);
  const sortedData = getSortedData(tableData);
  const currentTableData = totalUsers
    ? sortedData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : [];

  const handleStatusChange = (id: number, newStatus: string) => {
    setTableData(
      tableData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleDelete = async () => {
    if (deleteUserId !== null) {
      try {
        const response = await fetch(`/api/users?id=${deleteUserId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setTableData((prevData) =>
            prevData.filter((user) => user.id !== deleteUserId)
          );
          setTotalUsers((prevCount) => prevCount - 1);
          toast({
            title: "User deleted successfully.",
            description: "The user has been removed from the list.",
          });
        } else {
          toast({
            title: "Failed to delete user.",
            description: "There was an error deleting the user.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Error deleting user.",
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    }
    setIsDialogOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
      case "Inactive":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      default:
        return "bg-amber-500/20 text-amber-400 border-amber-500/50";
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex overflow-hidden">
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 w-72 bg-gray-800/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out h-screen ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col shadow-2xl border-r border-gray-700/30`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-700/30">
          <Link href={"/"}>
            <div className="flex items-center space-x-1 pl-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-20"></div>
                <Image
                  src={Logooo}
                  height={42}
                  width={42}
                  className="relative object-contain"
                  alt="Stute.ai Logo"
                />
              </div>
              <span className="text-white font-semibold text-xl tracking-wide">
                stute.ai
              </span>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 py-8 px-6">
          <div className="space-y-1">
            <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Dashboard
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 bg-gray-700/30 text-violet-400 hover:bg-gray-700/50 group"
                >
                  <Users size={20} />
                  <span>Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 group"
                >
                  <LayoutDashboard size={20} />
                  <span>Overview</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 group"
                >
                  <Activity size={20} />
                  <span>Analytics</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-700/30 group"
                >
                  <Settings size={20} />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="p-6 border-t border-gray-700/30">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-red-500/10 group"
          >
            <LogOut
              size={20}
              className="text-red-400 group-hover:text-red-500"
            />
            <span className="text-red-400 group-hover:text-red-500">
              <SignOutButton />
            </span>
          </a>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-gray-800/50 backdrop-blur-sm px-8 py-6 flex items-center justify-between border-b border-gray-700/30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-2xl font-semibold text-gray-100">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-px h-8 bg-gray-700/30" />
            <UserButton />
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-700/30 hover:border-violet-500/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-300">
                  Total Users
                </h3>
                <span className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                  <Users size={20} />
                </span>
              </div>
              {isLoading ? (
                <Skeleton className="h-12 bg-gray-700/50 w-32" />
              ) : (
                <p className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  {totalUsers.toLocaleString()}
                </p>
              )}
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-700/30 hover:border-violet-500/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-300">
                  Export Data
                </h3>
                <span className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                  <Download size={20} />
                </span>
              </div>
              <Button className="bg-violet-600 hover:bg-violet-700 text-white transition-colors flex items-center gap-2 mt-2">
                <Download size={18} />
                Download CSV
              </Button>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-700/30">
            <div className="px-8 py-6 border-b border-gray-700/30">
              <h2 className="text-xl font-semibold text-gray-200">
                Users List
              </h2>
            </div>
            <div className="overflow-x-auto">
              {isLoading || tableData.length === 0 ? (
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/30">
                      <th className="px-8 py-4 text-left text-sm font-semibold text-gray-400">
                        Name
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-semibold text-gray-400">
                        Email
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-semibold text-gray-400 hidden sm:table-cell">
                        Date
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-semibold text-gray-400">
                        Status
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-semibold text-gray-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
                      <tr key={index} className="border-b border-gray-700/30">
                        <td className="px-8 py-4">
                          <Skeleton className="h-6 w-32 bg-gray-700/50" />
                        </td>
                        <td className="px-8 py-4">
                          <Skeleton className="h-6 w-48 bg-gray-700/50" />
                        </td>
                        <td className="px-8 py-4 hidden sm:table-cell">
                          <Skeleton className="h-6 w-24 bg-gray-700/50" />
                        </td>
                        <td className="px-8 py-4">
                          <Skeleton className="h-6 w-24 bg-gray-700/50" />
                        </td>
                        <td className="px-8 py-4">
                          <Skeleton className="h-6 w-8 bg-gray-700/50" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700/30">
                      <th className="px-8 py-4 text-left text-sm font-semibold text-gray-400">
                        Name
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-semibold text-gray-400">
                        Email
                      </th>
                      <th
                        className="px-8 py-4 text-left text-sm font-semibold text-gray-400 hidden sm:table-cell cursor-pointer group"
                        onClick={() => handleSort("dateTaken")}
                      >
                        <div className="flex items-center">
                          Date
                          {getSortIcon("dateTaken")}
                        </div>
                      </th>
                      <th
                        className="px-8 py-4 text-left text-sm font-semibold text-gray-400 cursor-pointer group"
                        onClick={() => handleSort("status")}
                      >
                        <div className="flex items-center">
                          Status
                          {getSortIcon("status")}
                        </div>
                      </th>
                      <th className="px-8 py-4 text-left text-sm font-semibold text-gray-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTableData.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b border-gray-700/30 hover:bg-gray-700/20 transition-colors"
                      >
                        <td className="px-8 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-gray-200 font-medium">
                              {user.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-8 py-4 text-gray-300">
                          {user.email}
                        </td>
                        <td className="px-8 py-4 hidden sm:table-cell text-gray-400">
                          {new Date(user.dateTaken).toLocaleDateString()}
                        </td>
                        <td className="px-8 py-4">
                          <select
                            value={user.status}
                            onChange={(e) =>
                              handleStatusChange(user.id, e.target.value)
                            }
                            className={`px-4 py-1.5 rounded-full text-sm border backdrop-blur-sm transition-all cursor-pointer outline-none ${getStatusColor(
                              user.status
                            )}`}
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
                        <td className="px-8 py-4">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <button
                                onClick={() => setDeleteUserId(user.id)}
                                className="text-red-400 hover:text-red-300 transition-colors p-2 hover:bg-red-500/10 rounded-lg"
                              >
                                <Trash size={18} />
                              </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-gray-800 border border-gray-700">
                              <AlertDialogHeader>
                                <h3 className="text-lg font-semibold text-gray-200">
                                  Confirm Deletion
                                </h3>
                                <AlertDialogDescription className="text-gray-400">
                                  Are you sure you want to delete this user?
                                  This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <div className="flex flex-col sm:flex-row justify-end sm:gap-4 gap-2 mt-6">
                                <AlertDialogCancel asChild>
                                  <Button
                                    variant="outline"
                                    className="border-gray-60 text-gray-600 hover:text-gray-900 w-full sm:w-auto"
                                  >
                                    Cancel
                                  </Button>
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  asChild
                                  onClick={handleDelete}
                                >
                                  <Button
                                    variant="destructive"
                                    className="bg-red-500/80 hover:bg-red-500 w-full sm:w-auto"
                                  >
                                    Delete
                                  </Button>
                                </AlertDialogAction>
                              </div>
                            </AlertDialogContent>
                          </AlertDialog>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-violet-600 hover:bg-violet-700 text-white transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <ChevronLeft size={18} />
              Previous
            </Button>
            <span className="px-6 py-2 rounded-lg bg-gray-800/50 border border-gray-700/30 text-gray-300 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="bg-violet-600 hover:bg-violet-700 text-white transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              Next
              <ChevronRight size={18} />
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
