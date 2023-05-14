import { Module } from '../models/module';
import { SchoolCategory } from '../models/schoolCategory';
import { ModuleCategory } from '../models/moduleCategory';

export const MOCKED_MODULES: Module[] = [
    new Module('C++', SchoolCategory.IUT, 10, 'Lorem Ipsum is simply dummy text of the printing and typesetting industrysseng Lorem Ipsum passages, and mublishing software like Aldus PageMaker including versions of Lorem Ipsum' , ['Mr John Doe'], ModuleCategory.PROGRAMMING),
    new Module('C++', SchoolCategory.IUT, 10, 'Lorem Ipsum is simply dummy text of the printing and typesetting industrysseng Lorem Ipsum passages, and mublishing software like Aldus PageMaker including versions of Lorem Ipsum' , ['Mr John Doe'], ModuleCategory.PROGRAMMING),
    new Module('C++', SchoolCategory.IUT, 10, 'Lorem Ipsum is simply dummy text of the printing and typesetting industrysseng Lorem Ipsum passages, and mublishing software like Aldus PageMaker including versions of Lorem Ipsum' , ['Mr John Doe'], ModuleCategory.PROGRAMMING),
    new Module('C++', SchoolCategory.IUT, 10, 'Lorem Ipsum is simply dummy text of the printing and typesetting industrysseng Lorem Ipsum passages, and mublishing software like Aldus PageMaker including versions of Lorem Ipsum' , ['Mr John Doe'], ModuleCategory.PROGRAMMING),

    new Module('PL/SQL', SchoolCategory.ENSEEIHT, 20, 'Description 2', ['Mr John Doe'], ModuleCategory.BDD),
    new Module('Réseau téléphonique', SchoolCategory.UCM, 30, 'Description 3', ['Mr John Doe'], ModuleCategory.NETWORKING),
    new Module('TDD', SchoolCategory.Other, 40, 'Description 4', ['Mr John Doe'], ModuleCategory.SOFT_SKILL),
]

