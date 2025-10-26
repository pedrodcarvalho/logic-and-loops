import type { Project } from '@/types/project';

export const projects: readonly Project[] = [
  {
    id: 'minimax',
    name: 'Minimax Algorithm',
    description: 'Classic Tic-Tac-Toe game implementing the Minimax algorithm for optimal play',
    route: '/minimax',
    tags: ['Algorithms', 'Artificial Intelligence', 'Backtracking', 'Recursion', 'Trees'],
  },
  {
    id: 'todo-list',
    name: 'Todo List',
    description: 'Task management app demonstrating CRUD operations and local storage',
    route: '/todo-list',
    tags: ['State', 'Storage', 'Events'],
  },
  {
    id: 'calculator',
    name: 'Calculator',
    description: 'Mathematical calculator showcasing operators and expression evaluation',
    route: '/calculator',
    tags: ['Math', 'Logic', 'State'],
  },
  {
    id: 'sorting-visualizer',
    name: 'Sorting Visualizer',
    description: 'Visualize different sorting algorithms in action',
    route: '/sorting-visualizer',
    tags: ['Algorithms', 'Loops', 'Animations'],
  },
] as const;
