import { IRequiredType } from '@/types/index';
export const useDefaultProps = function <T>(
    props: T,
    defaultValue: Partial<T>
): IRequiredType<T, keyof typeof defaultValue> {
    return { ...defaultValue, ...props } as IRequiredType<
        T,
        keyof typeof defaultValue
    >;
};
