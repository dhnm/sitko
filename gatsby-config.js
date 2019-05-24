module.exports = {
  pathPrefix: "/rocniky/sitko2018",
  siteMetadata: {
    title: "Sítko 2018",
    menuItems: [
      { name: "Sítko", slug: "" },
      { name: "O festivalu", slug: "festival" },
      { name: "Program", slug: "program" },
      { name: "Přihlášky", slug: "prihlasky" },
      { name: "Galerie", slug: "galerie" },
      { name: "Tým", slug: "tym" },
      { name: "Archiv", slug: "archiv" }
    ]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-glamor",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Sítko 2018",
        short_name: "Sítko",
        start_url: ".",
        background_color: "#000000",
        theme_color: "#000000",
        display: "standalone",
        icon: "./static/icon.png",
        include_favicon: true
      }
    },
    "gatsby-plugin-offline"
  ]
};
