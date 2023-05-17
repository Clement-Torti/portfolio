import { Project } from '../models/project';
import { ProjectCategory } from '../models/projectCategory';

export const MOCKED_PROJECTS: Project[] = [
    new Project('TOURNAMENT TREES',
    'This application is a multi-sport direct elimination tournament manager designed for team tournaments, add participants, enter scores as they occur to determine a winner, and organizers. It allows to create individual or print the tournament tree.',
    'IUT Clermont-Ferrand',
    '2018 - 2 months',
    'Developer',
    null,
    ['Damien NGuyen'],
    ['C#', 'XAML', 'StarUML', 'Balsamiq mockup', 'Draw.io', 'Visual Studio', 'SVN'],
    ['Software design: class diagram, package, sketch, usecases.',
    'Proficiency in C# programming (classes, structures, instances, abstraction, inheritance, interfaces, polymorphism, encapsulation).',
    'Management of collections (arrays, lists, dictionaries), events, DataTemplate, data-binding, use of LINQ.',
    'Development of a desktop application with installer, ergonomics and accessibility, custom components, data persistence, rigorous code documentation.'
    ],
    'https://github.com/Clement-Torti/tournament-tree',
    'https://youtu.be/9WWGtvwoqaU',
    null,
    [ProjectCategory.DESKTOP])


]

