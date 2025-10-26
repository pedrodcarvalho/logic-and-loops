import { Link } from 'react-router-dom';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { BackButton } from '@/components/ui/back-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NotFound: React.FC = (): React.ReactElement => {
  return (
    <div className="flex min-h-svh flex-col items-center gap-8 p-8">
      <Navbar />

      <div className="flex-1 flex items-center justify-center w-full max-w-4xl">
        <Card className="w-full border-2">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <h1 className="text-9xl font-black text-primary/10 select-none">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🔎</div>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Page Not Found</h2>
                <p className="text-muted-foreground text-lg max-w-md">
                  Oops! The page you're looking for seems to have wandered off into the void. It
                  might have been moved, deleted, or never existed.
                </p>
              </div>

              <div className="w-full max-w-md p-6 rounded-lg bg-muted/50 space-y-3">
                <p className="font-semibold text-sm">Here's what you can do:</p>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Check the URL for typos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Go back to the home page and start fresh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Browse our available projects</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/">
                  <Button size="lg" className="w-full sm:w-auto">
                    Back to Home
                  </Button>
                </Link>
                <BackButton />
              </div>

              <p className="text-xs text-muted-foreground pt-4">
                Lost in code? Don't worry, even the best developers get 404 errors!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
