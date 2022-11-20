import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ListTeachers = ({ teachers, onDelete, onEdit }) => {
    return (
      <>
        <h3 className="mb-3">List Teachers</h3>
        {teachers.map((teacher) => (
          <div className="mb-3 border rounded p-3" key={teacher.id}>
            <div className="d-flex justify-content-between mb-1">
              <div className="small">{teacher.name}</div>
              <div className="small">{teacher.lastName}</div>
              <div className="small">{teacher.email}</div>
              <div className="text-success small">{teacher.phone}</div>
              <div className="text-muted small">
                <FontAwesomeIcon icon={faEdit} className="cursor-pointer" onClick={() => onEdit(teacher)}/>
                <FontAwesomeIcon icon={faTrash} className="cursor-pointer ms-2" onClick={() => onDelete(teacher)}/>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default ListTeachers;