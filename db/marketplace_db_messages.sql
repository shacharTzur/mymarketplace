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
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `from_image` varchar(255) DEFAULT NULL,
  `product_id` bigint DEFAULT NULL,
  `product_image` varchar(255) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `receiver` varchar(255) DEFAULT NULL,
  `sender` varchar(255) DEFAULT NULL,
  `to_image` varchar(255) DEFAULT NULL,
  `unread` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'hi ravid do you want this shirt?','Mon, 3 Jan 13:56 ','shacharpic.jpeg',1,'blue_shirt.jpg','Lovely shirt from H&M','RavidPlot','shachartzur','ravidPlot.jpg',''),(2,'Hi ravid','Mon, 3 Jan 14:25 ','JaminMualem.jpeg',1,'blue_shirt.jpg','Lovely shirt from H&M','RavidPlot','Jasmin_M','ravidPlot.jpg',''),(3,'Hi ravid, bla bla ','Mon, 3 Jan 14:27 ','JaminMualem.jpeg',1,'blue_shirt.jpg','Lovely shirt from H&M','RavidPlot','Jasmin_M','ravidPlot.jpg',''),(4,'Hi shachar, are u intersted in this sweatshirt? ','Mon, 3 Jan 15:54 ','ravidPlot.jpg',3,'swetshirt_zara.jpg','Sweatshirt from zara, second hand but as new','shachartzur','RavidPlot','shacharpic.jpeg',''),(5,'Hi ravidush, how r u?','Mon, 3 Jan 19:35 ','shacharpic.jpeg',1,'blue_shirt.jpg','Lovely shirt from H&M','RavidPlot','shachartzur','ravidPlot.jpg',''),(6,'Hi shachar, I have a perfect skirt to offer you. ','Mon, 3 Jan 22:00 ','nogaErez.jpg',21,'skirt_yange_stzur.jpg','Fabuleous skirt','shachartzur','NogaErez','shacharpic.jpeg',''),(7,'Hi, answer me please!','Mon, 3 Jan 22:46 ','nogaErez.jpg',21,'skirt_yange_stzur.jpg','Fabuleous skirt','shachartzur','NogaErez','shacharpic.jpeg','');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
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
