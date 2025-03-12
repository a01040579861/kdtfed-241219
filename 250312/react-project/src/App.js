import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const ChildComp = () => {
    return <div>Child Component</div>;
  };
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
