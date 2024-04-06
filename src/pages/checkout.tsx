import Layout from "@/components/Layout/Layout";
import React from "react";
import Head from "next/head";
import Checkout from "../components/Checkout/Checkout";

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>CHECKOUT</title>
        <meta name="description" content="CHECKOUT" />
      </Head>
      <Layout>
        <Checkout />
      </Layout>
    </>
  );
}
