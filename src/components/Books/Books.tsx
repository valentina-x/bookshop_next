import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Book from "../Book/Book";
import { useAppDispatch, useAppSelector } from "@/pages/lib/hooks/hooks";
import {
  selectBooks,
  selectLoading,
} from "@/pages/lib/features/selectors/booksSelectors";
import { fetchBooksAsync } from "@/pages/lib/features/books/booksAsyncThunk";
import {
  selectPage,
  selectSubject,
} from "@/pages/lib/features/selectors/filterSelectors";
import Button from "../Button/Button";

const Books: React.FC = () => {
  const subject = useAppSelector(selectSubject);
  const page = useAppSelector(selectPage);
  const booksList = useAppSelector(selectBooks);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();
  const [displayedPage, setDisplayedPage] = useState<number>(1);

  useEffect(() => {
    if (subject) {
      dispatch(fetchBooksAsync({ subject, page: displayedPage }));
    }
  }, [dispatch, subject, displayedPage, page]);

  const handleLoadMore = useCallback(() => {
    setDisplayedPage((prevPage) => prevPage + 1);
  }, []);

  if (loading != "succeeded") {
    return <div className={styles.books}>Loading...</div>;
  }

  return (
    <div className={styles.books}>
      {booksList &&
        booksList.length > 0 &&
        booksList.map((book, index) => {
          return <Book key={index} book={book} />;
        })}
      <Button onClick={handleLoadMore} className={"absolute"}>
        LOAD MORE
      </Button>
    </div>
  );
};

export default Books;
