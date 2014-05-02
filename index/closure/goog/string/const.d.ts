// Generated Thu May  1 16:44:48 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/string/typedstring.d.ts" />

declare module googstring.Const {

    /**
     * Performs a runtime check that the provided object is indeed an instance
     * of {@code googstring.Const}, and returns its value.
     * @param {!googstring.Const} stringConst The object to extract from.
     * @return {string} The Const object's contained string, unless the run-time
     *     type check fails. In that case, {@code unwrap} returns an innocuous
     *     string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(stringConst: googstring.Const): string;

    /**
     * Creates a Const object from a compile-time constant string.
     *
     * It is illegal to invoke this function on an expression whose
     * compile-time-contant value cannot be determined by the Closure compiler.
     *
     * Correct invocations include,
     * <pre>
     *   var s = googstring.Const.from('hello');
     *   var t = googstring.Const.from('hello' + 'world');
     * </pre>
     *
     * In contrast, the following are illegal:
     * <pre>
     *   var s = googstring.Const.from(getHello());
     *   var t = googstring.Const.from('hello' + world);
     * </pre>
     *
     * TODO(user): Compile-time checks that this function is only called
     * with compile-time constant expressions.
     *
     * @param {string} s A constant string from which to create a Const.
     * @return {!googstring.Const} A Const object initialized to stringConst.
     */
    function from(s: string): googstring.Const;
}

declare module googstring {

    /**
     * Wrapper for compile-time-constant strings.
     *
     * Const is a wrapper for strings that can only be created from program
     * constants (i.e., string literals).  This property relies on a custom Closure
     * compiler check that {@code googstring.Const.from} is only invoked on
     * compile-time-constant expressions.
     *
     * Const is useful in APIs whose correct and secure use requires that certain
     * arguments are not attacker controlled: Compile-time constants are inherently
     * under the control of the application and not under control of external
     * attackers, and hence are safe to use in such contexts.
     *
     * Instances of this type must be created via its factory method
     * {@code googstring.Const.from} and not by invoking its constructor.  The
     * constructor intentionally takes no parameters and the type is immutable;
     * hence only a default instance corresponding to the empty string can be
     * obtained via constructor invocation.
     *
     * @see googstring.Const#from
     * @constructor
     * @final
     * @struct
     * @implements {googstring.TypedString}
     */
    class Const implements googstring.TypedString {
        /**
         * Wrapper for compile-time-constant strings.
         *
         * Const is a wrapper for strings that can only be created from program
         * constants (i.e., string literals).  This property relies on a custom Closure
         * compiler check that {@code googstring.Const.from} is only invoked on
         * compile-time-constant expressions.
         *
         * Const is useful in APIs whose correct and secure use requires that certain
         * arguments are not attacker controlled: Compile-time constants are inherently
         * under the control of the application and not under control of external
         * attackers, and hence are safe to use in such contexts.
         *
         * Instances of this type must be created via its factory method
         * {@code googstring.Const.from} and not by invoking its constructor.  The
         * constructor intentionally takes no parameters and the type is immutable;
         * hence only a default instance corresponding to the empty string can be
         * obtained via constructor invocation.
         *
         * @see googstring.Const#from
         * @constructor
         * @final
         * @struct
         * @implements {googstring.TypedString}
         */
        constructor();
    }
}

