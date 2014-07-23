declare module doctrine {
    interface Options {
        unwrap?: boolean;
        tags?: string[];
        recoverable?: boolean;
        sloppy?: boolean;
        lineNumbers?: boolean;
    }

    interface JSDoc {
        description: string;
        tags: Tag[];
    }

    interface Tag {
        title: string;
        name: string;
        description: string;
        type: AnyType;
    }

    interface Type {
        type: string;
    }

    interface UnionType extends Type {
        elements: AnyType[]
    }

    interface NameExpression extends Type {
        name: string;
    }

    interface TypeApplication extends Type {
        expression: AnyType;
        applications: AnyType[];
    }

    interface FunctionType extends Type {
        params: AnyType[];
        result: AnyType;
    }

    interface OptionalType extends Type {
        expression: AnyType;
    }

    interface FieldType extends Type {
        key: string;
        value: AnyType;
    }

    interface ParameterType extends Type {
        name: string;
        expression: AnyType;
    }

    interface RecordType extends Type {
        fields: FieldType[];
    }

    interface ArrayType extends Type {
        elements: AnyType[];
    }

    interface AnyType extends UnionType, NameExpression, TypeApplication, FunctionType, OptionalType, FieldType,
        ParameterType, RecordType, ArrayType { }

    function parse(comment: string, options?: Options): JSDoc;
}

declare module 'doctrine' {
    export = doctrine;
}