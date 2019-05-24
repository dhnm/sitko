import React from "react";

import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import { css } from "glamor";

import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

import Layout from "../components/layout";

const listItemStyle = css({
  display: "block",
  paddingBottom: "10px"
});

const linkStyle = css({
  color: "white",
  textDecoration: "none",
  textTransform: "uppercase",
  ":hover": {
    textShadow: "0px 0px 5px white, 0px 0px 10px white",
    color: "white"
  }
});

const outerWrapperStyle = css({
  position: "relative !important",
  width: "100%",
  height: "100%"
});

const MobileMenu = ({ menuItems }) => {
  return (
    <ul
      css={{
        margin: 0,
        padding: 0,
        width: "100%",
        textAlign: "center",
        zIndex: 10000,
        "@media (min-width : 768px)": {
          display: "none"
        }
      }}
    >
      {menuItems.map((item, index) => {
        if (index !== 0) {
          return (
            <li {...listItemStyle} key={index}>
              <Link to={item.slug} {...linkStyle}>
                {item.name}
              </Link>
            </li>
          );
        }
        return false;
      })}
      <li
        {...listItemStyle}
        css={{ fontSize: "2rem", letterSpacing: "10px" }}
        key="social"
      >
        <a
          href="https://www.facebook.com/FestivalSitko"
          target="_blank"
          rel="noopener noreferrer"
          {...linkStyle}
        >
          <FaFacebookSquare />{" "}
        </a>
        <a
          href="https://www.instagram.com/festivalsitko/"
          target="_blank"
          rel="noopener noreferrer"
          {...linkStyle}
        >
          <FaInstagram />{" "}
        </a>
        <a
          href="https://twitter.com/FestivalSitko"
          target="_blank"
          rel="noopener noreferrer"
          {...linkStyle}
        >
          <FaTwitterSquare />
        </a>
      </li>
    </ul>
  );
};

const randomImage = data => {
  const edges = data.allFile.edges;
  const randomIndex = Math.floor(Math.random() * edges.length);

  return edges[randomIndex].node.childImageSharp.fluid;
};

const IndexPage = ({ data }) => (
  <Layout>
    <div
      css={{
        position: "relative",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "center",
        // height: 'calc(100vh - 110px - 27px)',
        //minHeight: "573px",
        "@media (max-width : 767px)": {
          minWidth: 0,
          width: "100vw",
          minHeight: `calc(((2/3)*(100vw)) + ${data.site.siteMetadata.menuItems
            .length - 1} * 45px + 44px + 20px - 10px)`,
          height: "calc(100vh - 110px)",
          display: "block"
        }
      }}
    >
      <MobileMenu menuItems={data.site.siteMetadata.menuItems} />
      <div
        css={{
          width: "calc((3/2)*(100vh - 110px - 27px))",
          maxWidth: "100vw",
          //height: "calc((2/3)*(100vw - 60px))",
          height: "calc(100vh - 110px - 27px)",
          //minHeight: "calc(768px * (2/3)",
          minWidth: "768px",
          minHeight: "calc((2/3)*768px)",
          position: "relative",
          margin: "0 auto",
          "@media (max-width : 767px)": {
            paddingTop: "20px",
            position: "absolute",
            bottom: 0,
            // paddingTop: 0,
            maxHeight: "calc(100vw * (2/3))",
            width: "100vw",
            height: "calc(100vw*(2/3))",
            minWidth: 0,
            // width: "100vw",
            minHeight: 0
            // height: "calc((2/3)*(100vw))",
            // bottom: 0
          }
        }}
      >
        <div
          css={{
            display: "block",
            position: "absolute",
            // width: "calc((3/2)*(100vh - 110px - 27px))",
            // height: "calc(100vh - 110px - 27px)",
            width: "100%",
            height: "100%",
            //minHeight: "640px",
            backgroundColor: "transparent",
            zIndex: 1000,
            bottom: 0,
            "@media (max-width : 767px)": {
              minWidth: 0,
              minHeight: 0,
              width: "100vw",
              height: "calc((2/3)*(100vw))"
            }
          }}
        />
        <Img
          outerWrapperClassName={outerWrapperStyle}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: "100%"
          }}
          fluid={randomImage(data)}
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;

//allFile(filter: { relativeDirectory: { eq: "index_images" } }) {
export const query = graphql`
  query IndexQuery {
    allFile(
      filter: { relativeDirectory: { eq: "index_images" } }
      sort: { order: DESC, fields: [name] }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          internal {
            mediaType
          }
        }
      }
    }
    site {
      siteMetadata {
        menuItems {
          name
          slug
        }
      }
    }
  }
`;
