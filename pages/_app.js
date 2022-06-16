import "tailwindcss/tailwind.css";
import Layout from "../components/layout/layout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
       <Head>
        <meta
          name="description"
          content="All Pokemon information at your finger tips"
        />
        <title>Pokédex</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
