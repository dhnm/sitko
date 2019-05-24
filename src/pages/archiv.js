import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

const addresses = [
  "http://sitko.jamu.cz/rocniky/sitko2005",
  "http://sitko.jamu.cz/rocniky/sitko2006",
  "http://sitko.jamu.cz/rocniky/s2007",
  "http://sitko.jamu.cz/rocniky/sitko2008/index.html.htm",
  "http://sitko.jamu.cz/rocniky/sitko2009/html",
  "http://sitko.jamu.cz/rocniky/sitko2010",
  "http://sitko.jamu.cz/rocniky/sitko2011",
  "http://sitko.jamu.cz/rocniky/sitko2012",
  "http://old-sitko.jamu.cz",
  "http://sitko.jamu.cz/rocniky/sitko2014",
  "http://sitko.jamu.cz/rocniky/sitko2015",
  "http://sitko.jamu.cz/rocniky/sitko2016",
  "http://sitko.jamu.cz/rocniky/sitko2017"
];

const ContainerTimeline = ({ children, side, href }) => {
  if (side === "left") {
    return (
      <div
        className="container left"
        css={{
          padding: "10px 40px",
          position: "relative",
          backgroundColor: "inherit",
          width: "50%",
          "::after": {
            content: "''",
            position: "absolute",
            width: "25px",
            height: "25px",
            right: "-13px",
            backgroundColor: "white",
            border: "2px solid white",
            top: "18px",
            borderRadius: "50%",
            zIndex: 1
          },
          left: 0,
          "::before": {
            content: "''",
            height: 0,
            position: "absolute",
            top: "22px",
            width: 0,
            zIndex: 1,
            right: "30px",
            border: "medium solid hsla(0, 0%, 100%, 0.14)",
            borderWidth: "10px 0 10px 10px",
            borderColor:
              "transparent transparent transparent hsla(0, 0%, 100%, 0.14)"
          },
          "@media (max-width : 767px)": {
            width: "100%",
            paddingLeft: "70px",
            paddingRight: "25px",
            "::before": {
              left: "60px",
              border: "medium solid white",
              borderWidth: "10px 10px 10px 0",
              borderColor:
                "transparent hsla(0, 0%, 100%, 0.14) transparent transparent"
            },
            "::after": {
              left: "18px"
            }
          }
        }}
      >
        <a href={href}>
          <div
            className="content"
            css={{
              boxSizing: "border-box",
              padding: "20px 30px 20px 30px",
              backgroundColor: "hsla(0, 0%, 100%, 0.14)",
              position: "relative",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "hsla(0, 0%, 100%, 0.2)"
              }
            }}
          >
            {children}
          </div>
        </a>
      </div>
    );
  }

  return (
    <div
      className="container right"
      css={{
        padding: "10px 40px",
        position: "relative",
        backgroundColor: "inherit",
        width: "50%",
        "::after": {
          content: "''",
          position: "absolute",
          width: "25px",
          height: "25px",
          right: "-17px",
          backgroundColor: "white",
          border: "2px solid white",
          top: "18px",
          borderRadius: "50%",
          zIndex: 1,
          left: "-13px"
        },
        left: "50%",
        "::before": {
          content: "''",
          height: 0,
          position: "absolute",
          top: "22px",
          width: 0,
          zIndex: 1,
          left: "30px",
          border: "medium solid white",
          borderWidth: "10px 10px 10px 0",
          borderColor:
            "transparent hsla(0, 0%, 100%, 0.14) transparent transparent"
        },
        "@media (max-width : 767px)": {
          width: "100%",
          paddingLeft: "70px",
          paddingRight: "25px",
          "::before": {
            left: "60px",
            border: "medium solid white",
            borderWidth: "10px 10px 10px 0",
            borderColor:
              "transparent hsla(0, 0%, 100%, 0.14) transparent transparent"
          },
          "::after": {
            left: "18px"
          },
          left: "0%"
        }
      }}
    >
      <a href={href}>
        <div
          className="content"
          css={{
            boxSizing: "border-box",
            padding: "20px 30px 20px 30px",
            backgroundColor: "hsla(0, 0%, 100%, 0.14)",
            position: "relative",
            borderRadius: "10px",
            ":hover": {
              backgroundColor: "hsla(0, 0%, 100%, 0.2)"
            }
          }}
        >
          {children}
        </div>
      </a>
    </div>
  );
};

const ArchivePage = ({ data }) => (
  <Layout>
    <div
      css={{
        position: "relative",
        height: "calc(100vh - 110px - 27px)",
        minHeigh: "640px",
        overflow: "visible"
      }}
    >
      <div
        css={{
          height: "calc(100vh - 110px - 27px)",
          width: "calc((3/2)*(100vh - 110px - 27px))",
          minWidth: "960px",
          minHeight: "640px",
          position: "fixed",
          bottom: 0,
          zIndex: -1,
          left: "0",
          right: "0",
          margin: "0 auto",
          overflow: "visible"
        }}
      >
        <div
          css={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
            minHeight: "640px",
            overflow: "visible"
          }}
        >
          <div
            css={{
              position: "absolute",
              bottom: 0,
              minHeight: "640px",
              overflow: "visible"
            }}
          >
            <Img
              css={{
                width: "960px",
                minHeight: "640px",
                overflow: "visible !important"
              }}
              fluid={data.background.edges[0].node.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div
              className="timeline"
              css={{
                position: "relative",
                maxWidth: "960px",
                margin: "0 auto",
                "::after": {
                  content: "''",
                  position: "absolute",
                  width: "4px",
                  backgroundColor: "white",
                  top: 0,
                  bottom: 0,
                  left: "50%",
                  marginLeft: "-2px"
                },
                "@media (max-width : 767px)": {
                  "::after": {
                    left: "31px"
                  }
                }
              }}
            >
              {data.allLogos.edges.map((item, index) => {
                  let side = "left";
                  if (index % 2 === 0) {
                    side = "right";
                  }

                  return (
                    <ContainerTimeline
                      side={side}
                      href={
                        // "/rocniky/sitko" +
                        // item.node.name
                        addresses[addresses.length - 1 - index]
                      }
                    >
                      <h2
                        css={{
                          textDecoration: "none",
                          display: "inline-block"
                        }}
                      >
                        {item.node.name}
                      </h2>
                      <Img
                        fluid={
                          item.node.childImageSharp.fluid
                        }
                      />
                    </ContainerTimeline>
                  );
              })}

              <ContainerTimeline
                side="left"
                href="http://difa.jamu.cz/adv/festival_sitko.html"
              >
                <p
                  css={{
                    textDecoration: "none",
                    display: "inline-block"
                  }}
                >
                  Všechny ročníky jsou k nalezení na webu DIFA:
                </p>
                <p>http://difa.jamu.cz/adv/festival_sitko.html</p>
              </ContainerTimeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ArchivePage;

//allFile(filter: { relativeDirectory: { eq: "index_images" } }) {
export const query = graphql`
  query ArchiveQuery {
    allLogos: allFile(
      filter: { relativeDirectory: { eq: "sitko_archive_logo" } }
      sort: { order: DESC, fields: [name] }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 510) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          internal {
            mediaType
          }
        }
      }
    }

    background: allFile(filter: { name: { eq: "267" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
