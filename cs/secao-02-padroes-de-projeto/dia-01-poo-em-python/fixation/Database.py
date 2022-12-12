from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query {query} no mongo")


class MySQLDatabase(Database):
    def execute(self, query: str):
        print(f"executando query {query} no mysql")


my_sql = MySQLDatabase()
mongo = MongoDatabase()

print(my_sql.execute("'SELECT * FROM table'"))
print(mongo.execute("'db.table.find({})'"))
