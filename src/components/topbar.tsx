import { CheckIcon, ChevronDown } from "lucide-react"
import Link from "next/link"
import React from "react"
export default function Topbar() {
    return (
        <div className="w-full bg-[#272343] hidden md:flex items-center p-1 justify-between">
            <div className="max-w-7xl mx-auto flex items-center justify-center font-sans text-xs ml-40">
                <div className="absolute flex text-white  mr-56"> <CheckIcon /></div>

                <p className="text-white">
                    Free Shipping On All Orders Over $50
                </p>
            </div>
            <ul className="text-white text-xs flex items-center gap-4 mr-32">
                Eng
                <ChevronDown />
                <Link href={"/"}><li>Faqs</li></Link>
                <Link href={"/"}><li>Need Help</li></Link>
            </ul>
        </div>
    )
}