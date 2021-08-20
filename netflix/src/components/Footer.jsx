import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

class Footer extends Component {
  render() {
    return (
      <Container className="footer-class">
        <Row className="mt-5 text-muted">
          <AiFillFacebook className="mx-2 footer-icons" size="lg" />
          <AiFillInstagram className="mx-2 footer-icons" size="lg" />
          <AiOutlineTwitter className="mx-2 footer-icons" size="lg" />
          <AiFillYoutube className="mx-2 footer-icons" size="lg" />
        </Row>
        <Row className="ml-0 text-muted">
          <ul className="list-class">
            <Row className="mt-3">
              <li className="footer-li">Audio & Subtitles</li>
              <li className="footer-li">Audio Description</li>
              <li className="footer-li">Help Centre</li>
              <li className="footer-li">Gift Cards</li>
            </Row>
            <Row className="mt-3">
              <li className="footer-li">Media Centre</li>
              <li className="footer-li">Investor Relations</li>
              <li className="footer-li">Jobs</li>
              <li className="footer-li">Terms of Use</li>
            </Row>
            <Row className="mt-3">
              <li className="footer-li">Privacy</li>
              <li className="footer-li">Legal Notices</li>
              <li className="footer-li">Cookie Preferences</li>
              <li className="footer-li">Corporate Information</li>
            </Row>
            <Row className="mt-3 mb-auto">
              <li className="footer-li">Contact Us</li>
            </Row>
            <Row className="mt-3 mb-auto" style={{ width: "7rem" }}>
              <li className="footer-li service" style={{ display: "flex" }}>
                Service Code
              </li>
            </Row>
            <Row className="mt-3 mb-auto">
              <li className="footer-li" style={{ width: "27rem" }}>
                © 1997-2021 Netflix, Inc.
              </li>
            </Row>
          </ul>
        </Row>
      </Container>
    );
  }
}

export default Footer;
