import Link from "next/link";

export default function F4() {
    return (
        <>
            <div>
                F4 Page
            </div>
            <div><Link href="/f1/f3">F3</Link></div>
            <div><Link href="/f1">F1</Link></div>
            <div><Link href="/about">about</Link></div>
        </>
    )
}