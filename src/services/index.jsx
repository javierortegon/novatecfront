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
    return data.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteTeacher = async (teacher) =>{
  try {
    await axios.delete(`http://localhost:8081/api/teacher/delete/${teacher.id}`)
  } catch (e) {
    console.log(e);
  }
};

export const updateTeacher = async (id,teacher) =>{
  try {
    await axios.put(`http://localhost:8081/api/teacher/update/${id}`, teacher);
  } catch (e) {
    console.log(e);
  }
};
