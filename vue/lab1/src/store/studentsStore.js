import {reactive} from "vue";
export const studentsStore = reactive({
  students: [{
    id: 1,
    name: "Student #1",
    age: 15,
    address: "Home"
  }],
  addStudent(student) {
    this.students.push(student);
  },
});
