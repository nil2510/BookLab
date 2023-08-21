-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2023 at 08:50 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newlib`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `book_id` int(8) NOT NULL,
  `book_name` varchar(32) NOT NULL,
  `author` varchar(32) NOT NULL,
  `lib_id` int(8) NOT NULL,
  `lib_name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`book_id`, `book_name`, `author`, `lib_id`, `lib_name`) VALUES
(1, 'Clean Code', 'Robert C. Martin', 201, 'Central Library'),
(2, 'Introduction to Algorithms', 'Thomas H. Cormen', 202, 'City Library'),
(3, 'Design Patterns: Elements of Reu', 'Erich Gamma', 203, 'South Library'),
(4, 'The Pragmatic Programmer', 'Andrew Hunt', 204, 'North Library'),
(5, 'Cracking the Coding Interview', 'Gayle Laakmann McDowell', 201, 'Central Library'),
(6, 'Programming Fundamentals', 'Jessica Williams', 201, 'Central Library'),
(7, 'Introduction to Web Development', 'Michael Clark', 202, 'City Library'),
(8, 'The C Programming Language', 'Brian W. Kernighan', 204, 'North Library'),
(9, 'Head First Java', 'Kathy Sierra', 201, 'Central Library'),
(10, 'Clean Architecture', 'Robert C. Martin', 202, 'City Library'),
(11, 'Deep Learning', 'Ian Goodfellow', 203, 'South Library'),
(12, 'Eloquent JavaScript', 'Marijn Haverbeke', 204, 'North Library'),
(13, 'Learning SQL', 'Alan Beaulieu', 201, 'Central Library'),
(14, 'Operating System Concepts', 'Abraham Silberschatz', 202, 'City Library'),
(15, 'Introduction to Computer Graphic', 'James D. Foley', 203, 'South Library'),
(16, 'Computer Networks', 'Andrew S. Tanenbaum', 204, 'North Library'),
(17, 'Advanced Python Programming', 'John Smith', 201, 'Central Library'),
(18, 'Java Masterclass', 'Emily Johnson', 202, 'City Library'),
(19, 'Web Development Basics', 'Michael Brown', 203, 'South Library'),
(20, 'C++ Programming Essentials', 'Jennifer Lee', 204, 'North Library'),
(21, 'Ruby for Beginners', 'David White', 201, 'Central Library'),
(22, 'Machine Learning Fundamentals', 'Sophia Turner', 202, 'City Library'),
(23, 'Data Structures in C#', 'Matthew Davis', 203, 'South Library'),
(24, 'Android App Development', 'Olivia Miller', 204, 'North Library'),
(25, 'JavaScript: Beyond the Basics', 'Daniel Johnson', 201, 'Central Library'),
(26, 'Python Data Analysis', 'Emma Taylor', 202, 'City Library'),
(27, 'Object-Oriented Programming in J', 'James Anderson', 203, 'South Library'),
(28, 'Web Design Principles', 'Ava Brown', 204, 'North Library'),
(29, 'SQL Database Management', 'William Smith', 201, 'Central Library'),
(30, 'Networking Essentials', 'Sophia Turner', 202, 'City Library'),
(31, 'Front-End Web Development', 'Ethan Clark', 203, 'South Library'),
(32, 'C# Game Development', 'Oliver Williams', 204, 'North Library');

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `id` int(8) NOT NULL,
  `mail` varchar(32) NOT NULL,
  `name` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`id`, `mail`, `name`, `password`) VALUES
(201, 'central@gmail.com', 'Central Library', 'centralpass'),
(202, 'city@gmail.com', 'City Library', 'citypass'),
(203, 'south@gmail.com', 'South Library', 'southpass'),
(204, 'north@gmail.com', 'North Library', 'northpass');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
