import PurchaseItem from "./PurchaseItem";
import { useNavigate } from "react-router-dom";
import { BasicItemCart } from "../../components/cart/ItemCart";
import { dictCatalog } from "../../../repository/catalog";
import s from "./historyPage.module.scss";

import { useState } from "react";

function HistoryPage() {
    const compras = JSON.parse(localStorage.getItem("compras")) ?? [];
    const navigate = useNavigate();
    const [seeDetails, setDetails] = useState(false);
    const [itemsDetails, setItemDetail] = useState({});

    return (
        <>
            {compras.length ? (
                <div className={s.history}>
                    <h1 className="s.history__h1">Meus Pedidos</h1>
                    <div className={s.history__container}>
                        {compras.map((v) => (
                            <PurchaseItem
                                setDetails={setDetails}
                                {...v}
                                setItemDetail={setItemDetail}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className={s["sem-pedidos"]}>
                    <h1 className={s["sem-pedidos__h1"]}>Sem Pedidos...</h1>
                    <button
                        className={s["sem-pedidos__btn"]}
                        onClick={() => navigate("/")}
                    >
                        Ir para Home
                    </button>
                </div>
            )}

            {seeDetails ? (
                <div className={s["detalhes-container"]}>
                    <div
                        className={s["detalhes-container--close"]}
                        onClick={() => setDetails(false)}
                    ></div>
                    <div className={s["detalhes-item"]}>
                        {Object.keys(itemsDetails).map((v, i) => (
                            <BasicItemCart
                                {...dictCatalog[v]}
                                qtt={itemsDetails[v]}
                                key={i}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}

export default HistoryPage;
