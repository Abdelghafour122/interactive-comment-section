import "./App.css";
import Core from "./components/Core";
import { CommentProvider } from "./commentContext";

function App() {
  return (
    <div className="App">
      <CommentProvider>
        <Core />
      </CommentProvider>
    </div>
  );
}

export default App;
