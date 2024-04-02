import React from "react";
import NavBar from "../Navbar/NavBar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="holder">
        <NavBar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice
          </h2>{" "}
          <br />
          <p className="headwer-text fs-24 fw-5">
            "Step into the realm of boundless imagination. Our book app offers
            refuge for dreamers, adventurers, and seekers of knowledge. Explore,
            escape, and experience the wonders of literature."
          </p>
          <SearchForm />
        </div>
      </div>
    </>
  );
};

export default Header;
