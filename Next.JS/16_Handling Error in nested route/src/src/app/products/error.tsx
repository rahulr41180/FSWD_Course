
"use client";

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void; }) {
    return (
        <div>
            {error.message}
            <button onClick={() => { console.log("clicked"); reset()}}>Try Again</button>
        </div>
    )
}