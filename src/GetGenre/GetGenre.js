import React, { useState } from "react";
import HomePage from "../HomePage/HomePage";
import Loading from "../Loading/Loading";
import "./GetGenre.css";
import axios from "axios";

const GetGenre = ({ genre }) => {
  const [books, setBooks] = useState([]);
  const [getName, setGetName] = useState([]);
  const [getGenre, setGetGenre] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async (e) => {
    //close genre menu
    setGetGenre(!getGenre);
    setLoading(!loading);
    const getGenreUrl = `https://api.nytimes.com/svc/books/v3/lists/${e.target.dataset.msg}.json?api-key=${process.env.REACT_APP_BOOKS_KEY_API}`;
    const res = await axios.get(getGenreUrl);
    setBooks(res.data.results.books);
    setGetName(res.data.results.display_name);
    setLoading(false);
  };

  return (
    <div>
      <div className="container-card" onClick={() => setGetGenre(!getGenre)}>
        <p className="btn">Pick a genre</p>
        <p>
          <i className={getGenre ? "arrow up" : "arrow down"}></i>
        </p>
        {getGenre
          ? genre.map((name) => {
              const { display_name, list_name_encoded } = name;
              return (
                <div key={list_name_encoded} className="container-info">
                  <p data-msg={list_name_encoded} onClick={fetchData}>
                    {display_name}
                  </p>
                </div>
              );
            })
          : null}
      </div>
      {!loading ? <HomePage books={books} name={getName} /> : <Loading />}
    </div>
  );
};

export default GetGenre;
