import { Module } from '../models/module';
import { SchoolCategory } from '../models/schoolCategory';
import { ModuleCategory } from '../models/moduleCategory';

export const MOCKED_MODULES: Module[] = [
    // IUT
    new Module(
        'Algorithms',
        SchoolCategory.IUT,
        '4 months',
        'This module explores fundamental algorithms and data structures, covering topics such as sorting, searching, graph algorithms, and dynamic programming.',
        [],
        ModuleCategory.PROGRAMMING
        ),


    new Module(
        'Arithmetic', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on arithmetic operations, number systems, algorithms, and mathematical problem-solving techniques.' , 
        [],
        ModuleCategory.MATH
    ),

    new Module(
        'Documentation & Interface (HTML & CSS)', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module introduces the fundamentals of HTML and CSS, teaching students how to create well-structured and visually appealing web pages.' , 
        [],
        ModuleCategory.WEB
    ),
    
    new Module(
        'Software Economics', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module covers the economic aspects of software development, including cost estimation, project planning, budgeting, and software pricing strategies.' , 
        [],
        ModuleCategory.MANAGEMENT
    ),
    new Module(
        'Information Systems', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module explores the design, implementation, and management of information systems, covering topics such as database systems, data modeling, and system integration.' , 
        [],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Linear Algebra', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module covers the fundamental concepts and techniques of linear algebra, including vector spaces, matrices, systems of linear equations, and linear transformations.' , 
        [],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Databases', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module introduces the principles of database design and management, including data modeling, relational databases, SQL querying, and database administration.' , 
        [],
        ModuleCategory.DATABASE
    ),
    
    new Module(
        'Business Management', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module provides an overview of business management principles and practices, covering topics such as organizational behavior, strategic planning, marketing, and financial management.' , 
        [],
        ModuleCategory.MANAGEMENT
    ),
    new Module(
        'Data Structures', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on the implementation and analysis of fundamental data structures, such as arrays, linked lists, stacks, queues, trees, and graphs, along with algorithms for efficient data manipulation and retrieval.' , 
        [],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Architecture', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module explores computer architecture principles, including the organization and design of computer systems, instruction set architecture, memory hierarchy, and input/output systems.' , 
        [],
        ModuleCategory.SYSTEM
    ),
    
    new Module(
        'Budget Management', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on budget planning, financial analysis, cost control, and resource allocation techniques to effectively manage budgets in organizational settings.' , 
        [],
        ModuleCategory.MANAGEMENT
    ),
    
    new Module(
        'Graphs & Automata', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module covers graph theory and automata theory, including graph algorithms, connectivity, shortest paths, regular languages, finite automata, and formal language theory.' , 
        [],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Object-oriented Programming', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module introduces the principles and concepts of object-oriented programming, including encapsulation, inheritance, polymorphism, and design patterns, using a programming language such as Java or C++.' , 
        [],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Analysis & Numerical Methods', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on mathematical analysis techniques, including limits, derivatives, integrals, numerical methods, and approximation algorithms, to solve mathematical problems and analyze real-world phenomena.' , 
        [],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Object-Oriented Programming and Human-Computer Interaction', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module combines the principles of object-oriented programming with the fundamentals of human-computer interaction, covering topics such as user interface design, usability testing, event-driven programming, and graphical user interface development.' , 
        [],
        ModuleCategory.PROGRAMMING
    ),
    
    new Module(
        'Labor Law', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module provides an overview of labor law principles and regulations, focusing on topics such as employment contracts, worker rights, labor disputes, occupational health and safety, and legal considerations in the workplace.' , 
        [],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'Project Management', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module covers the principles and practices of project management, including project planning, scheduling, resource management, risk assessment, team coordination, and project evaluation techniques.' , 
        [],
        ModuleCategory.MANAGEMENT
    ),

    new Module(
        'Advanced Algorithms', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module explores advanced algorithm design and analysis techniques, including divide and conquer, greedy algorithms, dynamic programming, network flows, NP-completeness, and approximation algorithms.' , 
        [],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Advanced Databases', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module delves deeper into database concepts, focusing on advanced topics such as advanced SQL queries, database optimization, indexing techniques, database security, distributed databases, and data warehousing.' , 
        [],
        ModuleCategory.DATABASE
    ),

    new Module(
        'Probability and Statistics', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module introduces the fundamental principles of probability theory and statistical analysis, covering topics such as probability distributions, hypothesis testing, regression analysis, probability models, and statistical inference.' , 
        [],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Network Services', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module explores network services and protocols, covering topics such as network architecture, routing, switching, DNS, DHCP, FTP, email services, web services, network security, and network performance optimization.' , 
        [],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Industrial Strategies', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on understanding and analyzing industrial strategies in the context of business environments, including strategic planning, competitive analysis, market research, product positioning, and business development strategies.' , 
        [],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'ICT Law', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module provides an overview of legal and ethical considerations in the field of information and communication technology (ICT), including intellectual property rights, privacy laws, data protection regulations, cybersecurity, and ethical practices in ICT.' , 
        [],
        ModuleCategory.SOFT_SKILL
    ),
    
    new Module(
        'Project Management 2', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module builds upon the principles learned in the initial project management module, delving deeper into advanced project management techniques, including project risk management, agile methodologies, project quality assurance, and project monitoring and control.' , 
        [],
        ModuleCategory.MANAGEMENT
    ),
    
    new Module(
        'Mathematical Modeling', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on mathematical modeling techniques to represent and solve real-world problems, covering topics such as differential equations, optimization, discrete modeling, statistical modeling, and computational simulation methods.' , 
        [],
        ModuleCategory.MATH
    ),

    new Module(
        'Advanced Object-Oriented Programming (JavaFX)', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on advanced concepts of object-oriented programming using JavaFX, covering topics such as graphical user interface (GUI) development, event handling, multimedia integration, animations, and advanced application design patterns.' , 
        [],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Operating System Programming', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module explores the principles of operating system design and implementation, covering topics such as process management, memory management, file systems, device drivers, inter-process communication, and system-level programming using languages like C or C++.' , 
        [],
        ModuleCategory.SYSTEM
    ),
    
    new Module(
        'Server-Side Web Programming', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on server-side web development techniques, covering topics such as web application architecture, server-side scripting languages (PHP), database integration, security considerations, and web service APIs.' , 
        [],
        ModuleCategory.WEB
    ),
    
    new Module(
        'Entrepreneurship Workshop', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module provides practical knowledge and skills necessary for entrepreneurship, including idea generation, business planning, marketing strategies, financial management, legal aspects, and startup funding.' , 
        [],
        ModuleCategory.SOFT_SKILL
    ),
    new Module(
        'C++', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module introduces the C++ programming language, covering topics such as syntax and semantics, object-oriented programming concepts, memory management, file handling, templates, and advanced features like exception handling and multithreading.' , 
        [],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Linear Algebra / Analysis of Algorithm Complexity', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module covers two key areas: linear algebra and the analysis of algorithm complexity. Topics include matrix operations, vector spaces, eigenvalues and eigenvectors, algorithmic analysis, time complexity, space complexity, and Big O notation.' , 
        [],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Interpreted Object-Oriented Programming', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module explores interpreted object-oriented programming languages, such as Python or Ruby, focusing on language features, dynamic typing, metaprogramming, script development, and the integration of object-oriented principles in interpreted environments.' , 
        [],
        ModuleCategory.PROGRAMMING
    ),
    
    new Module(
        'Mobile Programming', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module focuses on mobile application development, covering topics such as mobile platforms (Android or iOS), user interface design, application lifecycle, data storage, network communication, and mobile app deployment.' , 
        [],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Virtual Reality', 
        SchoolCategory.IUT, 
        '4 months', 
        'This module explores the principles and techniques of virtual reality (VR) development, covering topics such as VR hardware, 3D modeling and rendering, user interaction, immersive experiences, VR programming frameworks, and VR application design considerations.' , 
        [],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'English', 
        SchoolCategory.IUT, 
        '5 years', 
        'This module aims to enhance English language skills, including reading, writing, listening, and speaking. Topics may include vocabulary expansion, grammar review, comprehension exercises, oral presentations, and communication strategies.' , 
        [],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'Expression & Professional Presentation', 
        SchoolCategory.IUT, 
        '2 years', 
        'This module focuses on developing effective communication and presentation skills for professional settings. Topics include public speaking, effective writing, persuasive techniques, visual aids, body language, and professional etiquette.' , 
        [],
        ModuleCategory.SOFT_SKILL
    ),



        
    // ENSEEIHT
    new Module(
        'Computer architecture', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        `Chapter I: General Principles
        Chapter II: Elements of Combinational Logic
        Chapter III: Binary Arithmetic
        Chapter IV: Elements of Sequential Logic
        Chapter V: Programming the 32-bit CRAPS/SPARC Processor
        Chapter VI: Performance Enhancement
        Chapter VII: CRAPS: Programmer's Guide.` , 
        ['Jean-Christophe	BUISSON'],
        ModuleCategory.SYSTEM
    ),

    new Module(
        'Probability', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Learned: Elements of probability calculus, Real random variables, Real random vectors, Limit theorems.' , 
        ['Martial Coulon'],
        ModuleCategory.MATH
    ),

    new Module(
        'Automata', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'This module covers the introduction, examples, and formalization of Finite Deterministic Automata (FDAs), modeling, determinization, properties of rational languages, minimization, regular expressions to automata conversion, and regular expressions to automata using morphological method and derivations, along with two regular expression tutorials.' , 
        ['Meriem Ouederni'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Graph Theory ', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'This module explores the fundamentals and applications of graph theory, covering topics such as graph representation, connectivity, shortest paths, spanning trees, and graph algorithms.' , 
        ['Gentian Jakllari'],
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
        'Programming methodology', 
        SchoolCategory.ENSEEIHT, 
        '1 semester ', 
        'The Programming Methodology UE aims to train students in rigorous design and programming. It is a methodology course. This course uses the ADA programming language as a support.' , 
        ['Yamine AIT AMEUR', 'Neeraj SINGH'],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Functional Programming', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        "Introduction to functional programming principles, covering topics such as higher-order functions, recursion, immutability, and type inference. Learned to write concise and modular code using OCaml's features, including algebraic data types and polymorphism." , 
        ['Aurélie Hurault'],
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
        'Model-Driven Engineering (MDE)', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Software development approach that places abstract models at the core of the development process, enabling the automatic generation of code and other software artifacts, as well as the analysis and simulation of system properties. This approach aims to enhance productivity, quality, and maintainability of software systems. Learned: Acceleo, ATL, EMF, OCL Classic, Sirius specifier Environnemnt, Xtext Complete SDK' , 
        ['Marc Pantel'],    
        ModuleCategory.ENGINEERING_TOOLS
    ),
    
    new Module(
        'Language Translation', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Introduction to compilation, Lexical analysis, Syntactic analysis, Attributed grammars, Abstract syntactic tree, Semantic analysis.' , 
        ['Aurélie Hurault','Philippe Quéinnec'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Design and object programming', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'The objectives of this course are to learn how to build a graphical user interface, gain practical experience with object-oriented concepts, and understand event-driven programming and its implementation in Java. The course plan includes studying state-transition diagrams, principles of user interface, constructing the presentation (view), event handling, and concluding remarks. Using JavaFX/Swing.' , 
        ['Xavier Crégut'],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Introduction to Networks', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'The history of internet. MAC and Ethernet, Wifi.' , 
        ['Gentian Jakllar'],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Internet Protocols', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        `I - Internet
        Objective: Define Internet
        How: Historical, social, numerical, and technical overview.
        Key Points: Overview and challenges of definition.
        
        II - Internet Protocol
        Objective: Understand and know about the core protocol of the Internet
        How: Focus on routing through addressing, followed by detailed exploration.
        Key Points: IPv4 addressing, routing principles, routing table, header structure, MTU, packet mode.
        
        III - Transport Protocols
        Objective: Understand the importance of a transport protocol in Internet and how it originally functioned.
        How: Presenting the application needs and addressing them with UDP and TCP.
        Key Points: Application multiplexing, UDP, "basic" TCP (sliding window protocol, notations, error recovery, ...)
        
        IV - Applications
        Objective: Familiarize with basic application concepts such as client/server and P2P.
        How: Illustrating with simple applications.
        Key Points: Using port concept, HTTP, FTP, SNMP, ...` , 
        ['Julien Fasson'],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Telephone Networks', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        `INTRODUCTION
            General architecture
            Access network
            Voice digitisation
            ultiplexing
            Routing and addressing
        Signalling: SS7
        Access network: narrowband ISDN
        The core network: Digital Hierarchy: PDH - SDH` , 
        ['André-Luc BEYLOT'],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Long-Distance Networks', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        `General introduction
        Data transmission networks
            X.25
            Frame Relay
            ATM
        Circuit-switched networks
            PSTN and signalling
            Increasing data rates: (PDH)/SDH hierarchies
        Telecom access networks
            The ISDN access network
            ADSL
            FTTH` , 
        ['André-Luc BEYLOT'],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Centralized Systems', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        `Introduction, review of concepts 
        The System API in C 
        The System API on the command line 
        Internal design of a system
        Process control
        Virtual memory
        File system` , 
        ['Philippe Quéinnec', 'Zouheir Hamrouni'],
        ModuleCategory.SYSTEM
    ),

    new Module(
        'Local Network Architecture', 
        SchoolCategory.ENSEEIHT, 
        '', 
        '1 semester' , 
        [],
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
        '1 semester', 
        'General introduction to the principles of mobile networks. 2G networks: GSM, GPRS, EDGE. 3G networks: UMTS, HSPA. 4G networks: LTE', 
        ['André-Luc BEYLOT'],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Logic, Proof, and Induction', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Learned: Propositional logic, Predicate logic, Proof of functional programs, Proof of imperative programs.' , 
        ['Marc Pantel'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Statistics', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'Learn how to collect, analyze, and interprete numerical data to uncover patterns, relationships, and trends. It provides tools and techniques for making informed decisions and drawing meaningful conclusions from data.' , 
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
        '1 semester', 
        'Comprehensive understanding of transition systems, their formal specification, analysis techniques, and the application of temporal logic in reasoning about system properties. Operational specification: TLA+ - actions, Progress control: fairness, Stating properties: Linear Temporal Logic (LTL),  Study of a mutual exclusion algorithm,  Study of a distributed algorithm, Stating properties: Branching Temporal Logic (CTL).' , 
        ['Philippe Quéinnec', 'Xavier Thirioux', 'Aurélie Hurault'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Security', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        'This course on computer security provides an introduction and review, followed by a focus on the specificities of embedded systems. The cryptographic functions are extensively studied, covering concepts and techniques to ensure data confidentiality, integrity, and authenticity in computer environments.' , 
        ['François Ravache'],
        ModuleCategory.SOFT_SKILL
    ),
       
    new Module(
        'Interconnection of systems', 
        SchoolCategory.ENSEEIHT, 
        '1 semester.', 
        'Learned: OSI model. Telephony interconnection - VoIP - Towards the end of the PSTN. Local Area Network Interconnection. MPLS.' , 
        ['André-Luc BEYLOT', 'Julien Fasson', 'Emmanuel Chaput', 'Gentian Jakllari'],
        ModuleCategory.NETWORKING
    ),
       
    new Module(
        'Middleware/Software packages', 
        SchoolCategory.ENSEEIHT, 
        '1 semester.', 
        'Remote communication between applications. Socket communication. Remote procedure calls and method calls. Asynchronous middleware: message communication' , 
        ['Philippe Quéinnec'],
        ModuleCategory.SYSTEM
    ),
    
    new Module(
        'Database', 
        SchoolCategory.ENSEEIHT, 
        '1 semester', 
        `introduce the basic concepts necessary for the rigorous design of databases. Skills acquired: good grasp of the basic concepts of database design.
        Sequence 1: Conceptual modelling and relational databases
        Session 2. Case study
        Sequence 3. The SQL language
        Sequence 4. Transaction management.` , 
        ['Mr Yamine'],
        ModuleCategory.DATABASE
    ),

    // UCM
    new Module(
        'Data and Information Management System', 
        SchoolCategory.UCM, 
        '4 months', 
        `Data warehouses. Multidimensional databases. Creation and maintenance of data warehouses, multidimensional architectures.
        architectures.
        - Semi-structured and hierarchical databases.
        - Other non-relational databases.
        - Information storage, indexing and retrieval. Index creation, query expansion, relevance assessment.
        - Databases on the Web.
        - Distributed databases. Global information systems, geographic information systems.
        - Development and implementation of data management architectures. Business layer.` , 
        ['Enrique Martín'],
        ModuleCategory.DATABASE
    ),

    new Module(
        'Next-Generation Networks and the Internet', 
        SchoolCategory.UCM, 
        '4 months', 
        `- Hierarchical organisation of the Internet and routing between autonomous systems.
        - Multicasting and multicast protocols.
        - Mobile network technologies and mobility on the Internet.
        - Quality of service (QoS) on the Internet.
        - Advanced Internet services: voice over IP, streaming, RTP.` , 
        ['Juan Carlos Fabero Jiménez'],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Software Project Management', 
        SchoolCategory.UCM, 
        '4 months', 
        `- Project approval and definition.
        - Project planning.
        - Project execution, monitoring and control.
        - Project communications management.
        - Project closure.` , 
        ['Albert Meco Alias'],
        ModuleCategory.MANAGEMENT
    ),

    new Module(
        'Audit, Quality, and Reliability in Computing', 
        SchoolCategory.UCM, 
        '4 months', 
        `- IT quality: quality standards, quality factors, quality metrics.
        - IT audit: audit standards and guidelines, risk analysis and management, audit process.
        - System reliability. Techniques for systematically testing system reliability: testing, model-checking,
        specification and verification. - Security and liveness testing. Test coverage System modelling.
        - Tools for (semi-)automatic reliability testing of systems.` , 
        ['Adrián Riesco Rodríguez'],
        ModuleCategory.SOFT_SKILL
    ),

    // BOOK
    new Module(
        'Swift Programming guide', 
        SchoolCategory.BOOK, 
        'x', 
        'https://bignerdranch.com/books/swift-programming-the-big-nerd-ranch-guide-3rd-edition/' , 
        ['The Big Nerd Ranch'],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'iOS programming', 
        SchoolCategory.BOOK, 
        'x', 
        'https://bignerdranch.com/books/ios-programming-the-big-nerd-ranch-guide-7th-edition/' , 
        ['The Big Nerd Ranch'],
        ModuleCategory.PROGRAMMING
    ),

    // ONLINE
    new Module(
        'Angular Crash course', 
        SchoolCategory.ONLINE, 
        '2h', 
        'https://www.youtube.com/watch?v=3dHNOWTI7H8&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=5' , 
        ['Traversy Media'],
        ModuleCategory.WEB
    ),

    new Module(
        'MEAN Stack', 
        SchoolCategory.ONLINE, 
        '3h', 
        'https://www.youtube.com/watch?v=E-GA9GKJWuE&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=6' , 
        ['Intellipaat'],
        ModuleCategory.WEB
    ),

    new Module(
        'Devops with gitlab-ci', 
        SchoolCategory.ONLINE, 
        '5h', 
        'https://www.youtube.com/watch?v=PGyhBwLyK2U&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=10' , 
        ['freeCodeCamp.org'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Jenkins', 
        SchoolCategory.ONLINE, 
        '3h', 
        'https://www.youtube.com/watch?v=FX322RVNGj4&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=11' , 
        ['Simplilearn'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Latex', 
        SchoolCategory.ONLINE, 
        '1h', 
        'https://www.youtube.com/watch?v=VhmkLrOjLsw&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=4' , 
        ['Derek Banas'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Git for professionals', 
        SchoolCategory.ONLINE, 
        '1h', 
        'https://www.youtube.com/watch?v=Uszj_k0DGsg&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=13' , 
        ['freeCodeCamp.org'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'SAAS', 
        SchoolCategory.ONLINE, 
        '4h', 
        'https://www.youtube.com/watch?v=jfMHA8SqUL4&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=24' , 
        ['Coder coder'],
        ModuleCategory.WEB
    ),

    new Module(
        'TDD using react and react native', 
        SchoolCategory.ONLINE, 
        '20h', 
        'https://www.youtube.com/watch?v=vwIgAHnjc1k&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=14' , 
        ['CodingItWrong'],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'AWS Training for beginners', 
        SchoolCategory.ONLINE, 
        '11h', 
        'https://www.youtube.com/watch?v=ZB5ONbD_SMY&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=3' , 
        ['Simplilearn'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Docker and Kubernetes', 
        SchoolCategory.ONLINE, 
        '6h', 
        'https://www.youtube.com/watch?v=kTp5xUtcalw&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=9' , 
        ['freeCodeCamp.org'],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'CompTIA network+ full course', 
        SchoolCategory.ONLINE, 
        '24h', 
        'https://www.youtube.com/watch?v=xmpYfyNmWbw&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=2' , 
        ['Paul Browning'],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Computer networking course', 
        SchoolCategory.ONLINE, 
        '10h', 
        'https://www.youtube.com/watch?v=qiQR5rTSshw&list=PL23ZJNVOUFmYFuWOpwU4D7PeTlafhwP8H&index=1' , 
        ['freeCodeCamp.org'],
        ModuleCategory.NETWORKING
    ),

]

