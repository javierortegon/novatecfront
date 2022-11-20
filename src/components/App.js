import { Col, Container, Row } from "reactstrap";
import FormTeacher from "./FormTeacher";
import { useEffect, useState } from "react";
import { saveTeacher, getTeachers } from "../services/index";
import ListTeachers from "./ListTeachers";

function App() {
  const [teachers, setTeachers] = useState([]);
  const [teacherOld, setTeacherOld] = useState("");

  const loadTeachers = async () => {
    const dataTeachers = await getTeachers();
    setTeachers(dataTeachers);
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  const onSubmit = async (values) => {
    if (teacherOld !== "") {
    } else {
      await saveTeacher(values).then(async () => await loadTeachers());
    }
  };

  const deleteTeacher = (teacher) => {};

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <ListTeachers
              teachers={teachers}
              onDelete={deleteTeacher}
              onEdit={(teacherOld) => setTeacherOld(teacherOld)}
            />
          </Col>
          <Col md={6}>
            <FormTeacher onsubmit={onSubmit}></FormTeacher>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
