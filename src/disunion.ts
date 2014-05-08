/// <reference path="../index/node.d.ts"/>
/// <reference path="../index/doctrine.d.ts"/>

/**
 * Eliminate union types by splitting into multiple types
 * @param t
 */
export function unload(t: doctrine.AnyType): doctrine.AnyType[] {
    if(!t)
        return [null];

    switch (t.type) {
        // Atomic types
        case 'NameExpression':
        case 'AllLiteral':
        case 'NullableLiteral':
        case 'NullLiteral':
        case 'UndefinedLiteral':
        case 'VoidLiteral':
            return [t];
        // Compound types
        case 'TypeApplication':
            var expression = unload(t.expression);
            var applications = outer(t.applications.map(unload));
            var acc = [];

            expression.forEach(e => {
                applications.forEach(a => {
                    acc.push({
                        type: t.type,
                        expression: e,
                        applications: a
                    });
                });
            });

            return acc;
        case 'OptionalType':
        case 'NullableType':
        case 'NonNullableType':
        case 'RestType':
            var acc = [];

            unload(t.expression).forEach(e => {
                acc.push({
                    type: t.type,
                    expression: e
                });
            });

            return acc;
        case 'FunctionType':
            var params = outer(t.params.map(unload));
            var result = unload(t.result);
            var acc = [];

            params.forEach(p => {
                result.forEach(r => {
                    acc.push({
                        type: t.type,
                        params: p,
                        result: r
                    });
                });
            });

            return acc;
        case 'RecordType':
            var fields = outer(t.fields.map(unload));
            var acc = [];

            fields.forEach(f => {
                acc.push({
                    type: t.type,
                    fields: f
                });
            });

            return acc;
        case 'ArrayType':
            var elements = outer(t.elements.map(unload));
            var acc = [];

            elements.forEach(e => {
                acc.push({
                    type: t.type,
                    elements: e
                });
            });

            return acc;
        case 'FieldType':
            var value = unload(t.value);
            var acc = [];

            value.forEach(v => {
                acc.push({
                    type: t.type,
                    key: t.key,
                    value: v
                });
            });

            return acc;
        case 'ParameterType':
            var expression = unload(t.expression);
            var acc = [];

            expression.forEach(e => {
                acc.push({
                    type: t.type,
                    name: t.name,
                    expression: e
                });
            });

            return acc;
        // Union types
        case 'UnionType':
            var elements = outer(t.elements.map(unload));
            var acc = [];

            elements.forEach(e => {
                e.forEach(e => {
                    acc.push(e);
                });
            });

            return acc;
        default:
            throw new Error('Unknown type expression ' + t.type);
    }
}

export function outer<T>(arrays: T[][]): T[][] {
    if (arrays.length === 0)
        return [[]];
    else {
        var next = outer(arrays.slice(1));
        var acc = [];

        arrays[0].forEach(head => {
            next.forEach(tail => {
                acc.push([head].concat(tail));
            });
        });

        return acc;
    }
}