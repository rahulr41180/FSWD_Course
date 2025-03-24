import Link from "next/link";

export default function F2() {
    return (
        <>
            <div>
                F2 Page
            </div>
            <div><Link href="/f1">F2</Link></div>
            <div><Link href="/f1/f3">F3</Link></div>
        </>
    )
}