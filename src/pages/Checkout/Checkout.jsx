import Input from "./Input";
import { BasicItemCart } from "../../components/cart/ItemCart";
import TotalCart from "../../components/cart/TotalCart";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/contextCart";
import { dictCatalog } from "../../../repository/catalog";
import s from "./checkout.module.scss";
import { receipt } from "./receipt.jsx";
import { addCompra } from "../../contexts/contextHistory.jsx";
import { calcTotalCart } from "../../components/cart/TotalCart";

function Checkout() {
    const { productsList, setProduct } = useCartContext();
    const navigate = useNavigate();

    return (
        <section className={s.checkout}>
            <h1 className={s.checkout__h1}>Finalizar Pagamento</h1>
            <form
                className={s.checkout__form}
                onSubmit={(e) => {
                    e.preventDefault();
                    addCompra(calcTotalCart(productsList), productsList);
                    setProduct({});
                    navigate("/");
                    receipt(e.target);
                }}
            >
                <h2 className={s["checkout__seus-dados"]}>Seus Dados</h2>
                <Input type={"text"} id={"nome"} label={"Seu Nome"} />
                <Input type={"text"} id={"sobrenome"} label={"Seu Sobrenome"} />
                <Input type={"email"} id={"email"} label={"Seu Email"} />
                <Input
                    type={"tel"}
                    id={"tel"}
                    label={"Seu Telefone"}
                    mask="(__) _ ____-____"
                />

                <h2 className={s["checkout__pagamento-entrega"]}>
                    Pagamento e Entrega
                </h2>
                <Input
                    type={"text"}
                    id={"cartao"}
                    label={"Número do Cartão"}
                    mask="____ ____ ____ ____"
                />
                <div className={s["checkout__form-input-container"]}>
                    <Input type={"text"} id={"cvv"} label={"CVV"} mask="___" />
                    <Input
                        type={"text"}
                        id={"vencimento"}
                        label={"Data Vencimento"}
                        mask="__/__"
                    />
                </div>
                <Input
                    type={"text"}
                    id={"CEP"}
                    label={"CEP"}
                    mask="_____-___"
                />
                <div
                    className={`${s["checkout__form-input-container"]} ${s["checkout__form-input-container--flex"]}`}
                >
                    <Input
                        type={"text"}
                        id={"endereco"}
                        label={"Seu Endereço"}
                    />
                    <Input type={"number"} id={"numero"} label={"Nº"} />
                </div>
                <Input
                    type={"text"}
                    id={"complemento"}
                    label={"Complemento"}
                    required={false}
                />

                <h2 className={s["checkout__seus-produtos"]}>Seus Produtos</h2>
                <div className={s.checkout__prods}>
                    <div>
                        {Object.keys(productsList).map((v) => (
                            <BasicItemCart
                                {...dictCatalog[v]}
                                qtt={productsList[v]}
                                key={dictCatalog[v].id}
                            />
                        ))}
                    </div>
                </div>

                <div className={s.checkout__total}>
                    <div className={s["checkout__total-div"]}>
                        <TotalCart />
                    </div>
                    <button type="submit" className={s.checkout__finalizar}>
                        Finalizar Compra
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Checkout;
