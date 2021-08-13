import React from "react";
import "./HomePage.css";

const HomePage = ({ books }) => {
  return (
    <div>
      <h1 className="manga-title">Best Selling Manga -NYT-</h1>
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
            book_image_height,
          } = book;
          return (
            <article key={rank}>
              <div>
                <div className="img-container">
                  <img
                    className={book_image_height > 300 ? "img" : "imgBigger"}
                    src={book_image}
                    alt={title}
                  />
                  <div className="container">
                    <h1 className="title">{title}</h1>
                    <p className="author">By {author}</p>
                    <p>{description}</p>
                    <p className="small">Publish by {publisher}</p>
                    <p className="get-links">You can purchase this book at:</p>
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
