import s from "./purchaseItem.module.scss";
import img from "../../assets/images/items/product-1.jpg";
import { Link } from "react-router-dom";
import { dictCatalog } from "../../../repository/catalog";

function PurchaseItem({ setDetails, setItemDetail, data, total, id, items }) {
    const item = dictCatalog[Object.keys(items)[0]];
    console.log(items);

    return (
        <div className={s["purchase-item"]}>
            <div className={s["purchase-item__header"]}>
                <div>
                    <h2>Data Pedido</h2>
                    <p>{data}</p>
                </div>

                <div>
                    <h2>Total</h2>
                    <p>
                        {total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                </div>

                <div>
                    <h2>Número Pedido</h2>
                    <p>{id}</p>
                </div>
            </div>

            <div className={s["purchase-item__body"]}>
                <Link
                    className={s["purchase-item__img"]}
                    onClick={() => {
                        setItemDetail(items);
                        setDetails(true);
                    }}
                >
                    <img src={item.image} alt="" />
                </Link>

                <div className={s["purchase-item__detalhes"]}>
                    <div className={s["purchase-item__infos"]}>
                        <Link
                            onClick={() => {
                                setItemDetail(items);
                                setDetails(true);
                            }}
                        >
                            <p>{item.name} ...+</p>
                        </Link>
                        <p>
                            Tamanho: <span>M</span>
                        </p>
                        <p>
                            Brand: <span>{item.brand}</span>
                        </p>
                    </div>

                    <Link
                        className={s["purchase-item__btn"]}
                        onClick={() => {
                            setItemDetail(items);
                            setDetails(true);
                        }}
                    >
                        Ver Detalhes
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PurchaseItem;
