import { Header } from '@/app/components/header';
import { Hero } from '@/app/components/hero';
import { Features } from '@/app/components/features';
import { HowItWorks } from '@/app/components/how-it-works';
import { Download } from '@/app/components/download';
import { Creator } from '@/app/components/creator';
import { EncryptedText } from '@/app/components/encrypted-text';

export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 md:px-6 space-y-24 md:space-y-32 mt-12">
          <Features />
          <HowItWorks />
          <Download />
          <Creator />
        </div>
      </main>
      <footer className="text-center p-8 text-muted-foreground text-sm border-t border-border mt-24 md:mt-32">
        <p>&copy; {new Date().getFullYear()} KeyLogChocker. All rights reserved. </p>
        <p className="font-code text-xs mt-2">v1.0.0 - 'Creator - HAMZA'</p>
      </footer>
      <EncryptedText />
    </div>
  );
}
