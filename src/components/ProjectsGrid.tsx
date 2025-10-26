import { projects } from '@/data/projects';

import { ProjectCard } from './ProjectCard';

import type { Project } from '@/types/project';
import type { FC, ReactElement } from 'react';

export const ProjectsGrid: FC = (): ReactElement => {
  return (
    <div className="w-full max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
