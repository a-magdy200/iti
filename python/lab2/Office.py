class Office:
    name = ''
    employees = []

    def __init__(self, name):
        self.name = name

    def get_all_employees(self):
        return self.employees

    def get_employee(self, employee_id):
        return list(filter(lambda e: e.id == employee_id, self.employees))[0]

    def fire(self, employee_id):
        self.employees.remove(self.get_employee(employee_id))

    def hire(self, employee):
        self.employees.append(employee)

