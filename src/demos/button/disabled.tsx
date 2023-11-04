import { FC } from "react";
import $style from "./index.scss"

interface ButtonDiaabledProps {
    disabled?: boolean
}
const ButtonDiaabled: FC<ButtonDiaabledProps> = function (props) {
    const { disabled = true } = props
    return (
        <button type="button" className={[$style.button, { [$style.button_disabled]: disabled }]}>禁止按钮</button>
    )
};

export default ButtonDiaabled;
