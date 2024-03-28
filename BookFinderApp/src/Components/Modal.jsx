import React from "react";

const Modal = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  const bookImage =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  const bookAuthor = item.volumeInfo.author;
  const bookTitle = item.volumeInfo.title;
  const bookPublisher = item.volumeInfo.publisher;
  const bookPublishedDate = item.volumeInfo.publishedDate;
  const bookMoreInfo = item.volumeInfo.previewLink;
  const bookDescription = item.volumeInfo.description;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={bookImage} alt="book image" />
            <div className="info">
              <h1>{bookTitle}</h1>
              <h2>{bookAuthor}</h2>
              <br />
              <h4>
                {bookPublisher} <span>{bookPublishedDate}</span>
              </h4>
              <br />
              <a href={bookMoreInfo}>
                <button>More..</button>
              </a>
            </div>
          </div>
          <h4 className="description">{bookDescription}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
