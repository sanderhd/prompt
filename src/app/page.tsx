"use client";

import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
    const router = useRouter();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        router.push("https://rsvp.hackclub.community/prompt/")
    }

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
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

                    <div className="flex mt-6 w-full max-w-md gap-2">
                        <form
                            onSubmit={handleSubmit}
                            className="flex w-full max-w-md items-center gap-2 rounded-lg border border-border bg-background p-1"
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="border-0 shadow-none focus-visible:ring-0"
                            />

                            <Button type="submit">
                                Start
                                <ArrowRightIcon />
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