-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: marketplace_db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `condi` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `notification` int DEFAULT NULL,
  `owner` varchar(255) DEFAULT NULL,
  `price` bigint DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'H&M','SHIRT','BLUE','EXCELLENT','Its a lovely shirt','blue_shirt.jpg','HERZELIA','Lovely shirt from H&M',1,'shachartzur',20,'M'),(3,'ZARA','SWEATSHIRT','Pink ','EXCELLENT','nice sewatshirt from zara, you better buy it','swetshirt_zara.jpg','tel aviv','Sweatshirt from zara, second hand but as new',1,'RavidPlot',15,'M'),(4,'Mango','SHIRT','Red','EXCELLENT','Its a nice shirt I wear in my first real show','sweatshirtRed.jpg','Hulon','Red shirt, soft and in great condition',1,'NogaErez',12,'M'),(5,'forever21','DRESS','Plad','GOOD','Plaid dress, in good condition. ','Dressforsell.jpg','Hulon','Plaid dress',0,'NogaErez',10,'S'),(6,'Zara','JACKET','Jeans, blue','EXCELLENT','Ita a nice Jeans jacket, in good condition.Worn a few single times, warm and cozy','Jeans_jacket.jpg','Tel aviv','A Jeans jacket',1,'NogaErez',15,'XS'),(7,'Alo yoga','PANTS','Gray','NEW','\nNew pants (with a ticket) of these size XS but big!','alo traning.jpg','Tel aviv','alo training',0,'NogaErez',30,'XS'),(11,'Champion','JACKET','Pink blue white','EXCELLENT','This is a vintage jacket from champion. used, but in great condition. ','champion_sweatshirt.jpg','Tel Aviv','Vintage champion Jacket',1,'Jasmin_M',30,'S'),(12,'Diadora','JACKET','Blue read','NEW','Vintage cool jacket, by diadora','Vintage_jacket_diadora.jpg','Tel aviv','Diadora vintage jacket',1,'Jasmin_M',30,'XS'),(13,'puma','JACKET','blue green purple white','GOOD','its a really chic jacket. Its a little big on me, and usually I\'m S. so consider it','puma_jacket_.jpg','tel aviv','Puma jacket ',0,'Jasmin_M',14,'S'),(14,'Bilabong','SHIRT','plaid','GOOD','Plaid shirt, from Billabong. Size M, it has a small hole in the sleeve, but not really noticeable.','shirt_bilabong.jpg','tel aviv',' Plaid button-down shirt',0,'Jasmin_M',12,'M'),(15,'Adidas','SUITS','RED','NEW','adidas suits in a perfect condition.','adidad_suits.jpg','TEL AVIV','Adidas suits',0,'Jasmin_M',25,'M'),(16,'ADIDAS','PANTS','brown','NEW','Adidas training, completly new!!','adidas_pants.jpg','tel aviv','Adidas training ',0,'Jasmin_M',15,'S'),(17,'Asos','PANTS','Jeans','EXCELLENT','Great jeans, used but in excellent shape.','jeans_asos.jpg','Tel aviv','Mom jeans',0,'NogaErez',20,'S'),(18,'Zara','BLOUSE','White','NEW','White blouse. totally new','white shirt.jpg','Tel aviv','White Blouse',0,'NogaErez',13,'XS'),(19,'Champion','SHIRT','yellow','NEW','Champion\'s yellow T-shirt, new.','Champion_yellow_shirt.jpg','tel aviv','Champion t-shirt',1,'RavidPlot',20,'XL'),(20,'adidas','SHIRT','Green','NEW','','adidas_tshirt.webp','tel aviv','ADIDAS T-shirt',1,'RavidPlot',18,'XL'),(21,'Yanga','SKIRT','Flowerry','EXCELLENT','','skirt_yange_stzur.jpg','tel aviv','Fabuleous skirt',1,'NogaErez',20,'S'),(22,'Castro','SHIRT','Plaid','EXCELLENT','','WhatsApp Image 2022-01-03 at 21.05.16.jpeg','tel aviv','Plaid button-up shirt',0,'idohai',12,'L'),(23,'Scoth and soda','SHIRT','Gray','EXCELLENT','','WhatsApp Image 2022-01-03 at 21.16.40.jpeg','Hod Hasharon','Gray jeans',0,'idohai',12,'XL'),(24,'zara','SHIRT','GREEN WHITE','FAIR','','WhatsApp Image 2022-01-03 at 21.06.21.jpeg','Hod Hasharon','Beautiful shirt ',0,'idohai',8,'L'),(25,'ZARA','SHIRT','Colorful','EXCELLENT','','WhatsApp Image 2022-01-04 at 18.50.31.jpeg','Hod Hasharon','colorful shirt',0,'idohai',15,'L'),(26,'American Eagle','SWEATSHIRT','Gray','GOOD','','WhatsApp Image 2022-01-04 at 18.54.21.jpeg','Hod Hasharon','Sweatshirt ',0,'idohai',12,'L'),(27,'American Eagle','SHIRT','Colorful','EXCELLENT','','WhatsApp Image 2022-01-04 at 19.41.47.jpeg','Hod Hasharon',' Colorful button-up shirt',0,'shachartzur',14,'XL'),(28,'zara','JACKET','black','EXCELLENT','','black_jacket.jpg','TEL AVIV','Black Jacket',0,'RavidPlot',20,'L'),(29,'white','SWEATSHIRT','white','EXCELLENT','','245287803_10222996844767848_6035340435907830702_n.jpg','Tel Aviv','White Swetshirt from American Eagle ',0,'RavidPlot',14,'XL'),(30,'Nike','PANTS','Black Gray','NEW','','267879189_10159557383757207_4436843288645304711_n.jpg','Tel aviv','Black Training pants',0,'RavidPlot',15,'XL');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-04 20:24:15
