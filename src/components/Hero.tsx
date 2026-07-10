"use client";

import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Hero() {
    const router = useRouter();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        router.push("https://rsvp.hackclub.community/prompt/")
    }

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
            <div className="absolute inset-0 h-full w-full bg-background opacity-30 [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#fecdd3_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                <div></div>
            </div>

            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                    <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1 text-sm text-muted-foreground">
                        New Generation YSWS
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Make projects
                        <span className="block text-primary">
                            Get prizes
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                        The smalles YSWS event of the winter: <br />
                        make anything you want and earn free prizes. 
                    </p>

                    <div className="mt-6 w-full max-w-md">
                        <form
                            onSubmit={handleSubmit}
                            className="flex w-full items-center gap-1 rounded-full border border-border bg-muted/50 p-1.5 pl-5"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="h-9 border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
                            />
                            <Button type="submit" className="h-9 rounded-full px-5">
                                Start
                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="flex h-100 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                    <div className="text-center text-muted-foreground">
                        <p>Terminal (WIP)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}