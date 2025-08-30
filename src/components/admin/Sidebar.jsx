"use client";

import React, { useState } from "react";
import Logo from "../Logo";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

const sidebarMenu = [
  {
    id: 1,
    name: "Projekti",
    link: "/projekti",
    options: [
      {
        name: "Dodaj projekat",
        link: "/dodaj-projekat",
      },
      {
        name: "Pogledaj projekte",
        link: "/pogledaj-projekte",
      },
    ],
  },
  {
    id: 2,
    name: "Karijera",
    link: "/karijera",
    options: [
      {
        name: "Dodaj oglas",
        link: "/dodaj-oglas",
      },
      {
        name: "Pogledaj oglase",
        link: "/pogledaj-oglase",
      },
    ],
  },
  {
    id: 3,
    name: "Novosti",
    link: "/novosti",
    options: [
      {
        name: "Dodaj novost",
        link: "/dodaj-novost",
      },
      {
        name: "Pogledaj novosti",
        link: "/pogledaj-novosti",
      },
    ],
  },
  {
    id: 4,
    name: "O nama",
    link: "/o-nama",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200 shadow-xl flex flex-col">
      <div className="px-6 py-6 border-b border-gray-700">
        <Logo variant="white" />
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {sidebarMenu.map((item) => {
          const isActive = pathname.includes(item.link);

          return (
            <div key={item.id} className="flex flex-col">
              <button
                onClick={() => (item.options ? toggleMenu(item.id) : null)}
                className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="font-medium">{item.name}</span>
                {item.options && (
                  <span
                    className={`transform transition-transform duration-300 ${
                      openMenu === item.id ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                )}
              </button>

              <div
                className={`ml-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openMenu === item.id
                    ? "max-h-40 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-1">
                  {item.options?.map((sub, idx) => {
                    const subActive = pathname.includes(sub.link);
                    return (
                      <Link
                        key={idx}
                        href={`/admin/${sub.link}`}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                          subActive
                            ? "bg-gray-700 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-700 text-sm text-gray-500">
        © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Sidebar;
