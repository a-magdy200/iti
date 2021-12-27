#include <iostream.h>
#include <conio.h>
#include <string.h>
class Person {
	protected:
	int id;
	char name[10];
	public:
	Person();
	Person(int id, char * namePtr);
	int getId();
	void setId(int id);
	char * getName();
	void setName(char * namePtr);
	void print();
};
Person::Person() {
	id = 0;
	strcpy(name, "Anonymous");
}
Person::Person(int id, char * namePtr) {
	this->id = id;
	strcpy(name, namePtr);
}
int Person::getId() { return id; }
void Person::setId(int id) { this->id = id; }
char * Person::getName() { return name; }
void Person::setName(char * namePtr) { strcpy(name, namePtr); }
void Person::print() {
	cout << endl << "Printing Person Info..." << endl;
	cout << "ID: " << getId() << endl;
	cout << "Name: " << getName() << endl << endl;
}

class Employee : virtual public Person {
	int salary;
	public:
	Employee();
	Employee(int id, char * namePtr);
	Employee(int id, char * namePtr, int salary);
	int getSalary();
	void setSalary(int salary);
	void print();
};
Employee::Employee():Person() {	salary = 1000; }
Employee::Employee(int id, char * namePtr) : Person(id, namePtr) {}
Employee::Employee(int id, char * namePtr, int salary) : Person(id, namePtr) {
	this->salary = salary;
 }
int Employee::getSalary() { return salary; }
void Employee::setSalary(int salary) { this->salary = salary; }
void Employee::print() {
	cout << endl << "Printing Employee Info..." << endl;
	cout << "ID: " << getId() << endl;
	cout << "Name: " << getName() << endl;
	cout << "Salary: " << getSalary() << endl;
}

class Customer : virtual public Person {
	char phone[12];
	char email[51];
	public:
	Customer();
	Customer(int id, char * namePtr);
	Customer(int id, char * namePtr, char * phonePtr);
	Customer(int id, char * namePtr, char * phonePtr, char * emailPtr);
	char * getPhone();
	void setPhone(char * phonePtr);
	char * getEmail();
	void setEmail(char * emailPtr);
	void print();
};
Customer::Customer():Person() {
	strcpy(phone, "01234567890");
	strcpy(email, "example@domain.com");
}
Customer::Customer(int id, char * namePtr) : Person(id, namePtr) {}
Customer::Customer(int id, char * namePtr, char * phonePtr) : Person(id, namePtr) {
	strcpy(phone, phonePtr);
}
Customer::Customer(int id, char * namePtr, char * phonePtr, char * emailPtr) : Person(id, namePtr) {
	strcpy(phone, phonePtr);
	strcpy(email, emailPtr);
}
char * Customer::getPhone() { return phone; }
void Customer::setPhone(char * phonePtr) { strcpy(phone, phonePtr); }
char * Customer::getEmail() { return email; }
void Customer::setEmail(char * emailPtr) { strcpy(email, emailPtr); }
void Customer::print() {
	cout << endl << "Printing Customer Info..." << endl;
	cout << "ID: " << getId() << endl;
	cout << "Name: " << getName() << endl;
	cout << "Phone: " << getPhone() << endl;
	cout << "Email: " << getEmail() << endl << endl;
}
int main() {
	clrscr();
	Person person;
	Employee employee;
	Customer customer;
	person.print();
	customer.print();
	employee.print();
	getch();
	return 0;
}