def triangle_type(a, b, c):
    if not (
        a + b > c and
        b + c > a and
        a + c > b
    ):
        return 'não é triângulo'
    elif a == b == c:
        return 'equilátero'
    elif a == b or b == c or a == c:
        return 'isóceles'
    else:
        return 'escaleno'


print(triangle_type(3, 7, 5))
