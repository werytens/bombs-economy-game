import eel
import random
import sqlite3


connection = sqlite3.connect("main.db")
cursor = connection.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS Balance (balance int)")

print(cursor.execute("SELECT balance FROM Balance").fetchall()[0][0])

if (cursor.execute("SELECT balance FROM Balance").fetchall() == []):
    cursor.execute(f"INSERT INTO Balance VALUES (1000)")
    connection.commit()

# cursor.execute(f"UPDATE Balance SET balance = 10000")

@eel.expose()
def startgame():
    return [random.randint(0, 1) for x in range(0, 25)]

@eel.expose()
def getnowbalance():
    return int(cursor.execute("SELECT balance FROM Balance").fetchall()[0][0])

eel.init("K:/Main/bombs-economy-game")
eel.start("./interface/index.html", size = (400, 700))