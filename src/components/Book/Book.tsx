import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "../Button/Button";
import { Book as IBook } from "../../pages/lib/features/types";
import {
  formatReviews,
  getAuthors,
  renderStars,
} from "@/pages/lib/utils/utils";
import { useAppDispatch, useAppSelector } from "@/pages/lib/hooks/hooks";
import { addToCart } from "@/pages/lib/features/cartSlice";
import { selectCartBooks } from "@/pages/lib/features/selectors/cartSelectors";

interface IBookProps {
  book: any;
}

const Book: React.FC<IBookProps> = ({ book }) => {
  const imageURL = book.volumeInfo.imageLinks?.thumbnail;
  const dispatch = useAppDispatch();
  const cartBooks: IBook[] = useAppSelector(selectCartBooks);

  const isBookInCart = cartBooks.some((cartBook) => cartBook.id === book.id);

  const handleBuyNow = () => {
    dispatch(addToCart(book));
  };

  return (
    <div className={styles.book}>
      <div className={styles.book__image}>
        {imageURL && (
          <Image
            loader={({ src }) => src}
            src={imageURL}
            alt={"book"}
            width="212"
            height="300"
            unoptimized
          />
        )}
      </div>
      <div className={styles.book__info}>
        <div className={styles.book__authors}>
          {getAuthors(book.volumeInfo.authors)}
        </div>
        <div className={styles.book__title}>{book.volumeInfo.title}</div>
        <div className={styles.book__rating}>
          {book.volumeInfo.averageRating &&
            book.volumeInfo.averageRating > 0 && (
              <div className={styles.book__rating_averageRating}>
                {renderStars(book.volumeInfo.averageRating)}
              </div>
            )}
          <div className={styles.book__rating_ratingsCount}>
            {formatReviews(book.volumeInfo.pageCount)} reviews
          </div>
        </div>
        <div className={styles.book__description}>
          {book.volumeInfo.description}
        </div>
        <div className={styles.book__retailPrice}>
          {book.saleInfo.listPrice?.amount > 0 && (
            <>
              {book.saleInfo.listPrice?.currencyCode}{" "}
              {book.saleInfo.listPrice?.amount}
            </>
          )}
        </div>
        {book.saleInfo.saleability === "FOR_SALE" && (
          <Button
            onClick={handleBuyNow}
            className={isBookInCart ? "disabled" : ""}
          >
            {isBookInCart ? "In Cart" : "Buy now"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Book;
