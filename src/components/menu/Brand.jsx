import React from "react";
import Logo from "../svgs/Logo";
import "../../assets/styles/menu/Brand.css";
const Brand = () => {
  return (
    <div className="brand-logo">
      <a href="/">
        <Logo height="50px" />
      </a>
    </div>
  );
};
export default Brand;
