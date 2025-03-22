import s from "./filtro.module.scss";

function Filtro({ setParams, filter }) {
    return (
        <div className={s.filtro}>
            <div className={s.filtro__opcao}>
                <p>Todos</p>
                <input
                    type="radio"
                    name="filtro"
                    id="todos"
                    onClick={() => setParams({})}
                    checked={filter === null ? true : false}
                    readOnly
                />
            </div>

            <div className={s.filtro__opcao}>
                <p>Masculino</p>
                <input
                    type="radio"
                    name="filtro"
                    id="masculino"
                    onClick={() => setParams({ filter: "masc" })}
                    checked={filter === "masc" ? true : false}
                    readOnly
                />
            </div>

            <div className={s.filtro__opcao}>
                <p>Feminino</p>
                <input
                    type="radio"
                    name="filtro"
                    id="feminino"
                    onClick={() => setParams({ filter: "fem" })}
                    checked={filter === "fem" ? true : false}
                    readOnly
                />
            </div>
        </div>
    );
}

export default Filtro;
