def biggest_name(list):
    len_list = [len(elem) for elem in list]
    biggest_name_index = len_list.index(max(len_list))
    return list[biggest_name_index]


names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


print(biggest_name(names))
