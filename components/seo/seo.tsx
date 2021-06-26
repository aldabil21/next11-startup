import React from "react";
import Head from "next/head";
interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
}
const Seo = ({ title, description, keywords }: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || ""} />
    </Head>
  );
};

export default Seo;
