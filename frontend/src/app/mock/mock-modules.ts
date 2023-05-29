import { Module } from '../models/module';
import { SchoolCategory } from '../models/schoolCategory';
import { ModuleCategory } from '../models/moduleCategory';

export const MOCKED_MODULES: Module[] = [
    // IUT
    new Module(
        'Algorithms', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Arithmetic', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MATH
    ),

    new Module(
        'Documentation & Interface (HTML & CSS)', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.WEB
    ),
    
    new Module(
        'Software Economics', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),
    new Module(
        'Information Systems', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Linear Algebra', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Databases', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.DATABASE
    ),
    
    new Module(
        'Business Management', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),
    new Module(
        'Data Structures', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Architecture', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SYSTEM
    ),
    
    new Module(
        'Budget Management', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),
    
    new Module(
        'Graphs & Automata', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),
    new Module(
        'Object-oriented Programming', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Analysis & Numerical Methods', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Object-Oriented Programming and Human-Computer Interaction', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),
    
    new Module(
        'Labor Law', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'Project Management', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),

    new Module(
        'Advanced Algorithms', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Advanced Databases', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.DATABASE
    ),

    new Module(
        'Probability and Statistics', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Network Services', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Industrial Strategies', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'ICT Law', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),
    
    new Module(
        'Project Management 2', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),
    
    new Module(
        'Mathematical Modeling', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MATH
    ),

    new Module(
        'Advanced Object-Oriented Programming (JavaFX)', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Operating System Programming', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SYSTEM
    ),
    
    new Module(
        'Server-Side Web Programming', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.WEB
    ),
    
    new Module(
        'Entrepreneurship Workshop', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),
    new Module(
        'C++', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Linear Algebra / Analysis of Algorithm Complexity', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MATH
    ),
    
    new Module(
        'Interpreted Object-Oriented Programming', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),
    
    new Module(
        'Mobile Programming', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Virtual Reality', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'English', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),

    new Module(
        'Expression & Professional Presentation', 
        SchoolCategory.IUT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),



        
    // ENSEEIHT
    new Module(
        'Automata', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Graph Theory ', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ALGORITHM
    ),

    new Module(
        'Network Performance Evaluation', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Object Design and Programming', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),
    new Module(
        'Functional Programming', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'Internet Applications', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Modeling Engineering', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),
    
    new Module(
        'Language Translation', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),
    new Module(
        'Database', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.DATABASE
    ),

    new Module(
        'Introduction to Networks', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Internet Protocols', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Telephone Networks', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Long-Distance Networks', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Telephone Networks ', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Centralized Systems', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Local Network Architecture', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Internet Protocols & Local Networks', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Advanced Internet Protocols', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),
    
    new Module(
        'Advanced Operated Networks', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Mobile/Wireless Operator Networks', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Logic, Proof, and Induction', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Statistics', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.MATH
    ),

    new Module(
        'Operations Research', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Concurrent Systems IR', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SYSTEM
    ),

    new Module(
        'Transition Systems', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Security', 
        SchoolCategory.ENSEEIHT, 
        10, 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),
       
       

    // UCM
    new Module(
        'Data and Information Management System', 
        SchoolCategory.UCM, 
        10, 
        '' , 
        [''],
        ModuleCategory.DATABASE
    ),

    new Module(
        'Next-Generation Networks and the Internet', 
        SchoolCategory.UCM, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Software Project Management', 
        SchoolCategory.UCM, 
        10, 
        '' , 
        [''],
        ModuleCategory.MANAGEMENT
    ),

    new Module(
        'Audit, Quality, and Reliability in Computing', 
        SchoolCategory.UCM, 
        10, 
        '' , 
        [''],
        ModuleCategory.SOFT_SKILL
    ),

    // BOOK
    new Module(
        'Swift Programming', 
        SchoolCategory.BOOK, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'iOS programming', 
        SchoolCategory.BOOK, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    // ONLINE
    new Module(
        'Angular Crash course', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.WEB
    ),

    new Module(
        'MEAN Stack', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.WEB
    ),

    new Module(
        'Devops with gitlab-ci', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Jenkins', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Latex', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Git for professionals', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'SAAS', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.WEB
    ),

    new Module(
        'TDD using react and react native', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.PROGRAMMING
    ),

    new Module(
        'AWS Training for beginners', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'Docker and Kubernetes', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.ENGINEERING_TOOLS
    ),

    new Module(
        'CompTIA network+ full course', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

    new Module(
        'Computer networking course', 
        SchoolCategory.ONLINE, 
        10, 
        '' , 
        [''],
        ModuleCategory.NETWORKING
    ),

]

