"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Line =
    | { prompt: string; cmd: string; output?: never }
    | { output: string; prompt?: never; cmd?: never };

const lines: Line[] = [
    { prompt: "~", cmd: "whoami" },
    { output: "a teen who wants free stuff" },
    { prompt: "~", cmd: "cat requirements.txt" },
    { output: "age: 13-18" },
    { output: "experience: none needed" },
    { output: "cost: $0" },
    { prompt: "~", cmd: "./build-something-cool.sh" },
    { output: "shipping prizes..." },
];

const TYPE_SPEED = 45; // ms per character
const LINE_PAUSE = 350; // pause after a line finishes

export default function TerminalPreview() {
    const [lineIndex, setLineIndex] = useState(0);
    const [typedChars, setTypedChars] = useState(0);
    const [completedLines, setCompletedLines] = useState<Line[]>([]);

    useEffect(() => {
        if (lineIndex >= lines.length) return;
        const line = lines[lineIndex];

        if (!line.cmd) {
            const timeout = setTimeout(() => {
                setCompletedLines((prev) => [...prev, line]);
                setLineIndex((i) => i + 1);
            }, LINE_PAUSE);
            return () => clearTimeout(timeout);
        }

        if (typedChars < line.cmd.length) {
            const timeout = setTimeout(() => {
                setTypedChars((c) => c + 1);
            }, TYPE_SPEED);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setCompletedLines((prev) => [...prev, line]);
            setLineIndex((i) => i + 1);
            setTypedChars(0);
        }, LINE_PAUSE);
        return () => clearTimeout(timeout);
    }, [lineIndex, typedChars]);

    const isDone = lineIndex >= lines.length;
    const currentLine = lines[lineIndex];
    // Show the cmd line for the whole typing + pause window, not just while actively typing
    const isCurrentCmd = !isDone && !!currentLine?.cmd;

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
            <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <p className="ml-2 font-mono text-xs text-muted-foreground">
                    prompt@hackclub:~
                </p>
            </div>

            <div className="h-100 overflow-y-auto bg-background p-4 font-mono text-sm">
                <AnimatePresence initial={false}>
                    {completedLines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            {line.cmd ? (
                                <p className="text-foreground">
                                    <span className="text-primary">{line.prompt}</span>
                                    <span className="mx-1 text-muted-foreground">$</span>
                                    {line.cmd}
                                </p>
                            ) : (
                                <p className="text-muted-foreground">{line.output}</p>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isCurrentCmd && (
                    <p className="text-foreground">
                        <span className="text-primary">{currentLine.prompt}</span>
                        <span className="mx-1 text-muted-foreground">$</span>
                        {currentLine.cmd!.slice(0, typedChars)}
                        <span className="ml-0.5 inline-block h-4 w-2 -translate-y-0.5 bg-primary align-middle" />
                    </p>
                )}

                {isDone && (
                    <motion.span
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 1, 0, 0] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            times: [0, 0.5, 0.5, 1],
                        }}
                        className="mt-1 inline-block h-4 w-2 bg-primary align-middle"
                    />
                )}
            </div>
        </motion.div>
    );
}