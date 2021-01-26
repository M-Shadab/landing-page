import React from "react";
import { StyledHeader } from "../styledComponents/header";
import { Heading1, A14 } from "../styledComponents/font";
import LogoHere from "../assets/images/Logo Here.png";
import search from "../assets/images/search.png";

const Header = () => (
  <StyledHeader className="text-light d-flex flex-column">
    <nav className="row no-gutters px-2 px-sm-5 pt-3">
      <div className="col-md-6 col-lg-8">
        <img src={LogoHere} alt="Logo" />
      </div>
      <div className="col-md-6 col-lg-4 nav justify-content-between">
        <A14 className="nav-link text-center" href="#">
          Tab1
        </A14>
        <A14 className="nav-link text-center" href="#">
          Tab2
        </A14>
        <A14 className="nav-link text-center" href="#">
          Tab3
        </A14>
        <A14 className="nav-link text-center" href="#">
          Tab4
        </A14>
        <A14 className="nav-link text-center" href="#">
          Tab5
        </A14>
        <A14 className="nav-link text-center" href="#">
          <img src={search} alt="SearchIcon" />
        </A14>
      </div>
    </nav>
    <div className="d-flex justify-content-center align-items-center flex-grow-1">
      <Heading1>This is a title text for assignment</Heading1>
    </div>
  </StyledHeader>
);

export default Header;
