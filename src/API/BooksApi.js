import React, { useState, useEffect } from "react";
import GetGenre from "../GetGenre/GetGenre";
import axios from "axios";

const getGenreUrl =
  "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=";

const BooksApi = () => {
  const [getGenre, setGetGenre] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `${getGenreUrl}${process.env.REACT_APP_BOOKS_KEY_API}`
      );
      setGetGenre(res.data.results);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <GetGenre genre={getGenre} />
    </div>
  );
};

export default BooksApi;
