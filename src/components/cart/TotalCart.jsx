import { useCartContext } from "../../contexts/contextCart";
import { dictCatalog } from "../../../repository/catalog";

export function calcTotalCart(productsObject) {
    let total = 0;
    for (let key in productsObject) {
        total += productsObject[Number(key)] * dictCatalog[Number(key)].price;
    }

    return total;
}

function TotalCart() {
    const { productsList } = useCartContext();

    return (
        <>
            <p>Total: </p>
            <p>
                {calcTotalCart(productsList).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                })}
            </p>
        </>
    );
}

export default TotalCart;
