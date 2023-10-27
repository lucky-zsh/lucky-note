import { IComponent } from '@/types/index';
import { useDefaultProps } from '@/ui/hooks/default-props';
import { setSize } from '@/ui/utils';
import { CSSProperties, ReactElement } from 'react';

export interface ThemeIconProps extends IComponent {
    icon: ReactElement;
    size?: number;
    width?: number;
    height?: number;
    style?: CSSProperties;
}

const ThemeIcon = function (props) {
    const {
        icon: Icon,
        width,
        size,
        height,
        style,
        ...restProps
    } = useDefaultProps(props, {});
    return (
        <Icon
            {...restProps}
            style={{ ...setSize(width || size, height || size), ...style }}
        ></Icon>
    );
};
export default ThemeIcon;
