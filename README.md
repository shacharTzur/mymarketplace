# **MyMarketplace App**
MyMarketplace is a E2E E-Commerce project that implements a second hand market where users can list their products (currently focusing on clothes) for sell and buy other users products.
The app main feature is the "I Want" feature where users can broadcast items they desire. The broadcast will be received by valid sellers that have the item the users desire.

The main goal of this web app was to create a full stack app with focus on E-Commerce platforms.

How to get this project running on your machine?

*	Downloads:
	-	[NodeJS](https://nodejs.org/en/download/)
	-	Maven (recommendation: download binary zip archive)
	-	Java JDK
*	Set Maven
	-	Extract downloaded folder (from 1b.) to desired location
	-	Add Bin folder to system PATH
*	Install dependencies. In our project folder (marketplace):
	-	Open shell in marketplace/frontend folder
	-	Run command: npm install
*	Install database:
	-	Download and install MySQL and MySQL Workbench
	-	In Workbench, create a new connection, username should be root and password Change1! (this can be changed in application properties file inside mymarketplace\src\main\resources)
	-	Create new schema named “marketplace_db” (can be changed in application properties file)
	-	 Import database from db folder inside the project folder.
*	Run server client:
	-	Open shell in our project folder (marketplace)
	-	Run command: mvn spring-boot:run (first time will take a bit longer)
*	Run web app:
	-	Open shell in marketplace/frontend folder inside our project folder
	-	Run command: npm start
*	That’s it! Our marketplace site should open on browser automatically. Alternatively, you can find it in http://localhost:3000
*	Server client should be in http://localhost:8080.
