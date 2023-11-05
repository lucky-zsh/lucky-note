
import { ReactNode, forwardRef } from "react"
import {IComponent,IRequiredType} from "@/types/index"
import "./index.scss"

interface ButtonTagNodeType {
    div:{
        role:string,
        tabIndex:number
    },
    button:{
        type:"button" | "submit" | "reset"
    },
    a:{
        ref:string,
        tabIndex:number
    }
}
const TagNode:ButtonTagNodeType = {
    div:{
        role:"button",
        tabIndex: 0
    },
    button:{
        type:"button"
    },
    a:{
        ref:"noopener noreferrer",
        tabIndex:0
    }
}
export interface ButtonProps extends IComponent {
    disabled?: boolean,
    text?: boolean,
    link?: boolean,
    tag?: "button" | 'div' | 'a',
    renderIcon?: () => ReactNode
    onClick?: () => void
}

const defaultProps = {
    disabled: false,
    tag: 'button',
    text: false,
    link: false
}


type ButtonType = IRequiredType<ButtonProps, keyof typeof defaultProps>

const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement & HTMLDivElement, ButtonProps>((props, ref) => {
    const { disabled, renderIcon, children, tag: Tag, text, link, className, ...restProps } = { ...defaultProps, ...props } as ButtonType;
    return (
        <Tag className={['kbutton', { ['kbutton_disabled']: disabled }, { ['kbutton_text']: text }, { ['kbutton_link']: link }, className]} {...TagNode[Tag]} {...restProps} ref={ref}>
            {typeof renderIcon === "function" ? (
                <>
                    {renderIcon()}
                    {children}
                </>
            ) : children}
        </Tag>
    )
})
Button.displayName = 'Button'
export default Button
