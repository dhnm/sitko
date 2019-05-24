import React from "react";
import { Link } from "gatsby";

import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

import { css } from "glamor";

const listItemStyle = css({
  display: "inline-block"
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

const Header = ({ menuItems }) => (
  <div
    style={{
      marginBottom: 0,
      height: "110px"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        width: "960px",
        maxWidth: "calc(100vw - 120px)"
      }}
    >
      <div
        style={{
          lineHeight: "110px",
          fontFamily: "Avenir, sans-serif",
          fontSize: "16px",
          textAlign: "center"
        }}
      >
        <Link
          to="/"
          css={{
            "@media (min-width : 768px)": {
              display: "none"
            }
          }}
        >
          <button
            css={{
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              lineHeight: "16px",
              display: "inline-block",
              margin: "auto"
            }}
          >
            SÍTKO 2018
          </button>
        </Link>
        <ul
          css={{
            margin: 0,
            padding: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width : 767px)": {
              display: "none"
            }
          }}
        >
          {menuItems.map((item, index) => (
            <li {...listItemStyle} key={index}>
              <Link to={`/${item.slug}`} {...linkStyle}>
                {item.name}
              </Link>
            </li>
          ))}
          <li {...listItemStyle} key="social">
            <a
              href="https://www.facebook.com/FestivalSitko"
              target="_blank"
              rel="noopener noreferrer"
              {...linkStyle}
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/festivalsitko/"
              target="_blank"
              rel="noopener noreferrer"
              {...linkStyle}
            >
              <FaInstagram />
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
      </div>
    </div>
  </div>
);

export default Header;
