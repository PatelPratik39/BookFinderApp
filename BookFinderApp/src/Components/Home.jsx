import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCdRS3FG1F4EYbBr8gOT4Mn40-HzaPGvpE" + "&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A Room without BOOKS is like <br /> a body without a soul.
          </h1>
        </div>
        <div className="row2">
          <h2>Find your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={searchBook}
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <img src="bg2.png" alt="" />
        </div>
      </div>
      <div className="container">{<Card book={bookData} />}</div>
    </>
  );
};

export default Home;
