import { Component } from "react";
import DisplayMovies from "./Carousel";
import { Container } from "react-bootstrap";
import Loading from "./Loading";

class FetchMovies extends Component {
  state = {
    query: this.props.query,
    arrMovies: "",
  };

  componentDidMount = async () => {
    try {
      let resp = await fetch(
        "https://strive-netflix-api-luna.herokuapp.com/search=",
        this.state.query
      );
      if (resp.ok) {
        const movies = await resp.json();
        this.setState({
          arrMovies: movies,
        });
        console.log(movies);
      } else {
        let response = await fetch(
          "http://www.omdbapi.com/?i=tt3896198&apikey=e7302d6b&s="
        );
        if (response.ok) {
          let search = await response.json();
          let movies = search.Search;
          this.setState({
            arrMovies: movies,
          });
        }
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
