import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";
import SVGlogin from "../../../public/icons/login.svg";
import SVGbasket from "../../../public/icons/basket.svg";

import styles from "./styles.module.scss";
import useOnClickOutside from "use-onclickoutside";
import AuthForm from "../AuthForm/AuthForm";
import { useAppSelector } from "@/pages/lib/hooks/hooks";
import { selectTotalQuantity } from "@/pages/lib/features/selectors/cartSelectors";
import { selectIsAuthenticated } from "@/pages/lib/features/selectors/authSelectors";

export default function Header() {
  const router = useRouter();
  const [isFormActive, setIsFormActive] = useState<boolean>(false);
  const ref = useRef(null);
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const [counterQuantity, setCounterQuantity] = useState<number>(0);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleFormClick = (): void => {
    setIsFormActive(!isFormActive);
  };

  const handleClickOutside = () => {
    setIsFormActive(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  useEffect(() => {
    setCounterQuantity(totalQuantity);
  }, [totalQuantity]);

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div
          className={clsx(styles.header__logo, {
            [styles.disabled]: router.pathname === "/",
          })}
        >
          <Link href="/">Bookshop</Link>
        </div>

        <nav className={styles.header__nav}>
          <Link href="/">Books</Link>
          <Link href="/">Audiobooks</Link>
          <Link href="/">Stationery &amp; gifts</Link>
          <Link href="/">Blog</Link>
        </nav>

        <div className={styles.header__buttons}>
          <button
            className={`${styles.header__button} ${styles.header__button_login}`}
            onClick={handleFormClick}
          >
            <Image src={SVGlogin} alt={"login icon"} width={12} height={15} />
          </button>
          <Link
            href="/cart"
            className={`${styles.header__button} ${styles.header__button_basket}`}
            data-counter={counterQuantity}
          >
            <Image src={SVGbasket} alt={"basket icon"} width={14} height={17} />
          </Link>
        </div>
        {isFormActive && (
          <div ref={ref} className={styles.position}>
            {isAuthenticated ? (
              <div className={styles.profile}>
                <Link href="/profile">Profile</Link>
              </div>
            ) : (
              <AuthForm />
            )}
          </div>
        )}
      </div>
    </header>
  );
}
