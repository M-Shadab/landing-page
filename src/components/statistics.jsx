import React from "react";
import { Wrapper } from "../styledComponents/statistics";
import { Font24, Font50 } from "../styledComponents/font";

const Statistics = () => (
  <Wrapper className="row no-gutters">
    <div className="col-sm mb-4 mb-sm-0 d-flex flex-column justify-content-center align-items-center">
      <Font50 className="mb-1">2,1000</Font50>
      <Font24 className="mb-0">key1</Font24>
    </div>
    <div className="col-sm mb-4 mb-sm-0 d-flex flex-column justify-content-center align-items-center">
      <Font50 className="mb-1">160,000</Font50>
      <Font24 className="mb-0">key2</Font24>
    </div>
    <div className="col-sm mb-4 mb-sm-0 d-flex flex-column justify-content-center align-items-center">
      <Font50 className="mb-1">6,800</Font50>
      <Font24 className="mb-0">key3</Font24>
    </div>
    <div className="col-sm mb-4 mb-sm-0 d-flex flex-column justify-content-center align-items-center">
      <Font50 className="mb-1">3,600</Font50>
      <Font24 className="mb-0">key4</Font24>
    </div>
    <div className="col-sm mb-4 mb-sm-0 d-flex flex-column justify-content-center align-items-center">
      <Font50 className="mb-1">4,500</Font50>
      <Font24 className="mb-0">key5</Font24>
    </div>
  </Wrapper>
);

export default Statistics;
