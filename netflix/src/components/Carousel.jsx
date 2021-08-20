import { Component } from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import CommentsArea from "./CommentArea";

class DisplayMovies extends Component {
  state = {
    movies: this.props.arrMovies,
    selectedMovie: null,
  };

  render() {
    console.log(this.state.movies);
    return (
      <>
        <Carousel interval={null}>
          <Carousel.Item>
            <Row style={{ height: "10rem" }}>
              {this.state.movies.slice(0, 5).map((m) => (
                <Col key={m.imdbID}>
                  <img
                    src={m.Poster}
                    className="img-fluid"
                    alt="movie-cover"
                    onClick={() => {
                      this.setState({
                        selectedMovie: m,
                      });
                    }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row style={{ height: "10rem" }}>
              {this.state.movies.slice(5, 10).map((m) => (
                <Col key={m.imdbID}>
                  <img
                    src={m.Poster}
                    className="img-fluid"
                    alt="movie-cover"
                    onClick={() => {
                      this.setState({
                        selectedMovie: m,
                      });
                    }}
                  />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
        <Row>
          <Col>
            {this.state.selectedMovie && (
              <CommentsArea movie={this.state.selectedMovie} />
            )}
          </Col>
        </Row>
      </>
    );
  }
}

export default DisplayMovies;
