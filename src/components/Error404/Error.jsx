import React from "react";
import Style from "./Error.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Error = () => {
  return (
    <div className={Style.container}>
      <div className={Style.general}>
        <h3 className={Style.error}>ERROR</h3>
        <h2 className={Style.dimension}>404th dimension</h2>

        <Link to="/home">
          <button className={Style.home}> BACK TO HOME </button>
        </Link>
      </div>
      <div className={Style.imagediv}>
      </div>
        <img className={Style.img} src="error.png" alt="" />
    </div>
  );
};

export default Error;
