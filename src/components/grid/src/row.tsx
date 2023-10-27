import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { RowContext } from './context';
import { GridRowGutter, getGutter } from './util';
import { useDefaultProps } from '@/ui/hooks/default-props';
import { IComponent } from '@/types/index';
import { ScreenMap, responsiveObserve } from './responsive';
export interface RowProps extends IComponent {
    gutter?: GridRowGutter | Array<GridRowGutter>;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
}
const defaultProps: RowProps = {
    gutter: 0,
    align: 'start',
    justify: 'start'
};
import './index.scss';
const Row = forwardRef<HTMLDivElement, RowProps>((props, ref) => {
    const { children, align, justify, gutter, className, style } =
        useDefaultProps(props, defaultProps);

    const [screens, setScreens] = useState<ScreenMap>({
        xs: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        xxl: true,
        xxxl: true
    });
    const token = useRef<any>();
    useEffect(() => {
        token.current = responsiveObserve.subscribe((screens) => {
            if (
                (!Array.isArray(gutter) && typeof gutter === 'object') ||
                (Array.isArray(gutter) &&
                    (typeof gutter[0] === 'object' ||
                        typeof gutter[1] === 'object'))
            ) {
                if (!screens) {
                    return;
                }
                console.log(screens);
                setScreens(screens);
            }
        });
        return () => {
            responsiveObserve.unsubscribe(token.current);
        };
    }, [gutter]);

    const [marginStyle, gutterHorizontal, gutterVertical] = useMemo(() => {
        const marginStyle: {
            marginTop?: number;
            marginBottom?: number;
            marginLeft?: number;
            marginRight?: number;
        } = {};
        const gutterHorizontal = getGutter(
            Array.isArray(gutter) ? gutter[0] : gutter,
            screens
        );
        const gutterVertical = getGutter(
            Array.isArray(gutter) ? gutter[1] : 0,
            screens
        );
        if (gutterHorizontal || gutterVertical) {
            const marginHorizontal = -gutterHorizontal / 2;
            const marginVertical = -gutterVertical / 2;
            if (marginHorizontal) {
                marginStyle.marginLeft = marginHorizontal;
                marginStyle.marginRight = marginHorizontal;
            }
            if (marginVertical) {
                marginStyle.marginTop = marginVertical;
                marginStyle.marginBottom = marginVertical;
            }
        }
        return [marginStyle, gutterHorizontal, gutterVertical];
    }, [gutter, screens]);
    return (
        <div
            className={[
                'k_row',
                [`k_row_align_${align}`],
                [`k_row_justify_${justify}`],
                className
            ]}
            ref={ref}
            style={{ ...marginStyle, ...style }}
        >
            <RowContext.Provider
                value={{ gutter: [gutterHorizontal, gutterVertical] }}
            >
                {children}
            </RowContext.Provider>
        </div>
    );
});
Row.displayName = 'KRow';
Row.defaultProps = defaultProps;

export default Row;
