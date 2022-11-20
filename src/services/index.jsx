import axios from "axios";

export const saveTeacher = async (teacher) => {
  try {
    axios.post("http://localhost:8081/api/teacher/new", teacher);
  } catch (e) {
    console.log(e);
  }
};

export const getTeachers = async () => {
  try {
    const data = axios.get("http://localhost:8081/api/teacher/all");
    return (await data).data;
  } catch (e) {
    console.log(e);
  }
};
