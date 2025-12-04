import Link  from "next/link"

export default function Navbar() {

    return (
        <div className="bg-blue-500 text-white p-3 flex  justify-end  space-x-3">
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/users'>Users</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    )
}