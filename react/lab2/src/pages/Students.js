import {useEffect, useState} from "react";
import StudentsList from "../components/StudentsList";
import AddStudent from "../components/AddStudent";
import StudentsService from "../services/studentsService";

const Students = () => {
  const [studentsList, setStudentsList] = useState(StudentsService.getStudents());
  const handleAddStudent = student => {
    student.id = Math.ceil(Math.random() * 99999);
    setStudentsList(previous => previous.concat([student]))
  }
  useEffect(() => {
    StudentsService.setStudents(studentsList);
  }, [studentsList])
  return (
    <div>
      <AddStudent handleAddStudent={handleAddStudent} />
      <StudentsList students={studentsList} />
    </div>
  )
}
export default Students;
