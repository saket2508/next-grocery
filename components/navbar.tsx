import Link from "next/link"
import SearchBar from "./search"

export default function Navbar(){
    return (
        <nav className='bg-gray-700 text-white p-4 fixed top-0 w-full'>
            <div className="sm:flex justify-between items-center w-full hidden">
                <h2 className="text-base lg:text-xl font-semibold tracking-wide">
                    Grocery App
                </h2>
                <div className="flex flex-row items-end">
                    <div className="flex grow hidden sm:block">
                        <SearchBar/>
                    </div>
                    <div className="flex flex-col items-center text-xs ml-8">
                        Your Account
                        <p className="hover:underline text-sm focus:outline-none font-semibold">
                            <Link href="/login" passHref>
                                Log in/Sign up
                            </Link>
                        </p>
                    </div>
                    <div className="relative flex flex-col justify-center items-center text-xs font-semibold ml-8">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <Link href='/cart'>
                            <p className="hover:underline text-sm">
                                My Bag
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                <SearchBar/>
            </div>
        </nav>
    )
}