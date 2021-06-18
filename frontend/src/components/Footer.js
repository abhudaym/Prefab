import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy;{" "}
            <Link to="https://www.linkedin.com/in/abhudaym/">
              Abhuday Mishra
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
