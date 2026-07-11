"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link";

export default function WhatIsThis() {
    return (
        <section className="relative overflow-hidden bg-background px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1 text-sm text-muted-foreground">
                    What is this?
                </div>

                <h2 className="flex flex-wrap justify-center items-center gap-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    A YSWS event, but small
                    
                    <Tooltip>
                        <TooltipTrigger>
                            <span className="inline-flex cursor-help items-center rounded-full border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80">
                                and not real
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>
                                RSVP @{" "}

                                <a
                                    href="https://rsvp.hackclub.community/prompt"
                                    className="underline underline-offset-2 hover:text-primary"
                                >
                                    rsvp.hackclub.community/prompt
                                </a>
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </h2>

                <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                    <div className="mt-6 space-y-4 font-mono text-base text-muted-foreground">
                        <p className="before:mr-2 before:text-primary before:content-['>']">
                            Prompt is a <span className="font-semibold text-foreground">free online winter program</span> for
                            teens 13-18. Build any project you want, as long as it can be run in the terminal,
                            log your hours, and earn real prizes: Raspberry Pis, 3D printers, even a laptop. No
                            experience needed. Guides and a community of over 100,000 teens are there to help
                            you get started.
                        </p>

                        <p className="before:mr-2 before:text-primary before:content-['>']">
                            It runs <span className="font-thin text-muted-foreground">never</span>, with weekly drops, freebies, 
                            Run by Hack Club, a nonprofit that's shipped 60,000+ prizes to teen
                            makers across 48 US states and 129 countries.
                        </p>
                    </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                    Want to learn more Hack Club? Read more about{" "}
                    <Link
                        href="https://hackclub.com/philanthropy"
                        className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary"
                    >
                        our donors
                    </Link>{" "}
                    or{" "}
                    <Link
                        href="https://hackclub.com/"
                        className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary"
                    >
                        other programs
                    </Link>
                    .
                </p>
            </div>
        </section>
    )
}