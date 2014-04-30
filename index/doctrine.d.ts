declare module 'doctrine' {
    interface Options {
        unwrap?: boolean;
        tags?: string[];
        recoverable?: boolean;
        sloppy: boolean;
        lineNumbers: boolean;
    }

    interface JSDoc {
        description: string;
        tags: Tag[];
    }

    interface Tag {
        title: string;
        name?: string;
        description?: string;
        type?: AnyType;
    }

    interface Type {
        type: string;
    }

    interface UnionType extends Type {
        elements?: Type[]
    }

    interface NameExpression extends Type {
        name?: string;
    }

    interface TypeApplication extends Type {
        expression?: Type;
        applications?: Type[];
    }

    interface FunctionType extends Type {
        params?: Type[];
        result?: Type;
    }

    interface OptionalType extends Type {
        expression?: Type;
    }

    interface AnyType extends UnionType, NameExpression, TypeApplication, FunctionType, OptionalType { }

    function parse(comment: string, options?: Options): JSDoc;
}