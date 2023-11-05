import { ClassValue } from "clsx"
import { CSSProperties, PropsWithChildren } from "react"
export interface IComponentProps {
    className?: ClassValue
    style?: CSSProperties
    key?: number | string
    ref?: any
}
export type IComponent = PropsWithChildren<IComponentProps>
export type CSSValue = ClassValue
export type IRequiredType<T, K extends keyof T> = {
    [P in K]-?: T[P];
} & Omit<T, K>
