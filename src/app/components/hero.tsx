'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HEADLINE_TEXT = "Detect. Protect. Perfect.";

export function Hero() {
  const [headline, setHeadline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = HEADLINE_TEXT;
      if (isDeleting) {
        setHeadline(fullText.substring(0, headline.length - 1));
        setTypingSpeed(75);
      } else {
        setHeadline(fullText.substring(0, headline.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && headline === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && headline === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [headline, isDeleting, typingSpeed, loopNum]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden py-20" id="home">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      <div className="relative z-10 p-4 container mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-primary font-headline">
          {headline}
          <span className="animate-ping opacity-75">_</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto glitch" data-text="Free keylogger detection for everyone.">
          Free keylogger detection for everyone.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button asChild size="lg" className="cyber-glow bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            <Link href="#download">Download Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
