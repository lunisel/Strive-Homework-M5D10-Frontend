import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import AddForm from "./components/Add/AddForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/add" exact component={AddForm} />
    </BrowserRouter>
  );
}

export default App;
