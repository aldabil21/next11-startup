import React, { Fragment } from "react";
import Head from "next/head";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
