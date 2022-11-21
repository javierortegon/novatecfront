import { Col, Container, Row } from "reactstrap";
import FormTeacher from "./FormTeacher";
import { useEffect, useState } from "react";
import { saveTeacher, getTeachers, deleteTeacher, updateTeacher } from "../services/index";
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
    if (teacherOld !== '') {
      console.log(values)
      await updateTeacher(teacherOld.id,values).then(async () => await loadTeachers());
    } else {
      await saveTeacher(values).then(async () => await loadTeachers());
    }
  };

  const deleteTeachers = async (teacher) => {
    await deleteTeacher(teacher).then(async () => await loadTeachers());
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <ListTeachers
              teachers={teachers}
              onDelete={deleteTeachers}
              onEdit={(teacherOld) => setTeacherOld(teacherOld)}
            />
          </Col>
          <Col md={6}>
            <FormTeacher onsubmit={onSubmit} teacherOld={teacherOld}></FormTeacher>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
