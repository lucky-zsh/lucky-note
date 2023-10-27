export const getType = (value: unknown) => {
    if (null === value) {
        return 'null';
    }
    const type = typeof value;
    if ('undefined' === type || 'string' === type) {
        return type;
    }

    const typeString = toString.call(value);
    switch (typeString) {
        case '[object Array]':
            return 'array';
        case '[object Date]':
            return 'date';
        case '[object Boolean]':
            return 'boolean';
        case '[object Number]':
            return 'number';
        case '[object Function]':
            return 'function';
        case '[object RegExp]':
            return 'regexp';
        case '[object Object]':
            return 'object';
        case '[object Symbol]':
            return 'symbol';
        default:
            return 'unknow';
    }
};

export const toTypeString = (value: unknown): string =>
    Object.prototype.toString.call(value);
export const isMap = (val: unknown): val is Map<unknown, unknown> =>
    toTypeString(val) === '[object Map]';
export const isSet = (val: unknown): val is Set<unknown> =>
    toTypeString(val) === '[object Set]';
export const isArray = Array.isArray;
export const isDate = (val: unknown): val is Date => val instanceof Date;
export function isUndefined (val: unknown): val is undefined {
    return val === undefined;
}
export const isSymbol = (value: unknown) => {
    const type = typeof value
    return type == 'symbol' || (type === 'object' && value != null && getType(value) === 'symbol')
}
export const isString = (val: unknown): val is string =>
    typeof val === 'string';


export const isNumber = (val: unknown): val is number =>
    typeof val === 'number';
export function isObject (val: unknown): val is { [key: string]: any } {
    return getType(val) === 'object'
}
export function isFunction (obj: any): obj is (...args: any[]) => any {
    return typeof obj === 'function';
}
export function isEmptyObject (obj: any): boolean {
    return isObject(obj) && Object.keys(obj).length === 0;
}
