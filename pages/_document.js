import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="The greastest pokdex to ever made. Search any pokemon,anytime,anywhere from any device."
          />
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
        <body className="container m-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
