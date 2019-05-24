import React from "react";

import { withPrefix } from "gatsby";

import Layout from "../components/layout";

import PDFProgramSrc from "./../static/program.pdf";

const ProgramPage = ({ data }) => (
  <Layout>
    <div css={{ width: "100vw" }}>
      <iframe
        title="Program festivalu"
        css={{
          border: "1px solid hsla(0, 0%, 100%, 0.2)",
          width: "864px",
          maxWidth: "90vw",
          height: "calc((297/210) * 90vw)",
          maxHeight: "calc((297/210) * 864px)",
          margin: "auto",
          display: "block",
          marginBottom: "45px",
          "@media (max-width : 767px)": {
            maxWidth: "100vw",
            height: "calc((297/210) * 100vw)"
          }
        }}
        src={withPrefix(`/PDFjs/web/viewer.html?file=${PDFProgramSrc}`)}
      />
    </div>
  </Layout>
);

export default ProgramPage;
