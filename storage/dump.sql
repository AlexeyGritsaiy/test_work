-- MySQL dump 10.13  Distrib 5.7.35, for Linux (x86_64)
--
-- Host: localhost    Database: app
-- ------------------------------------------------------
-- Server version	5.7.35

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Fashion','Category for anything related to fashion.','2014-06-01 00:35:07','2014-05-30 17:34:33'),(2,'Electronics','Gadgets, drones and more.','2014-06-01 00:35:07','2014-05-30 17:34:33'),(3,'Motors','Motor sports and more','2014-06-01 00:35:07','2014-05-30 17:34:54'),(5,'Movies','Movie products.','2019-05-20 10:22:05','2019-08-20 10:30:15'),(6,'Books','Kindle books, audio books and more.','2018-03-14 08:05:25','2019-05-20 11:29:11'),(13,'Sports','Drop into new winter gear.','2016-01-09 02:24:24','2016-01-09 01:24:24');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'LG P880 4X HD','My first awesome phone!',3,'2014-06-01 01:12:26','2014-05-31 17:12:26'),(2,'Google Nexus 4','The most awesome phone of 2013!',2,'2014-06-01 01:12:26','2014-05-31 17:12:26'),(3,'Samsung Galaxy S4','How about no?',3,'2014-06-01 01:12:26','2014-05-31 17:12:26'),(6,'Bench Shirt','The best shirt!',1,'2014-06-01 01:12:26','2014-05-31 02:12:21'),(7,'Lenovo Laptop','My business partner.',2,'2014-06-01 01:13:45','2014-05-31 02:13:39'),(8,'Samsung Galaxy Tab 10.1','Good tablet.',2,'2014-06-01 01:14:13','2014-05-31 02:14:08'),(9,'Spalding Watch','My sports watch.',1,'2014-06-01 01:18:36','2014-05-31 02:18:31'),(10,'Sony Smart Watch','The coolest smart watch!',2,'2014-06-06 17:10:01','2014-06-05 18:09:51'),(11,'Huawei Y300','For testing purposes.',2,'2014-06-06 17:11:04','2014-06-05 18:10:54'),(12,'Abercrombie Lake Arnold Shirt','Perfect as gift!',1,'2014-06-06 17:12:21','2014-06-05 18:12:11'),(13,'Abercrombie Allen Brook Shirt','Cool red shirt!',1,'2014-06-06 17:12:59','2014-06-05 18:12:49'),(26,'Another product','Awesome product!',2,'2014-11-22 19:07:34','2014-11-21 20:07:34'),(28,'Wallet','You can absolutely use this one!',6,'2014-12-04 21:12:03','2014-12-03 22:12:03'),(31,'Amanda Waller Shirt','New awesome shirt!',1,'2014-12-13 00:52:54','2014-12-12 01:52:54'),(42,'Nike Shoes for Men','Nike Shoes',3,'2015-12-12 06:47:08','2015-12-12 05:47:08'),(48,'Bristol Shoes','Awesome shoes.',6,'2016-01-08 06:36:37','2016-01-08 05:36:37'),(61,'test1','jehjsetsjgt',1,'2021-09-16 20:33:21','2021-09-16 20:33:21'),(62,'test3','dsdasdada',3,'2021-09-16 21:08:38','2021-09-16 21:08:38'),(63,'eqweqweq','ewqeqweqweq',5,'2021-09-16 21:19:53','2021-09-16 21:19:53'),(64,'dsfdsaf333','rwrwerw',13,'2021-09-16 21:27:40','2021-09-16 21:27:40'),(65,'d2222','weqweqweq',1,'2021-09-16 21:36:02','2021-09-16 21:36:02');
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

-- Dump completed on 2021-09-17  5:40:17
