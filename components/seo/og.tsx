import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface OGprops {
  sitename: string;
  type: string;
  title: string;
  description: string;
  url: string;
  image: string;
}
const OG = ({ type, sitename, title, description, url, image }: OGprops) => {
  const { locale } = useRouter();
  return (
    <Head>
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type || "website"} />
      <meta property="og:site_name" content={sitename} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

export default OG;
