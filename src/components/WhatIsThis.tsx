export default function WhatIsThis() {
    return (
        <section className="relative overflow-hidden bg-background px-6 py-24">
            <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted px-4 py-1 text-sm text-muted-foreground">
                    What is this?
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    A YSWS event, but small <span className="text-muted">and not real</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                    You make a project, we send you free stuff. No huge requirements,
                    no crazy scope - just build something cool and share it with us
                    before the deadline.
                </p>
            </div>
        </section>
    )
}