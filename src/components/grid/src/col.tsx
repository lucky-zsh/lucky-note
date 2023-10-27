import { forwardRef, useContext, useMemo } from 'react';
import { RowContext } from './context';
import { GridType, getFlexString } from './util';
import { IComponent } from '@/types/index';
import { useDefaultProps } from '@/ui/hooks/default-props';
import { isObject } from '@/ui/utils/type';
import './index.scss';
export interface ColProps extends IComponent {
    span?: GridType;
    offset?: GridType;
    lg?: GridType;
    md?: GridType;
    sm?: GridType;
    xl?: GridType;
    xs?: GridType;
    xxl?: GridType;
    xxxl?: GridType;
    flex?: GridType;
}

const defaultProps: ColProps = {
    span: 24
};
const Col = forwardRef<HTMLDivElement, ColProps>((props, ref) => {
    const {
        children,
        className,
        style,
        span,
        flex,
        xs,
        sm,
        md,
        lg,
        xl,
        xxl,
        xxxl
    } = useDefaultProps(props, defaultProps);
    const { gutter } = useContext(RowContext);
    const paddingStyle = useMemo(() => {
        const paddingStyle: {
            paddingLeft?: number;
            paddingRight?: number;
            paddingTop?: number;
            paddingBottom?: number;
        } = {};
        if (Array.isArray(gutter)) {
            const paddingHorizontal = (gutter[0] && gutter[0] / 2) || 0;
            const paddingVertical = (gutter[1] && gutter[1] / 2) || 0;
            if (paddingHorizontal) {
                paddingStyle.paddingLeft = paddingHorizontal;
                paddingStyle.paddingRight = paddingHorizontal;
            }
            if (paddingVertical) {
                paddingStyle.paddingTop = paddingVertical;
                paddingStyle.paddingBottom = paddingVertical;
            }
        }
        return paddingStyle;
    }, [gutter]);
    const flexStyle = useMemo(
        () => (getFlexString(flex) ? { flex: getFlexString(flex) } : {}),
        [flex]
    );

    const adaptationGrid = () => {
        const screenList = { xs, sm, md, lg, xl, xxl, xxxl };
        const classNames: Record<string, any> = {
            [`k_col_${span}`]: !xs && !sm && !md && !lg && !xl && !xxl && !xxxl
        };
        type screenType = keyof typeof screenList;
        Object.keys(screenList).forEach((screen) => {
            const screenType = screen as screenType;
            const screenValue = screenList[screenType];
            if (typeof screenValue === 'number') {
                if (screenValue >= 0) {
                    const className = `k_col_${screenType}_${screenValue}`;
                    classNames[className] = true;
                }
            } else if (isObject(screenValue)) {
                // classList.push({ [$style[`col-${screen}-${screenValue.span}`]]: true })
            }
        });
        return classNames;
    };
    const gridClassNames = flex ? '' : adaptationGrid();
    return (
        <div
            className={['k_col', gridClassNames, className]}
            ref={ref}
            style={{ ...style, ...paddingStyle, ...flexStyle }}
        >
            {children}
        </div>
    );
});
Col.displayName = 'KCol';
Col.defaultProps = defaultProps;

export default Col;
