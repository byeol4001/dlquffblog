module.exports = {
  siteUrl: "https://dlquff-byeol4001.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://dlquff-byeol4001.vercel.app/server-sitemap.xml", // <==== Add here
    ],
  },
};
