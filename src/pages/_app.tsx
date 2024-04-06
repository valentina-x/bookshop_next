import "@/styles/globals.scss";
import "normalize.css";
import { Provider } from "react-redux";
import Layout from "@/components/Layout/Layout";
import store, { persistor } from "./lib/store";
import { PersistGate } from "redux-persist/integration/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Layout>
    </Provider>
  );
}
