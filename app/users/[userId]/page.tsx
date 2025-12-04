import BackButton from "@/components/BackButton"
import type { User } from "../page"

export default async function UserDetails({params}:{
    params:Promise<{userId: string}>
}) {
    
    const {userId} = await params
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const userDetail:User = await response.json()
   
    

    return (
        <div className="min-h-[calc(100vh-48px)] bg-lime-200 flex flex-col pt-10 items-center font-serif">
            <div className="w-full max-w-3xl bg-white p-5 rounded-2xl border">
                <h1 className="font-extrabold text-center text-2xl">{userDetail.name}</h1>
                <div className="text-lg"><span className="font-bold">Phone: </span>{userDetail.phone}</div>
                <div className="text-lg"><span className="font-bold">Email: </span>{userDetail.email}</div>
                <div className="text-lg"><span className="font-bold">Website: </span>{userDetail.website}</div>
                <BackButton />
            </div>
        </div>
    )
}