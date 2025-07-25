"use client";

import { useState } from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Razvoj kreativnih koncepata i vođenje umjetničke direkcije",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      name: "Brending i strateško pozicioniranje",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      name: "Vizuelni identitet i dizajn sistemi",
      description: "",
    },
    {
      id: 4,
      name: "Naming i komunikacijska arhitektura",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      name: "Produkt i dizajn ambalaže",
      description: "",
    },
  ];

  const [openedItemId, setIsOpenedItemId] = useState(null);

  const handleOpen = (id) => {
    if (id === openedItemId) {
      setIsOpenedItemId(null);
    } else {
      setIsOpenedItemId(id);
    }
  };

  return (
    <div>
      {services.map((service) => {
        return (
          <div
            key={service.id}
            className={`py-6 ${
              service.id !== services.length ? "border-b border-gray-500" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl tracking-wide py-4 pr-4">
                {service.name}
              </h3>
              {service.description && (
                <button
                  onClick={() => handleOpen(service.id)}
                  className="relative w-8 h-8 flex items-center justify-center cursor-pointer shrink-0"
                >
                  <span className="absolute w-6 h-[2px] bg-gray-400 transition-transform duration-300"></span>
                  <span
                    className={`absolute w-[2px] h-6 bg-gray-400 transition-transform duration-300 ${
                      openedItemId === service.id ? "scale-y-0" : "scale-y-100"
                    }`}
                  ></span>
                </button>
              )}
            </div>
            <p
              className={`overflow-hidden transition-all duration-300 text-sm text-gray-300 pr-12 ${
                openedItemId === service.id ? "max-h-40" : "max-h-0"
              }`}
            >
              {service.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
