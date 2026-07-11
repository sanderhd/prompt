"use client";

import Hero from "@/components/Hero";
import WhatIsThis from "@/components/WhatIsThis";

export default function Home() {
    return (
        <div>
            <Hero />

            <div className="mx-auto grid w-full max-w-7xl border border-border" />

            <WhatIsThis />
        </div>
    )
}