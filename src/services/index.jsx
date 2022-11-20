import axios from "axios";

export const saveTeacher = async (teacher) => {
  try {
    await axios.post("http://localhost:8081/api/teacher/new", teacher);
  } catch (e) {
    console.log(e);
  }
};

export const getTeachers = async () => {
  try {
    const data = await axios.get("http://localhost:8081/api/teacher/all");
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.log(e);
  }
};
