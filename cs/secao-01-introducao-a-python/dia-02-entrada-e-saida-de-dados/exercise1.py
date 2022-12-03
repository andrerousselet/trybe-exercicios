def inverted_name_stair(word):
    i = len(word)
    for char in word:
        print(word[:i])
        i -= 1


name = input("Digite seu nome: ")
inverted_name_stair(name)


# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()


# if __name__ == "__main__":
#     name = input("Digite um nome: ")
#     vertical_inverted_ladder(name)
