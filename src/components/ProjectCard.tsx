import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import type { Project } from '@/types/project';
import type { FC, ReactElement } from 'react';

interface ProjectCardProps {
  readonly project: Project;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }): ReactElement => {
  return (
    <Link to={project.route} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105">
        <CardHeader>
          <CardTitle className="group-hover:text-primary transition-colors">
            {project.name}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
