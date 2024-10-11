import type { Project } from '@/modules/projects/interfaces/project.interface';

export const FakeProjects = [
  {
    id: '1',
    name: 'Project 1',
    task: [
      { id: '1', name: 'Task 1', completedAt: new Date() },
      { id: '2', name: 'Task 2' },
      { id: '3', name: 'Task 3' },
      { id: '4', name: 'Task 4' },
    ],
  },
  {
    id: '2',
    name: 'Project 2',
    task: [],
  },
  {
    id: '3',
    name: 'Project 3',
    task: [
      { id: '1', name: 'Task 1' },
      { id: '2', name: 'Task 2', completedAt: new Date() },
    ],
  },
];
