import Link from "next/link"

export default function BottomNavbar(){
    return(
        <nav className="block sm:hidden bottom-0 right-0 left-0 flex-0 fixed overflow-hidden w-100">
            <div className="py-5 px-10 bottomnavbar bg-white text-gray-700 shadow-lg w-full flex justify-around">
                <Link href='/'>
                    <div className="text-gray-700 flex flex-col items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </div> 
                </Link>
                <Link href='/cart'>
                <div className="relative text-gray-600 flex flex-col items-center text-sm pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Bag
                    {/* {cart && cart.length > 0 && <div className="bg-red-700 h-5 w-5 flex justify-center items-center text-white rounded-full absolute right-0 top-0 text-xs">
                        {cart.length}
                    </div>} */}
                </div>
                </Link>
            </div>
        </nav>
    )
}