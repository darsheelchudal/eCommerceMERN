import React from "react";
import Categories from "../Layout/Categories";
import Offer1 from "../../assets/offerBanner/offer1.jpg";
import Offer2 from "../../assets/offerBanner/offer2.jpg";
import Offer3 from "../../assets/offerBanner/offer3.jpg";
import Offer5 from "../../assets/offerBanner/offer5.jpg";
import Offer7 from "../../assets/offerBanner/offer7.jpg";
import Offer8 from "../../assets/offerBanner/offer8.jpg";
import CarouselSlider from "../CarouselSlider/CarouselSlider";

function Home() {
  const slides = [
    <img src={Offer8} alt="Offer 8" className="h-80 w-full object-cover" />,
    <img src={Offer1} alt="Offer 1" className="h-80 w-full object-cover" />,
    <img src={Offer2} alt="Offer 2" className="h-80 w-full object-cover" />,
    <img src={Offer3} alt="Offer 3" className="h-80 w-full object-cover" />,
    <img src={Offer5} alt="Offer 5" className="h-80 w-full object-cover" />,
    <img src={Offer7} alt="Offer 7" className="h-80 w-full object-cover" />,
  ];

  return (
    <>
      <Categories />
      <div className="w-full flex justify-center">
        <div className="w-max">
          <CarouselSlider slides={slides} />
        </div>
      </div>
    </>
  );
}

export default Home;
