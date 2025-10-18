import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";


export default function Home() {
  return (
    <div className="bg-green-950 text-white tracking-wider h-screen w-full">
      <Navbar />

      <Hero />
    </div>

  );
}
