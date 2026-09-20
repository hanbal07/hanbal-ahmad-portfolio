"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-svh items-center justify-center pt-16 pb-24">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="mono-label text-sm text-err">runtime error</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">
            Something crashed
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-2">
            An unexpected error interrupted that section. Reloading usually
            clears it right up.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={reset}>Try again</Button>
            <Button href="/" variant="outline">
              Back to the portfolio
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs text-ink-3">
            <span className="text-accent">$</span> systemctl --retry
          </p>
        </div>
      </Container>
    </div>
  );
}