import Featured from "@/components/FeaturedProperties";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <Topbar />
    <Navbar/>
    <Hero/>
    <Featured/>
    <Services/>
    <About/>
    <ContactSection />
    <Footer />
    </>
  );
}
