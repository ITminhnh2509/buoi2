import React from "react";

export default function Product(props) {
  const { pro } = props;
  return (
    <div>
      <h1>{pro.name}</h1>
      <h2>{pro.price}</h2>
    </div>
  );
}
