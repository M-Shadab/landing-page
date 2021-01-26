import React from "react";
import Card from "./card";
import Title1 from "../assets/images/Title 1.png";
import Title2 from "../assets/images/Title 2.png";
import Title3 from "../assets/images/Title 3.png";
import { CardsContainer } from "../styledComponents/benefitSection";

const discription =
  "Lorem ipsum dolor sit amet consectetur, dolore temporibus error ab ut eveniet tenetur, vitae quidem expedita.";

const CardsWrapper = () => (
  <CardsContainer className="col-md-8 px-5 py-5">
    <div className="row no-gutters">
      <div className="col-sm mx-sm-2 px-0 mb-3 mb-sm-0">
        <Card
          imgSrc={Title1}
          title="Title 1"
          discription={discription}
          buttonLabel="Button 1"
        />
      </div>
      <div className="col-sm mx-sm-2 px-0 mb-3 mb-sm-0">
        <Card
          imgSrc={Title2}
          title="Title 2"
          discription={discription}
          buttonLabel="Button 2"
        />
      </div>
      <div className="col-sm mx-sm-2 px-0 mb-3 mb-sm-0">
        <Card
          imgSrc={Title3}
          title="Title 3"
          discription={discription}
          buttonLabel="Button 3"
        />
      </div>
    </div>
  </CardsContainer>
);

export default CardsWrapper;
