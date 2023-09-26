// import { features } from "../constants";
import styles, { layout } from "../../style";
// import Button from "./Button";

export const features = [
    {
      id: "feature-1",
      icon: '/phone.svg',
      title: "Rewards",
      content:
        "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
      id: "feature-2",
      icon: '/connection.svg',
      title: "100% Secured",
      content:
        "We take proactive steps make sure your information and transactions are secure.",
    },
    {
      id: "feature-3",
      icon: '/genuine.svg',
      title: "Balance Transfer",
      content:
        "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ];

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () =>  (

<section className={layout.section}>
    
<div className={layout.sectionInfo}>

  <h2 className={styles.heading2}>
    Find a better card deal <br className="sm:block hidden" /> in few easy
    steps.
  </h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
    aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
  </p>
  {features.map((feature, index) => (
     <FeatureCard key={feature.id} {...feature} index={index} />     ))}

  {/* <Button styles={`mt-10`} /> */}
</div>

{/* <div className={layout.sectionImg}>
</div> */}
 <div className={`${layout.sectionImg} flex-col`}>
      {/* images to be stored */}
    </div>
</section>
);

export default Features;
