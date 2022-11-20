import { Col, Container, Row } from "reactstrap";
import FormTeacher from "./FormTeacher";


function App() {
  return (
    <>
      <Container>
        <Row>
            <Col md={6}>
            </Col>
            <Col md={6}>
                <FormTeacher></FormTeacher>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
