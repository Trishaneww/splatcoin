import About from "@/components/About";
import Buy from "@/components/Buy";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partnership from "@/components/Partnership";
import Story from "@/components/Story";
import Tokenomics from "@/components/Tokenomics";




const Website = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-sky-100">
      <Navbar />
      <Hero />
      <div id="exchanges">
        <Partnership />
      </div>
      <div id="about">
        <About />
      </div>
      <Story />
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="process">
        <Buy />
      </div>
      <Gallery />
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default Website;