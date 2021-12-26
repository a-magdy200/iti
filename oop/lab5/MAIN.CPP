#include <iostream.h>
#include <conio.h>
#include <string.h>
class Employee {
	int id;
	float salary;
	char * name;
	static char companyName[10];
	static int count;
	public:
	int getId();
	void setId(int id);
	float getSalary();
	void setSalary(float salary);
	char * getName();
	void setName(char * namePtr);
	static void setCompanyName(char * companyNamePtr);
	static char * getCompanyName();
	static int getCount();
	Employee();
	Employee(int id);
	Employee(char * namePtr);
	Employee(int id, char * namePtr, float salary);
	Employee(Employee & employee);
	~Employee();
	Employee & operator = (Employee & employee);
	Employee operator + (int addedSalary);
	Employee operator + (char * concatName);
	Employee operator + (Employee & employee);
	Employee operator ++ ();
	Employee operator ++ (int dummyVal);
	int operator == (Employee & employee);
	operator int ();
	operator char * ();

	friend Employee operator + (int addedSalary, Employee & employee);
	friend Employee operator + (char * concatName, Employee & employee);
};
int Employee::count = 0;
char Employee::companyName[] = "Alex";
char *concatNames(char * name, char * concatName);
void printMenu();
void printEmployee(Employee & employee);
Employee fillEmployee();
Employee fillEmployeeById();
Employee fillEmployeeByName();


int main() {
	clrscr();
	int option;
	int flag = 1;
	short int isEqual;
	int addedSalary = 0;
	char concatName[20];
	char output[5];
	char companyName[10];
	Employee employee;
	Employee emp;
	Employee emp2;
	while (flag) {
		printMenu();
		cout << "Pick an option: ";
		cin >> option;
		switch(option) {
			case 1: // fill
				employee = fillEmployee();
				break;
			case 2: // fill by id
				employee = fillEmployeeById();
				break;
			case 3: // fill by name
				employee = fillEmployeeByName();
				break;
			case 4: // print employee
				printEmployee(employee);
				break;
			case 5: // change company name;
				cout << "Enter New Company Name: ";
				cin >> companyName;
				employee.setCompanyName(companyName);
				break;
			case 6: // display count
				cout << "Total Employees Count: " << employee.getCount() << endl;
				break;
			case 7: // add salary ( Employee + int )
				cout << "Enter amount to be added: ";
				cin >> addedSalary;
				emp = employee + addedSalary;
				printEmployee(emp);
				break;
			case 8: // add salary ( int + Employee )
				cout << "Enter amount to be added: ";
				cin >> addedSalary;
				emp = addedSalary + employee;
				printEmployee(emp);
				break;
			case 9: // pre-increment ( ++Employee )
				emp = ++employee;
				cout << "Old Employee" << endl;
				printEmployee(employee);
				cout << "New Employee" << endl;
				printEmployee(emp);
				break;
			case 10: // post-increment ( Employee++ )
				emp = employee++;
				cout << "Old Employee" << endl;
				printEmployee(employee);
				cout << "New Employee" << endl;
				printEmployee(emp);
				break;
			case 11: // concat name ( Employee + string )
				cout << "Enter name to be concatenated: ";
				cin >> concatName;
				emp = employee + concatName;
				printEmployee(emp);
				break;
			case 12: // concat name ( string + Employee )
				cout << "Enter name to be concatenated: ";
				cin >> concatName;
				emp = concatName + employee;
				printEmployee(emp);
				break;
			case 13: // concat two employees ( Employee + Employee )
			       /*	cout << "Fill second employee data" << endl;
				emp = fillEmployee();
				cout << "First Employee" << endl;
				printEmployee(employee);
				cout << "Second Employee" << endl;
				printEmployee(emp);
				cout << "Employee 1 + Employee 2" << endl;*/
				emp2 = employee + emp;
				printEmployee(emp2);
				break;
			case 14:// test equality of two employees ( Employee == Employee )
			       /*	cout << "Fill second employee data" << endl;
				emp = fillEmployee();
				cout << "First Employee" << endl;
				printEmployee(employee);
				cout << "Second Employee" << endl;
				printEmployee(emp);
				cout << "Employee 1 == Employee 2" << endl;*/
				isEqual = employee == emp;
				cout << isEqual << endl;
				isEqual = isEqual != 0;
				strcpy(output, isEqual ? "true" : "false");
				cout << isEqual << " : " << output << endl;
				break;
			case 15:// cast Employee to int ( (int) Employee )
				cout << "Testing casting Employee to int" << endl;
				cout << (int) employee << endl;
				break;
			case 16:// case Employee to char pointer ( (char*) Employee )
				cout << "Testing casting Employee to char pointer" << endl;
				cout << (char *) employee << endl;
				break;
			case 17:
				clrscr();
				break;
			case 0:
				flag = 0;
				break;
			default:
				cout << "Invalid Choice" << endl;
				break;

		}
		cout << endl << endl;
	}
	return 0;
}
int Employee::getId(){
	return id;
}
void Employee::setId(int id){
	this->id = id;
}
float Employee::getSalary(){
	return salary;
}
void Employee::setSalary(float salary){
	this->salary = salary;
}
char * Employee::getName(){
	return name;
}
void Employee::setName(char * namePtr){
	int count = strlen(namePtr);
	if (name) {
		delete name;
	}
	name = new char[count];
	strcpy(name, namePtr);
}
void Employee::setCompanyName(char * companyNamePtr) {
	strcpy(companyName, companyNamePtr);

}
char * Employee::getCompanyName() {
	return companyName;
}
int Employee::getCount() {
	return count;
}
Employee::Employee(){
	// default constructor implementation
	id = 0;
	salary = 0.0f;
	name = NULL;
	char defaultName[] = "Anonymous";
	setName(defaultName);
	count++;
}
Employee::Employee(int id){
	// constructor by id implementation
	this->id = id;
	salary = 0.0f;
	name = NULL;
	char defaultName[] = "Anonymous";
	setName(defaultName);
	count++;
}
Employee::Employee(char * namePtr){
	// constructor by name implementation
	id = 0;
	salary = 0.0f;
	name = NULL;
	setName(namePtr);
	count++;
}
Employee::Employee(int id, char * namePtr, float salary){
	// constructor by all parameters implementation
	this->id = id;
	this->salary = salary;
	name = NULL;
	setName(namePtr);
	count++;
}
Employee::Employee(Employee & employee){
	// copy constructor implementation
	id = employee.getId();
	salary = employee.getSalary();
	char * namePtr = employee.getName();
	name = NULL;
	setName(namePtr);
	count++;
}
Employee::~Employee(){
	//Destructor Implementation
	if (name) {
		delete name;
	}
	count--;
}
Employee & Employee::operator = (Employee & employee){
	// assignment operator overloading implementation
	delete name;
	name = NULL;
	id = employee.getId();
	salary = employee.getSalary();
	char * namePtr = employee.getName();
	setName(namePtr);
	return *this;
}
Employee Employee::operator + (int addedSalary){
	// plus operator overloading implementation
	// case: Employee + int
	Employee employee(id, name, salary + addedSalary);
	return employee;
}
Employee Employee::operator + (char * concatName){
	// plus operator overloading implementation
	// case: Employee + string
	char * newName = concatNames(name, concatName);
	Employee employee = *this;
	employee.setName(newName);
	delete newName;
	return employee;
}
Employee Employee::operator + (Employee & employee){
	// plus operator overloading implementation
	// case: Employee + Employee
	int newId = id + employee.getId();
	float newSalary = salary + employee.getSalary();
	char * newName = concatNames(name, employee.getName());
	Employee emp(newId, newName, newSalary);
	delete newName;
	return emp;
}
Employee Employee::operator ++ (){
	// pre-increment operator overloading implementation
	salary++;
	return *this;
}
Employee Employee::operator ++ (int dummyVal){
	// post-increment operator overloading implementation
	dummyVal = dummyVal;
	Employee employee(id, name, salary);
	salary++;
	return employee;
}
int Employee::operator == (Employee & employee){
	// equal operator overloading implementation
	// comparing two IDs
	return id == employee.getId();
}
Employee::operator int (){
	// casting to integer overloading implementation
	// return ID
	return id;
}
Employee::operator char * (){
	// casting to char overloading implementation
	// return name pointer
	return name;
}
Employee operator + (int addedSalary, Employee & employee){
	// plus operator overloading implementation
	// case (int + Employee)
	return employee + addedSalary;
}
Employee operator + (char * concatName, Employee & employee){
	// plus operator overloading implementation
	// case: string + Employee
	Employee emp = employee + concatName;
	return emp;
}
char * concatNames(char * name, char * concatName) {
	int count = 2;
	count += strlen(name);
	count += strlen(concatName);
	char * newName = new char[count];
	strcpy(newName, name);
	strcat(newName, " ");
	strcat(newName, concatName);
	return newName;
}
void printMenu() {
	cout << "1. Fill Employee" << endl;
	cout << "2. Fill Employee By ID" << endl;
	cout << "3. Fill Employee By Name" << endl;
	cout << "4. Print Employee" << endl;
	cout << "5. Change Company Name" << endl;
	cout << "6. Display Total Employees Count" << endl;
	cout << "7. Add Salary To Employee ( Employee + int )" << endl;
	cout << "8. Add Salary To Employee ( int + Employee )" << endl;
	cout << "9. Pre-Increment Employee ( ++Employee )" << endl;
	cout << "10. Post-Increment Employee ( Employee++ )" << endl;
	cout << "11. Concat String To Employee ( Employee + string )" << endl;
	cout << "12. Concat String To Employee ( string + Employee )" << endl;
	cout << "13. Sum Of Two Employees ( Employee + Employee )" << endl;
	cout << "14. Test Equality Of Two Employyes ( Employee 1 == Employee 2 )" << endl;
	cout << "15. Test Casting Employee To Int" << endl;
	cout << "16. Test Casting Employee To Char Pointer" << endl;
	cout << "17. Clear Screen" << endl;
	cout << "0. Exit" << endl;
}
void printEmployee(Employee & employee){
	// prints employee data
	cout << endl << endl << "***** Employee Data *****" << endl << endl;
	cout << "Employee ID: " << employee.getId() << endl;
	cout << "Employee Name: " << employee.getName() << endl;
	cout << "Employee Salary: " << employee.getSalary() << endl;
	cout << "Company Name: " << employee.getCompanyName() << endl;
	cout << endl << endl << "***** Employee Data *****" << endl << endl;
}
Employee fillEmployee(){
	// fill employee data
	// requests 3 input: id, salary, name
	int id;
	float salary;
	char * name;
	cout << "Employee ID: ";
	cin >> id;
	cout << "Employee Name: ";
	cin >> name;
	cout << "Employee Salary: ";
	cin >> salary;
	Employee employee(id, name, salary);
	return employee;
}
Employee fillEmployeeById(){
	// fill employee data
	// requests 1 input: id
	// populates default salary, name
	int id;
	cout << "Employee ID: ";
	cin >> id;
	Employee employee(id);
	return employee;
}
Employee fillEmployeeByName(){
	// fill employee data
	// requests 1 input: name
	// populates default salary, id
	char * name;
	cout << "Employee Name: ";
	cin >> name;
	Employee employee(name);
	return employee;
}
