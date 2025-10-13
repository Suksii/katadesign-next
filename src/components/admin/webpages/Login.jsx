"use client";

import CustomButton from "@/components/buttons/CustomButton";
import CustomCheckbox from "@/components/forms/inputs/CustomCheckbox";
import CustomInput from "@/components/forms/inputs/CustomInput";
import Logo from "@/components/Logo";
import { Link, useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { useLogin } from "@/hooks/useLogin";

export default function LoginComponent() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const loginMutation = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          if (data.success) {
            router.push("/admin");
            router.refresh();
          }
        },
      }
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-red-800/20 to-red-600/20 rounded blur-xl opacity-50"></div>

          <div className="relative bg-zinc-900/90 backdrop-blur-2xl rounded shadow-2xl border border-zinc-800/50 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

            <div className="pt-12 pb-8 px-8 text-center relative">
              <div className="relative inline-block mb-8 group text-white">
                <Logo variant="dark" />
              </div>
              <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm">
                <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                <p>Pristup administratorskom panelu</p>
                <div className="w-1 h-1 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div className="px-8 pb-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {loginMutation.error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded p-3 text-red-400 text-sm text-center animate-shake">
                    {loginMutation.error?.response?.data?.error ||
                      loginMutation.error.message}
                  </div>
                )}

                <CustomInput
                  type="email"
                  name="email"
                  label="Email adresa"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  required
                  disabled={loginMutation.isPending}
                  classNameLabel="text-zinc-300"
                  classNameInput="focus:bg-zinc-800 focus:ring-red-500 focus:border-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                />

                <CustomInput
                  type="password"
                  name="password"
                  label="Lozinka"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={handleKeyPress}
                  required
                  disabled={loginMutation.isPending}
                  classNameLabel="text-zinc-300"
                  classNameInput="focus:bg-zinc-800 focus:ring-red-500 focus:border-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                />

                <div className="flex items-center justify-between pt-2">
                  <CustomCheckbox
                    setIsChecked={setRememberMe}
                    isChecked={rememberMe}
                    label="Zapamti me"
                    disabled={loginMutation.isPending}
                  />
                  <Link
                    href="/admin-login/reset-lozinke"
                    className="text-sm text-red-500 hover:text-red-400 transition-colors duration-200 font-medium relative group"
                    tabIndex={loginMutation.isPending ? -1 : 0}
                  >
                    <span className="relative z-10">Zaboravljena lozinka?</span>
                    <span className="absolute inset-x-0 bottom-0 h-px bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </div>

                <CustomButton
                  label="Prijavi se"
                  type="submit"
                  loading={loginMutation.isPending}
                  disabled={loginMutation.isPending || !email || !password}
                  classNameBg="md:w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 hover:from-red-700 hover:via-red-800 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </form>
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
