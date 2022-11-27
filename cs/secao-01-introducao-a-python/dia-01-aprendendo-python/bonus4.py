def fuel_price(liters, fuel_type):
    fuel_prices = {
      "A": 1.9,
      "G": 2.5,
    }
    discounts = {
      "A": (0.97, 0.95),
      "G": (0.96, 0.94),
    }
    total = liters * fuel_prices[fuel_type]
    if liters <= 20:
        return total * discounts[fuel_type][0]
    else:
        return total * discounts[fuel_type][1]


print(fuel_price(20, 'G'))
