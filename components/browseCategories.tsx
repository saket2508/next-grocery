import Link from "next/link"

export default function BrowseCategories(){
    return(
        <div className="max-w-full pb-8">
        <div className="px-6 pt-4">
          <div className="text-lg sm:text-xl font-semibold pt-6">
            Browse Categories
          </div>
            <div className="pt-6">
              <div className="grid lg:grid-flow-col lg:grid-rows-3 gap-3">
                <div className="p-4 bg-white rounded-md border border-gray-300">
                  <div>
                  <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Food & Snacks">
                            <img className="h-24 w-24 object-cover" src="https://5.imimg.com/data5/SELLER/Default/2021/1/ZP/EN/HA/121085193/71uq3b9609l-sl1500--500x500.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col text-sm sm:text-base">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 10% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Food & Snacks
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                  </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-md border border-gray-300">
                  <div>
                  <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Beverages">
                            <img className="h-24 w-24 object-cover" src="https://images-na.ssl-images-amazon.com/images/I/71PiszDkulL._SL1500_.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 55% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Beverages
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                  </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-md border border-gray-300">
                 <div>
                 <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Fruits & Vegetables">
                            <img className="h-24 w-24 object-fit" src="https://m.media-amazon.com/images/I/319jVF8LQyS._AC_UL480_FMwebp_QL65_.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 10% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Fruits & Vegetables
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                  </div>
                 </div>
                </div>  
                <div className="p-4 bg-white rounded-md border border-gray-300">
                  <div>
                  <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Personal Care">
                            <img className="h-24 w-24 object-cover" src="https://images-na.ssl-images-amazon.com/images/I/71KKYecRpiL._SY355_.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 10% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Personal Care
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                  </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-md border border-gray-300">
                  <div>
                  <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Pet Care">
                            <img className="h-24 w-24 object-cover" src="https://images-na.ssl-images-amazon.com/images/I/61DtYJyqHeL._SX679_.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 15% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Pet Care
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                  </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-md border border-gray-300">
                 <div>
                 <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Household Items">
                            <img className="h-24 w-24 object-cover" src="https://images-na.ssl-images-amazon.com/images/I/61zl3nbmnBL._SX679_.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 30% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Household Items
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                  </div>
                 </div>
                </div>
                <div className="p-4 bg-white rounded-md border border-gray-300">
                 <div>
                 <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Noodles, Sauces & Instant Food">
                            <img className="h-24 w-24 object-cover" src="https://images-na.ssl-images-amazon.com/images/I/81x7cxq8HeL._SX425_.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 35% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Noodles & Instant Food
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                  </div>
                 </div>
                </div>
                <div className="p-4 bg-white rounded-md border border-gray-300">
                  <div>
                  <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Breakfast & Dairy">
                            <img className="h-24 w-24 object-cover" src="https://m.media-amazon.com/images/I/71cqU2ZyPNL._AC_UL480_FMwebp_QL65_.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 15% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Breakfast & Dairy
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                  </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-md border border-gray-300">
                 <div>
                 <div className="flex justify-between items-center">
                      <div className="inline-flex justify-start items-center">
                          <Link href="/category/Grocery & Staples">
                            <img className="h-24 w-24 object-cover" src="https://m.media-amazon.com/images/I/61n1hm72dlL._AC_UL480_FMwebp_QL65_.jpg"/>
                          </Link>
                          <div className="pl-4">
                            <div className="flex flex-col">
                              <div className="text-green-600 text-xs uppercase font-semibold">
                                Up to 20% Off
                              </div>
                              <div className="pt-2 uppercase text-sm font-bold">
                                Grocery & Staples
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="text-yellow-600 pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      </div>
                  </div>
                 </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}