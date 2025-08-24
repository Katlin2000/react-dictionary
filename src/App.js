import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App background">
      <div className="container ">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/122497-katlin-pala"
            target="_blank noreferrer"
          >
            Katlin Pala
          </a>{" "}
          and is{" "}
          <a href="https://github.com/Katlin2000" target="_blank noreferrer">
            open source on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-dictionary-app-25.netlify.app/"
            target="_blank noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
