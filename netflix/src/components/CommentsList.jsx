import { Component } from "react";
import del from "../media/delete.png";
import { ListGroup } from "react-bootstrap";

class CommentsList extends Component {
  state = {
    comments: "",
  };

  deleteComment = async (id) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWRmYmNlYWY0ODAwMTVjOTE5NDYiLCJpYXQiOjE2MjU4MzIwMTMsImV4cCI6MTYyNzA0MTYxM30.yQAL2m_pMwi-2cimzPUpNaT56uC0MyAyMLMPZkqOtLI",
          },
        }
      );

      if (response.ok) {
        alert("comment deleted");
        console.log(await response.json().comment);
        this.setState({
          comments: "",
        });

        this.props.fetchComments();
      }
    } catch (error) {
      console.log(error);
      this.setState({ ...this.state });
    }
  };

  render() {
    const { comments } = this.props;
    return (
      <>
        {comments.map((comment) => (
          <ListGroup.Item className="d-flex">
            <span className="mr-auto">{comment.comment}</span>
            <span className="mr-5">{comment.rate}/5</span>
            <img
              className="ml-5 mt-1"
              id="deleteBtn"
              onClick={() => this.deleteComment(comment._id)}
              src={del}
              alt="delete-icon"
              style={{ width: 32 }}
            />
          </ListGroup.Item>
        ))}
      </>
    );
  }
}

export default CommentsList;
