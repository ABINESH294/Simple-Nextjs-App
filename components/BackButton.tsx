"use client"

import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter()

    const handleBack = () => {
        router.back()
    }

    return (
        <>
        <button className="p-2 bg-green-700 text-white rounded text-center hover:bg-green-800 cursor-pointer" onClick={handleBack}>Back</button>
        </>
    )
}