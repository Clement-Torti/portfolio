import { Project } from '../models/project';
import { ProjectCategory } from '../models/projectCategory';

export const MOCKED_PROJECTS: Project[] = [
    // LIBRARY MANAGEMENT
    new Project('LIBRARY MANAGEMENT', 
    'bi-book',
    'Console application to manage books in a fictional library. CRUD functionality for books of different genres. CRUD functionality for readers. Management of loans, late returns, and searches by genre and author. Use of data persistence.',
    'Fictional library console app with CRUD for books and readers, managing loans, and searches by genre and author, using data persistence.',
    'IUT Clermont-Ferrand',
    '2017 - 2 months',
    'Lead developer',
    null,
    ['Clément Torti', 'Florent Becouze'],
    ['C'],
    ['StarUML', 'GCC', 'Notepad++', 'Git'],
    [ 
    'Programming algorithmic concepts in a concrete project: merge sort and exchange sort, binary search.', 
    'Management of relational data structures using low-level dynamic pointer arrays.', 
    'Reading and writing binary files.',
    'Creation of a user menu for a console application.' 
    ],
    'https://github.com/Clement-Torti/gestion-bibliotheque',
    '',
    'library_management_report.pdf',
    [ProjectCategory.CONSOLE]
    ),

    // TOURNAMENT TREES
    new Project('TOURNAMENT TREES',
    'bi-trophy',
    'This application is a multi-sport direct elimination tournament manager designed for team tournaments, add participants, enter scores as they occur to determine a winner, and organizers. It allows to create individual or print the tournament tree.',
    'Tournament manager for team events, adding participants, recording live scores, and organizing tournaments with printable brackets.',
    'IUT Clermont-Ferrand',
    '2018 - 2 months',
    'Developer',
    null,
    ['Clément Torti', 'Damien NGuyen'],
    ['C#', 'XAML'], 
    ['StarUML', 'Balsamiq mockup', 'Draw.io', 'Visual Studio', 'SVN'],
    ['Software design: class diagram, package, sketch, usecases.',
    'Proficiency in C# programming (classes, structures, instances, abstraction, inheritance, interfaces, polymorphism, encapsulation).',
    'Management of collections (arrays, lists, dictionaries), events, DataTemplate, data-binding, use of LINQ.',
    'Development of a desktop application with installer, ergonomics and accessibility, custom components, data persistence, rigorous code documentation.'
    ],
    'https://github.com/Clement-Torti/tournament-tree',
    'https://youtu.be/9WWGtvwoqaU',
    'tournament_tree_report.pdf',
    [ProjectCategory.DESKTOP]),

    // ARTIKLATOR
    new Project('ARTIKLATOR', 
    'bi-newspaper',
    'This is a website that aggregates news from multiple news sites by reading their RSS feeds. This site allows all visitors to access the content. Users logged in as administrators can modify the referenced sites.',
    'News aggregator website reads RSS feeds from various sources. Public access for all, admin access for site modification.',
    'IUT Clermont-Ferrand',
    '2018 - 2 months',
    'Lead developer',
    null,
    ['Clément Torti', 'Florent Becouze'],
    ['PHP', 'CSS', 'HTML', 'MySQL'],
    ['StarUML', 'Balsamiq mockup', 'Draw.io', 'PhpMyAdmin','Sublime text', 'SVN'],
    [ 
    'Organized according to the MVC design pattern.',
    'Used cookies to sort articles by type.',
    'Implemented sessions for the admin role.',
    'Ensured password security in the database by hashing and verifying the role for each admin action.',
    'Read and parsed RSS feeds.',
    ],
    'https://github.com/Clement-Torti/site-news',
    '',
    'artiklator.pdf',
    [ProjectCategory.WEB]
    ),
    
    // SPEED TYPING
    new Project('SPEED TYPING', 
    'bi-keyboard',
    "This is an Android mobile game to test a person's typing speed. Words appear and gradually descend, increasing in speed. The game offers a persistent high score system and allows to take a photo of the winner.",
    'Android game tests typing speed with descending words, accelerating pace. Features high score system and winner\'s photo capture.',
    'IUT Clermont-Ferrand',
    '2019 - 2 months',
    'Lead developer',
    null,
    ['Clément Torti', 'Jonathan Point'],
    ['Java', 'Android SDK'],
    ['StarUML', 'Balsamiq mockup', 'Draw.io','Android studio', 'Git'],
    [        
        ' Creation of xml views with appropriate components, use of Intents, use of fragments.', 
        ' Modification of the manifest and resource qualification.', 
        ' Organization in MVC and use of design patterns (observer and factory).', 
        ' Mastery of the application life cycle, dynamic permission management, light and deep persistence management, custom adapter coding.'
    ],
    'https://github.com/Clement-Torti/speed-typing',
    '',
    "speed_typing_report.pdf",
    [ProjectCategory.MOBILE]
    ), 

    // BATTLESHIP
    new Project('BATTLESHIP', 
    'bi-compass',
    "This program aims to recreate the game \"Battleship\". One player faces an artificial intelligence whose difficulty level can be chosen. At the end of the game, the player's score is recorded if they win and will be visible on the scores table on the home page.",
    '"Battleship" game recreation with AI opponent. Adjustable difficulty level, records scores for wins, displayed on home page leaderboard.',
    'IUT Clermont-Ferrand',
    '2019 - 2 months',
    'Lead developer',
    null,
    ['Clément Torti', 'Florent Becouze'],
    ['Java', 'JavaFX'],
    ['StarUML', 'Balsamiq mockup', 'Draw.io','IntelliJ', 'Git'],
    [
        'Organized using MVC pattern.', 
        'Rigorous documentation including the use of UML modeling language, use cases, and an execution plan.', 
        'Use of different types of media (sound, music, images, GIFs) and various design patterns (decorator, template method, strategy, simple factory, observer).', 
        'Reading and writing text files to store scores.', 
    ],
    'https://github.com/Clement-Torti/bataille-navale',
    '',
    'battleship_report.pdf',
    [ProjectCategory.DESKTOP]
    ),
        
    // OLLIE REMOTE
    new Project('OLLIE REMOTE', 
    'bi-robot',
    'This is an application that allows the user to control the Ollie robot in different ways, using either Joystick or Pad mode. The Pad mode allows the user to draw a trajectory that the Ollie will follow.',
    'App to control Ollie robot using Joystick or Pad mode. Pad mode enables drawing trajectories for Ollie to follow.',
    'IUT Clermont-Ferrand',
    '2019 - 2 months',
    'Lead developer',
    null,
    ['Clément Torti', 'Florent Becouze'],
    ['Java', 'Android SDK'],
    ['StarUML', 'Balsamiq mockup', 'Draw.io','Android studio', 'Git'],
    [
        'Use of an SDK.', 
        'Sending Bluetooth commands.', 
        'Mathematics of the trajectories related to the Pad.'
    ],
    'https://github.com/Clement-Torti/ollie-remote',
    'https://youtu.be/rI1cPQIrvO8',
    'ollie_report.pdf',
    [ProjectCategory.MOBILE]
    ),

    // BOOK7
    new Project('BOOK7', 
    'bi-file-text',
    'This application was designed for students of ENSEEIHT. It is a digital notebook manager that simulates a handwritten notebook while offering the flexibility of digital tools. It allows the inclusion of code, PDFs, and images, as well as the separation of the notebook into lectures, tutorials, and practical work, and the organization of notebooks into modules.',
    'ENSEEIHT student\'s digital notebook manager with handwritten simulation, code, PDFs, images, and organization by lectures, tutorials, and practical work.',
    'ENSEEIHT, Toulouse INP',
    '2021 - 3 months',
    'Product Owner / Scrum master',
    'Agile',
    [        
        'Nassim Bennouar',
        'Phillippe Lopes',
        'Anna Stephany',
        'Alexandre Le Lann',
    ],
    ['Java', 'JavaFX'],
    ['StarUML', 'Balsamiq mockup', 'Draw.io', 'Clickup', 'Discord', 'Git'],
    [
        'Managed a team as a Scrum master: technological watch, weekly meeting, assistance.',
        'Definition of weekly deliverables.',
        'Development organized in pair programming.'
    ],
    'https://github.com/Clement-Torti/book7',
    'https://youtu.be/3Lb0YkdPBA0',
    'book7_report.pdf',
    [ProjectCategory.DESKTOP]
    ),

    // GENEALOGICAL TREE 
    new Project('GENEALOGICAL TREE', 
    'bi-tree',
    'This is a console application that allows the user to create and modify a genealogical tree.',
    'Console application that allows the user to create and modify a genealogical tree.',
    'ENSEEIHT, Toulouse INP',
    '2021 - 1 month',
    'Developer',
    null,
    ['Clément Torti'],
    ['ADA'],
    ['VSCode', 'GNAT', 'Git'],
    [
        'Adherence to the principle of single responsibility, encapsulation, and generality.', 
        'Testing for each module.', 
        'Use of a binary tree data structure of pointers.', 
        'Application of binary tree algorithms.'
    ],
    'https://github.com/Clement-Torti/genealogic-tree',
    '',
    'genealogic_tree_report.pdf',
    [ProjectCategory.CONSOLE]
    ),

    // WHITEBOARD
    new Project('WHITEBOARD', 
    'bi-clipboard',
    'This is a website that contains an editable canvas/board that can be shared live between multiple users.',
    'Website presenting an editable canvas/board that can be shared live between multiple users.',
    'ENSEEIHT, Toulouse INP',
    '2022 - 2 months',
    'Lead developer',
    null,
    ['Clément Torti', 'Mérérick Poudret'],
    ['Java', 'HTML', 'CSS'],
    ['Linda-TSpace', 'Git'],
    [
        'Creation of a shared tuple space, inspired by the Linda model.',
        'Concurrent access.',
        'Fault tolerance through a backup server.',
        'Middleware: mono-server architecture with several concurrent clients.'
    ],
    'https://github.com/Clement-Torti/intergiciel',
    '',
    'whiteboard_report.pdf',
    [ProjectCategory.WEB]
    ),

    // HURRY-CAN
    new Project('HURRY-CAN', 
    'bi-chat',
    'A mobile application for transmitting medical documents or sensitive data to third parties who are not equipped with MS-Santé messaging. This application allows doctors to correspond with their patients or clients in a controlled manner.',
    'Mobile app for secure medical document transmission to non-MS-Santé users. Enables controlled doctor-patient correspondence.',
    'Yansys company',
    '2018 - 2 months',
    'Mobile developer',
    'Agile 4 people',
    ['X'],
    ['Swift', 'Python'],
    [    
    'XCode',
    'Django REST',
    'StarUML', 
    'Balsamiq mockup',
    'Jira',
    'Git' 
    ],
    [        
        'First professional experience in an agile team.',
        'Use of the Hurry-Can web API.',
        'Improved skills in mobile development.',
        'Compliance with the GDPR (General Data Protection Regulation).'
    ],
    'confidential',
    '',
    'hurry_can_report.pdf',
    [ProjectCategory.MOBILE, ProjectCategory.WEB]
    ),

    // FEEDBACK TOOL
    new Project('FEEDBACK TOOL', 
    'bi-chat-square-text',
    'Full-stack web application used for peer evaluation within the company. Every 6 months, ECS employees are invited to answer questions about other employees in the company. This helps the hierarchical manager understand to what extent each employee adheres to DevOps practices. This tool automates this process. Employees are also able to leave feedback on other employees at any time.',
    'Full-stack web app automates peer evaluation for ECS employees. Supports DevOps adherence assessment and continuous feedback.',
    'ECS Digital Company',
    '2019 - 3 months',
    'Fullstack dev',
    'DevOps',
    ['Clément Torti', 'Louison Bellec', 'Kouros Aliabadi'],
    ['Javascript', 'HTML', 'CSS', 'YAML'],
    [
        'StarUML', 'Balsamiq mockup', 'Draw.io ', 'Trello' , 'React JS', 'Express', 'Node JS ', 'MongoDB', 'Redis db', 'VSCode', 'GitLab-CI', 'Docker', 'Cypress', 'Jest', 'Git' 
    ],
    [
        'Development according to DevOps principles with automated testing and deployment.',
        'Implementation of sessions with tokens encrypted with multiple secret keys.',
        'Upskilling in the use of web frameworks.',
        "Technological watch for the project's new recruits, professional training, and client presentation in English."
    ],
    'confidential',
    'https://youtu.be/9M6AH2PKryI',
    'feedback_tool_report.pdf',
    [ProjectCategory.WEB]
    ),


    // HGOMICRO / ETESTER
    new Project('HGOMICRO / ETESTER', 
    'bi-code-square',
    'Integration tests of the HGoMicro electronic board and its medical peripherals performed using Python scripts. The HGoMicro is a data transfer hub provided by medical peripherals to dedicated servers. In-house development of a tool called eTester to automate script writing without having to write code.',
    'Python tests for HGoMicro medical hub, using homemade eTester to automate script writing without coding.',
    'eDevice Company',
    '2020-2023',
    'Developer/Tester',
    'V-cycle',
    [
        'Clément Torti', 
        'Benoit Gorostidi',
        'Guillaume Lavigne',
        'Julien Pornet',
        'Pierre-Michel Simon'
],
    ['Python', 'Shell', 'Javascript', 'HTML', 'CSS'],
    [
        'VSCode','GitHub Copilot', 'SVN', 'Git', 'PyQT', 'Phidget', 'Putty', 'WinSCP', 'Angular', 'Express', 'Node JS','MongoDB', 'Balsamiq mockup', 'Draw.io', 'Trello', 'TeamGantt', 'Postman', 'BugZilla'
    ],
    [
        'Gained skills in embedded Linux and integration testing.',
        'Developed Python test scripts using specialized automation libraries.',
        'Gained skills in documentation according to the V-cycle: design modification, product specification, protocol, recipe, and bug report.',    
    ],
    'confidential',
    '',
    null,
    [ProjectCategory.WEB, ProjectCategory.EMBEDDED]
    ),


    // TWOCAN
    new Project('TWOCAN', 
    'bi-hospital',
    'A variant of the HGoMicro with an integrated algorithm for detecting dangerous medical measurements. Provides an online platform for doctors to access data. Responsible for front-end integration testing.',
    'HGoMicro variant with integrated dangerous medical measurement detection. Front-end integration testing for online doctor platform.',
    'eDevice Company',
    '2020-2023',
    'Developer/Tester',
    'V-cycle',
    [
        'Clément Torti', 
        'Souksavanh Xayavong',
        'Lucas Artel',
        'Thibaud NGuyen',
        'Greg Ribaloff'
    ],
    ['PHP', 'CSS' , 'HTML', 'MYSQL'],
    [
        'Bugzilla', 'Postman','Cypress', 'Symfony', 'WAMP', 'VSCode', 'GitHub Copilot', 'Microsoft Office suite', 'Git'
    ],
    [
        'Developed skills in documentation following the V-cycle process: Design, Product specification, Protocol, Acceptance testing and Bug report.',
        'Developed skills in integration testing using Cypress.',
        'Wrote database population scripts and provided occasional help with Symfony development.',
        'Implemented "GitLab issues" to speed up the reporting process.' 
    ],
    'confidential',
    '',
    null,
    [ProjectCategory.WEB]
    ),

        // PORTFOLIO
        new Project('PORTFOLIO ONLINE', 
        'bi-person-badge',
        'You are currently viewing the online portfolio that has been developed using Angular. It is a single page application that allows the user to navigate between different sections. The content of the sections is dynamically generated from a typescript files. The site is responsive and can be viewed on mobile devices. Deployed on Github pages.',
        'Angular-based online portfolio: single-page, dynamic content, mobile-responsive, deployed on GitHub Pages.',
        'Personal project',
        '2023 - 1 month',
        'Developer',
        '',
        [
            'Clément Torti', 
        ],
        ['Angular', 'Typescript' , 'HTML', 'CSS', ],
        [
            'Bootstrap', 'Github copilot', 'balsamiq mockup', 'VSCode', 'Git', 'Github pages', 'ParticleJS'
        ],
        [
            'Responsive design using Bootstrap.',
            'Time restricted project.',
            'Using third party libraries like ParticleJS.',
            'Continuous integration with Github pages.' 
        ],
        'https://github.com/Clement-Torti/portfolio',
        '',
        'portfolio_mockup.pdf',
        [ProjectCategory.WEB]
        ),

]

