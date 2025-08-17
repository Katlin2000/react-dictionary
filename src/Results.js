import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results({ results }) {
  if (!results || !Array.isArray(results.meanings)) {
    return null;
  }

  return (
    <div className="Results">
      <section>
        <h2>{results.word}</h2>
        <p>
          <em className="phonetic">{results.phonetic}</em>
        </p>
      </section>
      {results.meanings.map((meaning, index) => (
        <section key={index}>
          <Meaning meaning={meaning} />
        </section>
      ))}
    </div>
  );
}
