import React from "react";
import groceries from "../../assets/categories/groceries.png";
import mobile from "../../assets/categories/mobile.png";
import appliances from "../../assets/categories/appliances.png";
import travel from "../../assets/categories/travel.png";
import fashion from "../../assets/categories/fashion.png";
import electronics from "../../assets/categories/electronics.png";
import home from "../../assets/categories/home.png";
import toy from "../../assets/categories/toy.png";

const categories = [
  { src: groceries, label: "Grocery" },
  { src: appliances, label: "Appliances" },
  { src: mobile, label: "Mobiles" },
  { src: travel, label: "Travel" },
  { src: fashion, label: "Fashion" },
  { src: electronics, label: "Electronics" },
  { src: home, label: "Home & Furniture" },
  { src: toy, label: "Beauty, Toys and More" },
];

const CategoryItem = ({ src, label }) => (
  <div className="flex justify-around flex-col items-center p-2">
    <img src={src} alt={label} className="h-16 rounded-full" />
    <h1 className="font-semibold text-center leading-tight">{label}</h1>
  </div>
);

const CategoryList = () => (
  <div className="flex flex-wrap justify-between px-20 overflow-x-auto items-center w-full">
    {categories.map((category, index) => (
      <CategoryItem key={index} src={category.src} label={category.label} />
    ))}
  </div>
);

function Categories() {
  return (
    <div className="w-full bg-slate-50">
      <CategoryList />
    </div>
  );
}

export default Categories;
