export function addCompra(total, itemsObject) {
    const data = new Date();
    const lStorage = JSON.parse(localStorage.getItem("compras")) ?? [];
    const lista = [
        ...lStorage,
        {
            id: data.getTime(),
            data: data.toLocaleDateString(),
            total,
            items: { ...itemsObject },
        },
    ];

    localStorage.setItem("compras", JSON.stringify(lista));
}

// import { createContext, useContext, useState } from "react";

// const context = createContext([]);

// export const useHistoryContext = () => useContext(context);

// function ContextHistoryProvider({ children }) {
//     const [compras, setCompra] = useState([]);
//     function newCompra(total, itemsObject) {
//         const data = new Date();
//         const lista = [
//             ...compras,
//             {
//                 id: data.getTime(),
//                 data: data.toLocaleDateString(),
//                 total,
//                 items: { ...itemsObject },
//             },
//         ];

//         setCompra(lista);
//     }

//     return (
//         <context.Provider value={{ compras, newCompra }}>
//             {children}
//         </context.Provider>
//     );
// }

// export default ContextHistoryProvider;
