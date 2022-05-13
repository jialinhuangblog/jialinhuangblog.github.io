import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Hello World. latest nextjs and react
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
