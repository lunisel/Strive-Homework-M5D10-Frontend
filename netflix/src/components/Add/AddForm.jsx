import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddForm = () => {
  const [media, setMedia] = useState({
    Title: "",
    Year: "",
    Type: "",
    Category: "",
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title here..."
            value={media.Title}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
