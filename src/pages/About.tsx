import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About: React.FC = (): React.ReactElement => {
  const technologies: string[] = [
    'React',
    'TypeScript',
    'React Router',
    'shadcn/ui',
    'Tailwind CSS',
    'Redux Toolkit',
    'React Query',
    'Axios',
  ];

  const features: string[] = [
    'State management with Redux Toolkit',
    'Data fetching with React Query and Axios',
    'Client-side routing with React Router',
    'Beautiful UI components from shadcn/ui',
  ];

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-4xl">About Page</CardTitle>
              <CardDescription className="mt-2">
                Learn more about this project and its features
              </CardDescription>
            </div>
            <Badge variant="outline">v1.0.0</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Project Overview</h2>
            <p className="text-muted-foreground">
              This is a demonstration of React Router DOM navigation combined with modern UI
              components from shadcn/ui. The project showcases best practices in React application
              development.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech: string) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="space-y-2 text-muted-foreground">
              {features.map((feature: string) => (
                <li key={feature} className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="w-6 h-6 p-0 flex items-center justify-center"
                  >
                    ✓
                  </Badge>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="flex justify-center pt-4">
            <Link to="/">
              <Button variant="default" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
