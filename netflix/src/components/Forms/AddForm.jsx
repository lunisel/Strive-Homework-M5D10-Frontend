import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddForm = () => {
  const [media, setMedia] = useState({
    Title: "",
    Year: "",
    Type: "",
    Category: "",
    Poster: "",
  });

  const handleInput = (key, value) => {
    setMedia({
      ...media,
      [key]: value,
    });
  };
  return (
    <div className="form-container">
      <Form>
        <Form.Group className="mb-1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title here..."
            defaultValue={media.Title}
            onChange={(e) => handleInput("Title", e.target.value)}
          />
          {media.Title ? (
            ""
          ) : (
            <Form.Text className="text-muted">Required</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter year here..."
            defaultValue={media.Year}
            onChange={(e) => handleInput("Year", e.target.value)}
          />
          {media.Year ? (
            ""
          ) : (
            <Form.Text className="text-muted">Required</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Type</Form.Label>
          <select
            id="inputState"
            className="form-control"
            value={media.Type}
            onChange={(e) => handleInput("Type", e.target.value)}
          >
            <option value="" selected>
              Choose the type...
            </option>
            <option value="tv-show">Tv Show</option>
            <option
              value="movie"
              onClick={(e) => handleInput("Type", e.target.value)}
            >
              Movie
            </option>
          </select>
          {media.Type ? (
            ""
          ) : (
            <Form.Text className="text-muted">Required</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Category</Form.Label>
          <select
            id="inputState"
            className="form-control"
            value={media.Category}
            onChange={(e) => handleInput("Category", e.target.value)}
          >
            <option value="" selected>
              Choose the category...
            </option>
            <option value="action">Action</option>
            <option value="comedies">Comedies</option>
            <option value="crime">Crime</option>
            <option value="documentary">Documentary</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="fantasy">Fantasy</option>
            <option value="kids">Kids</option>
          </select>
          {media.Category ? (
            ""
          ) : (
            <Form.Text className="text-muted">Required</Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label>Poster</Form.Label>
          <p className="m-0">
            <a
              class="btn btn-add-poster"
              data-toggle="collapse"
              href="#collapseLocal"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Upload from your computer
            </a>

            <a
              class="btn btn-add-poster"
              data-toggle="collapse"
              href="#collapseUrl"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Upload with url
            </a>
          </p>
          <div class="collapse" id="collapseLocal">
            <div class="card card-body">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>File Path</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => handleInput("Poster", e.target.value)}
                />
              </Form.Group>
            </div>
          </div>
          <div class="collapse" id="collapseUrl">
            <div class="card card-body">
              <Form.Group className="mb-1">
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter url here..."
                  defaultValue={media.Poster}
                  onChange={(e) => handleInput("Poster", e.target.value)}
                />
              </Form.Group>
            </div>
          </div>
          {media.Poster ? (
            ""
          ) : (
            <Form.Text className="text-muted">Required</Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="my-4">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
