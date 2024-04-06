import Layout from "@/components/Layout/Layout";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/cart.module.scss";
import minus from "../../public/icons/minus.svg";
import plus from "../../public/icons/plus.svg";
import Button from "@/components/Button/Button";
import Head from "next/head";
import { useAppSelector } from "./lib/hooks/hooks";
import { selectIsAuthenticated } from "./lib/features/selectors/authSelectors";
import {
  selectCartBooks,
  selectTotalQuantity,
} from "./lib/features/selectors/cartSelectors";
import { formatReviews, getAuthors, renderStars } from "./lib/utils/utils";
import { Book } from "./lib/features/types";
import Link from "next/link";

export default function Cart() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const cartBooks: Book[] = useAppSelector(selectCartBooks);
  const totalQuantity = useAppSelector(selectTotalQuantity);

  const initialQuantities: Record<number, number> = {};
  cartBooks.forEach((book) => {
    initialQuantities[book.id] = 1;
  });

  const [quantities, setQuantities] = useState(initialQuantities);

  // Функция для увеличения количества книг
  const handleIncreaseQuantity = (bookId: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [bookId]: prevQuantities[bookId] + 1,
    }));
  };

  // Функция для уменьшения количества книг
  const handleDecreaseQuantity = (bookId: number) => {
    if (quantities[bookId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [bookId]: prevQuantities[bookId] - 1,
      }));
    }
  };

  // Функция для подсчёта общей стоимости корзины
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartBooks.forEach((book) => {
      totalPrice +=
        quantities[book.id] * (book.saleInfo.listPrice?.amount || 0);
    });
    return totalPrice.toFixed(2);
  };

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>SHOPPING CART</title>
          <meta name="description" content="SHOPPING CART" />
        </Head>
        <Layout>
          <div className={styles.cart}>
            <h1 className={styles.title}>SHOPPING CART</h1>
            <div className={styles.book}>
              <p>Для просмотра корзины авторизуйтесь.</p>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>SHOPPING CART</title>
        <meta name="description" content="SHOPPING CART" />
      </Head>
      <Layout>
        <div className={styles.cart}>
          <h1 className={styles.title}>SHOPPING CART</h1>
          <div className={styles.header}>
            <div className={styles.header__item}>ITEM</div>
            <div className={styles.header__quantity}>QUANTITY</div>
            <div className={styles.header__price}>PRICE</div>
            <div className={styles.header__delivery}>DELIVERY</div>
          </div>
          {cartBooks &&
            cartBooks.length > 0 &&
            cartBooks.map((book, index) => {
              return (
                <React.Fragment key={book.id}>
                  <div className={styles.book}>
                    <div className={styles.book__media}>
                      <Image
                        className={styles.book__media_image}
                        loader={({ src }) => src}
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        alt={"book"}
                        width={235}
                        height={235}
                        unoptimized
                      />
                      <div className={styles.book__info}>
                        <div className={styles.book__title}>
                          {book.volumeInfo.title}
                        </div>
                        <div className={styles.book__authors}>
                          {getAuthors(book.volumeInfo.authors)}
                        </div>
                        <div className={styles.book__rating}>
                          {book.volumeInfo.averageRating &&
                            book.volumeInfo.averageRating > 0 && (
                              <div
                                className={styles.book__rating_averageRating}
                              >
                                {renderStars(book.volumeInfo.averageRating)}
                              </div>
                            )}
                          <div className={styles.book__rating_ratingsCount}>
                            {formatReviews(book.volumeInfo.pageCount)} reviews
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.book__quantity}>
                      <button
                        className={styles.book__quantity_btn}
                        onClick={() => handleDecreaseQuantity(book.id)}
                      >
                        <Image
                          src={minus}
                          alt={"minus icon"}
                          width={20}
                          height={3}
                        />
                      </button>
                      <span>{quantities[book.id]}</span>
                      <button
                        className={styles.book__quantity_btn}
                        onClick={() => handleIncreaseQuantity(book.id)}
                      >
                        <Image
                          src={plus}
                          alt={"plus icon"}
                          width={21}
                          height={24}
                        />
                      </button>
                    </div>
                    <div className={styles.book__price}>
                      {book.saleInfo.listPrice?.currencyCode}{" "}
                      {book.saleInfo.listPrice?.amount}
                    </div>
                    <div className={styles.book__delivery}>
                      Shipping: delivery
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          <div className={styles.total}>
            <div className={styles.total__price}>
              TOTAL PRICE: RUB {calculateTotalPrice()}
            </div>
            {totalQuantity > 0 && (
              <Link href="/checkout" style={{ textDecoration: "none" }}>
                <Button>CHECKOUT</Button>
              </Link>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
