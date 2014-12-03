-- --------------------------------------------------------
-- Host:                         192.168.1.15
-- Server version:               5.5.40-0+wheezy1 - (Debian)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             8.0.0.4396
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for infinium_packages
CREATE DATABASE IF NOT EXISTS `infinium_packages` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `infinium_packages`;


-- Dumping structure for table infinium_packages.dependencies
CREATE TABLE IF NOT EXISTS `dependencies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `file_id` int(10) unsigned NOT NULL,
  `package_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table infinium_packages.dependencies: ~0 rows (approximately)
DELETE FROM `dependencies`;
/*!40000 ALTER TABLE `dependencies` DISABLE KEYS */;
INSERT INTO `dependencies` (`id`, `file_id`, `package_id`) VALUES
	(1, 1, 1),
	(2, 2, 1),
	(3, 3, 1);
/*!40000 ALTER TABLE `dependencies` ENABLE KEYS */;


-- Dumping structure for table infinium_packages.files
CREATE TABLE IF NOT EXISTS `files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('js','css','files') COLLATE utf8mb4_unicode_ci NOT NULL,
  `src` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table infinium_packages.files: ~0 rows (approximately)
DELETE FROM `files`;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` (`id`, `name`, `type`, `src`) VALUES
	(1, 'somejs', 'js', 'asdfasdflkj'),
	(2, 'somecss', 'css', 'asdflkjvronron'),
	(3, 'otherfiles', 'files', 'q');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;


-- Dumping structure for table infinium_packages.packages
CREATE TABLE IF NOT EXISTS `packages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `context` enum('page','domain','etc') COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table infinium_packages.packages: ~0 rows (approximately)
DELETE FROM `packages`;
/*!40000 ALTER TABLE `packages` DISABLE KEYS */;
INSERT INTO `packages` (`id`, `name`, `context`) VALUES
	(1, 'test', 'page');
/*!40000 ALTER TABLE `packages` ENABLE KEYS */;


-- Dumping structure for table infinium_packages.urls
CREATE TABLE IF NOT EXISTS `urls` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `url` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `package_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table infinium_packages.urls: ~0 rows (approximately)
DELETE FROM `urls`;
/*!40000 ALTER TABLE `urls` DISABLE KEYS */;
INSERT INTO `urls` (`id`, `url`, `package_id`) VALUES
	(1, 'gangster.io', 1);
/*!40000 ALTER TABLE `urls` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
