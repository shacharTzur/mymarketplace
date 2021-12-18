import mysql.connector

conn = mysql.connector.connect(user="root", password= password ,host="localhost", database='marketplace_db')

cursor = conn.cursor()

########################no need it for now ###############################
# cursor.execute("DROP TABLE IF EXISTS users")
# cursor.execute("DROP TABLE IF EXISTS PRODUCTS")     do not delete tables!!1

# Creating table as per requirement
# create_users_table ='''CREATE TABLE users(
#    id INT,
#    firstname CHAR(20) NOT NULL,
#    lastname CHAR(20),
#    username CHAR(20),
#    image CHAR(100)
# )'''
#
# cursor.execute(create_users_table)    do not create! app creates it!
###########################################################################

users = []

users.append('''INSERT INTO users(firstname , lastname, username, image)
VALUES ('ben', 'confino', 'bcon', '.......')''')

users.append('''INSERT INTO users(firstname , lastname, username)
VALUES ('ido', 'hai', 'idohai')''')

users.append('''INSERT INTO users(firstname , lastname, username)
VALUES ('noa', 'ben nathan', 'Nbena')''')

users.append('''INSERT INTO users(firstname , lastname, username)
VALUES ('shachar', 'tzur', 'Stzur')''')




for insertUser in users:
    cursor.execute(insertUser)
conn.commit()