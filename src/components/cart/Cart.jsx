import ItemCart from "./ItemCart";
import TotalCart from "./TotalCart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../contexts/contextCart";
import { dictCatalog } from "../../../repository/catalog";
import s from "./cart.module.scss";

function Cart({ openCart, setCart }) {
    const { productsList } = useCartContext();

    const i = (
        <>
            <div className={s.cart__close}>
                <p>Carrinho</p>
                <FontAwesomeIcon
                    className={s["cart__close-x"]}
                    icon={faXmark}
                    onClick={() => setCart(!openCart)}
                />
            </div>
            <div className={s.cart__items}>
                {Object.keys(productsList).map((v) => (
                    <ItemCart
                        {...dictCatalog[v]}
                        qtt={productsList[v]}
                        key={dictCatalog[v].id}
                    />
                ))}
            </div>
            <div className={s.cart__total}>
                <TotalCart />
            </div>
            <Link to={"/checkout"}>
                <button className={s.cart__checkout}>Finalizar Compra</button>
            </Link>
        </>
    );

    return (
        <div
            className={`${s.cart} ${openCart ? s["cart--open"] : ""}`}
            id="cart"
        >
            <div
                className={s["cart-close"]}
                onClick={() => setCart(!openCart)}
            ></div>
            <div className={s.cart__infos}>
                {Object.keys(productsList).length ? (
                    i
                ) : (
                    <>
                        <div className={s.cart__close}>
                            <p>Carrinho</p>
                            <FontAwesomeIcon
                                className={s["cart__close-x"]}
                                icon={faXmark}
                                onClick={() => setCart(!openCart)}
                            />
                        </div>
                        <p
                            className={s.cart__vazio}
                            style={{
                                alignSelf: "center",
                                justifySelf: "center",
                            }}
                        >
                            Vazio...
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;
