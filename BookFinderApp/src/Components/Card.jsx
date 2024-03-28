import react, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  console.log(book);
  return (
    <>
      {book.map((item) => {
        {
          /* const bookTitle = item.volumeInfo.imageLinks.smallThumbnail; */
        } //another way -> so we can not get error
        {
          /* trying to get title ffrom API using bookTitle */
        }
        const bookImage =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        const bookAmount =
          item.saleInfo.listPrice && item.saleInfo.listPrice.amount; // trying to get Amount for a book
        const bookTitle = item.volumeInfo.title;
        {
          /* write a logic that if we dont have any image (here:bookTitle) for a book so I wont render a book */
        }
        if (bookImage != undefined && bookAmount != undefined) {
          // set this logic because some amount needs to have decimal points means float values thats why i used here parseFloat
          const formattedAmount = parseFloat(bookAmount).toFixed(2);
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true), setBookItem(item);
                }}
              >
                <img src={bookImage} alt="book image" />
                <div className="bottom">
                  <h3 className="title">
                    <b>{bookTitle}</b>
                  </h3>
                  <p className="amount">&#36; {formattedAmount}</p>
                </div>
              </div>
              <Modal
                show={show}
                item={bookItem}
                onClose={() => {
                  setShow(false);
                }}
              />
            </>
          );
        }
      })}
    </>
  );
};

export default Card;
