'use client';
import { useState, useEffect } from 'react';

const randomChar = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_!@#$%^&*()-+[]{}/<>?';
  return chars[Math.floor(Math.random() * chars.length)];
};

const generateGibberish = (length: number) => {
  return Array.from({ length }, randomChar).join('');
};

export function EncryptedText() {
  const [snippet, setSnippet] = useState<{ key: number; text: string; top: string; left: string; } | null>(null);

  useEffect(() => {
    const showSnippet = () => {
      const text = generateGibberish(Math.floor(Math.random() * 10) + 10);
      const top = `${Math.random() * 90}vh`;
      const left = `${Math.random() * 90}vw`;
      setSnippet({ key: Date.now(), text, top, left });
    };

    const interval = setInterval(showSnippet, Math.random() * 4000 + 3000);

    return () => clearInterval(interval);
  }, []);

  if (!snippet) return null;

  return (
    <div
      key={snippet.key}
      className="fixed z-[999] font-code text-primary/30 text-xs p-1 bg-background/30 rounded-sm animate-fade-out pointer-events-none"
      style={{ top: snippet.top, left: snippet.left, animation: 'fadeOut 2s forwards' }}
    >
      {snippet.text}
    </div>
  );
}
