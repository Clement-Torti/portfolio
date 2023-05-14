import { Module } from '../models/module';
import { School } from '../models/school';
import { ModuleCategory } from '../models/moduleCategory';

export const MOCKED_MODULES: Module[] = [
    new Module('C++', School.IUT, 10, 'learning C++ with desc', ['Mr John Doe', 'Mme Jeanne Da'], ModuleCategory.PROGRAMMING),
    new Module('PL/SQL', School.ENSEEIHT, 20, 'Description 2', ['Reference 1', 'Reference 2'], ModuleCategory.BDD),
    new Module('Réseau téléphonique', School.UCM, 30, 'Description 3', ['Reference 1', 'Reference 2'], ModuleCategory.NETWORKING),
    new Module('TDD', School.Other, 40, 'Description 4', ['Reference 1', 'Reference 2'], ModuleCategory.SOFT_SKILL),
]

