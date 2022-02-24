import Link from "next/link";
import { products } from "../products.dummy";

export default function TopProducts() {
  const trendingProducts = products.slice(0, 6);
  const bestsellers = products.slice(6, 12);

  return (
    <>
      <div className="max-w-full py-8">
        <div className="px-6">
          <div className="text-lg sm:text-xl font-semibold">
            Trending Products
          </div>
          <div className="scoll-container grid grid-flow-col gap-3 overflow-x-auto text-xs pt-6">
            {trendingProducts.map((item: Product, index: number) => {
              return (
                <div
                  key={index}
                  className="p-4 border border-gray-300 bg-white rounded-sm w-72 flex-shrink-0"
                >
                  <div className="flex flex-col w-full">
                    <div className="p-1 my-2 w-16 flex items-center justify-center bg-green-600 text-white text-xs uppercase rounded-md font-bold">
                      {item.discount}% Off
                    </div>
                    <div className="mb-3 flex justify-center">
                      <Link href={`/category/${item.category}/${item.id}`}>
                        <img
                          className="h-32 w-32 object-fit"
                          src={item.img_lg}
                        />
                      </Link>
                    </div>
                    <div className="flex items-end text-yellow-600 font-bold text-base mb-2">
                      ₹{item.price}
                      <div className="line-through text-gray-600 text-sm font-medium pl-2">
                        ₹{item.price_before_discount}
                      </div>
                    </div>
                    <div className="text-gray-600 tracking-wide text-sm overflow-hidden overflow-ellipsis whitespace-nowrap mb-1">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-600">{item.quantity}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-full py-8">
        <div className="px-6">
          <div className="text-lg sm:text-xl font-semibold">Bestsellers</div>
          <div className="scoll-container grid grid-flow-col gap-3 overflow-x-auto text-xs pt-6">
            {bestsellers.map((item: Product, index: number) => {
              return (
                <div
                  key={index}
                  className="p-4 border border-gray-300 bg-white rounded-sm w-72 flex-shrink-0"
                >
                  <div className="flex flex-col w-full">
                    <div className="p-1 my-2 w-16 flex items-center justify-center bg-green-600 text-white text-xs uppercase rounded-md font-bold">
                      {item.discount}% Off
                    </div>
                    <div className="mb-3 flex justify-center">
                      <Link href={`/category/${item.category}/${item.id}`}>
                        <img
                          className="h-32 w-32 object-fit"
                          src={item.img_lg}
                        />
                      </Link>
                    </div>
                    <div className="flex items-end text-yellow-600 font-bold text-base mb-2">
                      ₹{item.price}
                      <div className="line-through text-sm text-gray-600 font-medium pl-2">
                        ₹{item.price_before_discount}
                      </div>
                    </div>
                    <div className="text-gray-600 tracking-wide text-sm overflow-hidden overflow-ellipsis whitespace-nowrap mb-1">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-600">{item.quantity}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
