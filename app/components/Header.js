import Link from 'next/link'

export default function Header() {
    return (
        <div className="text-red-700 my-7 mx-5">
            <Link href="/">Home</Link>
            <Link href="/about" className="ml-3">About</Link>
        </div>
    )
}
