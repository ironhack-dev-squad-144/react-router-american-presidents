import React from "react";

export default function PresidentDetail({ info, children }) {
  return (
    <div>
      <h1>Info on the great {info.president}</h1>
      <p>He was born in {info.birth_year}</p>
    </div>
  );
}
