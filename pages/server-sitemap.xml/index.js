import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const fields = [
    {
      loc: "https://dlquff.vercel.app", // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: "https://dlquff-byeol4001.vercel.app", // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: "https://dlquff-cw62feee4-byeol4001.vercel.app", // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: "https://dlquff-git-master-byeol4001.vercel.app", // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ];
  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
