import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

import { FaRegFilePdf } from "react-icons/fa";
import { FaRegFileWord } from "react-icons/fa";

import PDFInscenaceSrc from "./../static/prihlaska-inscenace.pdf";
import PDFPrezentaceSrc from "./../static/prihlaska-prezentace.pdf";
import PDFTechnickyPlanJAMUSrc from "./../static/technicky-plan-4-013.pdf";
import PDFTechnickyPlanOrliSrc from "./../static/technicky-plan-divadlo-na-orli.pdf";

const FileButton = ({ fileName, fileType, src }) => {
  let icon = <FaRegFilePdf css={{ fontSize: "1.3em" }} />;
  if (fileType === "DOC") {
    icon = <FaRegFileWord css={{ fontSize: "1.3em" }} />;
  }
  return (
    <a
      href={src}
      download
      css={{
        background: "transparent",
        borderRadius: "30px",
        border: "2px solid white",
        padding: "10px 15px",
        color: "white",
        textDecoration: "none",
        display: "inline-block",
        ":hover": {
          boxShadow: "0px 0px 3px white, 0px 0px 5px white",
          color: "white"
        }
      }}
    >
      {icon}&nbsp;&nbsp;{fileName}
    </a>
  );
};

const SignupPage = ({ data }) => (
  <Layout>
    <div
      css={{
        height: "100vh",
        minWidth: "100vw",
        position: "fixed",
        bottom: "0",
        zIndex: -1,
        overflow: "hidden"
      }}
    >
      <Img
        css={{
          height: "100vh",
          width: "calc(100vh * (1024/682))",
          margin: 0,
          //overflow: "visible !important",
          marginLeft: "20%",
          "@media (max-width : 767px)": {
            marginLeft: "0"
          }
        }}
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      />
    </div>
    <div
      css={{
        width: "960px",
        maxWidth: "100vw",
        margin: "0 auto",
        paddingBottom: "27px",
        "@media (max-width : 767px)": {
          width: "100vw"
        }
      }}
    >
      <div
        css={{
          width: "550px",
          textAlign: "justify",
          marginLeft: "60px",
          "@media (max-width : 767px)": {
            width: "100vw",
            marginLeft: 0,
            padding: "0 25px"
          }
        }}
      >
        <p>
          Elektronické přihlášky si stáhněte z odkazů níže a vyplněné je zašlete
          do <strong>30. dubna 2018</strong> na{" "}
          <a href="mailto:sitko.jamu@gmail.com">sitko.jamu@gmail.com</a>.
        </p>
        <p>
          <FileButton
            fileName="Přihláška – inscenace"
            src={PDFInscenaceSrc}
            fileType="PDF"
          />
        </p>
        <p>
          <FileButton
            fileName="Přihláška – prezentace"
            src={PDFPrezentaceSrc}
            fileType="PDF"
          />
        </p>
        <hr
          css={{
            backgroundColor: "hsla(360, 100%, 100%, 0.75)",
            width: "33%",
            marginLeft: "10px",
            boxShadow: "0px 0px 1px white, 0px 0px 1px white"
          }}
        />
        <p>
          <FileButton
            fileName="Technický plán (4, 013)"
            src={PDFTechnickyPlanJAMUSrc}
            fileType="PDF"
          />
        </p>
        <p>
          <FileButton
            fileName="Technický plán (Divadlo na Orlí)"
            src={PDFTechnickyPlanOrliSrc}
            fileType="PDF"
          />
        </p>
      </div>
    </div>
  </Layout>
);

export default SignupPage;

export const query = graphql`
  query SingupQuery {
    allFile(filter: { name: { eq: "157" } }) {
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
