import React from "react";

import Layout from "../components/layout";

import { graphql } from "gatsby";
import Img from "gatsby-image";

const team = [
  {
    name: "Jonáš Konývka",
    occupation: "Pedagogické vedení",
    image: "040"
  },

  {
    name: "Matyáš Hauser",
    occupation: "Koordinátor",
    image: "019"
  },

  {
    name: "Peťa Antlová",
    occupation: "Dramaturgie, logistika techniky",
    image: "093"
  },

  {
    name: "Klára Krkošková",
    occupation: "Dramaturgie",
    image: "247"
  },

  {
    name: "Jan Novák",
    occupation: "Propagace, péče o soubory",
    image: "365"
  },

  {
    name: "Anna Stenzlová",
    occupation: "Propagace, péče o soubory",
    image: "061"
  },

  {
    name: "Jakub-Vladislav Štrejn",
    occupation: "Off-program",
    image: "181"
  },

  {
    name: "Adéla Vávrová",
    occupation: "Off-program",
    image: "049"
  },

  {
    name: "Soňa Chalányová",
    occupation: "Fundraising, catering",
    image: "307"
  },

  {
    name: "Veronika Ghisi",
    occupation: "Fundraising, catering",
    tel: "725 587 526",
    image: "079"
  }
];

const TeamMember = ({ info, image }) => (
  <div css={{ textAlign: "center", margin: "auto", paddingBottom: "35px" }}>
    <Img
      fluid={image}
      css={{
        borderBottom: "1px solid hsla(0, 0%, 100%, 1)",
        //borderTop: '2px solid hsla(0, 0%, 100%, 1)',
        width: "380px",
        margin: "auto",
        "@media (max-width : 767px)": {
          maxWidth: "100%"
        }
      }}
    />
    <br />
    <b>{info.name}</b>
    <br />
    {info.occupation}
    <br />
    {info.tel}
    <br />
  </div>
);

const TeamPage = ({ data }) => (
  <Layout>
    <div
      css={{
        width: "960px",
        margin: "0 auto",
        paddingBottom: "27px",
        maxWidth: "100vw"
      }}
    >
      <h1
        css={{
          textAlign: "center",
          paddingBottom: "20px",
          paddingTop: "5px"
        }}
      >
        Realizační tým
      </h1>
      <div
        css={{
          width: "100%",
          margin: "0 auto",
          position: "relative"
        }}
      >
        <ul
          css={{
            margin: 0,
            marginTop: "50px",
            padding: 0,
            display: "flex",
            justifyContent: "space-around",
            flexFlow: "row wrap",
            maxWidth: "100%"
          }}
        >
          {team.map(member => {
            const image = data.allLogos.edges.filter(
              img => img.node.name === member.image
            )[0];

            return (
              <li
                css={{
                  display: "inline-block",
                  padding: "20px auto",
                  maxWidth: "85vw"
                }}
              >
                <TeamMember
                  image={image.node.childImageSharp.fluid}
                  info={member}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </Layout>
);

export default TeamPage;

export const query = graphql`
  query teamQuery {
    allLogos: allFile(
      filter: { relativeDirectory: { eq: "team_photos" } }
      sort: { order: ASC, fields: [name] }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 720) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          internal {
            mediaType
          }
        }
      }
    }
  }
`;
