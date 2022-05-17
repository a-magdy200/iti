import {NavLink} from "react-router-dom";

const StudentsList = ({students}) => {
  if (students.length === 0) {
    return <p>No students add yet</p>
  }
  return students.map(student => <p key={student.id}>{student.name} <NavLink to={`/${student.id}`}>View</NavLink></p>);
}
export default StudentsList;
