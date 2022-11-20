import React, { useEffect, useState } from "react";

const FormTeacher = ({ teacherOld, onsubmit }) => {
  const teacherInit = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const [teacher, setTeacher] = useState(teacherInit);

  const GetInput = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const _onSubmit = (e) => {
    e.preventDefault();
    onsubmit(teacher);
    setTeacher({ ...teacherInit });
  };

  useEffect(() => {
    function loadTeacher() {
      if (teacherOld) {
        setTeacher(teacherOld);
      }
    }
    loadTeacher();
  }, [teacherOld]);

  return (
    <>
      <h3 className="mb-3">{teacherOld ? "Edit" : "New"} Teacher</h3>
      <form onSubmit={_onSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="inputName"
            aria-describedby="nameHelp"
            onChange={GetInput}
            value={teacher.name}
          />
          <div id="nameHelp" className="form-text">
            We'll never share your name with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputLastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            id="inputLastname"
            onChange={GetInput}
            value={teacher.lastName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputEmail"
            onChange={GetInput}
            value={teacher.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="inputPhone"
            onChange={GetInput}
            value={teacher.phone}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormTeacher;
