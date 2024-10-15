import React from "react";
type PropsProduct = {
  params: { slug: string[] };
};

const ProductPage = ({ params }: PropsProduct) => {
  return (
    <>
      <h1>ProductPage</h1>
      <h2>{params.slug ? "Detail Products" : "Product Page"}</h2>

      {params.slug && (
        <>
          <h4>Category : {params.slug[0]}</h4>
          <h4>Gender : {params.slug[1]}</h4>
          <h4>Id : {params.slug[2]}</h4>
        </>
      )}
    </>
  );
};

export default ProductPage;
