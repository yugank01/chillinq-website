// import { features } from "../constants";
import styles, { layout } from "../../style";
// import Button from "./Button";

export const features = [
    {
      id: "feature-1",
      icon: '/phone.svg',
      title: "Free to Use",
    },
    {
      id: "feature-2",
      icon: '/connection.svg',
      title: "Guaranteed Connections",
    },
    {
      id: "feature-3",
      icon: '/genuine.svg',
      title: "Genuine Profiles",
    },
    {
      id: "feature-4",
      icon: '/parties.svg',
      title: "Parties & More",
    },
  ];

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-2 my-4 border z-2 border-gray-500 hover:border-pink-500 border-solid rounded-[10px] w-3/4 feature-card`}>
    <div className={`w-[40px] h-[40px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col justify-center ml-3">
      <h4 className="font-poppins font-semibold text-white text-[17px] leading-[23.4px]">
        {title}
      </h4>
    </div>
  </div>
);

const Features = () =>  (

<section className={`${layout.section} mb-24`}>
<div>
    <div className="grad1 absolute overflow-hidden blur-[50px] h-[750px] w-[465px]"></div>
  </div>
    
<div className={`${layout.sectionInfo} z-2 relative ml-4 sm:ml-24`}>

  <h2 className={`${styles.heading2} text-[2rem] sm:text-5xl`}>
    A revolutionary <br className="block" /> dating and <br className="block" /> networking app
  </h2>
  <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
  Chillinq is committed to making the online dating and networking
experience as smooth and enjoyable as possible.
  </p>
  {features.map((feature, index) => (
     <FeatureCard key={feature.id} {...feature} index={index} />     ))}

  {/* <Button styles={`mt-10`} /> */}
</div>

{/* <div className={layout.sectionImg}>
</div> */}
 <div className={`${layout.sectionImg} flex-col`}>
    <img src="/loop.svg" alt="loop" className="w-[95%] h-[95%]"/>
    </div>
</section>
);

export default Features;
