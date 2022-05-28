from lab2.Person import Person


class Employee(Person):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.id = kwargs.get('id')
        self.email = kwargs.get('email')
        self.work_mood = kwargs.get('work_mood')
        self.is_manager = kwargs.get("is_manager")

    @property
    def id(self):
        return self.__id

    @id.setter
    def id(self, employee_id):
        self.__id = employee_id

    @property
    def is_manager(self):
        return self.__is_manager

    @is_manager.setter
    def is_manager(self, employee_is_manager):
        self.__is_manager = employee_is_manager

    @property
    def work_mood(self):
        return self.__work_mood

    @work_mood.setter
    def work_mood(self, employee_work_mood):
        self.__work_mood = employee_work_mood

    @property
    def email(self):
        return self.__email

    @email.setter
    def email(self, employee_email):
        # if is_valid:
        self.__email = employee_email

    def work(self, hours):
        if hours == 8:
            self.work_mood = 'happy'
        elif hours < 8:
            self.work_mood = 'tired'
        else:
            self.work_mood = 'lazy'

    def send_email(self, to, subject, body, receiver):
        file_pointer = open("email_" + to + "_" + subject + "_" + str(self.id) + "_" + receiver + ".txt", "w")
        file_pointer.write(body)
        file_pointer.close()


