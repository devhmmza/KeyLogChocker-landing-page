import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScanIcon } from '@/app/components/icons/scan-icon';
import { AnalyzeIcon } from '@/app/components/icons/analyze-icon';
import { ReportIcon } from '@/app/components/icons/report-icon';

const steps = [
    {
        icon: <ScanIcon />,
        title: "1. Scan",
        description: "Initiate a scan to let KeyLogChocker's algorithm comb through your system's kernel and memory for suspicious patterns.",
    },
    {
        icon: <AnalyzeIcon />,
        title: "2. Analyze",
        description: "Our engine cross-references findings with a vast database of keylogger signatures and heuristic behaviors.",
    },
    {
        icon: <ReportIcon />,
        title: "3. Report",
        description: "Receive a detailed, easy-to-understand report of any threats found, with clear steps for removal.",
    },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Simple Yet Powerful</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Understand our three-step process to a safer digital environment.
                </p>
            </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
            {steps.map((step) => (
                <Card key={step.title} className="text-center bg-transparent border-0 shadow-none">
                    <CardHeader className="flex justify-center items-center">
                        {step.icon}
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <CardTitle className="text-2xl text-primary/90">{step.title}</CardTitle>
                        <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
  )
}
