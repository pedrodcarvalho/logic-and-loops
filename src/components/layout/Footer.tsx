import { Github, Linkedin, User, Mail, Heart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import type { FooterLink, SocialLink } from '@/types';

export const Footer = (): React.ReactElement => {
  const currentYear: number = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/pedrodcarvalho', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/pedro-carvalho-a92bab210', label: 'LinkedIn' },
    { icon: User, href: 'https://pedrodcarvalho.github.io/portfolio', label: 'Portfolio' },
    { icon: Mail, href: 'mailto:pedrodc51203@gmail.com', label: 'Email' },
  ];

  const footerLinks: Record<string, FooterLink[]> = {
    Miscellaneous: [{ name: 'Technology', href: '#' }],
    Links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Portfolio', href: 'https://pedrodcarvalho.github.io/portfolio', target: '_blank' },
    ],
    Legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Licenses', href: '#' },
    ],
  };

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold underline underline-offset-0 decoration-yellow-400">
              Logic & Loops
            </h3>
            <p className="mb-6 text-sm text-muted-foreground max-w-md">
              Helping you strengthen your programming skills by revealing the logic behind coding
              concepts, algorithms, and data structures.
            </p>

            <div className="flex gap-2">
              {socialLinks.map((social: SocialLink) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:text-blue-400 transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]: [string, FooterLink[]]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold">{category}</h4>
              <ul className="space-y-3">
                {links.map((link: FooterLink) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.target || '_self'}
                      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Logic & Loops. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground hover:underline hover:decoration-yellow-400 transition-colors">
            Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> by Pedro Domitti
          </p>
        </div>
      </div>
    </footer>
  );
};
