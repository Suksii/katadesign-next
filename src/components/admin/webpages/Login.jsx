"use client";

import CustomButton from "@/components/buttons/CustomButton";
import CustomInput from "@/components/forms/inputs/CustomInput";
import Logo from "@/components/Logo";
import { useState } from "react";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log("Login:", { email, password, rememberMe });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-800 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-950 rounded-full mix-blend-multiply filter blur-[80px] opacity-5 animate-pulse"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="w-full max-w-md relative z-10">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-red-800/20 to-red-600/20 rounded blur-xl opacity-50"></div>

          <div className="relative bg-zinc-900/90 backdrop-blur-2xl rounded shadow-2xl border border-zinc-800/50 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

            <div className="pt-12 pb-8 px-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none"></div>

              <div className="relative inline-block mb-8 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/30 to-red-800/30 rounded blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative transform transition-transform duration-300 group-hover:scale-105">
                  <Logo variant="dark" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
                <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                <p>Pristup administratorskom panelu</p>
                <div className="w-1 h-1 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div className="px-8 pb-10">
              <div className="space-y-5">
                <CustomInput
                  type="email"
                  name="email"
                  label="Email adresa"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  classNameLabel="text-zinc-300"
                  classNameInput="focus:bg-zinc-800 focus:ring-red-500 focus:border-red-600"
                />

                <CustomInput
                  type="password"
                  name="password"
                  label="Lozinka"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  classNameLabel="text-zinc-300"
                  classNameInput="focus:bg-zinc-800 focus:ring-red-500 focus:border-red-600"
                />

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded transition-all duration-300 ${
                          rememberMe
                            ? "bg-gradient-to-br from-red-600 to-red-700 border-red-600 shadow-lg shadow-red-600/30"
                            : "bg-zinc-800/50 border-zinc-600 group-hover:border-zinc-500 group-hover:bg-zinc-800"
                        }`}
                      >
                        {rememberMe && (
                          <svg
                            className="w-full h-full text-white p-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="ml-2.5 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      Zapamti me
                    </span>
                  </label>

                  <button className="text-sm text-red-500 hover:text-red-400 transition-colors duration-200 font-medium relative group">
                    <span className="relative z-10">Zaboravljena lozinka?</span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </button>
                </div>

                <CustomButton
                  label="Prijavi se"
                  onClick={handleSubmit}
                  loading={isLoading}
                  classNameBg="md:w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-700 hover:via-red-800 hover:to-red-700"
                />
              </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-zinc-600 text-xs flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></span>© 2025
            CMS Admin Panel
            <span className="w-1.5 h-1.5 bg-zinc-700 rounded-full"></span>
          </p>
        </div>
      </div>
    </div>
  );
}
