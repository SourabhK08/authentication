"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/services/authSlice";
import { toast } from "react-hot-toast";
import "./meteor.css"; // Make sure to import the CSS

function page() {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    router.push("/login");
  };

  if (!token) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-black">
      <div className="meteor-shower"></div> {/* Meteor effect */}

      <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-10 max-w-md w-full text-white text-center animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">Welcome Back 👋</h1>
        <p className="text-lg mb-6">
          Hello, <span className="font-semibold text-white/90">{user?.username || user?.email || "User"}</span>
        </p>
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center text-2xl font-bold">
            {user?.username?.[0]?.toUpperCase() || "U"}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-white/20 hover:bg-white/30 transition-all text-white font-semibold py-2 px-6 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default page;
