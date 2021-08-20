import React from "react";
import CommentsList from "./CommentsList";
import AddComments from "./AddComments";
import { Row, Col } from "react-bootstrap";
class CommentsArea extends React.Component {
  state = {
    updated: false,
    movie: this.props.movie,
    comments: [],
  };

  commentsUpdated = () => {
    this.setState({ updated: true }, () => this.setState({ updated: false }));
  };
  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      let response = await fetch(url + this.props.movie.imdbID, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWRmYmNlYWY0ODAwMTVjOTE5NDYiLCJpYXQiOjE2MjU4MzIwMTMsImV4cCI6MTYyNzA0MTYxM30.yQAL2m_pMwi-2cimzPUpNaT56uC0MyAyMLMPZkqOtLI",
        },
      });

      let comments = await response.json();

      this.setState({
        comments,
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { movie, comments } = this.state;
    return (
      <>
        {movie && comments && (
          <Row>
            <Col xs={6}>
              <CommentsList
                comments={comments}
                fetchComments={this.fetchComments}
              />
            </Col>
            <Col xs={6}>
              <AddComments
                imdbID={this.state.movie.imdbID}
                fetchComments={this.fetchComments}
              />
            </Col>
          </Row>
        )}
      </>
    );
  }
}

export default CommentsArea;
