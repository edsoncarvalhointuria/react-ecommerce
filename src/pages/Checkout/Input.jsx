import { InputMask } from "@react-input/mask";
import s from "./input.module.scss";

export default function Input({
    type,
    id,
    label,
    required = true,
    mask = "",
    replace = /\d/,
}) {
    return (
        <div className={s["checkout__form-input"]}>
            {mask ? (
                <InputMask
                    mask={mask}
                    replacement={{ _: replace }}
                    type={type}
                    name={id}
                    id={id}
                    placeholder={" "}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    name={id}
                    id={id}
                    placeholder={" "}
                    required={required}
                />
            )}
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
