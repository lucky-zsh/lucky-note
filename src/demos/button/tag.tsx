import { FC, ReactNode } from "react";
import $style from "./index.scss"



interface ButtonTagNodeType {
    div:{
        role:string,
        tabIndex:number
    },
    button:{
        type:"button" | "submit" | "reset"
    },
    a:{
        rel:string,
        tabIndex:number
    }
}
interface ButtonTagProps {
    tag: "div" | 'a' | 'button',
    children?:ReactNode
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
        rel:"noopener noreferrer",
        tabIndex: 0
    }
}

const ButtonTag: FC<ButtonTagProps> = function (props) {
    const { tag:Tag,children } = props

    return (
       <Tag className={$style.button} {...TagNode[Tag]}>{children}</Tag>
    )
};



const ButtonTagDemo = function(){
    return (
        <div className={$style.wrapper}>
            <ButtonTag tag="div">div标签</ButtonTag>
            <ButtonTag tag="button">button标签</ButtonTag>
            <ButtonTag tag="a">a标签</ButtonTag>
        </div>
    )
}

export default ButtonTagDemo
