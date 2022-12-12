class Appliance:
    def __init__(self, color, power, voltage, price):
        self.price = price
        self.color = color
        self._power = power
        self._voltage = voltage
        self.__turned_on = False
        self.__speed = 0
        self.__max_speed = 3

    def turn_on(self, speed):
        if speed > self.__max_speed or speed < 0:
            raise ValueError(f"Speed must be between 0 and {self.__max_speed}")
        self.__speed = speed
        self.__turned_on = True

    def turn_off(self):
        self.__speed = 0
        self.__turned_on = False

    def is_turned_on(self):
        return self.__turned_on

    @property
    def color(self):
        return self.__color.upper()

    @color.setter
    def color(self, new_color):
        self.__color = new_color


class Dryer(Appliance):
    pass


class Mixer(Appliance):
    pass


class WashingMachine(Appliance):
    pass


my_dryer = Dryer("Silver", power=1200, voltage=127, price=579.9)
my_mixer = Mixer("Black", power=1200, voltage=127, price=459)
my_washer = WashingMachine("White", power=1000, voltage=127, price=697.9)

print(f"The {my_dryer.color} dryer costs ${my_dryer.price}")
print(f"The {my_mixer.color} mixer costs ${my_mixer.price}")
print(f"The {my_washer.color} washing machine costs ${my_washer.price}")
