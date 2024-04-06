import Layout from "@/components/Layout/Layout";
import React from "react";
import Slider from "@/components/Slider/Slider";
import Filters from "@/components/Filters/Filters";
import Books from "@/components/Books/Books";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bookshop</title>
        <meta name="description" content="Bookshop Next.js project" />
      </Head>
      <Layout>
        <Slider />
        <Filters />
        <Books />
      </Layout>
    </>
  );
}
