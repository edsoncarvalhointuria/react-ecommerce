import { createContext, useContext, useState } from "react";

export const cartContext = createContext(null);

export const useCartContext = () => useContext(cartContext);

export function productsAmount(productObject) {
    let qtt = 0;
    for (let key in productObject) {
        qtt += productObject[key];
    }

    return qtt;
}

function ContextProviderCart({ children }) {
    const [productsList, setProduct] = useState({});

    const addProd = (id) => {
        const list = { ...productsList, [id]: (productsList[id] ?? 0) + 1 };
        setProduct(list);
    };

    const removeProd = (id) => {
        const list = { ...productsList };
        delete list[id];
        setProduct(list);
    };

    const subProd = (id) => {
        const list = { ...productsList };
        if (list[id] > 1) {
            --list[id];
            setProduct(list);
        } else {
            removeProd(id);
        }
    };

    return (
        <cartContext.Provider
            value={{ addProd, subProd, removeProd, productsList, setProduct }}
        >
            {children}
        </cartContext.Provider>
    );
}

export default ContextProviderCart;
