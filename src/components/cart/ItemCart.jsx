import { useCartContext } from "../../contexts/contextCart";
import s from "./itemCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function ItemCart({ id, image, name, price, qtt }) {
    const { addProd, subProd, removeProd } = useCartContext();

    return (
        <div className={s.itemCart}>
            <div className={s.itemCart__img}>
                <img src={image} alt={name} />
            </div>
            <div className={s.itemCart__infos}>
                <FontAwesomeIcon
                    className={s.itemCart__close}
                    icon={faXmark}
                    onClick={() => removeProd(id)}
                />
                <p className={s.itemCart__name}>{name}</p>
                <p className={s.itemCart__size}>Tamanho M</p>
                <p className={s.itemCart__price}>
                    {price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
                <div className={s["itemCart__qtt-container"]}>
                    <FontAwesomeIcon
                        className={s.itemCart__sub}
                        icon={faMinus}
                        onClick={() => subProd(id)}
                    />
                    <p className={s.itemCart__quantity}>{qtt}</p>
                    <FontAwesomeIcon
                        className={s.itemCart__sum}
                        icon={faPlus}
                        onClick={() => addProd(id)}
                    />
                </div>
            </div>
        </div>
    );
}

export function BasicItemCart({ id, image, name, price, qtt }) {
    return (
        <div className={s.itemCart}>
            <div className={s.itemCart__img}>
                <img src={image} alt={name} />
            </div>
            <div className={s.itemCart__infos}>
                <p className={s.itemCart__name}>{name}</p>
                <p className={s.itemCart__size}>Tamanho M</p>
                <p className={s.itemCart__price}>
                    {price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
                <div className={s["itemCart__qtt-container-simple"]}>
                    <p>Quantidade: </p>
                    <p className={s.itemCart__quantity}>{qtt}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;
