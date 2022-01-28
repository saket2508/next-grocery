import Link from "next/link"

type ActionButtonPropType = {
    product: Product;
    isAuth: boolean;
    cart: Order[] | null;
    addItem: (id: string) => void;
    removeItem: (id: string) => void;
}

export function ActionButton(props: ActionButtonPropType){
    const { isAuth, product, cart, addItem, removeItem } = props
    if(!isAuth || !cart){
        return(
                <Link href='/login'>
                    <button className="text-center font-semibold border border-yellow-600 rounded-md text-yellow-600 p-1 uppercase text-sm focus:outline-none hover:bg-yellow-600 hover:text-white w-full">
                        ADD TO CART
                    </button> 
                </Link>
        )
    }
    if(cart.length === 0) {
        return (
            <button onClick={() => addItem!(product.id)} className="text-center font-semibold border border-yellow-600 rounded-md text-yellow-600 p-1 uppercase text-sm focus:outline-none hover:bg-yellow-600 hover:text-white w-full">
                ADD TO CART
            </button> 
        )
    }
    let itemInCart = cart.find((item) => item.product_id === product.id)
    let qty = itemInCart?.qty
    if(!itemInCart){
        return(
                <button onClick={() => addItem!(product.id)} className="text-center font-semibold border border-yellow-600 rounded-md text-yellow-600 p-1 uppercase text-sm focus:outline-none hover:bg-yellow-600 hover:text-white w-full">
                    ADD TO CART
                </button> 
        )
    }
    return(
        <div className="text-yellow-600 border border-yellow-600 font-semibold rounded-md p-1 uppercase text-sm focus:outline-none hover:text-white hover:bg-yellow-600 w-full">
            <div className="flex justify-evenly max-w-64">
                    <button onClick={() => removeItem!(product.id)} className="flex-none focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                        </svg>
                    </button>
                    <div>
                        {qty}
                    </div>
                    <button onClick={() => addItem!(product.id)} className="flex-none focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
            </div>
        </div>                     
    )
}

export function ActionButtonLarge(props: ActionButtonPropType){
    const { isAuth, product, cart, addItem, removeItem } = props
    if(!isAuth || !cart){
        return(
            <Link href='/login'>
                <button className="p-1 text-center border border-yellow-600 font-semibold rounded-md text-yellow-600 uppercase w-64 mb-4 focus:outline-none hover:bg-yellow-600 hover:text-white">
                    ADD TO CART
                </button> 
            </Link>
        )
    }
    if(cart.length === 0) {
        return (
            <button onClick={() => addItem!(product.id)} className="p-1 text-center border border-yellow-600 font-semibold rounded-md text-yellow-600 uppercase w-64 mb-4 focus:outline-none hover:bg-yellow-600 hover:text-white">
                ADD TO CART
            </button> 
        )
    }
    let itemInCart = cart.find((item) => item.product_id === product.id)
    let qty = itemInCart?.qty
    if(!itemInCart){
        return(
            <button onClick={() => addItem!(product.id)} className="p-1 text-center border border-yellow-600 font-semibold rounded-md text-yellow-600 uppercase w-64 mb-4 focus:outline-none hover:bg-yellow-600 hover:text-white">
                ADD TO CART
            </button> 
        )
    }
    return(
        <div className="p-1 text-center border border-yellow-600 font-semibold rounded-md text-yellow-600 uppercase w-64 mb-4 focus:outline-none hover:bg-yellow-600 hover:text-white">
            <div className="flex justify-evenly max-w-full">
                <button onClick={() => removeItem!(product.id)} className="flex-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                </button>
                <div>
                    {qty}
                </div>
                <button onClick={() => addItem!(product.id)} className="flex-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>
        </div>                     
    )
}