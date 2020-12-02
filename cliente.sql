-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2020 at 07:42 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testcustom1`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `Nombre1` varchar(256) NOT NULL,
  `Nombre2` varchar(256) DEFAULT NULL,
  `Apellido1` varchar(256) NOT NULL,
  `Apellido2` varchar(256) DEFAULT NULL,
  `T_Documento` varchar(256) NOT NULL,
  `N_Documento` varchar(256) NOT NULL,
  `Pais_Residencia` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`Nombre1`, `Nombre2`, `Apellido1`, `Apellido2`, `T_Documento`, `N_Documento`, `Pais_Residencia`) VALUES
('Andres', 'Alonso', 'Arango', 'Atehortua', 'CC', '10001', 'Andorra'),
('Bernardo', 'Brian', 'Bastidas', 'Benitez', 'CC', '10002', 'Belgica'),
('Carlos', 'Camilo', 'Cardenas', 'Contreras', 'CC', '10003', 'Colombia'),
('Daniel', 'Dario', 'Duque', 'Diaz', 'CC', '10004', 'Colombia'),
('Edison', 'Eduardo', 'Gutierrez', 'Echeverry', 'CC', '10005', 'Colombia'),
('Fernando', 'Fabio', 'Franco', 'Gutierrez', 'CC', '10006', 'Francia'),
('Guillermo', 'Gonzalo', 'Gutierrez', 'Galindo', 'CC', '10007', 'Colombia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`N_Documento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
