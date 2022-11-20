import { Col, Container, Row } from "reactstrap";
import FormTeacher from "./FormTeacher";
import { useEffect, useState } from "react";
import { saveTeacher } from "../services/index";

function App() {
  const [teacherOld, setTeacherOld] = useState("");

  const loadClients = () => {};

  const onSubmit = async (values) => {
    if (teacherOld !== "") {
    } else {
      await saveTeacher(values).then(() => loadClients());
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <FormTeacher onsubmit={onSubmit}></FormTeacher>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
