"use client"

export default function UserError({error, reset}:any){
    const {message} = error
    return (
        <div className="min-h-[calc(100vh-48px)] bg-lime-200 flex flex-col justify-center items-center font-serif space-y-2">
            <div className="font-bold">Error {message}</div>
            <button onClick={() => reset()} className="bg-gray-500 p-2 rounded hover:bg-gray-600 cursor-pointer">Try Again</button>
        </div>
    )
}