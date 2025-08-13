import React from "react";
import Meaning from "./Meaning";

export default function Results({ results }) {
  if (!results || !Array.isArray(results.meanings)) {
    return null;
  }

  return (
    <div className="Results">
      <h2>{results.word}</h2>
      <p>
        <em>{results.phonetic}</em>
      </p>

      {results.meanings.map((meaning, index) => (
        <div key={index}>
          <Meaning meaning={meaning} />
        </div>
      ))}
    </div>
  );
}
