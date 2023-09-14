import Hero from "./ components/Hero";
import Navbar from "./ components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#020202] h-max">
      <Navbar/>
      <Hero/>
    </div>
  )
}
