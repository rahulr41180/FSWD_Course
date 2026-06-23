import Link from "next/link";

export default function InterceptedAbout() {
    return (
        <>
            <div>
            (...) Intercepted About page
            </div>
            <div><Link href="/f1/f2">F2</Link></div>
            <div><Link href="/f1/f4">F4</Link></div>
        </>
    )
}