import Navbar from "@/components/Navbar";
import About from "@/containers/About";
import Hero from "@/containers/Hero";
import Plans from "@/containers/Plans";
import Footer from "@/components/Footer";
import Security from "@/containers/Security";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <About />
      <Plans />
      <Security />
      <Footer />
    </>
  );
}
