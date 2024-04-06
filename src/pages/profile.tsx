import Layout from "@/components/Layout/Layout";
import React from "react";
import Image from "next/image";
import styles from "../styles/profile.module.scss";
import ava from "../../public/profile/avatar.png";
import Button from "@/components/Button/Button";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>PROFILE</title>
        <meta name="description" content="PROFILE" />
      </Head>
      <Layout>
        <div className={styles.profile}>
          <div className={styles.profile__info}>
            <h1 className={styles.profile__info_title}>PROFILE</h1>
            <Image
              className={styles.profile__avatar}
              src={ava}
              alt={"avatar"}
              width={235}
              height={235}
            />
            <div className={styles.profile__items}>
              <div className={styles.profile__item}>
                <div className={styles.profile__item_title}>YOUR NAME</div>
                <span>John Smith</span>
              </div>
              <div className={styles.profile__item}>
                <div className={styles.profile__item_title}>YOUR EMAIL</div>
                <span>example@mail.com</span>
              </div>
              <Button className={styles.button}>EDIT PROFILE</Button>
            </div>
          </div>
          <div className={styles.profile__about}>
            <h2 className={styles.profile__about_title}>ABOUT ME</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              ante consequat, ornare nisi et, ultrices libero. Nunc nibh dolor,
              maximus quis auctor nec, tempor quis ipsum. Proin mollis
              pellentesque nulla ac varius.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
