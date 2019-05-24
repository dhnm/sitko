import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

const AboutPage = ({ data }) => (
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
          marginLeft: "25%",
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
          Tak jako je pro malíře prostředkem štětec, pro spisovatele tužka, tak
          pro nás je to naše tělo. Naše dlaň. Naše prsty. Náš dotek. Přestaň se
          bát používat tento prostředek naplno. Protože každý touží po doteku,
          protože není dotek jako dotek a protože lidé často dělají, že se jich
          to ne(do)týká.
        </p>

        <p>
          Přijď, zastav se, nech se pohltit. Nech si vtisknout každý okamžik.
        </p>

        <p>Využij sílu doteku a dostaň se do nitra všeho.</p>

        <p>Odhoď své zábrany a vnímej bez hranic.</p>

        <p>Protože…</p>

        <h1
          css={{
            letterSpacing: "9px",
            textAlign: "center",
            textShadow: "0px 0px 4px white, 0px 0px 7px white"
          }}
        >
          TOHLE SE TĚ DOTKNE
        </h1>

        <p>
          Festival Sítko vzniká každoročně v rámci Ateliéru divadla a výchovy na
          Divadelní fakultě JAMU. Letos již 16. ročník se bude konat ve dnech{" "}
          <b>31. 5.–3. 6. 2018</b> v prostorách DIFA JAMU a Divadla na Orlí.
        </p>

        <p>
          Cílem festivalu Sítko je především setkání současných, minulých a
          budoucích studentů Ateliéru divadla a výchovy, ale také odborníků a
          dalších zájemců z této oblasti. Dochází zde k prezentaci výstupů
          vzniklých na Ateliéru v uplynulém roce (bakalářských projektů,
          magisterských inscenací či projektů jednotlivých ročníků a studentů).
          Festival taktéž nabízí prostor pro prezentaci amatérských souborů
          vedených ateliérovými absolventy. V neposlední řadě je zde místo pro
          intenzivní setkání, konfrontace, sdílení zkušeností, pro diskuze a
          hlavně pro lidi, kteří mají zájem tvořit.{" "}
        </p>
      </div>
    </div>
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query AboutQuery {
    allFile(filter: { name: { eq: "336" } }) {
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
