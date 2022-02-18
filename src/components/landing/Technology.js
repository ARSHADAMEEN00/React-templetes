import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import LeadText from "@material-tailwind/react/LeadText";

import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

//css
import "../../assets/styles/custom.css";
import { Image } from "@material-tailwind/react";
import { softwareSvg, websiteSvg, mobileSvg } from "assets/img";

export default function Technology() {
  return (
    <section className="pb-20 bg-gray-100 pt-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center mt-20 pb-20">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="web" size="3xl" />
            </div>
            <H4 color="gray">
              {" "}
              Website
              <br /> <span>Development</span>
            </H4>
            <LeadText color="blueGray">
              Give your customers the experience they deserve. We craft
              state-of-the-art, responsive websites.
            </LeadText>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <Link
                  to="/services/website"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Learn more</span>
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
            {/* <a
              href="#pablo"
              className="font-medium text-light-blue-500 mt-2 inline-block"
            >
              Read More
            </a> */}
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Image alt="Card Image" src={websiteSvg} />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center mt-20 pb-20">
            <div className="w-full md:w-5/12 px-4 mx-auto">
              <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <Icon name="phone" size="3xl" />
              </div>
              <H4 color="gray">
                Mobile App
                <br />
                <span> Development</span>
              </H4>
              <LeadText color="blueGray">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </LeadText>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <Link
                    to="/services/website"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Learn more</span>
                    <FiArrowUpRight />
                  </Link>
                </div>
              </div>
              {/* <a
              href="#pablo"
              className="font-medium text-light-blue-500 mt-2 inline-block"
            >
              Read More
            </a> */}
            </div>

            <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
              <Image alt="Card Image" src={mobileSvg} />
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center mt-20 pb-20">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="laptop" size="3xl" />
            </div>
            <H4 color="gray">
              Software
              <br /> <span>Development</span>
            </H4>
            <LeadText color="blueGray">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </LeadText>
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="text-center text-lg-start">
                <Link
                  to="/services/website"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Learn more</span>
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
            {/* <a
              href="#pablo"
              className="font-medium text-light-blue-500 mt-2 inline-block"
            >
              Read More
            </a> */}
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Image alt="Card Image" src={softwareSvg} />
          </div>
        </div>
      </div>
    </section>
  );
}
