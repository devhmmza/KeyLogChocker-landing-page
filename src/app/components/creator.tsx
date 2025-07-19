import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const specializations = ["AGI", "AI/ML", "WebDev", "CyberSec"];
const socialLinks = [
    { icon: <Github />, href: "https://github.com", name: "GitHub" },
    { icon: <Linkedin />, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: <Twitter />, href: "https://twitter.com", name: "Twitter" },
];

export function Creator() {
    return (
        <section id="creator" className="w-full py-12 md:py-24 lg:py-32">
            <div className="grid gap-10 md:grid-cols-2">
                <div className="flex justify-center items-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-50"></div>
                        <Image
                            src="https://placehold.co/256x256.png"
                            width={256}
                            height={256}
                            alt="Portrait of Hamza, the creator of KeyLogChocker."
                            data-ai-hint="cyberpunk portrait"
                            className="relative rounded-full border-4 border-background object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter text-primary">About the Creator</h2>
                    <h3 className="text-2xl font-semibold">Hamza - Second Year BSAI</h3>
                    <p className="text-muted-foreground italic text-lg">"I build what others overthink."</p>
                    <div>
                        <h4 className="font-semibold mb-2 text-primary/80">Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                            {specializations.map((spec) => (
                                <Badge key={spec} variant="outline" className="text-primary border-primary/50 font-code">{spec}</Badge>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h4 className="font-semibold mb-2 text-primary/80">Connect:</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <Button key={link.name} asChild variant="outline" size="icon" className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary cyber-glow-secondary transition-all">
                                    <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                                        {link.icon}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
