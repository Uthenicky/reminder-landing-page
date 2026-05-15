import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Statistics } from "./components/Statistics";
import { Features } from "./components/Features";
import { Benefits } from "./components/Benefits";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <Benefits />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
