import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import Esewa from "../../assets/payment_gateway/esewa.png";
import Khalti from "../../assets/payment_gateway/khalti.png";

function Footer() {
  return (
    <div className="bg-[#212121] text-white p-5 bottom-0 fixed w-full">
      <div className=" flex justify-around  items-center">
        <div className="font-semibold">@2024-Present DMarket.com</div>
        <div className="flex gap-x-1 items-center">
          <div className="font-semibold mx-2">Payments:</div>

          <FaCcVisa size={30} />
          <FaCcMastercard size={30} />
          <img src={Esewa} alt="" className="h-6 bg-white" />
          <img src={Khalti} alt="" className="h-6 bg-white" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
