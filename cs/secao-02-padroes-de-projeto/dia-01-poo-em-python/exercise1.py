class TV:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__is_on = False

    @property
    def volume(self):
        return self.__volume

    @property
    def is_on(self):
        return self.__is_on

    @property
    def channel(self):
        return self.__channel

    def increase_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def decrease_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def switch_channel(self, channel):
        if not (1 <= int(channel) <= 99):
            raise ValueError("Invalid channel - must be from 1 to 99")
        self.__channel = channel

    def on_off(self):
        self.__is_on = not self.__is_on


tv = TV(size=49)
print(tv.is_on)
tv.on_off()
print(tv.is_on)

print(f"current volume: {tv.volume}")
tv.increase_volume()
tv.increase_volume()
tv.increase_volume()
tv.increase_volume()
print(f"current volume: {tv.volume}")
tv.decrease_volume()
print(f"current volume: {tv.volume}")

print(f"current channel: {tv.channel}")
# tv.switch_channel(0)
# tv.switch_channel(100)
tv.switch_channel(79)
print(f"current channel: {tv.channel}")

tv.on_off()
print(tv.is_on)
