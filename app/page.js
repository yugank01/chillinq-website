import FAQ from "./ components/FAQ";
import FaqSection from "./ components/FaqSection";
import Features from "./ components/Features";
import Footer from "./ components/Footer";
import Heading from "./ components/Heading";
import Hero from "./ components/Hero";
import Navbar from "./ components/Navbar";
import styles from "@/style";
import Showcase from "./ components/Showcase";
import Video1 from "./ components/Video1";
import Trailer from "./ components/Trailer";
import Heading2 from "./ components/Heading2"
import Twitter from "./ components/Twitter";
// import Text from "./ components/Text";
export default function Home() {
  return (
    <div className={`bg-[#020202] w-fit`}>
      {/* <div> */}
      <Navbar/>
      <Hero/>
      {/* <div className={`bg-[#020202] h-max  ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}> */}

      <Heading/>
      <Features/>
      <Video1/>
      <Showcase/>
      {/* <Video2/> */}
      <Trailer/>
      {/* <Heading2/> */}
      <Twitter/>
      <FaqSection/>
      {/* <Text/> */}
      <Footer/>
      {/* </div>
      </div> */}
      {/* </div> */}
      
    </div>
  )
}
