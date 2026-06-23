
"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }: {children :React.ReactNode}) {
    const [userName, setUserName] = useState<string>("");

    return (
        <>
            <input type="text" />
            <h1>Prdocut List</h1>
            <div>{children}</div>
            <h2><Link href="/register">Register</Link></h2>
            <h2><Link href="/login">Login</Link></h2>
            <h2><Link href="/forgot-password">Forgot Password</Link></h2>
        </>
    )
}