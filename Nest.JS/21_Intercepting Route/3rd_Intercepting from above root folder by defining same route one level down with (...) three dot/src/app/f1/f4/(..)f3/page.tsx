import Link from "next/link";

export default function InterceptedF3() {
    return (
        <>
            <div>
            (..) Intercepted F3 page
            </div>
            <div><Link href="/f1/f2">F2</Link></div>
            <div><Link href="/f1/f4">F4</Link></div>
        </>
    )
}