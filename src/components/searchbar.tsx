import Link from "next/link";
import { Input } from "./ui/input";
import { BaggageClaim, BaggageClaimIcon, CarFrontIcon, CarrotIcon, CarTaxiFront, CheckCheck, CheckIcon, Heart, LucideShoppingBag, LucideShoppingCart, Menu, Search, ShoppingBag, ShoppingBagIcon, ShoppingBasketIcon, ShoppingCart, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import * as React from "react";
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Sheet } from "./ui/sheet";

export default function Searchbar() {
    return (
        <nav className=" w-full border-b-2 bg-[#F0F2F3] p-4">
            <div className="max-w-7xl h-4 ml-32  mx-auto flex items-center justify-between">
                <img className="h-6 w-28 " src="1logo.png" alt="Logo" />

                <div className="hidden w-20 md:flex ml-auto mr-20">
                    <div className="relative">
                        <ShoppingCartIcon className="absolute right-2 top-2 " />
                        <Input placeholder="cart" className="bg-white font-xs" />
                    </div>
                </div>
                <Sheet>
                    <SheetTrigger>
                        <Button variant={"outline"} size={"icon"} className="rounded-full">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <img className="h-6 w-28 ml-10" src="1logo.png" alt="Logo" />
                            </SheetTitle>
                        </SheetHeader>
                        <div className="mt-4">
                            <div className="relative">
                                <Input placeholder="cart" className="bg-offwhite " />
                                <ShoppingCartIcon className="absolute right-2 top-2" />
                            </div>
                        </div>
                        <div className="mt-4 space-x-2">
                            <Button variant={"outline"} size={"icon"} className="rounded-2xl">
                                <CheckIcon />
                            </Button>
                            <Button variant={"outline"} size={"icon"} className="rounded-full">
                                <ShoppingCartIcon />
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}