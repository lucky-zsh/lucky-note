import { Breakpoint, ScreenMap, responsiveArray } from "./responsive";

export type GridType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export type GridResponsiveBreakpoint = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type GridRowGutter = number | Partial<Record<GridResponsiveBreakpoint, number>>;
export const getGutter = (gutter: GridRowGutter, screens: ScreenMap): number => {
    let result = 0;

    if (typeof gutter === 'object') {
        for (let i = 0; i < responsiveArray.length; i++) {
            const breakpoint: Breakpoint = responsiveArray[i];
            if (screens[breakpoint] && gutter[breakpoint] !== undefined) {
                result = gutter[breakpoint] as number;
                break;
            }
        }
    } else {
        result = gutter;
    }

    return result;
}

export type FlexType = string | number | 'auto' | 'none';
export const getFlexString = (flex: FlexType) => {
    if (typeof flex === 'string' && /\d+[px|%|em|rem|]{1}/.test(flex)) {
        return `0 0 ${flex}`;
    }
    return flex;
}
