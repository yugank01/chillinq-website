import FAQ from "./ components/FAQ";
import FaqSection from "./ components/FaqSection";
import Features from "./ components/Features";
import Footer from "./ components/Footer";
import Heading from "./ components/Heading";
import Hero from "./ components/Hero";
import Navbar from "./ components/Navbar";
import styles from "@/style";
import Showcase from "./ components/Showcase";
export default function Home() {
  return (
    <div className={`bg-[#020202] h-max`}>
      {/* <div> */}
      <Navbar/>
      <Hero/>
      {/* <div className={`bg-[#020202] h-max  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> */}

      <Heading/>
      <Features/>
      <Showcase/>
      <FaqSection/>
      <Footer/>
      {/* </div>
      </div> */}
      {/* </div> */}
      
    </div>
  )
}
