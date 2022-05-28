import mysql.connector
from mysql.connector import Error

from lab2.Employee import Employee
from lab2.Office import Office

option = 0
office = Office("My Office")
while option != 'q':
    print("add -> Add new employee")
    print("q -> exit")
    option = input("Select an option: ")

    match option:
        case 'q':
            break
        case 'add':
            name = input("Name: ")
            age = int(input("Age: "))
            is_manager = input("Type 'mngr' for if manager: ") == 'mngr'
            employee = Employee(fullname=name, age=age, is_manager=is_manager, money=1000, health_rate=80)
            office.hire(employee)
            connection = cursor = None
            try:
                connection = mysql.connector.connect(host='localhost',
                                                     database='pythondb',
                                                     user='root',
                                                     password='')
                if connection.is_connected():
                    cursor = connection.cursor()
                    cursor.execute("INSERT INTO `employees` (`fullname`, `age`) VALUES (%s, %s)", (name, age))
            except Error as e:
                print("Error while connecting to MySQL", e)
            finally:
                if connection.is_connected():
                    cursor.close()
                    connection.close()
                print("MySQL connection is closed")
            break
