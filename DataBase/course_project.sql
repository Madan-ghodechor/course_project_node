-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2023 at 01:59 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `course_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_email` varchar(200) DEFAULT NULL,
  `admin_mobile` varchar(15) DEFAULT NULL,
  `admin_password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_email`, `admin_mobile`, `admin_password`) VALUES
(1, 'madana2zinfotech@gmail.com', '9309804106', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

CREATE TABLE `categorys` (
  `cat_id` int(11) NOT NULL,
  `cat_name` text DEFAULT NULL,
  `cat_details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`cat_id`, `cat_name`, `cat_details`) VALUES
(1, 'Front End Development', 'Using HTML in the classroom can be a valuable educational tool, especially for teaching web development, programming basics, and digital literacy. HTML (Hypertext Markup Language) is the standard language used to create and structure content on the web. Here are some ways you can incorporate HTML into the classroom:\r\n\r\nIntroduction to Web Development: HTML is the foundation of web development. Start with teaching students the basics of HTML syntax, elements, and attributes. Show them how to create a simple webpage with headings, paragraphs, lists, and links.\r\n\r\nHands-on Coding: Provide students with hands-on coding exercises. This can help them understand HTML better by practicing what they\'ve learned. Encourage them to create their own web pages using the concepts they\'ve grasped.'),
(2, 'Back End Development ', 'Using HTML in the classroom can be a valuable educational tool, especially for teaching web development, programming basics, and digital literacy. HTML (Hypertext Markup Language) is the standard language used to create and structure content on the web. Here are some ways you can incorporate HTML into the classroom:\r\n\r\nIntroduction to Web Development: HTML is the foundation of web development. Start with teaching students the basics of HTML syntax, elements, and attributes. Show them how to create a simple webpage with headings, paragraphs, lists, and links.\r\n\r\nHands-on Coding: Provide students with hands-on coding exercises. This can help them understand HTML better by practicing what they\'ve learned. Encourage them to create their own web pages using the concepts they\'ve grasped.\r\n'),
(3, 'Web Designing ', 'Using HTML in the classroom can be a valuable educational tool, especially for teaching web development, programming basics, and digital literacy. HTML (Hypertext Markup Language) is the standard language used to create and structure content on the web. Here are some ways you can incorporate HTML into the classroom:\r\n\r\nIntroduction to Web Development: HTML is the foundation of web development. Start with teaching students the basics of HTML syntax, elements, and attributes. Show them how to create a simple webpage with headings, paragraphs, lists, and links.\r\n\r\nHands-on Coding: Provide students with hands-on coding exercises. This can help them understand HTML better by practicing what they\'ve learned. Encourage them to create their own web pages using the concepts they\'ve grasped.');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `course_name` text DEFAULT NULL,
  `course_category` text DEFAULT NULL,
  `course_duration` text DEFAULT NULL,
  `course_price` text DEFAULT NULL,
  `course_image` text DEFAULT NULL,
  `course_video` text DEFAULT NULL,
  `course_mentor` text DEFAULT NULL,
  `course_link` text DEFAULT NULL,
  `course_platform` text DEFAULT NULL,
  `course_details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `course_category`, `course_duration`, `course_price`, `course_image`, `course_video`, `course_mentor`, `course_link`, `course_platform`, `course_details`) VALUES
(1, 'HTML IN CLASSROOM', '1', '20 days', '500', '1693415002732product-5-720x480.jpg', '1693414976839WhatsApp Video 2023-07-17 at 2.01.05 PM.mp4', 'NILESH SIR', 'https://www.google.com/', 'Online Live', 'Using HTML in the classroom can be a valuable educational tool, especially for teaching web development, programming basics, and digital literacy. HTML (Hypertext Markup Language) is the standard language used to create and structure content on the web. Here are some ways you can incorporate HTML into the classroom:\r\n\r\nIntroduction to Web Development: HTML is the foundation of web development. Start with teaching students the basics of HTML syntax, elements, and attributes. Show them how to create a simple webpage with headings, paragraphs, lists, and links.\r\n\r\nHands-on Coding: Provide students with hands-on coding exercises. This can help them understand HTML better by practicing what they\'ve learned. Encourage them to create their own web pages using the concepts they\'ve grasped.\r\n\r\nInteractive Elements: Teach students about interactive HTML elements, such as forms and input fields. This can be a great opportunity to discuss user input, data collection, and basic form validation.\r\n\r\nMultimedia Integration: Show students how to embed images, videos, and audio files using HTML. This can lead to discussions about multimedia on the web and how different media types are integrated into web pages.\r\n\r\nHyperlinks and Navigation: Explain the concept of hyperlinks and how they enable navigation between web pages. Students can practice creating internal and external links to connect different pages'),
(2, 'CSS IN CLASSROOM', '1', '15 days', '300', '1693415100061mg.png', '1693415100061WhatsApp Video 2023-07-17 at 2.01.05 PM.mp4', 'NILESH SIR', 'https://www.youtube.com/', 'Online Live', 'CSS, or Cascading Style Sheets, is a fundamental technology in web development that plays a crucial role in controlling the visual appearance and layout of web pages. It works alongside HTML (Hypertext Markup Language) to separate the structure and content of a webpage from its design and presentation. CSS allows web developers to apply styles to elements on a page, such as fonts, colors, spacing, and positioning, thereby creating a visually appealing and consistent user experience across different devices and browsers. Key Concepts of CSS: Selectors: Selectors are patterns used to target HTML elements to apply styles. They can target elements by their type, class, ID, attributes, and more. For instance, you can select all <p> elements, elements with a specific class (.class-name), or a unique element with an ID (#element-id). Properties: Properties define the specific aspects of an element\'s appearance that you want to style, such as color, font size, margin, padding, and more. Values: Values are assigned to properties and determine how the styling is applied. For example, the color property can take values like \"red,\" \"#00aaff,\" or \"rgb(255, 0, 0)\" to define the text color. Selectors and Properties Combination: By combining selectors and properties, you can precisely control how elements are styled. For example: css Copy code p { color: blue; font-size: 16px; } This CSS rule would apply blue color and a font size of 16 pixels to all <p> elements. Cascading and Specificity: The \"Cascading\" in CSS refers to how multiple CSS rules can apply to a single element and how conflicts are resolved. Specificity plays a role in determining which rule takes precedence when multiple rules conflict. Inline styles have the highest specificity, followed by IDs, classes, and element selectors. Box Model: The box model describes the layout of an element, comprising content, padding, border, and margin. It\'s essential for understanding how elements occupy space on a webpage and how to control spacing around them. Media Queries: Media queries allow developers to apply different styles based on the screen size or device type, enabling responsive design. This is crucial for ensuring that websites look and function well on various devices, from desktop monitors to smartphones and tablets. CSS Preprocessors: CSS preprocessors like Sass and Less enhance CSS by providing features like variables, nesting, and functions, which make writing and managing complex stylesheets more efficient. CSS Frameworks: CSS frameworks like Bootstrap and Foundation provide pre-designed CSS components and layouts, allowing developers to build responsive and visually consistent websites more quickly. CSS-in-JS: This approach involves writing CSS styles using JavaScript, often used in modern frontend frameworks like React. It offers benefits like scoped styles and dynamic styling based on component state. In summary, CSS is a versatile and powerful technology that shapes the aesthetics and layout of web pages. It empowers developers to create visually appealing, user-friendly, and responsive websites, contributing significantly to the overall user experience on the web.'),
(3, 'BOOTSTRAP 4.6 & 5.2', '1', '10 DAYS', '280', '1693415292455mg-removebg-preview.png', '1693415292455WhatsApp Video 2023-07-17 at 2.01.05 PM.mp4', 'Rahul Misal Sir', 'www.goole.com', 'Online Live', 'Bootstrap is a popular open-source front-end framework used for building responsive and visually appealing websites and web applications. Developed by Twitter, Bootstrap provides a collection of CSS and JavaScript components, tools, and utilities that make web development faster and more efficient. It\'s designed to streamline the process of creating consistent and mobile-friendly interfaces while also offering customization options for developers with varying levels of expertise.\r\n\r\nKey Features of Bootstrap:\r\n\r\nResponsive Design: One of the main strengths of Bootstrap is its focus on responsive design. It includes a responsive grid system that allows developers to create layouts that adapt smoothly to different screen sizes, from large desktop displays to small mobile devices.\r\n\r\nCSS Components: Bootstrap comes with a wide range of pre-styled CSS components like buttons, forms, navigation bars, cards, modals, carousels, and more. These components can be easily integrated into your project, saving you time and effort in designing and coding from scratch.\r\n\r\nTypography: Bootstrap offers a comprehensive set of typographic styles and a flexible and easy-to-use typography scale. This ensures that text elements look polished and well-structured across your website.\r\n\r\nUtilities: Bootstrap includes a variety of utility classes that enable you to quickly add spacing, alignment, and other styling to your elements. These utilities are especially useful for fine-tuning your design and layout.\r\n\r\nCustomization: While Bootstrap provides a default visual style, it\'s highly customizable. Developers can modify variables to change things like colors, fonts, spacing, and more, tailoring the framework\'s appearance to match the desired design.\r\n\r\nJavaScript Components: Along with CSS components, Bootstrap includes interactive JavaScript components like dropdowns, modals, tooltips, and more. These components enhance user interaction and can be easily integrated into your project.\r\n\r\nAccessibility: Bootstrap is designed with accessibility in mind. Its components are built to meet web accessibility guidelines, making it easier to create websites that are usable by a wide range of users, including those with disabilities.\r\n\r\nBrowser Compatibility: Bootstrap is tested and optimized to work well across different web browsers, ensuring a consistent user experience regardless of the browser being used.\r\n\r\nCommunity and Documentation: Bootstrap has a large and active community of developers, which means you can find plenty of resources, tutorials, and plugins to extend its functionality. The official Bootstrap documentation is well-organized and thorough, making it easy to learn and use the framework effectively.'),
(4, 'NODE.JS  IN DEVELOPMENT ', '2', '40 DAYS', '999', '1693415813976shree krishna.jpg', '1693415813976WhatsApp Video 2023-07-17 at 2.01.05 PM.mp4', 'NILESH SIR', 'www.nodejs.com', 'ClassRoom Live', 'Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build scalable and efficient network applications. Unlike traditional JavaScript, which is executed in web browsers, Node.js enables JavaScript to be run on servers, making it possible to create various types of applications, including web servers, APIs, real-time applications, and more.\r\n\r\nKey Features and Concepts of Node.js:\r\n\r\nNon-blocking I/O: One of the most significant features of Node.js is its non-blocking, event-driven architecture. This means that Node.js applications can handle many concurrent connections without blocking the execution of other tasks. This design is particularly well-suited for applications that require high concurrency and real-time interactions.\r\n\r\nEvent Loop: Node.js relies on an event loop that allows asynchronous, non-blocking I/O operations. The event loop processes events and callbacks, ensuring that the application remains responsive while performing tasks like reading from files, making network requests, and interacting with databases.\r\n\r\nSingle-Threaded: Node.js applications operate on a single thread, but the event loop allows for efficient handling of asynchronous operations. While this design simplifies programming, it\'s important to note that CPU-bound tasks can block the event loop and degrade performance. For such tasks, it\'s recommended to offload them to worker threads or other processes.\r\n\r\nnpm (Node Package Manager): npm is the package manager for Node.js, providing a vast ecosystem of open-source packages and libraries that can be easily integrated into Node.js applications. Developers can use npm to manage dependencies, share code, and collaborate on projects.\r\n\r\nCommon Use Cases: Node.js is commonly used to build web servers, APIs, and microservices. It\'s also well-suited for real-time applications, such as chat applications and online gaming platforms, thanks to its non-blocking nature. Additionally, Node.js is often chosen for building tools and scripts due to its ease of use and extensive package ecosystem.\r\n\r\nExpress.js: While Node.js can handle raw HTTP requests and responses, many developers use Express.js, a lightweight web application framework for Node.js. Express simplifies the process of building robust and feature-rich web applications by providing tools for routing, middleware, and handling HTTP requests and responses.\r\n\r\nServerless Architecture: Node.js is commonly used in serverless computing environments, where applications are broken down into smaller, independent functions. These functions are executed in response to specific events, allowing for efficient resource utilization and scaling.\r\n\r\nStreaming: Node.js provides built-in support for streaming data, making it efficient for handling large files or data streams. This is particularly useful for tasks like file uploads and live video streaming');

-- --------------------------------------------------------

--
-- Table structure for table `query_user`
--

CREATE TABLE `query_user` (
  `Qu_id` int(11) NOT NULL,
  `Qu_Fname` text DEFAULT NULL,
  `Qu_Lname` text DEFAULT NULL,
  `Qu_mobile` text DEFAULT NULL,
  `Qu_email` text DEFAULT NULL,
  `Qu_query` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `query_user`
--

INSERT INTO `query_user` (`Qu_id`, `Qu_Fname`, `Qu_Lname`, `Qu_mobile`, `Qu_email`, `Qu_query`) VALUES
(1, 'Madan', 'Ghodechor', '9309804106', 'madanghodechor6232@gmail.com', 'You have an error in Sql Syntax\' \''),
(2, 'Vaibhav ', 'pandit', '7666840021', 'vp@gmail.com', 'vp is Bc Please Save Him'),
(3, 'Rahool', 'Kadam', '9975625966', 'rahul@gmail.com', 'needs javascript course');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `slider_id` int(11) NOT NULL,
  `slider_image` text DEFAULT NULL,
  `slider_title` text DEFAULT NULL,
  `slider_button` text DEFAULT NULL,
  `btn_link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`slider_id`, `slider_image`, `slider_title`, `slider_button`, `btn_link`) VALUES
(1, '1693414717770about-fullscreen-image-1-1920x600.jpg', 'The Evening ???? ', 'See More', 'https://www.youtube.com/'),
(3, '1693414728520slider images.jpg', 'The Trial\'s', 'Click Me', 'https://www.w3school.com/');

-- --------------------------------------------------------

--
-- Table structure for table `user_purchase`
--

CREATE TABLE `user_purchase` (
  `purchase_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `purchase_date` text DEFAULT NULL,
  `transaction_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_purchase`
--

INSERT INTO `user_purchase` (`purchase_id`, `user_id`, `course_id`, `amount`, `purchase_date`, `transaction_id`) VALUES
(1, 1, 1, 500, '2022-09-07', 'pay_MZNTyRObuPJMZB'),
(2, 1, 4, 999, '2023-03-07', 'pay_MZOKytLSn1fGtG'),
(3, 1, 3, 280, '2023-09-07', 'pay_MZOhV2d4TfoONc'),
(4, 5, 4, 999, '2023-05-07', 'pay_MZQZBhbaM6w2t1'),
(5, 5, 3, 280, '2023-09-07', 'pay_MZRnPN26BbvRom'),
(6, 6, 4, 999, '2023-09-08', 'pay_MZmEKjijWGB2to'),
(7, 1, 2, 300, '2023-09-09', 'pay_Ma9PRZOtShpgvl'),
(8, 1, 5, 234, '2023-09-19', 'pay_MeBE6rw5jjZrZQ');

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(30) DEFAULT NULL,
  `user_mobile` varchar(30) DEFAULT NULL,
  `user_email` varchar(30) DEFAULT NULL,
  `user_password` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`user_id`, `user_name`, `user_mobile`, `user_email`, `user_password`) VALUES
(1, 'Madan Ghodechor', '9309804106', 'madanghodechor6232@gmail.com', '1234'),
(2, 'vaibhav', '7666806174', 'panditv0512@gmail.com', '1234'),
(4, 'Shubham Wandhekar', '9322278832', 'aw01@gmail.com', '12345'),
(5, 'tejaswini', '9579036230', 'tejaswinighorpade10@gmail.com', '12345'),
(6, 'sarika ajabe', '7843072923', 'sarika@gmail.com', '123456'),
(7, 'Rahool', '9975625966', 'rahul@gmail.com', 'Rahul123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `query_user`
--
ALTER TABLE `query_user`
  ADD PRIMARY KEY (`Qu_id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`slider_id`);

--
-- Indexes for table `user_purchase`
--
ALTER TABLE `user_purchase`
  ADD PRIMARY KEY (`purchase_id`);

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `query_user`
--
ALTER TABLE `query_user`
  MODIFY `Qu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `slider_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_purchase`
--
ALTER TABLE `user_purchase`
  MODIFY `purchase_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
