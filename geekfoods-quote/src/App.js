import './App.css';
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Quote from "./componets/Quote/Quote";
import Quotes from "./Quotes.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Quote quote={Quotes} />
      <Footer />

    </div>
  );
}

export default App;
