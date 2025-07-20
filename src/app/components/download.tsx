import { Button } from "@/components/ui/button"
import { DownloadCloud, ShieldCheck } from "lucide-react"

export function Download() {
  return (
    <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20 rounded-lg border border-primary/10">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">Get KeyLogChocker Now</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Protect your system today with our latest version. It's free, secure, and ready to go.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <a href="/downloads/KeylogChocker.exe" download>
  <Button size="lg" className="w-full cyber-glow text-lg py-8">
    <DownloadCloud className="mr-2 h-6 w-6" />
    Download for Windows
  </Button>
</a>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Version 1.0.0</span>
            <span>|</span>
            <span>SHA256: e3b0c442...98fc1c14</span>
          </div>
        </div>
      </div>
    </section>
  )
}
