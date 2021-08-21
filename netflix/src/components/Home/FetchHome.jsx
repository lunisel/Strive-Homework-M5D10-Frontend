import { Component } from "react";
import DisplayMovies from "../Carousel";
import Loading from "../Loading";

class FetchHome extends Component {
  state = {
    media: null,
  };

  componentDidMount = async () => {
    try {
      const resp = await fetch(
        "https://strive-api-netflix.herokuapp.com" + this.props.path
      );
      if (resp.ok) {
        const arrMedia = await resp.json();
        this.setState({
          media: arrMedia,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <>
        <h1>Continue Watching</h1>
        {this.state.media ? (
          <DisplayMovies arrMovies={this.state.media} />
        ) : (
          <Loading />
        )}
      </>
    );
  }
}

export default FetchHome;
