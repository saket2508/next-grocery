import Link from "next/link"

export default function TopCategories(){
    return(
        <div className="w-full h-full py-6 bg-white rounded-b-md">
            <div className="px-6">
                <div className="flex justify-stretch lg:justify-between gap-6 overflow-x-auto text-xs w-full h-full">
                    <Link href="/category/Grocery & Staples" passHref>
                        <div className="flex flex-col flex-shrink-sddddddyaq0 items-center text-xs">
                            <img src="https://webcdn.grofers.com/cdn/pdp/category-l0-16.jpg" className="h-24 w-24 flex-shrink-0"/>
                            <span className="hover:text-yellow-600">Grocery & Staples</span>
                        </div>     
                    </Link>
                    <Link href="/category/Fruits & Vegetables" passHref>
                        <div className="flex flex-col flex-shrink-0 items-center text-xs">
                            <img src="https://webcdn.grofers.com/cdn/pdp/category-l0-1487.jpg" className="h-24 w-24 flex-shrink-0"/>
                            <span className="hover:text-yellow-600">Fruits & Vegetables</span>
                        </div> 
                    </Link>
                    <Link href="/category/Personal Care" passHref>
                        <div className="flex flex-col flex-shrink-0 items-center text-xs">
                            <img src="https://webcdn.grofers.com/cdn/pdp/category-l0-163.jpg" className="h-24 w-24 flex-shrink-0"/>
                            <span className="hover:text-yellow-600">Personal Care</span>
                        </div> 
                    </Link>
                    <Link href="/category/Household Items" passHref>
                        <div className="flex flex-col flex-shrink-0 items-center text-xs">
                            <img src="https://webcdn.grofers.com/cdn/pdp/category-l0-18.jpg" className="h-24 w-24 flex-shrink-0"/>
                            <span className="hover:text-yellow-600">Household Care</span>
                        </div> 
                    </Link>
                    <Link href="/category/Food & Snacks" passHref>
                        <div className="flex flex-col flex-shrink-0 items-center text-xs"> 
                            <img src="https://webcdn.grofers.com/cdn/pdp/category-l0-13.jpg" className="h-24 w-24 flex-shrink-0"/>
                            <span className="hover:text-yellow-600">Biscuits, Snacks & Chocolates</span>
                        </div>
                    </Link>
                    <Link href="/category/Beverages" passHref>
                        <div className="flex flex-col flex-shrink-0 items-center text-xs">
                            <img src="https://webcdn.grofers.com/cdn/pdp/category-l0-12.jpg" className="h-24 w-24 flex-shrink-0"/>
                            <span className="hover:text-yellow-600">Beverages</span>
                        </div> 
                    </Link>
                    <Link href="/category/Breakfast & Dairy" passHref>
                        <div className="flex flex-col flex-shrink-0 items-center text-xs">
                            <img src="https://webcdn.grofers.com/cdn/pdp/category-l0-14.jpg" className="h-24 w-24 flex-shrink-0"/>
                            <span className="hover:text-yellow-600">Breakfast & Dairy</span>
                        </div> 
                    </Link>
                    <Link href="/category/Noodles, Sauces & Instant Food" passHref>
                        <div className="flex flex-col flex-shrink-0 items-center text-xs">
                            <img src="https://webcdn.grofers.com/cdn/pdp/category-l0-15.jpg" className="h-24 w-24 flex-shrink-0"/>
                            <span className="hover:text-yellow-600">Noodles, Sauces & Instant Food</span>
                        </div> 
                    </Link>
                </div>
            </div>
      </div>
    )
}