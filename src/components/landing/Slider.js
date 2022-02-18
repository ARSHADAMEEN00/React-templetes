import React from "react";
import Slider from "react-slick";

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles/slider.css";

function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <>
      <section className="hero_section">
        <div className="hero__slider" id="main_slider">
          <div className="staticText">We Create,</div>
          <Slider {...settings}>
            <div className="slider_content_one">
              <p className="">
                Design things, e tenetur officiis similique culpa iste quia
              </p>
            </div>
            <div className="slider_content_one">
              <p>are coders Lorem ipsum dolor sit amet Lorem, ipsum dolor.</p>
            </div>
            <div className="slider_content_one">
              <p>
                make you happy Lorem ipsum dolor sit amet Lorem, ipsum dolor.
              </p>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default SliderComponent;
