numbers = input("Insira valores separados por espaços: ")

numbersArray = numbers.split()

sum = 0
for number in numbersArray:
    if not number.isdigit():
        print(f"Erro ao somar valores, '{number}' é um valor inválido")
    else:
        sum += int(number)

print(f"A soma (dos valores válidos) é: {sum}")
