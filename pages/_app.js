import Head from "next/head";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
        <link
          rel="canonical"
          href="https://pokedex-shaquile-clarke.vercel.app/"
        />
        <link rel="shortcut icon" href="/favicon/pokeball.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
