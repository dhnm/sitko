import React from "react";

import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <div
      css={{
        margin: "0 auto",
        maxWidth: 960
      }}
    >
      <h1>Nenalezeno.</h1>
      <p>Stránka neexistuje :(</p>
    </div>
  </Layout>
);

export default NotFoundPage;
