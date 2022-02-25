import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SearchBar() {
    const router = useRouter();
    const [query, setQuery] = useState<string>();

    const handleSearch = () => {
        if (!query || query.length < 3) {
            return;
        }
        let q = query.toLowerCase();
        router.push(`/search/${q}`);
    };

    return (
        <>
            <div className="hidden sm:block">
                <div className="relative text-gray-600">
                    <input
                        className="search nav-search focus:outline-none pl-2 py-2 pr-6"
                        type="search"
                        name="search"
                        placeholder="Search for products"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="absolute right-0 top-0 mt-3 mr-2">
                        <button
                            className="bg-transparent inline-block m-0 p-0"
                            onClick={() => handleSearch()}
                        >
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
                        </button>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                <div className="relative text-gray-600">
                    <input
                        className="search focus:outline-none pl-2 py-2 pr-6"
                        type="search"
                        name="search"
                        placeholder="Search for products"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="absolute right-0 top-0 mt-3 mr-2">
                        <button
                            className="bg-transparent inline-block m-0 p-0"
                            onClick={() => handleSearch()}
                        >
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
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
