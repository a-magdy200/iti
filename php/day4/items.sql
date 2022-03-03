-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.34-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5284
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for northwind
CREATE DATABASE IF NOT EXISTS `northwind` /*!40100 DEFAULT CHARACTER SET utf16 COLLATE utf16_croatian_ci */;
USE `northwind`;

-- Dumping structure for table northwind.items
CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL,
  `PRODUCT_code` varchar(25) DEFAULT 'test',
  `product_name` varchar(50) DEFAULT NULL,
  `Photo` varchar(50) DEFAULT NULL,
  `list_price` decimal(10,2) NOT NULL DEFAULT '20.00',
  `reorder_level` int(11) DEFAULT NULL,
  `Units_In_Stock` int(11) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `CouNtry` varchar(50) DEFAULT NULL,
  `Rating` decimal(3,2) DEFAULT NULL,
  `discontinued` bit(1) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_code` (`PRODUCT_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- Dumping data for table northwind.items: ~16 rows (approximately)
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` (`id`, `PRODUCT_code`, `product_name`, `Photo`, `list_price`, `reorder_level`, `Units_In_Stock`, `category`, `CouNtry`, `Rating`, `discontinued`, `date`) VALUES
	(17, 'NWTCFV-17', 'pilot', '01.png', 14.50, 10, 30, 'Kontrollkästchen einzuschließen', 'Italy', 4.80, b'1', '2018-10-28 22:51:15'),
	(88, 'NWTCFV-88', 'ClubMaster', '02.png', 12.50, 5, 15, 'sunglasses', 'Italy', 5.00, b'0', '2018-09-28 22:51:28'),
	(89, 'NWTCFV-89', 'Oval', '03.png', 10.95, 5, 2, 'sunglasses', 'USA', 4.50, b'1', '2018-09-28 22:51:32'),
	(90, 'NWTCFV-90', 'Semi-Rimless', '04.png', 11.95, 5, 15, 'sunglasses', 'USA', 5.00, b'1', '2018-08-28 22:51:37'),
	(91, 'NWTCFV-91', 'Aviator', '05.png', 11.95, 10, 12, 'sunglasses', 'France', 4.00, b'1', '2018-08-28 22:51:42'),
	(92, 'NWTCFV-92', 'pilot', '06.png', 11.50, 10, 29, 'sunglasses', 'France', 4.50, b'0', '2018-08-28 22:51:49'),
	(93, 'NWTCFV-93', 'Cat Eye', '07.png', 13.00, 10, 2, 'sunglasses', 'USA', 4.70, b'1', '2018-09-28 22:51:54'),
	(94, 'NWTCFV-94', 'Sport', '08.png', 15.00, 10, 10, 'sunglasses', 'Canada', 4.30, b'0', '2018-09-28 22:52:08'),
	(100, 'NWTCFV-100', 'Browline', '09.png', 14.00, 10, 4, 'sunglasses', 'USA', 4.60, b'1', '2018-08-28 22:52:14'),
	(101, 'NWTCFV-150', 'Square', '10.png', 11.95, 10, 3, 'sunglasses', 'Italy', 3.80, b'0', '2018-08-28 22:52:19'),
	(102, 'NWTCFV-101', 'pilot', '11.png', 12.95, 10, 17, 'sunglasses', 'Italy', 4.30, b'1', '2018-07-28 22:52:25'),
	(103, 'NWTCFV-120', 'Butterfly', '12.png', 13.50, 5, 9, 'sunglasses', 'Italy', 4.80, b'0', '2018-09-28 22:52:32'),
	(104, 'NWTCFV-130', 'Katy', '13.png', 13.00, 10, 19, 'sunglasses', 'France', 4.50, b'1', '2018-09-28 22:52:37'),
	(105, 'NWTCFV-140', 'Retro Square', '14.png', 12.00, 10, 4, 'sunglasses', 'USA', 5.00, b'0', '2018-09-28 22:52:41'),
	(106, 'NWTCFV-160', 'pilot', '15.png', 12.00, 10, 20, 'sunglasses', 'Canada', 5.00, b'1', '2018-08-28 22:52:46'),
	(111, 'NWTCFV-161', 'Cat Eye', '12.png', 11.00, 10, 10, 'sunglasses', 'France', 4.00, b'1', '2018-08-28 22:52:50');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
