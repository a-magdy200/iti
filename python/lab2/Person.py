class Person:

    def __init__(self, **kwargs):
        self.__fullname = kwargs.get('fullname')
        self.money = kwargs.get('money')
        self.__sleep_mood = kwargs.get('sleep_mode')
        self.health_rate = kwargs.get('health_rate')

    @property
    def money(self):
        return self.__money

    @money.setter
    def money(self, money):
        if money >= 1000:
            self.__money = money
        else:
            print("Salary must be 1000 or more")

    @property
    def sleep_mode(self):
        return self.__sleep_mood

    @property
    def health_rate(self):
        return self.__health_rate

    @health_rate.setter
    def health_rate(self, rate):
        if rate < 0 or rate > 100:
            print("Health rate must be between 0 and 100")
        else:
            self.__health_rate = rate

    def sleep(self,  hours):
        if hours == 7:
            self.__sleep_mood = 'happy'
        elif hours < 7:
            self.__sleep_mood = 'tired'
        else:
            self.__sleep_mood = 'lazy'

    def eat(self, meals_count):
        if meals_count == 1:
            self.__health_rate = 50
        elif meals_count == 2:
            self.__health_rate = 75
        elif meals_count == 3:
            self.__health_rate = 100

    def buy(self, items):
        self.__money -= (len(items) * 10)

