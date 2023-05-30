import { Module } from '../models/module';
import { SchoolCategory } from '../models/schoolCategory';
import { ModuleCategory } from '../models/moduleCategory';

export const MOCKED_MODULES: Module[] = [
    // IUT
    new Module(
        'Algorithms', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Arithmetic', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MATH
    ),

    new Module(
        'Documentation & Interface (HTML & CSS)', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.WEB
    ),
    
    new Module(
        'Software Economics', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),
    new Module(
        'Information Systems', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Linear Algebra', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Databases', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.DATABASE
    ),
    
    new Module(
        'Business Management', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),
    new Module(
        'Data Structures', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Architecture', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SYSTEM
    ),
    
    new Module(
        'Budget Management', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),
    
    new Module(
        'Graphs & Automata', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),
    new Module(
        'Object-oriented Programming', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Analysis & Numerical Methods', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Object-Oriented Programming and Human-Computer Interaction', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),
    
    new Module(
        'Labor Law', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'Project Management', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),

    new Module(
        'Advanced Algorithms', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Advanced Databases', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.DATABASE
    ),

    new Module(
        'Probability and Statistics', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Network Services', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Industrial Strategies', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'ICT Law', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),
    
    new Module(
        'Project Management 2', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),
    
    new Module(
        'Mathematical Modeling', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MATH
    ),

    new Module(
        'Advanced Object-Oriented Programming (JavaFX)', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Operating System Programming', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SYSTEM
    ),
    
    new Module(
        'Server-Side Web Programming', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.WEB
    ),
    
    new Module(
        'Entrepreneurship Workshop', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),
    new Module(
        'C++', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Linear Algebra / Analysis of Algorithm Complexity', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Interpreted Object-Oriented Programming', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),
    
    new Module(
        'Mobile Programming', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Virtual Reality', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'English', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'Expression & Professional Presentation', 
        SchoolCategory.IUT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),



        
    // ENSEEIHT
    new Module(
        'Automata', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Graph Theory ', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Network Performance Evaluation', 
        SchoolCategory.ENSEEIHT, 
        '1 semester',
        'Learned to assess and optimize network performance through measuring metrics, identifying bottlenecks, analyzing traffic patterns, and utilizing diagnostic tools for efficient system functioning' , 
        ['André-Luc Beylot'],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Object Design and Programming', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),
    new Module(
        'Functional Programming', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Internet Applications', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Intermediate usage of Node.js and Javascript, Understanding of the DOM and usage of its API, Intermediate usage of HTML, Intermediate usage of CSS, Usage of JSON and Markdown, Understanding of HTTP, REST, and Websocket protocols, Usage of a query-builder (Knex), Usage of the FeathersJS application server to create a REST or real-time backend, Intermediate usage of VueJS 3 to create a frontend, Deployment on a virtual private server (Nginx, PM2)' , 
        ['JC Buisson'],
        ModuleCategory.WEB
    ),

    new Module(
        'Modeling Engineering', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),
    
    new Module(
        'Language Translation', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),
    new Module(
        'Database', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.DATABASE
    ),

    new Module(
        'Introduction to Networks', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Internet Protocols', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Telephone Networks', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Long-Distance Networks', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Telephone Networks ', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Centralized Systems', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Local Network Architecture', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '1 semester' , 
        [''],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Internet Protocols & Local Networks', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Internet Protocols & Local Networks involve the study and understanding of the protocols and technologies used for communication within local networks and over the Internet. This includes gaining knowledge about protocols such as TCP/IP, Ethernet, Wi-Fi, and DNS, as well as concepts related to IP addressing, subnetting, routing, and network security.' , 
        ['Béatrice Paillassa'],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Advanced Internet Protocols', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        "Learned: Internet architecture (Intra/Inter-ISP), Internet routing, transport considerations (TCP, congestion control), applications (Client-Server/Peer-to-Peer), IPv6, tunneling." , 
        ['Julien Fasson'],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Advanced Operated Networks', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Learned in this module: ATM, SDH, ADSL, FTTH.' , 
        ['André-Luc BEYLOT', 'Emmanuel CHAPUT'],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Mobile/Wireless Operator Networks', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Logic, Proof, and Induction', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Statistics', 
        SchoolCategory.ENSEEIHT, 
        'Learn how to collect, analyze, and interprete numerical data to uncover patterns, relationships, and trends. It provides tools and techniques for making informed decisions and drawing meaningful conclusions from data.', 
        '1 semester' , 
        ['Vincent Charvillat'],
        ModuleCategory.MATH
    ),

    new Module(
        'Operations Research', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Operations Research is a discipline that applies mathematical and analytical methods to solve complex decision-making problems in various fields. Learned: Linear Programming, Integer Linear Programming, Dynamic Programming and Extensions.' , 
        [],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Concurrent Systems IR', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Learned: Mutual Exclusion, Semaphore, Monitor, Synchronization, and Communication in Ada (Task, Rendezvous), Parallel Systems with Critical Resources and Deadlock.' , 
        ['Philippe Mauran'],
        ModuleCategory.SYSTEM
    ),

    new Module(
        'Transition Systems', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Security', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),
       
       

    // UCM
    new Module(
        'Data and Information Management System', 
        SchoolCategory.UCM, 
        '', 
        '' , 
        [''],
        ModuleCategory.DATABASE
    ),

    new Module(
        'Next-Generation Networks and the Internet', 
        SchoolCategory.UCM, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Software Project Management', 
        SchoolCategory.UCM, 
        '', 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),

    new Module(
        'Audit, Quality, and Reliability in Computing', 
        SchoolCategory.UCM, 
        '', 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),

    // BOOK
    new Module(
        'Swift Programming', 
        SchoolCategory.BOOK, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'iOS programming', 
        SchoolCategory.BOOK, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    // ONLINE
    new Module(
        'Angular Crash course', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.WEB
    ),

    new Module(
        'MEAN Stack', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.WEB
    ),

    new Module(
        'Devops with gitlab-ci', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Jenkins', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Latex', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Git for professionals', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'SAAS', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.WEB
    ),

    new Module(
        'TDD using react and react native', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'AWS Training for beginners', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Docker and Kubernetes', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'CompTIA network+ full course', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Computer networking course', 
        SchoolCategory.ONLINE, 
        '', 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

]

