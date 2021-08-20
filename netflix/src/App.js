import "./App.css";
import FetchMovies from "./components/FetchMovies";
import CommentsArea from "./components/CommentArea";
import NavBar from "./components/NavBar";
import UnderNavbar from "./components/UnderNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <UnderNavbar />
      <FetchMovies /* saga="harry%20potter" title="Harry Potter Saga" */ />
      <FetchMovies
      /* saga="lord%20of%20the%20rings"
        title="Lord of the Rings Saga" */
      />
      <FetchMovies /* saga="avengers" title="The Avengers Saga" */ />
      <CommentsArea />
      <Footer />
    </>
  );
}

export default App;
