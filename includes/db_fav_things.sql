-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 14, 2020 at 02:39 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_fav_things`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv_data`
--

DROP TABLE IF EXISTS `tbl_tv_data`;
CREATE TABLE IF NOT EXISTS `tbl_tv_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `poster` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv_data`
--

INSERT INTO `tbl_tv_data` (`id`, `title`, `genre`, `description`, `poster`) VALUES
(1, 'DARK', 'Mystery / Sci-fi', 'DARK is a German tv show that is hella mind-bending, its truely a master piece and one of the best shows out there.\r\nTRUST ME ,you are in for a ride.', 'dark.jpg'),
(2, 'The OA', 'Mystery / Sci-fi', 'The OA is onther show that is equally mind-bening. The storytelling and hidden messages are the best. It is a show where it will make you question the reality. ', 'oa.jpg'),
(3, 'Parks and Recreation', 'Sitcom', 'Who doesnt love Parks and Rec, its always fun to watch this show. It is a mockumentary show which is the reason why it\'s so great. There are diverse groups of charactors each with a unique personality. A great show for relieving stress.', 'parks.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
