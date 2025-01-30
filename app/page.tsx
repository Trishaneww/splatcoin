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
    <div className="flex flex-col scroll-smooth bg-sky-50">
      <Navbar />
      <Hero />
      {/* <div id="exchanges">
        <Partnership />
      </div> */}
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