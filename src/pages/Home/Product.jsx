import { useCartContext } from "../../contexts/contextCart";
import s from "./product.module.scss";

const oldPriceSimulation = Math.random();

function Product({ id, brand, name, price, image }) {
    const { addProd } = useCartContext();

    return (
        <div className={s.produto}>
            <div className={s.produto__select}>
                <div className={s.produto__img}>
                    <img src={image} alt="Imagem" />
                </div>
                <button
                    className={s.produto__button}
                    onClick={() => addProd(id)}
                >
                    <span>+</span>Adicionar ao Carrinho
                </button>
            </div>

            <div className={s.produto__infos}>
                <p className={s.produto__brand}>{brand}</p>
                <p className={s.produto__name}>{name}</p>
                <div className={s["produto__infos-price"]}>
                    <p className={s["produto__price--old"]}>
                        R$ {(price + oldPriceSimulation).toFixed(2)}
                    </p>
                    <p className={s["produto__price--new"]}>
                        {price.toLocaleString("pt-BR", {
                            currency: "BRL",
                            style: "currency",
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Product;
