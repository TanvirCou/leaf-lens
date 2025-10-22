import AboutUs from "@/components/about-us/AboutUs";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Popular from "@/components/popular/Popular";
import Review from "@/components/review/Review";
import Slider from "@/components/review/Slider";
import Services from "@/components/services/Services";


export default function Home() {
  return (
    <div className="bg-green-950 text-white tracking-wider h-screen w-full">
      <Navbar />

      <Hero />

      <Services />

      <AboutUs />

      <Popular />

      <Review />

      <Footer />
    </div>

  );
}
