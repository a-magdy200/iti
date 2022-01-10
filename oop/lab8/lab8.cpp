#include <iostream.h>
#include <fstream.h>
#include <conio.h>
#include <string.h>
class Employee {
	int id;
	int salary;
	char name[10];
	public:
	Employee();
	Employee(int id, int salary, char name[10]);
	friend ofstream & operator<<(ofstream & fileobj, Employee & emp);
	friend ifstream & operator>>(ifstream & fileobj, Employee & emp);
	friend istream & operator>>(istream & in, Employee & emp);
	friend ostream & operator<<(ostream & out, Employee & emp);
};
Employee::Employee() {
	id = 0;
	salary = 0;
	strcpy(name, "Anonymous");
}
Employee::Employee(int id, int salary, char name[10]) {
	this->id = id;
	this->salary = salary;
	strcpy(this->name, name);
}
ofstream & operator<<(ofstream & fileobj, Employee & emp) {
	fileobj << emp.id << endl;
	fileobj << emp.salary << endl;
	fileobj << emp.name << endl;
	return fileobj;
}
ifstream & operator>>(ifstream & fileobj, Employee & emp) {
	emp;
	return fileobj;
}
istream & operator>>(istream & in, Employee & emp) {
	cout << "Enter Employee ID: ";
	in >> emp.id;
	cout << "Enter Employee Salary: ";
	in >> emp.salary;
	cout << "Enter Employee Name: ";
	in >> emp.name;
	return cin;
}
ostream & operator<<(ostream & out, Employee & emp) {
	out << "Employee ID: " << emp.id << endl;
	out << "Employee Salary: " << emp.salary << endl;
	out << "Employee Name: " << emp.name << endl;
	return cout;
}

int main() {
	clrscr();
	Employee emp;
	ofstream file;
	cout << emp;
	cin >> emp;
	cout << emp;
//	file.open("C:\Documents and Settings\Administrator\Desktop\test.txt", ios::app);
	file.open("C:\test.txt");
	file << emp;
	file.close();
	getch();
	return 0;
}
