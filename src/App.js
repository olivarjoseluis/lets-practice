import Navbar from "./components/Navbar";
import VerbsState from "./context/verbs/VerbsState";
import RouterIndex from "./router/RouterIndex";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import VocabulariesState from "./context/vocabulary/VocabulariesState";
import UsefulExpressionsState from "./context/useful_expressions/UsefulExpressionsState";


function App() {
  defineLordIconElement(loadAnimation);
  return (
    <VerbsState>
      <VocabulariesState>
        <UsefulExpressionsState>
          <Navbar />
          <RouterIndex />
        </UsefulExpressionsState>
      </VocabulariesState>
    </VerbsState>
  );
}

export default App;
