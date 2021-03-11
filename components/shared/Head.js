import Head from "next/head";
const HeadWrapper = () => (
  <Head>
    <title>Contramed</title>

    <meta charSet="utf-8" />
    <link rel="icon" href="/images/brand/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="192x192"
      href="/images/brand/android-chrome-192x192.png"
    />
    <meta name="theme-color" content="#41bfb7" />

    <meta name="description" content="Contramed" />
    <meta name="author" content="Contramed" />

    <meta property="og:title" content="Contramed" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="site link goes here" />
    <meta property="og:image:url" content="site image goes here" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="200" />
    <meta property="og:description" content="Contramed" />

    <link rel="manifest" href="/site.webmanifest" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
    />
  </Head>
);

export default HeadWrapper;
