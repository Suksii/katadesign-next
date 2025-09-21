"use client";

import React, { useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { sidebarMenu } from "../utils/constants";

const Stickybar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="w-full fixed bottom-0 bg-gradient-to-b from-gray-900 to-black h-12 shadow-xl z-50 text-white">
      <nav className="flex justify-between items-center px-4 h-full w-full relative">
        {sidebarMenu.map((item) => {
          const isActive = pathname.includes(item.link);

          return (
            <div key={item.id}>
              <button
                type="button"
                onClick={() =>
                  item.options
                    ? toggleMenu(item.id)
                    : router.push(`/admin/${item.link}`)
                }
                className={`text-sm uppercase px-2 py-1 cursor-pointer transition-colors ${
                  isActive ? "text-blue-400" : "text-gray-200"
                }`}
              >
                {item.name}
              </button>

              {item.options && (
                <div
                  className={`absolute bottom-full left-0 w-[100vw] bg-gradient-to-b from-gray-900 to-black shadow-lg rounded-b transition-all duration-300 overflow-hidden ${
                    openMenu === item.id ? "max-h-60 py-2" : "max-h-0 py-0"
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    {item.options.map((subitem, index) => {
                      const subActive = pathname.includes(subitem.link);
                      return (
                        <Link
                          key={`${item.id}-${index}`}
                          href={`/admin/${subitem.link}`}
                          className={`block w-full text-center px-4 py-1 hover:text-blue-400 ${
                            subActive ? "text-blue-400" : "text-gray-200"
                          }`}
                          onClick={() => setOpenMenu(null)}
                        >
                          {subitem.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Stickybar;
