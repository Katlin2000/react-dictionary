import React from "react";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <p>
        <div className="definition">{meaning.definition}</div>
        {meaning.example && (
          <>
            <br />
            <em className="example">{meaning.example}</em>
          </>
        )}
      </p>

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <p className="synonyms">
          <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
        </p>
      )}
    </div>
  );
}
