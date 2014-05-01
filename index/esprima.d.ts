declare module syntax {

    interface Tree {
        type: string;
        loc?: SourceLocation;
    }
    interface SourceLocation {
        source?: string;
        start: Position;
        end: Position;
    }
    interface Position {
        line: number;
        column: number;
    }
    interface Program extends Tree {
        body: Statement[];
    }
    interface Function extends Tree {
        id?: Identifier;
        params: Pattern[];
        defaults: Expression[];
        rest?: Identifier;
        body: any /* BlockStatement | Expression */
        ;
        generator: boolean;
        expression: boolean;
    }
    interface Statement extends Tree {
    }
    interface EmptyStatement extends Statement {
    }
    interface BlockStatement extends Statement {
        body: Statement[];
    }
    interface ExpressionStatement extends Statement {
        expression: Expression;
    }
    interface IfStatement extends Statement {
        test: Expression;
        consequent: Statement;
        alternate?: Statement;
    }
    interface LabeledStatement extends Statement {
        label: Identifier;
        body: Statement;
    }
    interface BreakStatement extends Statement {
        label?: Identifier;
    }
    interface ContinueStatement extends Statement {
        label?: Identifier;
    }
    interface WithStatement extends Statement {
        object: Expression;
        body: Statement;
    }
    interface SwitchStatement extends Statement {
        discriminant: Expression;
        cases: SwitchCase[];
        lexical: boolean;
    }
    interface ReturnStatement extends Statement {
        argument?: Expression;
    }
    interface ThrowStatement extends Statement {
        argument: Expression;
    }
    interface TryStatement extends Statement {
        block: BlockStatement;
        handler?: CatchClause;
        guardedHandlers: CatchClause[];
        finalizer?: BlockStatement;
    }
    interface WhileStatement extends Statement {
        test: Expression;
        body: Statement;
    }
    interface DoWhileStatement extends Statement {
        body: Statement;
        test: Expression;
    }
    interface ForStatement extends Statement {
        init?: any /* VariableDeclaration | Expression */
        ;
        test?: Expression;
        update?: Expression;
        body: Statement;
    }
    interface ForInStatement extends Statement {
        left: any /* VariableDeclaration |  Expression */
        ;
        right: Expression;
        body: Statement;
        each: boolean;
    }
    interface ForOfStatement extends Statement {
        left: any /* VariableDeclaration |  Expression */
        ;
        right: Expression;
        body: Statement;
    }

    interface LetHead {
        id: Pattern;
        init?: Expression;
    }

    interface LetStatement extends Statement {
        head: LetHead[];
        body: Statement;
    }
    interface DebuggerStatement extends Statement {
    }
    interface Declaration extends Statement {
    }
    interface FunctionDeclaration extends Function, Declaration {
        id: Identifier;
        params: Pattern[];
        defaults: Expression[];
        rest?: Identifier;
        body: any /* BlockStatement | Expression */
        ;
        generator: boolean;
        expression: boolean;
    }
    interface VariableDeclaration extends Declaration {
        declarations: VariableDeclarator[];
        kind: string /* "var" | "let" | "const" */
        ;
    }
    interface VariableDeclarator extends Tree {
        id: Pattern;
        init?: Expression;
    }
    interface Expression extends Tree, Pattern {
    }

    interface ThisExpression extends Expression {
    }
    interface ArrayExpression extends Expression {
        elements: Expression[];
    }

    interface ObjectProperty {
        key: any; /* Literal | Identifier */
        value: Expression;
        kind: string; /* "init" | "get" | "set" */
    }

    interface ObjectExpression extends Expression {
        properties: ObjectProperty[];
    }
    interface FunctionExpression extends Function, Expression {
        id?: Identifier;
        params: Pattern[];
        defaults: Expression[];
        rest?: Identifier;
        body: any /* BlockStatement | Expression */
        ;
        generator: boolean;
        expression: boolean;
    }
    interface ArrowExpression extends Function, Expression {
        params: Pattern[];
        defaults: Expression[];
        rest?: Identifier;
        body: any /* BlockStatement | Expression */
        ;
        generator: boolean;
        expression: boolean;
    }
    interface SequenceExpression extends Expression {
        expressions: Expression[];
    }
    interface UnaryExpression extends Expression {
        operator: UnaryOperator;
        prefix: boolean;
        argument: Expression;
    }
    interface BinaryExpression extends Expression {
        operator: BinaryOperator;
        left: Expression;
        right: Expression;
    }
    interface AssignmentExpression extends Expression {
        operator: AssignmentOperator;
        left: Expression;
        right: Expression;
    }
    interface UpdateExpression extends Expression {
        operator: UpdateOperator;
        argument: Expression;
        prefix: boolean;
    }
    interface LogicalExpression extends Expression {
        operator: LogicalOperator;
        left: Expression;
        right: Expression;
    }
    interface ConditionalExpression extends Expression {
        test: Expression;
        alternate: Expression;
        consequent: Expression;
    }
    interface NewExpression extends Expression {
        callee: Expression;
        arguments: Expression[];
    }
    interface CallExpression extends Expression {
        callee: Expression;
        arguments: Expression[];
    }
    interface MemberExpression extends Expression {
        object: Expression;
        property: any /* Identifier | Expression */
        ;
        computed: boolean;
    }
    interface YieldExpression extends Expression {
        argument?: Expression;
    }
    interface ComprehensionExpression extends Expression {
        body: Expression;
        blocks: ComprehensionBlock[];
        filter?: Expression;
    }
    interface GeneratorExpression extends Expression {
        body: Expression;
        blocks: ComprehensionBlock[];
        filter?: Expression;
    }
    interface GraphExpression extends Expression {
        index: number;
        expression: Literal;
    }
    interface GraphIndexExpression extends Expression {
        index: number;
    }
    interface LetExpression extends Expression {
        head: LetHead[];
        body: Expression;
    }
    interface Pattern extends Tree {
    }

    interface PatternKeyValue {
        key: any; /* Literal | Identifier */
        value: Pattern;
    }

    interface ObjectPattern extends Pattern {
        properties: PatternKeyValue[];
    }
    interface ArrayPattern extends Pattern {
        elements: Pattern[];
    }
    interface SwitchCase extends Tree {
        test?: Expression;
        consequent: Statement[];
    }
    interface CatchClause extends Tree {
        param: Pattern;
        guard?: Expression;
        body: BlockStatement;
    }
    interface ComprehensionBlock extends Tree {
        left: Pattern;
        right: Expression;
        each: boolean;
    }
    interface Identifier extends Tree, Expression, Pattern {
        name: string;
    }
    interface Literal extends Tree, Expression {
        value: any /* string | boolean | null | number | RegExp */
        ;
    }
    enum UnaryOperator {
            "-" , "+" , "!" , "~" , "typeof" , "void" , "delete"
    }
    enum BinaryOperator {
            "==" , "!=" , "===" , "!=="
            , "<" , "<=" , ">" , ">="
            , "<<" , ">>" , ">>>"
            , "+" , "-" , "*" , "/" , "%"
            , "," , "^" , "&" , "in"
            , "instanceof" , ".."
    }
    enum LogicalOperator {
            ",," , "&&"
    }
    enum AssignmentOperator {
            "=" , "+=" , "-=" , "*=" , "/=" , "%="
            , "<<=" , ">>=" , ">>>="
            , ",=" , "^=" , "&="
    }
    enum UpdateOperator {
            "++" , "--"
    }
    interface XMLDefaultDeclaration extends Declaration {
        namespace: Expression;
    }
    interface XMLAnyName extends Expression {
    }
    interface XMLQualifiedIdentifier extends Expression {
        left: any /* Identifier | XMLAnyName */
        ;
        right: any /* Identifier | Expression */
        ;
        computed: boolean;
    }
    interface XMLFunctionQualifiedIdentifier extends Expression {
        right: any /* Identifier | Expression */
        ;
        computed: boolean;
    }
    interface XMLAttributeSelector extends Expression {
        attribute: Expression;
    }
    interface XMLFilterExpression extends Expression {
        left: Expression;
        right: Expression;
    }
    interface XMLElement extends XML, Expression {
        contents: XML[];
    }
    interface XMLList extends XML, Expression {
        contents: XML[];
    }
    interface XML extends Tree {
    }
    interface XMLEscape extends XML {
        expression: Expression;
    }
    interface XMLText extends XML {
        text: string;
    }
    interface XMLStartTag extends XML {
        contents: XML[];
    }
    interface XMLEndTag extends XML {
        contents: XML[];
    }
    interface XMLPointTag extends XML {
        contents: XML[];
    }
    interface XMLName extends XML {
        contents: any /* string | XML[] */
        ;
    }
    interface XMLAttribute extends XML {
        value: string;
    }
    interface XMLCdata extends XML {
        contents: string;
    }
    interface XMLComment extends XML {
        contents: string;
    }
    interface XMLProcessingInstruction extends XML {
        target: string;
        contents?: string;
    }
}

declare module 'esprima' {
    interface Options {
        loc?: boolean;
        range?: boolean;
        raw?: boolean;
        tokens?: boolean;
        comment?: boolean;
        tolerant?: boolean;
    }

    function parse(text:string, options?:Options):syntax.Tree;
}