import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  const curentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Super Shop &copy; {curentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
