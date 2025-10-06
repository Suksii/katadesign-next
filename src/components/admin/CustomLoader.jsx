import Logo from "../Logo";

export function CustomLoader({ className = "bg-black" }) {
  return (
    <div className={`flex items-center justify-center w-full h-screen ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-transparent border-t-red-600 border-r-red-600 rounded-full animate-spin"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center w-32 h-32">
          <Logo width={72} height={22} variant="dark" />
        </div>
      </div>
    </div>
  );
}
