import { FC } from "react";
import $style from "./index.scss"

interface ButtonDiaabledProps {
    text?: boolean
}
const ButtonText: FC<ButtonDiaabledProps> = function (props) {
    const { text = true } = props
    return (
        <button type="button" className={[$style.button, { [$style.button_text]: text }]}>文本按钮</button>
    )
};

export default ButtonText
