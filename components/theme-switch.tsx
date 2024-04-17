"use client";
import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white  p-4 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex items-center justify-center rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};
