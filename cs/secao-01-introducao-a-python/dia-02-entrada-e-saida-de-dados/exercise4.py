import json
import csv
from collections import Counter


with open("books.json") as file:
    books = json.load(file)


categories = []
for book in books:
    for category in book["categories"]:
        categories.append(category)


books_by_category = Counter(categories).most_common()


books_percentage_by_category = []
for category, number_of_books in books_by_category:
    books_percentage_by_category.append(
        [category, number_of_books / len(books)]
    )


with open("books_report.csv", mode="w", encoding="utf-8") as file:
    writer = csv.writer(file)
    header = ["category", "percentage"]
    writer.writerow(header)
    writer.writerows(books_percentage_by_category)
