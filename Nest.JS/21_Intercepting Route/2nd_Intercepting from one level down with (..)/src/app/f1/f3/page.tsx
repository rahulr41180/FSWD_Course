import Link from "next/link";

export default function F3() {
    return (
        <>
            <div>
                F3 Page
            </div>
            <div><Link href="/f1/f2">F2</Link></div>
            <div><Link href="/f1/f4">F4</Link></div>
        </>
    )
}