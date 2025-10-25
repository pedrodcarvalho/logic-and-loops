import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useTypewriter } from '@/utils/animations';

import type { NavLink } from '@/types';

export const Navbar = (): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const { displayText: logicText } = useTypewriter({
    words: ['Logic', 'Code', 'Algorithms', 'Programming', 'Thinking'],
    speed: 200,
    deleteSpeed: 100,
    delay: 0,
    deleteDelay: 3000,
    loop: true,
  });

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-xl font-bold font-family-title">
              <span className="underline underline-offset-0 decoration-yellow-400">
                {logicText}
                <span className="animate-pulse font-normal text-sm font-family-default">|</span>
              </span>
              <span className="mx-1">&</span>L<span className="text-blue-400">oo</span>ps
            </h1>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActiveLink(link.href) ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActiveLink(link.href) ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
