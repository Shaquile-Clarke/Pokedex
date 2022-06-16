import MainHeader from "./mainheader";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="All Pokemon information at your finger tips"
        />
        <title>Pokédex</title>
      </Head>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}
