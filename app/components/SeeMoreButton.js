"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

const SeeMore = dynamic(() => import("./SeeMore"))

export default function SeeMoreButton() {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <div>
            <button onClick={() => { setSeeMore(!seeMore) }} className="p-3 rounded shadow-xl border">See more...</button>
            {seeMore && <SeeMore />}
        </div>
    )
}
