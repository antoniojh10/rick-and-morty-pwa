import Header from "./components/Header";
import Characters from "./components/Characters";
import BasicLayout from "./layout/BasicLayout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BasicLayout>
        <Characters />
      </BasicLayout>
    </div>
  );
}

export default App;
