import "./App.css";
import Core from "./components/Core";
import { CommentProvider } from "./commentContext";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <CommentProvider>
        <Core />
      </CommentProvider>
      <Footer />
    </main>
  );
}

export default App;
