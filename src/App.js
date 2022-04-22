import "./App.css";
import Core from "./components/Core";
import { CommentProvider } from "./commentContext";

function App() {
  return (
    <main className="App">
      <CommentProvider>
        <Core />
      </CommentProvider>

      <footer class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://twitter.com/Abdelghafour1_"
          target="_blank"
          rel="noreferrer"
        >
          Abdelghafour122
        </a>
        .
      </footer>
    </main>
  );
}

export default App;
