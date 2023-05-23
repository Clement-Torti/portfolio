import { Hobby } from '../models/hobby';
import { HobbyCategory } from '../models/hobbyCategory';

export const MOCKED_HOBBIES: Hobby[] = [
    new Hobby(
        'Language hobby',
        'https://www.youtube.com/watch?v=BF2ou1viuOI&ab_channel=WallStreetJournal',
        HobbyCategory.LANGUAGES
    ),
    new Hobby(
        'Language hobby 2',
        '',
        HobbyCategory.LANGUAGES
    ),
    new Hobby(
        'guitare hobby',
        '',
        HobbyCategory.GUITARE
    ),
    new Hobby(
        'Tech hobby',
        '',
        HobbyCategory.TECH
    )
    
]

