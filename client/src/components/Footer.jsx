import React from "react";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <>
      <div className="bg-slate-900 p-2 text-white mb-0">
        <h1 className="footer text-center">DarsheelTshirt @{currentDate}</h1>
      </div>
    </>
  );
}

export default Footer;
