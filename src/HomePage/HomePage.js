import React from "react";
import "./HomePage.css";

const HomePage = ({ books, name }) => {
  return (
    <div>
      <h1 className="book-title">{name}</h1>
      <small className="small-title">-New York Times-</small>
      <div className="cards">
        {books.map((book) => {
          const {
            title,
            author,
            book_image,
            rank,
            description,
            publisher,
            buy_links,
          } = book;
          return (
            <article key={rank}>
              <div>
                <div className="img-container">
                  <img className="img" src={book_image} alt={title} />
                  <div className="container">
                    <h1 className="title">{title}</h1>
                    <p className="author">By {author}</p>
                    <p>{description}</p>
                    <p className="small">Publish by {publisher}</p>
                    <p className="get-books">You can purchase this book at:</p>
                    <ul>
                      {buy_links.map((link) => {
                        const { name, url } = link;
                        return (
                          <div key={name}>
                            <a className="link" href={url}>
                              {name}
                            </a>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
