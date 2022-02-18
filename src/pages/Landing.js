import SliderComponent from "components/landing/Slider";
import Technology from "components/landing/Technology";
import MetaData from "../MetaData";
import WhatWeDo from "components/landing/whatwedo";
import ContactSection from "components/common/ContactSection";

export default function Landing() {
  return (
    <>
      <MetaData title={"Home"} name={"description"} content={""} />
      <main>
        <SliderComponent />
        {/* about us */}
        <Technology />
        <WhatWeDo />
        {/* work */}
        <ContactSection />
      </main>
    </>
  );
}
