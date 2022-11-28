def paint_cans(wall_area):
    can_price = 80
    liters = wall_area / 3
    cans = liters // 18
    if liters % 18:
        cans += 1
    return (cans, cans * can_price)


print(paint_cans(100))
