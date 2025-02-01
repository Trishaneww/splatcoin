import About from "@/components/About";
import Buy from "@/components/Buy";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Footer2 from "@/components/Footer2";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pack from "@/components/Pack";
import Partnership from "@/components/Partnership";
import Story from "@/components/Story";
import Tokenomics from "@/components/Tokenomics";




const Website = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden scroll-smooth bg-pink-100">
      <Navbar />
      <Hero />
      {/* <div id="exchanges">
        <Partnership />
      </div> */}
      <div id="about" className="w-full flex justify-center">
        <About />
      </div>
      <div id="learn" className="w-full flex justify-center">
        <Story />
      </div>
      <div id="tokenomics" className="w-full flex justify-center">
        <Tokenomics />
      </div>
      <div id="process">
        <Buy />
      </div>
      <Pack />
      <CTA />
      {/* <Gallery /> */}
      {/* <div id="faq">
        <Faq2 />
      </div> */}
      {/* <Footer /> */}
      <Footer2 />
    </div>
  );
};

export default Website;