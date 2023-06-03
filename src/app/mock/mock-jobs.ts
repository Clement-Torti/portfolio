import { Job } from '../models/job';

export const MOCKED_JOBS: Job[] = [
    new Job(
        'eDevice Bordeaux, France',
        'Dec 2020 - Sep 2023 (Apprenticeship)',
        'Developer/Tester',
        'IT company providing connectivity solutions to the healthcare industry. In charge of the design, development and execution of automated test scripts for electronic boards and web applications. Final year project on the development of a web application for test script generation. Fullstack development based on a MEAN architecture.',
        [
            'Development of a modern web application using MEAN architecture for writing python test scripts',
            'Writing electronic board integration test scripts in Python',
            'Writing Cypress web tests',
            'Test acceptance, bug reporting and documentation following a V cycle',
        ],
        'assets/images/edevice.jpeg'
    ),
    new Job(
        'ECS Digital London, UK',
        'Apr 2019 - Jun 2019 (Internship)',
        'Fullstack Developer',
        'Renamed GlobalLogic, a London-based digital transformation service company. Team development of a web application used internally to perform peer reviews. Fullstack development based on a MERN architecture. Discovery of devops tools and communication training in English.',
        [
            'Development of a fullStack web app from scratch according to DevOps principles ',
            "Technological watch for the project's new recruits, professional training, and client presentation in English."
        ],
        'assets/images/ecs-digital.png'
    ),
    new Job(
        'Yansys Vichy, France',
        'Jun 2018 - Jul 2018 (Summer job)',
        'Mobile Developer',
        'Medical software company. In charge of the development of the mobile version of HurryCan, a web application for patient-doctor messaging. IOS development in swift within an agile team.',
        [
            'Development of a mobile application based on an existing web application',
            'Integration into an agile team',
        ],
        'assets/images/yansys.jpeg'
    ),
    
]

