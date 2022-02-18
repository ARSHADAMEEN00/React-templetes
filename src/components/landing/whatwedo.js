// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import Title from "./Title";

function WhatWeDo() {
  return (
    <>
      <section className="relative block pt-20 pb-20">
        <div className="container max-w-7xl mx-auto px-4">
          <Title heading="What we Do">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </Title>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;
