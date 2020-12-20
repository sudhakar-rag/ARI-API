-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 20, 2020 at 06:34 AM
-- Server version: 5.7.31
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ari_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Countries`
--

CREATE TABLE `Countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Countries`
--

INSERT INTO `Countries` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'USA', '2020-11-10 09:58:08', '2020-11-10 09:58:08');

-- --------------------------------------------------------

--
-- Table structure for table `GeneralSettings`
--

CREATE TABLE `GeneralSettings` (
  `id` int(11) NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `value` tinytext,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Languages`
--

CREATE TABLE `Languages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Languages`
--

INSERT INTO `Languages` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Arabic ', '2020-10-10 21:27:02', '2020-10-10 21:27:02'),
(2, 'Bengali', '2020-10-10 21:27:02', '2020-10-10 21:27:02'),
(3, 'Chinese (Cantonese)', '2020-10-10 21:27:45', '2020-10-10 21:27:45'),
(4, 'Chinese (Mandarin)', '2020-10-10 21:27:45', '2020-10-10 21:27:45');

-- --------------------------------------------------------

--
-- Table structure for table `MedicalProblems`
--

CREATE TABLE `MedicalProblems` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `MedicalProblems`
--

INSERT INTO `MedicalProblems` (`id`, `key`, `value`, `createdAt`, `updatedAt`) VALUES
(1, 'adhd', 'ADHD', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(2, 'alcoholism', 'Alcoholism', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(3, 'allergies', 'Allergies, Seasonal', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(4, 'anemia', 'Anemia, Seasonal', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(5, 'anxiety', 'Anxiety', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(6, 'arrhythmia', 'Arrhythmia', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(7, 'arthritis', 'Arthritis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(8, 'asthma', 'Asthma', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(9, 'bipolar', 'Bipolar', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(10, 'bladderProblems', 'Bladder problems', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(11, 'bleedingProblems', 'Bleeding problems', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(12, 'cancer', 'Cancer', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(13, 'carpalTunnel', 'Carpal Tunnel', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(14, 'copd', 'COPD', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(15, 'crohnsDisease', 'Crohns Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(16, 'dementia', 'Dementia', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(17, 'depression', 'Depression', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(18, 'diabetes', 'Diabetes', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(19, 'diverticulitis', 'Diverticulitis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(20, 'dvt', 'DVT (Blood Clot)', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(21, 'eczema', 'Eczema', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(22, 'emphysema', 'Emphysema', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(23, 'gallstones', 'Gallstones', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(24, 'gerd', 'GERD (acid retlux)', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(25, 'glaucoma', 'Glaucoma', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(26, 'headaches', 'Headaches', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(27, 'heartDisease', 'Heart Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(28, 'heartAttack', 'Heart Attack', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(29, 'hiatalHernia', 'Hiatal Hernia', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(30, 'highBloodPressure', 'High Blood Pressure', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(31, 'highColesterol', 'High Colesterol', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(32, 'hiv', 'HIV', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(33, 'hepatitis', 'Hepatitis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(34, 'irritableBowelSyndrome', 'Irritable Bowel Syndrome', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(35, 'kidneyStones', 'Kidney Stones', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(36, 'kidneyDisease', 'kidney Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(37, 'lupus', 'Lupus', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(38, 'liverDisease', 'Liver Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(39, 'muscularDegeneration', 'Muscular Degeneration', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(40, 'migraines', 'Migraines', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(41, 'nosebleeds', 'Nosebleeds', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(42, 'neuropathy', 'Neuropathy', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(43, 'osteopenia', 'Osteopenia/Osteoporosis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(44, 'parkinsonsDisease', 'Parkinsons Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(45, 'peripheralVascularDisease', 'Peripheral Vascular Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(46, 'eptic Ulcer', 'eptic Ulcer', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(47, 'psoriasis', 'Psoriasis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(48, 'pulmonaryEmbolism', 'Pulmonary Embolism', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(49, 'rheumatoidArthritis', 'Rheumatoid Arthritis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(50, 'sciatica', 'Sciatica', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(51, 'seizure Disorder', 'Seizure Disorder', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(52, 'sleepApnea', 'Sleep Apnea', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(53, 'stroke', 'Stroke', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(54, 'thyroidDisorder', 'Thyroid Disorder', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(55, 'ulcerativeColitis', 'Ulcerative Colitis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(56, 'adhd', 'ADHD', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(57, 'alcoholism', 'Alcoholism', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(58, 'allergies', 'Allergies, Seasonal', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(59, 'anemia', 'Anemia, Seasonal', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(60, 'anxiety', 'Anxiety', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(61, 'arrhythmia', 'Arrhythmia', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(62, 'arthritis', 'Arthritis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(63, 'asthma', 'Asthma', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(64, 'bipolar', 'Bipolar', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(65, 'bladderproblems', 'Bladder problems', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(66, 'bleedingproblems', 'Bleeding problems', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(67, 'cancer', 'Cancer', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(68, 'carpalTunnel', 'Carpal Tunnel', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(69, 'copd', 'COPD', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(70, 'crohnsDisease', 'Crohns Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(71, 'dementia', 'Dementia', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(72, 'depression', 'Depression', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(73, 'diabetes', 'Diabetes', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(74, 'diverticulitis', 'Diverticulitis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(75, 'dvt', 'DVT (Blood Clot)', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(76, 'eczema', 'Eczema', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(77, 'emphysema', 'Emphysema', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(78, 'gallstones', 'Gallstones', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(79, 'gerd', 'GERD (acid retlux)', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(80, 'glaucoma', 'Glaucoma', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(81, 'headaches', 'Headaches', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(82, 'heartDisease', 'Heart Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(83, 'heartAttack', 'Heart Attack', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(84, 'hiatalHernia', 'Hiatal Hernia', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(85, 'highBloodPressure', 'High Blood Pressure', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(86, 'highColesterol', 'High Colesterol', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(87, 'hiv', 'HIV', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(88, 'hepatitis', 'Hepatitis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(89, 'irritableBowelSyndrome', 'Irritable Bowel Syndrome', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(90, 'kidneyStones', 'Kidney Stones', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(91, 'kidneyDisease', 'kidney Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(92, 'lupus', 'Lupus', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(93, 'liverDisease', 'Liver Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(94, 'muscularDegeneration', 'Muscular Degeneration', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(95, 'migraines', 'Migraines', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(96, 'nosebleeds', 'Nosebleeds', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(97, 'neuropathy', 'Neuropathy', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(98, 'osteopenia', 'Osteopenia/Osteoporosis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(99, 'parkinsonsDisease', 'Parkinsons Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(100, 'peripheralVascularDisease', 'Peripheral Vascular Disease', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(101, 'eptic Ulcer', 'eptic Ulcer', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(102, 'psoriasis', 'Psoriasis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(103, 'pulmonaryEmbolism', 'Pulmonary Embolism', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(104, 'rheumatoidArthritis', 'Rheumatoid Arthritis', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(105, 'sciatica', 'Sciatica', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(106, 'seizure Disorder', 'Seizure Disorder', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(107, 'sleepApnea', 'Sleep Apnea', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(108, 'stroke', 'Stroke', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(109, 'thyroidDisorder', 'Thyroid Disorder', '2020-10-09 13:00:13', '2020-10-09 13:00:13'),
(110, 'ulcerativeColitis', 'Ulcerative Colitis', '2020-10-09 13:00:13', '2020-10-09 13:00:13');

-- --------------------------------------------------------

--
-- Table structure for table `ProviderTypes`
--

CREATE TABLE `ProviderTypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ProviderTypes`
--

INSERT INTO `ProviderTypes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Family physician', '2020-11-07 19:24:09', '2020-11-07 19:24:09'),
(2, 'Nurse practitioner', '2020-11-07 19:24:09', '2020-11-07 19:24:09'),
(3, 'Internal medicine physician', '2020-11-07 19:24:09', '2020-11-07 19:24:09');

-- --------------------------------------------------------

--
-- Table structure for table `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `permissions` mediumtext,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Roles`
--

INSERT INTO `Roles` (`id`, `name`, `permissions`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '1', '2020-10-09 22:14:08', '2020-10-09 22:14:08'),
(2, 'provider', '1', '2020-10-09 22:18:10', '2020-10-09 22:18:10'),
(3, 'patient', '1', '2020-10-09 22:18:29', '2020-10-09 22:18:29');

-- --------------------------------------------------------

--
-- Table structure for table `Services`
--

CREATE TABLE `Services` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Services`
--

INSERT INTO `Services` (`id`, `code`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'OD', 'On Demand', '2020-10-14 11:39:16', '2020-10-14 11:39:16'),
(2, 'CH', 'ConciergeHealthCarePackage', '2020-10-14 11:39:16', '2020-10-14 11:39:16');

-- --------------------------------------------------------

--
-- Table structure for table `Specalists`
--

CREATE TABLE `Specalists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Specalists`
--

INSERT INTO `Specalists` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Allergist (immunologist)', '2020-10-09 14:47:40', '2020-10-09 14:47:40'),
(2, 'Cardiologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(3, 'Cardiovascular Surgeon', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(4, 'Critical care medicine specialist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(5, 'Dermatologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(6, 'Endocrinologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(7, 'Gastroenterologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(8, 'Gynocologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(9, 'Hematologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(10, 'Medical geneticist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(11, 'Neurologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(12, 'Obstetrician', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(13, 'Oncologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(14, 'Oral Surgeon', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(15, 'Pathologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(16, 'Plastic surgeon', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(17, 'Psychiatrist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(18, 'Pulmonologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(19, 'Radiologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(20, 'Sleep disorders specialist', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(21, 'Surgeon', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(22, 'Thoracic surgeon', '2020-10-09 14:48:01', '2020-10-09 14:48:01'),
(23, 'Urologist', '2020-10-09 14:48:01', '2020-10-09 14:48:01');

-- --------------------------------------------------------

--
-- Table structure for table `Specialities`
--

CREATE TABLE `Specialities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `States`
--

CREATE TABLE `States` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `States`
--

INSERT INTO `States` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Alabama', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(2, 'Alaska', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(3, 'American Samoa', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(4, 'Arizona', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(5, 'Arkansas', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(6, 'California', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(7, 'Colorado', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(8, 'Connecticut', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(9, 'Delaware', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(10, 'District of Columbia', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(11, 'Federated States of Micronesia', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(12, 'Florida', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(13, 'Georgia', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(14, 'Guam', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(15, 'Hawaii', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(16, 'Idaho', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(17, 'Illinois', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(18, 'Indiana', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(19, 'Iowa', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(20, 'Kansas', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(21, 'Kentucky', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(22, 'Louisiana', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(23, 'Maine', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(24, 'Marshall Islands', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(25, 'Maryland', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(26, 'Massachusetts', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(27, 'Michigan', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(28, 'Minnesota', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(29, 'Mississippi', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(30, 'Missouri', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(31, 'Montana', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(32, 'Nebraska', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(33, 'Nevada', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(34, 'New Hampshire', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(35, 'New Jersey', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(36, 'New Mexico', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(37, 'New York', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(38, 'North Carolina', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(39, 'North Dakota', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(40, 'Northern Mariana Islands', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(41, 'Ohio', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(42, 'Oklahoma', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(43, 'Oregon', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(44, 'Palau', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(45, 'Pennsylvania', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(46, 'Puerto Rico', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(47, 'Rhode Island', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(48, 'South Carolina', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(49, 'South Dakota', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(50, 'Tennessee', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(51, 'Texas', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(52, 'Utah', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(53, 'Vermont', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(54, 'Virgin Islands', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(55, 'Virginia', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(56, 'Washington', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(57, 'West Virginia', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(58, 'Wisconsin', '2020-11-10 04:27:35', '2020-11-10 04:27:35'),
(59, 'Wyoming', '2020-11-10 04:27:35', '2020-11-10 04:27:35');

-- --------------------------------------------------------

--
-- Table structure for table `Subscriptions`
--

CREATE TABLE `Subscriptions` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Subscriptions`
--

INSERT INTO `Subscriptions` (`id`, `code`, `name`, `price`, `type`, `createdAt`, `updatedAt`) VALUES
(1, 'OD', 'On Demand', 75, 'Per visit', '2020-10-10 10:17:47', '2020-11-21 03:18:11'),
(2, 'CH', 'Concierge HealthCare Package', 150, 'Per Month / Paid Annually', '2020-10-10 10:17:47', '2020-10-10 10:17:47'),
(3, 'SO', 'Second Opinion', 500, 'Per visit', '2020-11-13 10:06:54', '2020-11-20 10:06:54');

-- --------------------------------------------------------

--
-- Table structure for table `Symptoms`
--

CREATE TABLE `Symptoms` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Symptoms`
--

INSERT INTO `Symptoms` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Anorexia', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(2, 'Apnea', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(3, 'Bleeding', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(4, 'Bloating', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(5, 'Blurred vision', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(6, 'Bruising', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(7, 'Constipation', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(8, 'Convulsions', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(9, 'Coughing', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(10, 'Chills and shivering', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(11, 'Diarrhea', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(12, 'Dizziness, vertigo', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(13, 'Discharge', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(14, 'Depression', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(15, 'Fatigue', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(16, 'Hallucination', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(17, 'Headache', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(18, 'Insomnia', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(19, 'Itching', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(20, 'Loss of appetite', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(21, 'Muscle cramps', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(22, 'Muscle weakness', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(23, 'Nausea', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(24, 'Palpitation', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(25, 'Pain, abdominal', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(26, 'Pain, chest', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(27, 'Swelling', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(28, 'Sweats', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(29, 'Rash', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(30, 'Tremor', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(31, 'Urinary frequency', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(32, 'Urinary incontinence', '2020-10-09 14:36:18', '2020-10-09 14:36:18'),
(33, 'Vomiting', '2020-10-09 14:36:18', '2020-10-09 14:36:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Countries`
--
ALTER TABLE `Countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `GeneralSettings`
--
ALTER TABLE `GeneralSettings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Languages`
--
ALTER TABLE `Languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `MedicalProblems`
--
ALTER TABLE `MedicalProblems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ProviderTypes`
--
ALTER TABLE `ProviderTypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Services`
--
ALTER TABLE `Services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Specalists`
--
ALTER TABLE `Specalists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Specialities`
--
ALTER TABLE `Specialities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `States`
--
ALTER TABLE `States`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Subscriptions`
--
ALTER TABLE `Subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Symptoms`
--
ALTER TABLE `Symptoms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Countries`
--
ALTER TABLE `Countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `GeneralSettings`
--
ALTER TABLE `GeneralSettings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Languages`
--
ALTER TABLE `Languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `MedicalProblems`
--
ALTER TABLE `MedicalProblems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `ProviderTypes`
--
ALTER TABLE `ProviderTypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Services`
--
ALTER TABLE `Services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Specalists`
--
ALTER TABLE `Specalists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `Specialities`
--
ALTER TABLE `Specialities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `States`
--
ALTER TABLE `States`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `Subscriptions`
--
ALTER TABLE `Subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Symptoms`
--
ALTER TABLE `Symptoms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
