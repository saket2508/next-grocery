import { useContext } from 'react';
import Link from 'next/link';
import SearchBar from './search';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
    const { username, authLoading } = useContext(AuthContext);
    const { cart, signOut, cartLoading } = useContext(CartContext);

    return (
        <nav className="bg-gray-700 text-white p-4 fixed top-0 w-full z-10">
            <div className="sm:flex justify-between items-center w-full hidden">
                <h2 className="text-base lg:text-xl font-semibold tracking-wide">Grocery App</h2>
                <div className="flex flex-row items-end">
                    <div className="flex-grow hidden sm:block">
                        {authLoading || cartLoading ? (
                            <div className="relative text-gray-600">
                                <input
                                    className="search nav-search focus:outline-none pl-2 py-2 pr-6"
                                    type="search"
                                    name="search"
                                    placeholder="Search for products"
                                />
                                <div className="absolute right-0 top-0 mt-3 mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <SearchBar />
                        )}
                    </div>
                    {username ? (
                        <div className="flex flex-col items-center text-xs ml-8">
                            Hello, {username}
                            <button
                                onClick={() => signOut!()}
                                className="bg-transparent hover:underline text-sm focus:outline-none font-semibold"
                            >
                                Log out
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-xs ml-8">
                            Your Account
                            <p className="hover:underline text-sm focus:outline-none font-semibold">
                                <Link href="/login">Log in/Sign up</Link>
                            </p>
                        </div>
                    )}
                    <div className="relative flex flex-col justify-center items-center text-xs font-semibold ml-8">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            {cart && cart.length > 0 && (
                                <div className="bg-red-700 h-5 w-5 flex justify-center items-center text-white rounded-full absolute right-0 top-0 text-xs">
                                    {cart.length}
                                </div>
                            )}
                        </div>
                        <Link href="/cart">
                            <p className="hover:underline text-sm">My Bag</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                {authLoading || cartLoading ? (
                    <div className="relative text-gray-600">
                        <input
                            className="search focus:outline-none pl-2 py-2 pr-6"
                            type="search"
                            name="search"
                            placeholder="Search for products"
                        />
                        <div className="absolute right-0 top-0 mt-3 mr-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <SearchBar />
                )}
            </div>
        </nav>
    );
}
