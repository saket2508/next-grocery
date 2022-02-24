import { createContext, useContext, useState, useEffect, FC } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useRouter } from "next/router";

interface CartContextState {
  cart: Order[] | null;
  cartLoading: boolean;
  addItem?: (id: string) => void;
  removeItem?: (id: string) => void;
  signOut?: () => void;
}

const defaultState: CartContextState = {
  cart: null,
  cartLoading: true,
};

const CartContext = createContext<CartContextState>(defaultState);

const CartProvider: FC = ({ children }) => {
  var router = useRouter();
  const [cartLoading, setCartLoading] = useState<boolean>(
    defaultState.cartLoading
  );
  const { isAuth, _setError, _setUsername, _setAuth } = useContext(AuthContext);
  const [cart, setCart] = useState<Order[] | null>(null);

  const signOut = async () => {
    // logout and delete jwt cookie
    try {
      await axios.get("/api/user/logout", { withCredentials: true });
      router.push("/login");
      _setUsername!(null);
      _setAuth!(false);
      setCart(null);
    } catch (error) {
      console.error(error);
    }
  };

  const addItem = (id: string) => {
    axios
      .post("/api/cart/add", { id }, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        let idx = cart!.findIndex((item) => item.product_id === id);
        if (idx === -1) {
          const { product } = data;
          setCart([product, ...cart!]);
        } else {
          let itemToUpdate = cart![idx];
          itemToUpdate.qty += 1;
          let _cart = [
            itemToUpdate,
            ...cart!.slice(0, idx),
            ...cart!.slice(idx + 1),
          ];
          setCart(_cart);
        }
      })
      .catch((err) => {
        _setError!(true);
        console.error(err);
      });
  };

  const removeItem = (id: string) => {
    axios
      .patch("/api/cart/remove", { id }, { withCredentials: true })
      .then(() => {
        let target_item = cart!.find((item) => item.product_id === id);
        let target_idx = cart!.indexOf(target_item!);
        if (target_item!.qty > 1) {
          target_item!.qty -= 1;
          let _cart = [
            target_item!,
            ...cart!.slice(0, target_idx),
            ...cart!.slice(target_idx + 1),
          ];
          setCart(_cart);
        } else {
          let _cart = [
            ...cart!.slice(0, target_idx),
            ...cart!.slice(target_idx + 1),
          ];
          setCart(_cart);
        }
      })
      .catch((err) => {
        _setError!(true);
        console.error(err);
      });
  };

  const getCart = () => {
    if (isAuth) {
      axios
        .get("/api/cart", { withCredentials: true })
        .then((res) => res.data)
        .then((data) => {
          const { users_cart } = data;
          setCart(users_cart);
          setCartLoading(false);
        })
        .catch((err) => {
          _setError!(true);
          console.error(err);
        });
    } else {
      setCartLoading(false);
    }
  };

  useEffect(() => {
    getCart();
  }, [isAuth]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLoading,
        addItem,
        removeItem,
        signOut,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
