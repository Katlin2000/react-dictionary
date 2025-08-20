import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer>Coded by Katlin Pala</footer>
      </div>
    </div>
  );
}
