import {useParams, useNavigate} from "react-router-dom";
import StudentsService from "../services/studentsService";
const StudentDetails = () => {
  const students = StudentsService.getStudents();
  const {studentId} = useParams();
  const navigate = useNavigate();

  const parsedId = parseInt(studentId, 10);
  const student = students.find(({id}) => id === parsedId);
  const {name, id, age} = student;
  const onDeleteClick = () => {
    StudentsService.deleteStudent(id);
    navigate('/');
  };
  return <div>
    <p>id: {id}</p>
    <p>name: {name}</p>
    <p>age: {age}</p>
    <button onClick={onDeleteClick}>delete</button>
  </div>;
}
export default StudentDetails;
