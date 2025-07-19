"use client"
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Download', href: '#download' },
    { name: 'Creator', href: '#creator' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-bold text-lg text-primary font-headline tracking-wider">
          KeyLogChocker
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
