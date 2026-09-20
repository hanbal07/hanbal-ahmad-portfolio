import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-svh items-center justify-center pt-16 pb-24">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="mono-label text-sm text-accent">error 404</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-2">
            That route doesn&apos;t exist — which, honestly, is an honorable place
            to fail a test.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/">
              Back to the portfolio
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs text-ink-3">
            <span className="text-accent">$</span> cd ~/hanbal
          </p>
        </div>
      </Container>
    </div>
  );
}