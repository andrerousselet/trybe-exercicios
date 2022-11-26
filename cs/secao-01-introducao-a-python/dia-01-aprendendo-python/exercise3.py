def print_square(n):
    line = ''
    if n > 1:
        for elem in range(n):
            line = '*' * n
            print(line)


print_square(5)
