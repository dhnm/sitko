import React from "react";
import Helmet from "react-helmet";

import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import "./layout.css";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            menuItems {
              name
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="Tohle se tě dotkne" />
          <meta name="keywords" content="sítko, sítko 2018, jamu, dafi" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Helmet>
        <div
          css={{
            maxWidth: "100vw",
            "@media (max-width : 767px)": {
              width: "100vw",
              maxWidth: "100vw"
            }
          }}
        >
          <Header menuItems={data.site.siteMetadata.menuItems} />
          <div
            css={{
              // margin: "0 auto",
              // maxWidth: 960,
              paddingTop: "27px",
              "@media (max-width : 767px)": {
                paddingTop: 0
              }
            }}
          >
            {children}
          </div>
        </div>
      </div>
    )}
  />
);

export default TemplateWrapper;
