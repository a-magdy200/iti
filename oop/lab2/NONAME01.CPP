#include <iostream.h>
#include <conio.h>
#include <string.h>
class Employee {
	int id;
	char name[10];
	float  salary;
public:
 int getId();
 void setId(int newId);
 char * getName();
 void setName(char newName[10]);
 float getSalary();
 void setSalary(float newSalary);
};
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
	strcpy(name, newName);
 }
 float Employee::getSalary() {
	return salary;
 }
 void Employee::setSalary(float newSalary) {
	salary = newSalary;
 }
Employee fillEmployee();
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
		cout << endl << "Done..." << endl;
		break;
	case 2:
		cout << endl << endl << "***** Employee Data ****" << endl;
		printEmployee(employee);
		cout << endl << endl << "***** Employee Data ****" << endl;
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
void printMenu() {
cout << "1. Fill Employee" << endl;
cout << "2. Print Employee" << endl;
cout << "0. Exit" << endl;
}
void printEmployee(Employee employee) {
char name[10];
strcpy(name, employee.getName());
cout << "Employee ID: " << employee.getId() << endl;
cout << "Employee Name: " << name << endl;
cout << "Employee Salary: " << employee.getSalary() << endl;
}