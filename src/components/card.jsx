import React from "react";
import { Button } from "../styledComponents/button";
import { Font20, Font12 } from "../styledComponents/font";

const Card = ({ imgSrc, title, discription, buttonLabel }) => (
  <div className="px-5 px-sm-3 border rounded shadow-sm d-flex flex-column justify-content-center align-items-center p-3 pb-4 ">
    <img src={imgSrc} alt="title logo" height="24" />
    <Font20 className="h6 border-bottom pb-2 my-2">{title}</Font20>
    <Font12 className="text-center">{discription}</Font12>
    <Button type="button" className="text-uppercase border rounded py-1 px-4">
      {buttonLabel}
    </Button>
  </div>
);

export default Card;
