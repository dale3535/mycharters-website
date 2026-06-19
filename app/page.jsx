import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Boat from "@/components/Boat";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Boat />
        <Experiences />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
