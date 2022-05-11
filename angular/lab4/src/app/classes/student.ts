export class Student {
  id: number;
  name: string;
  age: number;
  department_number: number;
  isEditing: boolean;
  constructor(id: number, name: string, age: number, department_number: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.department_number = department_number;
    this.isEditing = false;
  }
}
