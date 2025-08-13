import Navbar from "@/components/Navbar";

export default async function DarkLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <div className="w-[80%] mx-auto pt-10 md:pt-12">
        <Navbar variant="black" />
        <main className="py-12 md:py-24">{children}</main>
      </div>
    </div>
  );
}
