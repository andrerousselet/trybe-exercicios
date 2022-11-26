def average(list):
    counter = 0
    for elem in list:
        counter += elem
    return counter / len(list)


list = [1, 2, 3, 4, 5, 6]


print(average(list))
