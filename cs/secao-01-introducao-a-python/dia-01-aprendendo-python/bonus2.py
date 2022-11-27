def print_stair(n):
    line = ''
    if n > 1:
        for elem in range(n):
            line += '*'
            print(line)


print_stair(5)
