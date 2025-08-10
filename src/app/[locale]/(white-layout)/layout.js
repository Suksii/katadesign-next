import Navbar from "@/components/Navbar";

export default async function LightLayout({ children }) {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto pt-12">
      <Navbar variant="light" />
      <main className="py-12 md:py-24">{children}</main>
    </div>
  );
}
