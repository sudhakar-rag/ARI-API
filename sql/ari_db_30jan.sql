-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2021 at 04:18 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

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
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `zip` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `name`, `phone`, `address1`, `address2`, `city`, `state`, `country`, `zip`, `createdAt`, `updatedAt`) VALUES
(1, 'Patient1', '12345678901', 'add1', 'sfsadas', 'CA', 'California', '1', '10001', '2021-01-30 15:08:49', '2021-01-30 15:08:49'),
(2, 'John', '1122334455', '', '', '', '', '1', '', '2021-01-30 15:12:16', '2021-01-30 15:13:23');

-- --------------------------------------------------------

--
-- Table structure for table `appointmentdetails`
--

CREATE TABLE `appointmentdetails` (
  `id` int(11) NOT NULL,
  `appointmentId` int(11) DEFAULT NULL,
  `appointmentType` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` mediumtext DEFAULT NULL,
  `files` mediumtext DEFAULT NULL,
  `session` mediumtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointmentdetails`
--

INSERT INTO `appointmentdetails` (`id`, `appointmentId`, `appointmentType`, `subject`, `message`, `files`, `session`, `createdAt`, `updatedAt`) VALUES
(1, 1, '', '', '', '', NULL, '2021-01-30 15:17:05', '2021-01-30 15:17:05');

-- --------------------------------------------------------

--
-- Table structure for table `appointmentpayments`
--

CREATE TABLE `appointmentpayments` (
  `appointmentId` int(11) NOT NULL,
  `paymentId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `patientId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `start` varchar(255) DEFAULT NULL,
  `end` varchar(255) DEFAULT NULL,
  `type` enum('I','G') DEFAULT NULL,
  `isRefundRequested` tinyint(1) DEFAULT NULL,
  `meetingId` varchar(255) DEFAULT NULL,
  `joinUrl` mediumtext DEFAULT NULL,
  `startUrl` mediumtext DEFAULT NULL,
  `status` enum('PENDING','ACCEPTED','COMPLETED','CANCELLED','REFUNDED') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `providerId`, `patientId`, `date`, `start`, `end`, `type`, `isRefundRequested`, `meetingId`, `joinUrl`, `startUrl`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-01-30', '20:46', '21:16', 'I', NULL, '79005854360', 'https://us04web.zoom.us/j/79005854360?pwd=dG0zNHlPbnpUNmxqNFhZNlRLZUNkUT09', 'https://us04web.zoom.us/s/79005854360?zak=eyJ6bV9za20iOiJ6bV9vMm0iLCJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjbGllbnQiLCJ1aWQiOiJqWUQ1a1RRWFJ4eWdjZ3F3R1l3eWJRIiwiaXNzIjoid2ViIiwic3R5IjoxMDAsIndjZCI6InVzMDQiLCJjbHQiOjAsInN0ayI6IkNRN0hqb3M1SXc2X3pyU0ZOdlNhb3BfYm01V3MzWHJMcGM1TFJTRm9DOU0uQmdZZ1VVYzNiRTFGVDJkclpIWkRLMHQ1VUZGblJtbHdiek00VEU1V1ZIbFlaMmxBTXpGaU0yWmtaVFV5TkRnNU9HSXhPRFl4WlRoa05XRTJPRGxpTldJNVpqZzFNekl5WkRrelltTmxOemMwTjJFMVpESmtPV0U1WWpKbFlXRm1aVEU0WmdBTU0wTkNRWFZ2YVZsVE0zTTlBQVIxY3pBMEFBQUJkMVBlZlNzQUVuVUFBQUEiLCJleHAiOjE2MTIwMjcwMjUsImlhdCI6MTYxMjAxOTgyNSwiYWlkIjoiQ0VpUHBSSHFTR2lYcHlDOVNFVkJIQSIsImNpZCI6IiJ9.EH0pTbQOUlJ4C4LbywR7SeaYH1ICy_rkKgIEoY2wRlU', 'PENDING', '2021-01-30 15:17:05', '2021-01-30 15:17:05');

-- --------------------------------------------------------

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
  `id` int(11) NOT NULL,
  `appointmentId` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `fileName` varchar(255) DEFAULT NULL,
  `fileUrl` varchar(255) DEFAULT NULL,
  `uploadedBy` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `callnotifications`
--

CREATE TABLE `callnotifications` (
  `id` int(11) NOT NULL,
  `appointmentId` int(11) DEFAULT NULL,
  `description` mediumtext DEFAULT NULL,
  `status` enum('PENDING','ACCEPTED','COMPLETED','CANCELLED') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'USA', '2020-11-10 09:58:08', '2020-11-10 09:58:08');

-- --------------------------------------------------------

--
-- Table structure for table `generalsettings`
--

CREATE TABLE `generalsettings` (
  `id` int(11) NOT NULL,
  `label` varchar(255) DEFAULT NULL,
  `value` tinytext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Arabic ', '2020-10-10 21:27:02', '2020-10-10 21:27:02'),
(2, 'Bengali', '2020-10-10 21:27:02', '2020-10-10 21:27:02'),
(3, 'Chinese (Cantonese)', '2020-10-10 21:27:45', '2020-10-10 21:27:45'),
(4, 'Chinese (Mandarin)', '2020-10-10 21:27:45', '2020-10-10 21:27:45');

-- --------------------------------------------------------

--
-- Table structure for table `medicalproblems`
--

CREATE TABLE `medicalproblems` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `medicalproblems`
--

INSERT INTO `medicalproblems` (`id`, `key`, `value`, `createdAt`, `updatedAt`) VALUES
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
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `appointmentId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `message` mediumtext DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `appointmentId`, `userId`, `message`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 3, 'You have OnDemand eVisit call with <b>Patient1 p</b>.', 0, '2021-01-30 15:17:08', '2021-01-30 15:17:08');

-- --------------------------------------------------------

--
-- Table structure for table `patientaddresses`
--

CREATE TABLE `patientaddresses` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `addressId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patientaddresses`
--

INSERT INTO `patientaddresses` (`id`, `patientId`, `type`, `createdAt`, `updatedAt`, `addressId`) VALUES
(1, 1, NULL, '2021-01-30 15:08:49', '2021-01-30 15:08:49', 1);

-- --------------------------------------------------------

--
-- Table structure for table `patientmedicalproblems`
--

CREATE TABLE `patientmedicalproblems` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `MedicalProblemId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patientmedicalproblems`
--

INSERT INTO `patientmedicalproblems` (`id`, `patientId`, `MedicalProblemId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 7, '2021-01-30 15:08:50', '2021-01-30 15:08:50'),
(2, 1, 99, '2021-01-30 15:08:50', '2021-01-30 15:08:50');

-- --------------------------------------------------------

--
-- Table structure for table `patientprovidertypes`
--

CREATE TABLE `patientprovidertypes` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `providerTypeId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `dateOfBirth` varchar(255) DEFAULT NULL,
  `ethnicity` varchar(255) DEFAULT NULL,
  `gender` enum('M','F','T') DEFAULT NULL,
  `subscriptionId` int(11) DEFAULT NULL,
  `otherMedicalProblems` mediumtext DEFAULT NULL,
  `otherSymptoms` mediumtext DEFAULT NULL,
  `otherSpecialist` mediumtext DEFAULT NULL,
  `medications` mediumtext DEFAULT NULL,
  `vitamins` mediumtext DEFAULT NULL,
  `restrictions` mediumtext DEFAULT NULL,
  `allergies` mediumtext DEFAULT NULL,
  `socialHistory` mediumtext DEFAULT NULL,
  `surgeryHistory` mediumtext DEFAULT NULL,
  `familyHistory` mediumtext DEFAULT NULL,
  `vaccinationHistory` mediumtext DEFAULT NULL,
  `travelHistory` mediumtext DEFAULT NULL,
  `hospitalizationHistory` mediumtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patients`
--

INSERT INTO `patients` (`id`, `userId`, `dateOfBirth`, `ethnicity`, `gender`, `subscriptionId`, `otherMedicalProblems`, `otherSymptoms`, `otherSpecialist`, `medications`, `vitamins`, `restrictions`, `allergies`, `socialHistory`, `surgeryHistory`, `familyHistory`, `vaccinationHistory`, `travelHistory`, `hospitalizationHistory`, `createdAt`, `updatedAt`) VALUES
(1, 2, '1998-10-19T18:30:00.000Z', 'American Indian', 'M', 1, '', '', '', '', '', '', '', '{\"recreationalDrugUse\":null,\"smoking\":null,\"packsPerDay\":null,\"alcohol\":null,\"drinksPerDay\":null}', '', '{\"fatherDob\":null,\"fatherDod\":null,\"fatherMedProblems\":[],\"motherDob\":null,\"motherDod\":null,\"motherMedProblems\":[]}', '', '', '', '2021-01-30 15:08:49', '2021-01-30 15:08:49');

-- --------------------------------------------------------

--
-- Table structure for table `patientspecalists`
--

CREATE TABLE `patientspecalists` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `specalistId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `patientsubscriptions`
--

CREATE TABLE `patientsubscriptions` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `subscriptionId` int(11) DEFAULT NULL,
  `lastSubscriptionAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patientsubscriptions`
--

INSERT INTO `patientsubscriptions` (`id`, `patientId`, `subscriptionId`, `lastSubscriptionAt`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-01-30 15:08:49', '2021-01-30 15:08:49', '2021-01-30 15:08:49');

-- --------------------------------------------------------

--
-- Table structure for table `patientsymptoms`
--

CREATE TABLE `patientsymptoms` (
  `id` int(11) NOT NULL,
  `patientId` int(11) DEFAULT NULL,
  `symptomId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `type` enum('S','P') DEFAULT NULL,
  `paymentType` enum('S','A') DEFAULT NULL,
  `appointmentId` int(11) DEFAULT NULL,
  `subscriptionId` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `txnId` mediumtext DEFAULT NULL,
  `status` enum('APPROVED','PENDING','CANCELLED','REFUNDED') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `userId`, `type`, `paymentType`, `appointmentId`, `subscriptionId`, `amount`, `txnId`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'S', 'A', 1, NULL, '75.00', 'ch_1IFLC7Lp2j6xvwlPOAzSLdbM', 'APPROVED', '2021-01-30 15:17:03', '2021-01-30 15:17:09');

-- --------------------------------------------------------

--
-- Table structure for table `provideraddresses`
--

CREATE TABLE `provideraddresses` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `addressId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `provideraddresses`
--

INSERT INTO `provideraddresses` (`id`, `providerId`, `type`, `createdAt`, `updatedAt`, `addressId`) VALUES
(1, 1, NULL, '2021-01-30 15:12:16', '2021-01-30 15:12:16', 2);

-- --------------------------------------------------------

--
-- Table structure for table `provideraffilations`
--

CREATE TABLE `provideraffilations` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `provideravailabilities`
--

CREATE TABLE `provideravailabilities` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `type` enum('DAY','DATE') DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `provideravailabilityslots`
--

CREATE TABLE `provideravailabilityslots` (
  `id` int(11) NOT NULL,
  `providerAvailabilityId` int(11) DEFAULT NULL,
  `startTime` varchar(255) DEFAULT NULL,
  `endTime` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `providereducations`
--

CREATE TABLE `providereducations` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `school` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `fromYear` int(11) DEFAULT NULL,
  `toYear` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `providerexceptionaldays`
--

CREATE TABLE `providerexceptionaldays` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `providerhistories`
--

CREATE TABLE `providerhistories` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `religoiusAffiliations` mediumtext DEFAULT NULL,
  `specialBackground` mediumtext DEFAULT NULL,
  `limitations` mediumtext DEFAULT NULL,
  `drugAddiction` mediumtext DEFAULT NULL,
  `crimianalRecord` mediumtext DEFAULT NULL,
  `malpractice` mediumtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `providerhistories`
--

INSERT INTO `providerhistories` (`id`, `providerId`, `religoiusAffiliations`, `specialBackground`, `limitations`, `drugAddiction`, `crimianalRecord`, `malpractice`, `createdAt`, `updatedAt`) VALUES
(1, 1, '', '', '', '', '', '', '2021-01-30 15:12:16', '2021-01-30 15:12:16');

-- --------------------------------------------------------

--
-- Table structure for table `providerhospitals`
--

CREATE TABLE `providerhospitals` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `hospital` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `fromYear` int(11) DEFAULT NULL,
  `toYear` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `providerlanguages`
--

CREATE TABLE `providerlanguages` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `langId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `providerreferences`
--

CREATE TABLE `providerreferences` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `hospital` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `providerregistrations`
--

CREATE TABLE `providerregistrations` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `providerCredential` enum('MD','DO') DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `gender` enum('M','F','T') DEFAULT NULL,
  `yearsInPractice` varchar(255) DEFAULT NULL,
  `boardCertifiedSpecialty` varchar(255) DEFAULT NULL,
  `statesOfLicensure` varchar(255) DEFAULT NULL,
  `howLearnAboutTeladocHealth` varchar(255) DEFAULT NULL,
  `otherTeladocHealth` varchar(255) DEFAULT NULL,
  `currentlyEnrolledIn` varchar(255) DEFAULT NULL,
  `verified` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `providerregistrations`
--

INSERT INTO `providerregistrations` (`id`, `title`, `providerCredential`, `firstName`, `lastName`, `email`, `phone`, `gender`, `yearsInPractice`, `boardCertifiedSpecialty`, `statesOfLicensure`, `howLearnAboutTeladocHealth`, `otherTeladocHealth`, `currentlyEnrolledIn`, `verified`, `createdAt`, `updatedAt`) VALUES
(1, 'Dr', 'MD', 'John', 'Peter', 'john@ari.com', '1122334455', 'M', '7', 'test', 'Alabama,Alaska', 'Health Plan Referral', '', 'Medicare', 1, '2021-01-30 15:06:27', '2021-01-30 15:12:16');

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `dateOfBirth` varchar(255) DEFAULT NULL,
  `ethnicity` varchar(255) DEFAULT NULL,
  `gender` enum('M','F','T') DEFAULT NULL,
  `areaOfInterest` varchar(255) DEFAULT NULL,
  `speciality` varchar(255) DEFAULT NULL,
  `hasDrugAddiction` tinyint(1) DEFAULT NULL,
  `hasCriminalRecord` tinyint(1) DEFAULT NULL,
  `hasMalpractice` tinyint(1) DEFAULT NULL,
  `isAvailable` tinyint(1) DEFAULT NULL,
  `isVerified` tinyint(1) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `otherLang` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `providers`
--

INSERT INTO `providers` (`id`, `userId`, `dateOfBirth`, `ethnicity`, `gender`, `areaOfInterest`, `speciality`, `hasDrugAddiction`, `hasCriminalRecord`, `hasMalpractice`, `isAvailable`, `isVerified`, `rating`, `otherLang`, `createdAt`, `updatedAt`) VALUES
(1, 3, '', '', 'M', '', '', 0, 0, 0, 1, 1, NULL, '', '2021-01-30 15:12:16', '2021-01-30 15:13:24');

-- --------------------------------------------------------

--
-- Table structure for table `providerservices`
--

CREATE TABLE `providerservices` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `serviceId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `providerservices`
--

INSERT INTO `providerservices` (`id`, `providerId`, `serviceId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '2021-01-30 15:13:23', '2021-01-30 15:13:23'),
(2, 1, 2, '2021-01-30 15:13:23', '2021-01-30 15:13:23');

-- --------------------------------------------------------

--
-- Table structure for table `providersettings`
--

CREATE TABLE `providersettings` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `providerspecalities`
--

CREATE TABLE `providerspecalities` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `specalityId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `providerspecalities`
--

INSERT INTO `providerspecalities` (`id`, `providerId`, `specalityId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, '2021-01-30 15:13:23', '2021-01-30 15:13:23'),
(2, 1, 9, '2021-01-30 15:13:23', '2021-01-30 15:13:23');

-- --------------------------------------------------------

--
-- Table structure for table `providertypes`
--

CREATE TABLE `providertypes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `providertypes`
--

INSERT INTO `providertypes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Family physician', '2020-11-07 19:24:09', '2020-11-07 19:24:09'),
(2, 'Nurse practitioner', '2020-11-07 19:24:09', '2020-11-07 19:24:09'),
(3, 'Internal medicine physician', '2020-11-07 19:24:09', '2020-11-07 19:24:09');

-- --------------------------------------------------------

--
-- Table structure for table `ratinghistories`
--

CREATE TABLE `ratinghistories` (
  `id` int(11) NOT NULL,
  `providerId` int(11) DEFAULT NULL,
  `patientId` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `review` mediumtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `permissions` mediumtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `permissions`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '1', '2020-10-09 22:14:08', '2020-10-09 22:14:08'),
(2, 'provider', '1', '2020-10-09 22:18:10', '2020-10-09 22:18:10'),
(3, 'patient', '1', '2020-10-09 22:18:29', '2020-10-09 22:18:29');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `code`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'OD', 'On Demand', '2020-10-14 11:39:16', '2020-10-14 11:39:16'),
(2, 'CH', 'ConciergeHealthCarePackage', '2020-10-14 11:39:16', '2020-10-14 11:39:16');

-- --------------------------------------------------------

--
-- Table structure for table `specalists`
--

CREATE TABLE `specalists` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `specalists`
--

INSERT INTO `specalists` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
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
-- Table structure for table `specialities`
--

CREATE TABLE `specialities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
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
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `code`, `name`, `type`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'OD', 'On Demand', 'Per visit', 75, '2020-10-10 10:17:47', '2020-11-21 03:18:11'),
(2, 'CH', 'Concierge HealthCare Package', 'Per Month / Paid Annually', 150, '2020-10-10 10:17:47', '2020-10-10 10:17:47'),
(3, 'SO', 'Second Opinion', 'Per visit', 500, '2020-11-13 10:06:54', '2020-11-20 10:06:54');

-- --------------------------------------------------------

--
-- Table structure for table `symptoms`
--

CREATE TABLE `symptoms` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `symptoms`
--

INSERT INTO `symptoms` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
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

-- --------------------------------------------------------

--
-- Table structure for table `useraddresses`
--

CREATE TABLE `useraddresses` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `addressId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usercarddetails`
--

CREATE TABLE `usercarddetails` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `cardNo` varchar(255) DEFAULT NULL,
  `expiry` varchar(255) DEFAULT NULL,
  `cvv` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userfcmtokens`
--

CREATE TABLE `userfcmtokens` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `type` enum('D','A','I') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userfcmtokens`
--

INSERT INTO `userfcmtokens` (`id`, `userId`, `token`, `type`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'dxSLI_Ktvk_HBnutQEHPvf:APA91bHQrq55skij3TK-Hxvvc_Qk-Xx0AL1fYqJnhfUGQXizwtkT5XATt-4cm0i_WWrm8UxnZfox79N-QeQNWKueKBTA3bb2ixl60k3Odn1gWMjqnG5Js1eaxR1PlZSxCZosiIu1ca0o', 'D', '2021-01-30 15:09:15', '2021-01-30 15:09:15'),
(2, 1, 'dxSLI_Ktvk_HBnutQEHPvf:APA91bHQrq55skij3TK-Hxvvc_Qk-Xx0AL1fYqJnhfUGQXizwtkT5XATt-4cm0i_WWrm8UxnZfox79N-QeQNWKueKBTA3bb2ixl60k3Odn1gWMjqnG5Js1eaxR1PlZSxCZosiIu1ca0o', 'D', '2021-01-30 15:12:00', '2021-01-30 15:12:00'),
(3, 3, 'dxSLI_Ktvk_HBnutQEHPvf:APA91bHQrq55skij3TK-Hxvvc_Qk-Xx0AL1fYqJnhfUGQXizwtkT5XATt-4cm0i_WWrm8UxnZfox79N-QeQNWKueKBTA3bb2ixl60k3Odn1gWMjqnG5Js1eaxR1PlZSxCZosiIu1ca0o', 'D', '2021-01-30 15:12:53', '2021-01-30 15:12:53');

-- --------------------------------------------------------

--
-- Table structure for table `usergroups`
--

CREATE TABLE `usergroups` (
  `userId` int(11) NOT NULL,
  `groupId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userroles`
--

CREATE TABLE `userroles` (
  `userId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userroles`
--

INSERT INTO `userroles` (`userId`, `roleId`, `createdAt`, `updatedAt`) VALUES
(1, 1, '2021-01-30 20:41:20', '2021-01-30 20:41:20'),
(2, 3, '2021-01-30 15:08:49', '2021-01-30 15:08:49'),
(3, 2, '2021-01-30 15:12:16', '2021-01-30 15:12:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userName`, `email`, `password`, `firstName`, `lastName`, `picture`, `phone`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'admin@ari.com', 'admin@ari.com', '123456', 'Admin', 'ARI', NULL, '121212121212', 1, '2021-01-23 20:32:49', '2021-01-30 20:32:49'),
(2, 'patient1@ari.com', 'patient1@ari.com', '123456', 'Patient1', 'p', '', '12345678901', 1, '2021-01-30 15:08:49', '2021-01-30 15:08:49'),
(3, 'john@ari.com', 'john@ari.com', '123456', 'John', 'Peter', '', '1122334455', 0, '2021-01-30 15:12:16', '2021-01-30 15:13:23');

-- --------------------------------------------------------

--
-- Table structure for table `walletclaims`
--

CREATE TABLE `walletclaims` (
  `id` int(11) NOT NULL,
  `walletId` int(11) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `status` enum('PENDING','COMPLETED','CANCELLED') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `wallethistories`
--

CREATE TABLE `wallethistories` (
  `id` int(11) NOT NULL,
  `walletId` int(11) DEFAULT NULL,
  `openingBalance` decimal(10,2) DEFAULT NULL,
  `credit` decimal(10,2) DEFAULT NULL,
  `debit` decimal(10,2) DEFAULT NULL,
  `closingBalance` decimal(10,2) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallethistories`
--

INSERT INTO `wallethistories` (`id`, `walletId`, `openingBalance`, `credit`, `debit`, `closingBalance`, `note`, `createdAt`, `updatedAt`) VALUES
(1, 1, '0.00', '60.00', '0.00', '60.00', 'Amount from appointment #1', '2021-01-30 15:17:09', '2021-01-30 15:17:09');

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `balance` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `userId`, `balance`, `createdAt`, `updatedAt`) VALUES
(1, 1, '60.00', '2021-01-30 15:17:09', '2021-01-30 15:17:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointmentdetails`
--
ALTER TABLE `appointmentdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointmentId` (`appointmentId`);

--
-- Indexes for table `appointmentpayments`
--
ALTER TABLE `appointmentpayments`
  ADD PRIMARY KEY (`appointmentId`,`paymentId`),
  ADD KEY `paymentId` (`paymentId`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `patientId` (`patientId`);

--
-- Indexes for table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointmentId` (`appointmentId`);

--
-- Indexes for table `callnotifications`
--
ALTER TABLE `callnotifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointmentId` (`appointmentId`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `generalsettings`
--
ALTER TABLE `generalsettings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `medicalproblems`
--
ALTER TABLE `medicalproblems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appointmentId` (`appointmentId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `patientaddresses`
--
ALTER TABLE `patientaddresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`),
  ADD KEY `addressId` (`addressId`);

--
-- Indexes for table `patientmedicalproblems`
--
ALTER TABLE `patientmedicalproblems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`),
  ADD KEY `MedicalProblemId` (`MedicalProblemId`);

--
-- Indexes for table `patientprovidertypes`
--
ALTER TABLE `patientprovidertypes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`),
  ADD KEY `providerTypeId` (`providerTypeId`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `subscriptionId` (`subscriptionId`);

--
-- Indexes for table `patientspecalists`
--
ALTER TABLE `patientspecalists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`),
  ADD KEY `specalistId` (`specalistId`);

--
-- Indexes for table `patientsubscriptions`
--
ALTER TABLE `patientsubscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`),
  ADD KEY `subscriptionId` (`subscriptionId`);

--
-- Indexes for table `patientsymptoms`
--
ALTER TABLE `patientsymptoms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patientId` (`patientId`),
  ADD KEY `symptomId` (`symptomId`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `appointmentId` (`appointmentId`),
  ADD KEY `subscriptionId` (`subscriptionId`);

--
-- Indexes for table `provideraddresses`
--
ALTER TABLE `provideraddresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `addressId` (`addressId`);

--
-- Indexes for table `provideraffilations`
--
ALTER TABLE `provideraffilations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`);

--
-- Indexes for table `provideravailabilities`
--
ALTER TABLE `provideravailabilities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`);

--
-- Indexes for table `provideravailabilityslots`
--
ALTER TABLE `provideravailabilityslots`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerAvailabilityId` (`providerAvailabilityId`);

--
-- Indexes for table `providereducations`
--
ALTER TABLE `providereducations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`);

--
-- Indexes for table `providerexceptionaldays`
--
ALTER TABLE `providerexceptionaldays`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`);

--
-- Indexes for table `providerhistories`
--
ALTER TABLE `providerhistories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`);

--
-- Indexes for table `providerhospitals`
--
ALTER TABLE `providerhospitals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`);

--
-- Indexes for table `providerlanguages`
--
ALTER TABLE `providerlanguages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `langId` (`langId`);

--
-- Indexes for table `providerreferences`
--
ALTER TABLE `providerreferences`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`);

--
-- Indexes for table `providerregistrations`
--
ALTER TABLE `providerregistrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `providerservices`
--
ALTER TABLE `providerservices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `serviceId` (`serviceId`);

--
-- Indexes for table `providersettings`
--
ALTER TABLE `providersettings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`);

--
-- Indexes for table `providerspecalities`
--
ALTER TABLE `providerspecalities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `specalityId` (`specalityId`);

--
-- Indexes for table `providertypes`
--
ALTER TABLE `providertypes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratinghistories`
--
ALTER TABLE `ratinghistories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `providerId` (`providerId`),
  ADD KEY `patientId` (`patientId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specalists`
--
ALTER TABLE `specalists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `specialities`
--
ALTER TABLE `specialities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `symptoms`
--
ALTER TABLE `symptoms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `useraddresses`
--
ALTER TABLE `useraddresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `addressId` (`addressId`);

--
-- Indexes for table `usercarddetails`
--
ALTER TABLE `usercarddetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `userfcmtokens`
--
ALTER TABLE `userfcmtokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `usergroups`
--
ALTER TABLE `usergroups`
  ADD PRIMARY KEY (`userId`,`groupId`),
  ADD KEY `groupId` (`groupId`);

--
-- Indexes for table `userroles`
--
ALTER TABLE `userroles`
  ADD PRIMARY KEY (`userId`,`roleId`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `walletclaims`
--
ALTER TABLE `walletclaims`
  ADD PRIMARY KEY (`id`),
  ADD KEY `walletId` (`walletId`);

--
-- Indexes for table `wallethistories`
--
ALTER TABLE `wallethistories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `walletId` (`walletId`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `appointmentdetails`
--
ALTER TABLE `appointmentdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `callnotifications`
--
ALTER TABLE `callnotifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `generalsettings`
--
ALTER TABLE `generalsettings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `medicalproblems`
--
ALTER TABLE `medicalproblems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patientaddresses`
--
ALTER TABLE `patientaddresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patientmedicalproblems`
--
ALTER TABLE `patientmedicalproblems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patientprovidertypes`
--
ALTER TABLE `patientprovidertypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patientspecalists`
--
ALTER TABLE `patientspecalists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patientsubscriptions`
--
ALTER TABLE `patientsubscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patientsymptoms`
--
ALTER TABLE `patientsymptoms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `provideraddresses`
--
ALTER TABLE `provideraddresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `provideraffilations`
--
ALTER TABLE `provideraffilations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `provideravailabilities`
--
ALTER TABLE `provideravailabilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `provideravailabilityslots`
--
ALTER TABLE `provideravailabilityslots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `providereducations`
--
ALTER TABLE `providereducations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `providerexceptionaldays`
--
ALTER TABLE `providerexceptionaldays`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `providerhistories`
--
ALTER TABLE `providerhistories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `providerhospitals`
--
ALTER TABLE `providerhospitals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `providerlanguages`
--
ALTER TABLE `providerlanguages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `providerreferences`
--
ALTER TABLE `providerreferences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `providerregistrations`
--
ALTER TABLE `providerregistrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `providerservices`
--
ALTER TABLE `providerservices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `providersettings`
--
ALTER TABLE `providersettings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `providerspecalities`
--
ALTER TABLE `providerspecalities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `providertypes`
--
ALTER TABLE `providertypes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ratinghistories`
--
ALTER TABLE `ratinghistories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `specalists`
--
ALTER TABLE `specalists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `specialities`
--
ALTER TABLE `specialities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `symptoms`
--
ALTER TABLE `symptoms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `useraddresses`
--
ALTER TABLE `useraddresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usercarddetails`
--
ALTER TABLE `usercarddetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userfcmtokens`
--
ALTER TABLE `userfcmtokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `walletclaims`
--
ALTER TABLE `walletclaims`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wallethistories`
--
ALTER TABLE `wallethistories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointmentdetails`
--
ALTER TABLE `appointmentdetails`
  ADD CONSTRAINT `appointmentdetails_ibfk_1` FOREIGN KEY (`appointmentId`) REFERENCES `appointments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `appointmentpayments`
--
ALTER TABLE `appointmentpayments`
  ADD CONSTRAINT `appointmentpayments_ibfk_1` FOREIGN KEY (`appointmentId`) REFERENCES `appointments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointmentpayments_ibfk_2` FOREIGN KEY (`paymentId`) REFERENCES `payments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `attachments`
--
ALTER TABLE `attachments`
  ADD CONSTRAINT `attachments_ibfk_1` FOREIGN KEY (`appointmentId`) REFERENCES `appointments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `callnotifications`
--
ALTER TABLE `callnotifications`
  ADD CONSTRAINT `callnotifications_ibfk_1` FOREIGN KEY (`appointmentId`) REFERENCES `appointments` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`appointmentId`) REFERENCES `appointments` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `patientaddresses`
--
ALTER TABLE `patientaddresses`
  ADD CONSTRAINT `patientaddresses_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patientaddresses_ibfk_2` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `patientmedicalproblems`
--
ALTER TABLE `patientmedicalproblems`
  ADD CONSTRAINT `patientmedicalproblems_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patientmedicalproblems_ibfk_2` FOREIGN KEY (`MedicalProblemId`) REFERENCES `medicalproblems` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `patientprovidertypes`
--
ALTER TABLE `patientprovidertypes`
  ADD CONSTRAINT `patientprovidertypes_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patientprovidertypes_ibfk_2` FOREIGN KEY (`providerTypeId`) REFERENCES `providertypes` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `patients`
--
ALTER TABLE `patients`
  ADD CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patients_ibfk_2` FOREIGN KEY (`subscriptionId`) REFERENCES `subscriptions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `patientspecalists`
--
ALTER TABLE `patientspecalists`
  ADD CONSTRAINT `patientspecalists_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patientspecalists_ibfk_2` FOREIGN KEY (`specalistId`) REFERENCES `specalists` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `patientsubscriptions`
--
ALTER TABLE `patientsubscriptions`
  ADD CONSTRAINT `patientsubscriptions_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patientsubscriptions_ibfk_2` FOREIGN KEY (`subscriptionId`) REFERENCES `subscriptions` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `patientsymptoms`
--
ALTER TABLE `patientsymptoms`
  ADD CONSTRAINT `patientsymptoms_ibfk_1` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patientsymptoms_ibfk_2` FOREIGN KEY (`symptomId`) REFERENCES `symptoms` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`appointmentId`) REFERENCES `appointments` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `payments_ibfk_3` FOREIGN KEY (`subscriptionId`) REFERENCES `subscriptions` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `provideraddresses`
--
ALTER TABLE `provideraddresses`
  ADD CONSTRAINT `provideraddresses_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `provideraddresses_ibfk_2` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `provideraffilations`
--
ALTER TABLE `provideraffilations`
  ADD CONSTRAINT `provideraffilations_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `provideravailabilities`
--
ALTER TABLE `provideravailabilities`
  ADD CONSTRAINT `provideravailabilities_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `provideravailabilityslots`
--
ALTER TABLE `provideravailabilityslots`
  ADD CONSTRAINT `provideravailabilityslots_ibfk_1` FOREIGN KEY (`providerAvailabilityId`) REFERENCES `provideravailabilities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `providereducations`
--
ALTER TABLE `providereducations`
  ADD CONSTRAINT `providereducations_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `providerexceptionaldays`
--
ALTER TABLE `providerexceptionaldays`
  ADD CONSTRAINT `providerexceptionaldays_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `providerhistories`
--
ALTER TABLE `providerhistories`
  ADD CONSTRAINT `providerhistories_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `providerhospitals`
--
ALTER TABLE `providerhospitals`
  ADD CONSTRAINT `providerhospitals_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `providerlanguages`
--
ALTER TABLE `providerlanguages`
  ADD CONSTRAINT `providerlanguages_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `providerlanguages_ibfk_2` FOREIGN KEY (`langId`) REFERENCES `languages` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `providerreferences`
--
ALTER TABLE `providerreferences`
  ADD CONSTRAINT `providerreferences_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `providers`
--
ALTER TABLE `providers`
  ADD CONSTRAINT `providers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `providerservices`
--
ALTER TABLE `providerservices`
  ADD CONSTRAINT `providerservices_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `providerservices_ibfk_2` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `providersettings`
--
ALTER TABLE `providersettings`
  ADD CONSTRAINT `providersettings_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `providerspecalities`
--
ALTER TABLE `providerspecalities`
  ADD CONSTRAINT `providerspecalities_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `providerspecalities_ibfk_2` FOREIGN KEY (`specalityId`) REFERENCES `specalists` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `ratinghistories`
--
ALTER TABLE `ratinghistories`
  ADD CONSTRAINT `ratinghistories_ibfk_1` FOREIGN KEY (`providerId`) REFERENCES `providers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ratinghistories_ibfk_2` FOREIGN KEY (`patientId`) REFERENCES `patients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `useraddresses`
--
ALTER TABLE `useraddresses`
  ADD CONSTRAINT `useraddresses_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `useraddresses_ibfk_2` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `usercarddetails`
--
ALTER TABLE `usercarddetails`
  ADD CONSTRAINT `usercarddetails_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userfcmtokens`
--
ALTER TABLE `userfcmtokens`
  ADD CONSTRAINT `userfcmtokens_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `usergroups`
--
ALTER TABLE `usergroups`
  ADD CONSTRAINT `usergroups_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usergroups_ibfk_2` FOREIGN KEY (`groupId`) REFERENCES `groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userroles`
--
ALTER TABLE `userroles`
  ADD CONSTRAINT `userroles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `userroles_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `walletclaims`
--
ALTER TABLE `walletclaims`
  ADD CONSTRAINT `walletclaims_ibfk_1` FOREIGN KEY (`walletId`) REFERENCES `wallets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wallethistories`
--
ALTER TABLE `wallethistories`
  ADD CONSTRAINT `wallethistories_ibfk_1` FOREIGN KEY (`walletId`) REFERENCES `wallets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wallets`
--
ALTER TABLE `wallets`
  ADD CONSTRAINT `wallets_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
