import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePicturesResponse(response) {
    setPhotos(response.data.photos);
    console.log(response.data.photos);
  }

  function search() {
    let apiKey = "e5bt54135b02f36048218oa4bf5cb2d1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(photosApiUrl).then(handlePicturesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2 className="title">What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word..."
              onChange={handleKeywordChange}
            />
          </form>
          <div className="hint">Example: sunset, wine, yoga</div>
        </section>

        {results && <Results results={results} />}
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
