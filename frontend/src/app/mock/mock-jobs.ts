import { Job } from '../models/job';

export const MOCKED_JOBS: Job[] = [
    new Job(
        'eDevice Bordeaux, France',
        'Dec 2020 - Sep 2023 (Apprenticeship)',
        'Developer/Tester',
        'IT company providing connectivity solutions to the healthcare industry. In charge of the design, development and execution of automated test scripts for electronic boards and web applications. Final year project on the development of a web application for test script generation. Fullstack development based on a MEAN architecture.',
        [
            'Développement d\'une application web de gestion de projet',
            'Développement d\'une application web de gestion de projet',
        ],
        'assets/images/edevice.jpeg'
    ),
    new Job(
        'ECS Digital London, UK',
        'Apr 2019 - Jun 2019 (Internship)',
        'Fullstack Developer',
        'Renamed GlobalLogic, a London-based digital transformation service company. Team development of a web application used internally to perform peer reviews. Fullstack development based on a MERN architecture. Discovery of devops tools and communication training in English.',
        [
            'Développement d\'une application web de gestion de projet',
            'Développement d\'une application web de gestion de projet',
        ],
        'assets/images/ecs-digital.png'
    ),
    new Job(
        'Yansys Vichy, France',
        'Jun 2018 - Jul 2018',
        'Mobile Developer',
        'Medical software company. In charge of the development of the mobile version of HurryCan, a web application for patient-doctor messaging. IOS development in swift within an agile team.',
        [
            'Développement d\'une application web de gestion de projet',
            'Développement d\'une application web de gestion de projet',
        ],
        'assets/images/yansys.jpeg'
    ),
    
]

