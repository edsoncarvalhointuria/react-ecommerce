import { useState } from "react";
import Cart from "../cart/Cart";
import { useLocation, Link } from "react-router-dom";
import { productsAmount, useCartContext } from "../../contexts/contextCart";
import s from "./header.module.scss";
import imgHeader from "../../assets/images/header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [openCart, setCart] = useState(false);
    const { pathname } = useLocation();

    const { productsList } = useCartContext();

    const header = (
        <header className={s.header}>
            <Link to="/" className={s.header__img}>
                <img src={imgHeader} alt="Logo Ecommerce" />
            </Link>
            <nav className={s.nav}>
                <Link to="history" className={s.nav__link}>
                    <FontAwesomeIcon icon={faUser} />
                </Link>

                <div
                    className={s.nav__sacola}
                    onClick={() => setCart(!openCart)}
                >
                    <FontAwesomeIcon icon={faBagShopping} />
                    <div className={s["nav__sacola--qtd"]}>
                        <p>{productsAmount(productsList)}</p>
                    </div>
                </div>
            </nav>

            <Cart openCart={openCart} setCart={setCart} />
        </header>
    );

    const simpleHeader = (
        <header className={s.header}>
            <Link to="/" className={s.header__img}>
                <img src={imgHeader} alt="Logo Ecommerce" />
            </Link>
        </header>
    );

    return pathname === "/" ? header : simpleHeader;
}

export default Header;
