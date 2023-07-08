import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Zestos - The Perfect PG</title>
      </Head>

      {children}
    </>
  );
};

export default Layout;
