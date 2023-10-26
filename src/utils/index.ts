import { CSSProperties } from "react";

export const setSize = function (width?: string | number, height?: string | number) {
    const styleObj: CSSProperties = {}
    if (width) {
        styleObj.width = typeof width === "number" ? Number(width) + 'px' : width
    }
    if (height) {
        styleObj.height = typeof height === "number" ? Number(height) + 'px' : height
    }
    return styleObj;

}
