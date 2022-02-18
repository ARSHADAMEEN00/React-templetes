import SingleProduct from "components/Projects/SingleProduct";
import React from "react";

import MetaData from "../MetaData";

function SingleProject() {
  return (
    <>
      <MetaData title={""} content={""} />
      <main>
        <SingleProduct />
      </main>
    </>
  );
}

export default SingleProject;
