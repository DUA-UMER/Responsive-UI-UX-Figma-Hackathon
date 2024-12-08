import Link from "next/link"
export default function Navbar() {
    return (
        <div className=" w-full border-b-2 text-xs bg-[#FFFFFF] p-4">
            <div className=" hidden md:flex ml-32 gap-4 font-sans ">
                <Link href={'/'} className=" text-sm font-normal">Home</Link>
                <Link href={'contact'} className=" text-sm font-normal">Shope</Link>
                <Link href={'product'} className=" text-sm font-normal">Product</Link>
                <Link href={'page'} className=" text-sm font-normal">Pages</Link>
                <Link href={'about'} className=" text-sm font-normal">About</Link>
                <p className=" text-sm font-normal   ml-96">Contact +921132168 </p>
            </ div>
        </div>
    )
}