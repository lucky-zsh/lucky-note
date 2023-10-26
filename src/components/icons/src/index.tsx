import { FC, CSSProperties } from 'react';

import { setSize } from '@/ui/utils';
import { CSSValue, IComponent } from '@/types/index';
import { useDefaultProps } from '@/ui/hooks/default-props';
export interface KSvgIconProps extends IComponent {
    icon: string; // svg文件名
    className?: CSSValue;
    size?: number;
    width?: number;
    height?: number;
    color?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

const SvgIcon: FC<KSvgIconProps> = (props) => {
    const { style, icon, width, className, height, size, color, ...restProps } =
        useDefaultProps(props, {});
    return (
        <svg
            aria-hidden='true'
            className={className}
            style={{ ...setSize(width || size, height || size), ...style }}
            {...restProps}
        >
            <use
                xlinkHref={'#icon-' + icon}
                fill={color}
            />
        </svg>
    );
};

export default SvgIcon;
