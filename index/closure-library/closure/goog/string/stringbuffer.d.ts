/// <reference path="../../../globals.d.ts" />

declare module goog._string {

    class StringBuffer extends StringBuffer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class StringBuffer__Class  { 
    
            /**
             * Utility class to facilitate string concatenation.
             *
             * @param {*=} opt_a1 Optional first initial item to append.
             * @param {...*} var_args Other initial items to
             *     append, e.g., new goog.string.StringBuffer('foo', 'bar').
             * @constructor
             */
            constructor(opt_a1?: any, ...var_args: any[]);
    
            /**
             * Sets the contents of the string buffer object, replacing what's currently
             * there.
             *
             * @param {*} s String to set.
             */
            set(s: any): void;
    
            /**
             * Appends one or more items to the buffer.
             *
             * Calling this with null, undefined, or empty arguments is an error.
             *
             * @param {*} a1 Required first string.
             * @param {*=} opt_a2 Optional second string.
             * @param {...*} var_args Other items to append,
             *     e.g., sb.append('foo', 'bar', 'baz').
             * @return {!goog.string.StringBuffer} This same StringBuffer object.
             * @suppress {duplicate}
             */
            append(a1: any, opt_a2?: any, ...var_args: any[]): goog.string.StringBuffer;
    
            /**
             * Clears the internal buffer.
             */
            clear(): void;
    
            /**
             * @return {number} the length of the current contents of the buffer.
             */
            getLength(): number;
    } 
    
}
