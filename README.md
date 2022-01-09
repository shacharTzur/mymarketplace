[Header]MyMarketplace App
MyMarketplace is a E2E E-Commerce project that implements a second hand market where users can list their products (currently focusing on clothes) for sell and buy other users products.
The app main feature is the "I Want" feature where users can broadcast items they desire. The broadcast will be received by valid sellers that have the item the users desire.

The main goal of this web app was to create a full stack app with focus on E-Commerce platforms.

How to get this project running on your machine?

1.	Downloads:
	a.	NodeJS
	b.	Maven (recommendation: download binary zip archive)
	c.	Java JDK
2.	Set Maven
	a.	Extract downloaded folder (from 1b.) to desired location
	b.	Add Bin folder to system PATH
3.	Install dependencies. In our project folder (marketplace):
	a.	Open shell in marketplace/frontend folder
	b.	Run command: npm install
4.	Install database:
	a.	Download and install MySQL and MySQL Workbench
	b.	In Workbench, create a new connection, username should be root and password Change1! (this can be changed in application properties file inside mymarketplace\src\main\resources)
	c.	Create new schema named “marketplace_db” (can be changed in application properties file)
	d.	 Import database from db folder inside the project folder.
5.	Run server client:
	a.	Open shell in our project folder (marketplace)
	b.	Run command: mvn spring-boot:run (first time will take a bit longer)
6.	Run web app:
	a.	Open shell in marketplace/frontend folder inside our project folder
	b.	Run command: npm start
7.	That’s it! Our marketplace site should open on browser automatically. Alternatively, you can find it in http://localhost:3000
8.	Server client should be in http://localhost:8080.
