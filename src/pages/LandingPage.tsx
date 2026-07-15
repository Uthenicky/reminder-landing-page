import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { BusinessModules } from "../components/BusinessModules";
import { Features } from "../components/Features";
import { Benefits } from "../components/Benefits";
import { Services } from "../components/Services";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BusinessModules />
      <Features />
      <Benefits />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};
