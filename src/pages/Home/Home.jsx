import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "./Product";
import Filtro from "./Filtro";
import s from "./home.module.scss";
import { catalog } from "../../../repository/catalog";

function Home() {
    const [params, setParams] = useSearchParams({});
    const filter = params.get("filter");

    return (
        <section className={s.produtos}>
            <Filtro setParams={setParams} filter={filter} />
            <div className={s.produtos__grid}>
                {(filter !== null
                    ? catalog.filter((v) => v.feminine === (filter === "fem"))
                    : catalog
                ).map((v) => (
                    <Product {...v} key={v.id} />
                ))}
            </div>
        </section>
    );
}

export default Home;
