import { School } from '../models/school';

export const MOCKED_SCHOOLS: School[] = [
    new School('IUT Clermont-Ferrand', 
    '2015-2017',
    'Clermont-ferrand, France',
     'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      'https://www.iut-clermont.fr/', 
      'assets/images/iut.jpeg'),

    new School('INP ENSEEIHT', 
    '2017-2020', 
    'Toulouse, France',
    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
    'https://www.enseeiht.fr/fr/index.html', 
    'assets/images/enseeiht.jpg'),

    new School('UCM Madrid',
     '2019-2020', 
    'Madrid, Espagne',
     'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 
     'https://www.ucm.es/', 
     'assets/images/ucm.jpeg'),
   
]

