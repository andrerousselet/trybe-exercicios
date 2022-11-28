from functools import reduce
from operator import add


def sum_from_one_to(n):
    return reduce(add, range(n + 1))


print(sum_from_one_to(6))
