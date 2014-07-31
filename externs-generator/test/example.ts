module Module {
    export interface ExportedInterface {
        f(arg: number): void;
        x: number;
    }

    interface PrivateInterface {
        g(arg: string): number;
        y: boolean;
    }

    interface ParentInterface {
        Child: {
            childProperty: number;
        }
    }
}