import { Component } from "react";
import DisplayMovies from "./Carousel";
import { Container } from "react-bootstrap";
import Loading from "./Loading";

class FetchMovies extends Component {
  state = {
    query: this.props.saga,
    arrMovies: "",
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=e7302d6b&s=" +
          this.props.saga
      );
      if (response.ok) {
        let search = await response.json();
        let movies = search.Search;
        this.setState({
          arrMovies: movies,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container fluid>
        {this.state.arrMovies === "" ? (
          <Loading />
        ) : (
          <>
            <h3>{this.props.title}</h3>
            <DisplayMovies arrMovies={this.state.arrMovies} />
          </>
        )}
      </Container>
    );
  }
}

export default FetchMovies;
