import React from "react";
import "./Ricardo.css";
import JsonTools from "./JsonTools";
import Link from "./Link";
import ImgTec from "./img/ImgTec.png";
const Ricardo = () => {
  code = [Javascript, Css, Html];
  //   tools = [React, Redux, Node, Express, PostgreSQL, Git, Bootstrap];

  return (
    <div>
      <h1 ClassName="title ">Ricardo Ramirez </h1>
      {code.map((code) => (
        <h3>{code}</h3>
      ))}
      {JsonTools.map((tools) => (
        <ul>
          <li>{tools.name}</li>
        </ul>
      ))}
      <img>{ImgTec}</img>
      <span>
        <p className="title-p"> About me</p>
        <p className="title-small">
          I am a Full Stack web developer with a passion for technologies. I
          love to learn and meet challenges and find the best solution
        </p>
      </span>
      <Link to="https://www.linkedin.com/in/ricardo-ram%C3%ADrez-24478b219/">
        <button
          type="button"
          className="col-6  text-fff  btn btn-warning btn-sm  btn-about "
        >
          LinkedIn
        </button>
      </Link>
    </div>
  );
};

export default Ricardo;
