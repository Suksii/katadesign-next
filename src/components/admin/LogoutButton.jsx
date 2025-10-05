"use client";

import { useMutation } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import ButtonSpinner from "./ButtonSpinner";
import { useRouter } from "@/i18n/navigation";

export default function LogoutButton({ className = "" }) {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => fetch("/api/auth/logout", { method: "POST" }),
    onSuccess: () => {
      router.push("/admin-login");
      router.refresh();
    },
    onError: (error) => {
      console.error("Logout failed", error);
    },
  });

  return (
    <button
      onClick={() => mutation.mutate()}
      disabled={mutation.isLoading}
      title="Odjavi se"
      className={`
        p-2 rounded-md
        text-zinc-400 hover:text-red-600 hover:bg-zinc-900
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        flex items-center justify-center
        ${className}
      `}
      aria-label="Logout"
      type="button"
    >
      {mutation.isLoading ? <ButtonSpinner /> : <LogOut className="h-6 w-6" />}
    </button>
  );
}
