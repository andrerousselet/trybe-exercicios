class Fan:
    def __init__(self, color, power, voltage, price):
        self.price = price
        self.__color = color
        self.__power = power
        self.__voltage = voltage
        self.__turned_on = False


class People:
    def __init__(self, name):
        self.name = name
        self.fan = None

    def buy_fan(self, fan):
        self.fan = fan

    def __str__(self) -> str:
        if self.fan:
            return f"{self.name} possui um ventilador"
        return f"{self.name} não possui um ventilador"


my_fan = Fan("Black", power=300, voltage=127, price=89.9)
person = People("Andre")
print(person)  # não possui
person.buy_fan(my_fan)
print(person)  # possui
