import Link from "next/link"

export type User = {
    id: number,
    name: string,
    email: string,
    phone: string,
    website: string
}


export default async function Projects() {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok){
        throw new Error("Fetch failed")
    }
    const users:User[] = await response.json()
     
    
    return (
        <div className="min-h-[calc(100vh-48px)] bg-lime-200 flex flex-col justify-center items-center font-serif">
            <div className="font-bold text-2xl">USERS</div>
            {users.length ? <div className="mt-10 text-[1.5rem] flex flex-col space-y-2">
            {
                users.map((user) => (
                    <Link key={user.id} href={`/users/${user.id}`} className="hover:bg-lime-300 rounded p-2">User {user.id}</Link>
                ))
            }
            </div> : null}
        </div>
    )
}