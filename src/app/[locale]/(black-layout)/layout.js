import Navbar from "@/components/Navbar";
import HomePageWrapper from "@/components/wrappers/HomePageWrapper";

export default async function DarkLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <HomePageWrapper>
        <div className="w-[80%] mx-auto">
          <Navbar variant="black" />
          <main>{children}</main>
        </div>
      </HomePageWrapper>
    </div>
  );
}
