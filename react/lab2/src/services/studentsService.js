class StudentsService {
  static key = 'students';
  static getStudents() {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }
  static addStudent(student) {
    const students = this.getStudents();
    students.push(student);
    this.setStudents(students);
  }
  static setStudents(students) {
    localStorage.setItem(this.key, JSON.stringify(students));
  }
  static deleteStudent(studentId) {
    const students = this.getStudents();
    const index = students.findIndex(({id}) => studentId === id);
    students.splice(index, 1);
    this.setStudents(students);
  }
}
export default StudentsService;
