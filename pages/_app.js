import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const routes = ["/", "404", "about", "ninjas"];

    routes.forEach((route) => {
      if (router.asPath.includes(route)) {
        if (route === "/") setTitle("Home");
        else setTitle(route);
      }
    });

    return title;
  }, [router.asPath, title]);

  return (
    <Layout>
      <Head>
        <title>Ninja List | {title}</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
