import type { LucideIcon } from 'lucide-react';

export interface FooterLink {
  name: string;
  href: string;
  target?: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}
