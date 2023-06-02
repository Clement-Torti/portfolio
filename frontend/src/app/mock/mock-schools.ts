import { School } from '../models/school';

export const MOCKED_SCHOOLS: School[] = [
    new School('IUT Clermont-Ferrand', 
    '2017-2019',
    'Clermont-ferrand, France',
     'IUT Clermont-Ferrand is known for its excellent computer science training. Located in Aubière, France, it offers a practical curriculum that keeps up with industry trends. Students gain expertise in programming, web/mobile development, databases, networks, and information systems. With hands-on projects and internships, they apply their skills in real-world settings, fostering a dynamic learning experience.',
      'https://www.iut-clermont.fr/', 
      'assets/images/iut.jpeg'),

    new School('INP ENSEEIHT', 
    '2020-2023', 
    'Toulouse, France',
    'Recognized as the 2nd best computer science engineering school in France, ENSEEIHT Toulouse offers a prestigious engineering program in computer science through alternating work-study. Located in Toulouse, France, the program combines theoretical knowledge with practical experience. Students develop technical skills in software development, algorithms, AI, and data analysis. Hands-on projects and internships provide real-world application. ENSEEIHT Toulouse prepares future engineers for success in the dynamic field of IT.', 
    'https://www.enseeiht.fr/fr/index.html', 
    'assets/images/enseeiht.jpg'),

    new School('UCM Madrid',
     '2022-2023', 
    'Madrid, Espagne',
     "UCM Madrid offers a prestigious Master's program in Computer Science. Located in Madrid, Spain, it provides a comprehensive curriculum covering theoretical knowledge and practical applications. Students gain advanced skills in software development, algorithms, AI, and data analysis. UCM's cutting-edge facilities and industry collaborations create an ideal learning environment. Studying at UCM Madrid has prepared me for a successful career in computer science.", 
     'https://www.ucm.es/', 
     'assets/images/ucm.jpeg'),
   
]

