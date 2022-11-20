import axios from "axios";

export const saveTeacher = async (teacher) => {
  try {
    axios.post("http://localhost:8081/api/teacher/new", teacher);
  } catch (e) {
    console.log(e);
  }
};
