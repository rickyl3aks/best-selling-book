import React, { useState, useEffect } from "react";
import HomePage from "../HomePage/HomePage";
import axios from "axios";

const url = "https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=";

const BooksApi = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `${url}${process.env.REACT_APP_BOOKS_KEY_API}`
      );
      setBooks(res.data.results.books);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <HomePage books={books} />
    </div>
  );
};

export default BooksApi;
