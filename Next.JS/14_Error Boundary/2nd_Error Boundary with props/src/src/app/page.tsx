
import Link from "next/link";

export default function Home() {
  const productId = 100;

  return (
    <>
      <div><Link href="/">Home</Link></div>
      <div><Link href="/blog">Blog</Link></div>
    </>
  )
}