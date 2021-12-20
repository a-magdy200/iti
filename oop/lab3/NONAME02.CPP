#include <iostream.h>
#include <conio.h>
#include <string.h>
class Employee {
	int id;
	char * name;
	float  salary;
public:
 int getId();
 void setId(int newId);
 char * getName();
 void setName(char newName[10]);
 float getSalary();
 void setSalary(float newSalary);
 Employee(int id);
 ~Employee();
 Employee(char * newName);
 Employee();
 Employee(Employee & employee);
};
Employee::Employee(int ID) {
	id = ID;
	char newName[10] = "Anonymous";
	setName(newName);
	salary = 0.0f;
}
Employee::~Employee() {
if (name) {
	delete(name);
	}
}
Employee::Employee(char * newName) {
	id = 0;
	salary = 0.0f;
	setName(newName);
}
Employee::Employee() {
	setName("Anonymous");
	id = 0;
	salary = 0.0f;
}
Employee::Employee(Employee & employee) {
  char * employeeName = employee.getName();
  char newName[10];
  int i = 0;
  while (*(employeeName + i)) {
	newName[i] = * (employeeName + i);
	i++;
  }
  newName[i] = 0;
  id = employee.getId();
  salary = employee.getSalary();
  setName(newName);
}
int Employee::getId() {
	 return id;
 }
 void Employee::setId(int newId) {
	id = newId;
 }
 char * Employee::getName() {
	return name;
 }
 void Employee::setName(char newName[10]) {
 int size = strlen(newName);
	if (name) {
		delete(name);
		name = NULL;
	}
	name = new char(size);
	int i = 0;
	while (i < size) {
		* (name + i) = newName[i];
		i++;
	}
	*(name + i) = 0;


 }
 float Employee::getSalary() {
	return salary;
 }
 void Employee::setSalary(float newSalary) {
	salary = newSalary;
 }
Employee fillEmployee();
Employee fillEmployeeById();
Employee fillEmployeeByName();
void printMenu();
void printEmployee(Employee employee);

int main() {
clrscr();
int flag = 1;
int option = -1;
Employee employee;
while (flag) {
 printMenu();
 cin>>option;
 switch(option) {
	case 1:
		employee = fillEmployee();
		cout << endl << "Done..." << endl << endl;
		break;
	case 2:
		cout << endl << endl << "***** Employee Data ****" << endl << endl;
		printEmployee(employee);
		cout << endl << "***** Employee Data ****" << endl << endl;
		break;
	case 3:
		employee = fillEmployeeById();
		cout << endl << "Done..." << endl << endl;
		break;
	case 4:
		employee = fillEmployeeByName();
		cout << endl << "Done..." << endl << endl;
		break;
	case 0:
		flag = 0;
		break;
	default:
		cout<< "Invalid Choice"<<endl;
 }

}
return 0;
}
Employee fillEmployee() {
	int id;
	char name[10];
	float salary;
	Employee employee;
	cout << endl << "Employee ID: ";
	cin >> id;
	employee.setId(id);
	cout << endl << "Employee Name: ";
	cin >> name;
	employee.setName(name);
	cout << endl << "Employee Salary: ";
	cin >> salary;
	employee.setSalary(salary);
	return employee;
}
Employee fillEmployeeById() {
	int id;
	cout << endl << "Employee ID: ";
	cin >> id;
	Employee employee(id);
	return employee;
}
Employee fillEmployeeByName() {
	char name[10];
	cout << endl << "Employee Name: ";
	cin >> name;
	Employee employee(name);
	return employee;
}

void printMenu() {
cout << "1. Fill Employee" << endl;
cout << "2. Print Employee" << endl;
cout << "3. Fill Employee By ID" << endl;
cout << "4. Fill Employee By Name" << endl;
cout << "0. Exit" << endl;
}
void printEmployee(Employee employee) {
char * namePtr = employee.getName();
int i = 0;
cout << "Employee ID: " << employee.getId() << endl;
cout << "Employee Name: ";
while(*(namePtr + i)) {
	cout << *(namePtr + i);
	i++;
}
cout << endl;
cout << "Employee Salary: " << employee.getSalary() << endl;
}