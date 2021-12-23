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
 void setName(char * newName);
 float getSalary();
 void setSalary(float newSalary);
 Employee();
 Employee(int id);
 ~Employee();
 Employee(char * newName);
 Employee(Employee & employee);
 Employee operator=(Employee employee);
 Employee operator+(Employee employee);
 Employee operator+(float addedSalary);
 Employee operator+(char * newName);
 Employee operator++();
 Employee operator++(int d);
 operator char*();
 operator int();
 friend Employee operator+(float addedSalary, Employee employee);
 friend Employee operator+(char * newName, Employee employee);
};
void printMenu();
void printEmployee(Employee & employee);
Employee::Employee() {
	id = 0;
	salary = 0.0f;
	name = NULL;
	char defaultName[10] = "Anonymous";
	setName(defaultName);
}
Employee::Employee(int ID) {
	id = ID;
	salary = 0.0f;
	char newName[10] = "Anonymous";
	setName(newName);
}
Employee::~Employee() {
	if (name != NULL) {
		delete(name);
	}
}
Employee::Employee(char * newName) {
	id = 0;
	salary = 0.0f;
	setName(newName);
}
Employee::Employee(Employee & employee) {
  char * namePtr = employee.getName();
  id = employee.getId();
  salary = employee.getSalary();
  setName(namePtr);
}
Employee Employee::operator=(Employee employee) {
	printEmployee(employee);
	printEmployee(*this);
	int i;
	cin >> i;
  char * namePtr = employee.getName();
  setName(namePtr);
  id = employee.getId();
  salary = employee.getSalary();
	printEmployee(*this);
	cin >> i;
  return *this;
}
 Employee Employee::operator+(Employee employee) {
  id += employee.getId();
  salary += employee.getSalary();
  char * newNamePtr = new char[21];
  char newName[21];
  char emp2Name[10];
  strcpy(emp2Name, employee.getName());
  strcpy(newName, this->getName());
  strcat(newName, " ");
  strcat(newName, emp2Name);
  strcpy(newNamePtr, newName);
  name = newNamePtr;
  return *this;
 }
 Employee Employee::operator+(float addedSalary) {
	salary += addedSalary;
	return *this;
 }
 Employee Employee::operator+(char * newName) {
	char oldName[10];
	strcpy(oldName, name);
	delete(name);
	char * newNamePtr = new char[21];
	char emp2Name[10];
	strcpy(emp2Name, newName);
	strcpy(newNamePtr, oldName);
	strcat(newNamePtr, " ");
	strcat(newNamePtr, emp2Name);
	name = newNamePtr;
	return *this;

 }
 Employee Employee::operator++() {
	salary++;
	return *this;
 }
 Employee Employee::operator++(int d) {
	Employee employee = *this;
	salary++;
	return employee;
 }
 Employee::operator char*() {
	return getName();
 }
 Employee::operator int() {
	return id;
 }
 Employee operator+(float addedSalary, Employee employee) {
	  return employee + addedSalary;
 }
 Employee operator+(char * newName, Employee employee) {
	return employee + newName;
 }
int Employee::getId() {
	 return id;
 }
 void Employee::setId(int ID) {
	  id = ID;
 }
 char * Employee::getName() {
	return name;
 }
 void Employee::setName(char * newNamePtr) {
	char newName[10];
	if (name != NULL) {
		delete(name);
	}
	name = new char[10];

	strcpy(name, newNamePtr);
 }
 float Employee::getSalary() {
	return salary;
 }
 void Employee::setSalary(float Salary) {
	salary = Salary;
 }
Employee fillEmployee();
Employee fillEmployeeById();
Employee fillEmployeeByName();

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
		option = 0;
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
void printEmployee(Employee & employee) {
	char * namePtr = employee.getName();
	char name[10] = {'\0'};
	if (namePtr != NULL) {
		strcpy(name, namePtr);
	}
	cout << "Employee ID: " << employee.getId() << endl;
	cout << "Employee Name: " << name << endl;
	cout << "Employee Salary: " << employee.getSalary() << endl;
}