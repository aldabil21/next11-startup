import React from "react";
import Head from "next/head";

interface Twitterprops {
  card?: string;
  url: string;
  title: string;
  description: string;
  image: string;
}
const OG = ({ card, url, title, description, image }: Twitterprops) => {
  return (
    <Head>
      <meta property="twitter:card" content={card || "summary_large_image"} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default OG;
