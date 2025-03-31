
import Link from "next/link";

export default function InterceptedF2() {
    return (
        <>
            <div>
            (.) Intercepted F2 page
            </div>
            <div><Link href="/f1/">F1</Link></div>
            <div><Link href="/f1/f3">F3</Link></div>
        </>
    )
}