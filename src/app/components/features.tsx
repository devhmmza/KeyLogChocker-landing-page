import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Cpu, ScanLine, Code } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <Monitor className="w-8 h-8 text-primary" />,
    title: 'Real-time Monitoring',
    description: 'Constant background surveillance to catch threats the moment they appear.',
  },
  {
    icon: <ScanLine className="w-8 h-8 text-primary" />,
    title: 'Deep System Scan',
    description: 'Comprehensive analysis of system files and memory for hidden threats.',
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: 'Zero Performance Impact',
    description: 'Optimized to run silently without slowing down your machine.',
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: '100% Free & Open Source',
    description: 'Transparency and community-driven security you can trust.',
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Core Features</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        KeyLogChocker is equipped with powerful tools to ensure your digital safety.
                    </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-muted/40 border-primary/20 hover:border-primary/50 transition-colors">
                            <CardHeader className="flex flex-row items-center gap-4">
                                {feature.icon}
                                <CardTitle className="text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center p-4 border border-primary/20 rounded-lg bg-black">
                <Image
                    src="/downloads/keyloggerscr.jpg"
                    width={900}
                    height={900}
                    alt="KeyLogChocker application screenshot showing detection process in a terminal."
                    data-ai-hint="terminal ui"
                    className="rounded-md object-cover"
                />
            </div>
        </div>
    </section>
  );
}
