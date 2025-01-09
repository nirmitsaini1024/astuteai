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
import { useToast } from "@/hooks/use-toast"; // Updated import for custom useToast hook

// Fetch data from Prisma
const ITEMS_PER_PAGE = 8;

function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState<any[]>([]);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { toast } = useToast(); // Destructure toast from the custom hook

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

  const totalPages = Math.ceil(totalUsers / ITEMS_PER_PAGE);
  const currentTableData = totalUsers
    ? tableData.slice(
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

  // Handle Delete User
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
          console.error("Failed to delete user:", await response.text());
          toast({
            title: "Failed to delete user.",
            description: "There was an error deleting the user.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        toast({
          title: "Error deleting user.",
          description: "An unexpected error occurred.",
          variant: "destructive",
        });
      }
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex overflow-hidden">
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
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Menu size={24} />
          </button>
          <div className="ml-auto mr-4 ">
            <UserButton />
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              {isLoading ? (
                <Skeleton className="h-8 bg-gray-500 w-32" />
              ) : (
                <p className="text-3xl font-bold">{totalUsers}</p>
              )}
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">CSV Data</h3>
              <Button className="text-white hover:text-black hover:bg-white ">
                Download CSV
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-xl font-semibold">Users List</h2>
            </div>
            <div className="overflow-x-auto">
              {isLoading || tableData.length === 0 ? (
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 lg:px-6 py-3 text-left">Name</th>
                      <th className="px-4 lg:px-6 py-3 text-left">Email</th>
                      <th className="px-4 lg:px-6 py-3 text-left hidden sm:table-cell">
                        Date
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left">Status</th>
                      <th className="px-4 lg:px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="px-4 lg:px-6 py-4">
                          <Skeleton className="h-6 w-full bg-gray-500" />
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <Skeleton className="h-6 w-full bg-gray-500" />
                        </td>
                        <td className="px-4 lg:px-6 py-4 hidden sm:table-cell">
                          <Skeleton className="h-6 w-full bg-gray-500" />
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <Skeleton className="h-6 w-32 bg-gray-500" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 lg:px-6 py-3 text-left">Name</th>
                      <th className="px-4 lg:px-6 py-3 text-left">Email</th>
                      <th className="px-4 lg:px-6 py-3 text-left hidden sm:table-cell">
                        Date
                      </th>
                      <th className="px-4 lg:px-6 py-3 text-left">Status</th>
                      <th className="px-4 lg:px-6 py-3 text-left">Actions</th>
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
                          {user.dateTaken.split("T")[0]}
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
                          </select>
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <button
                                onClick={() => setDeleteUserId(user.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash size={20} />
                              </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <h3 className="text-lg font-semibold">
                                  Confirm Deletion
                                </h3>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this user?
                                  This action is irreversible.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <div className="flex justify-between mt-4">
                                <AlertDialogCancel asChild>
                                  <Button
                                    variant="outline"
                                    className="text-gray-700 hover:bg-gray-200"
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
                                    className="bg-red-600 hover:bg-red-700"
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

          {/* Pagination */}
          <div className="mt-6 flex justify-between items-center">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
