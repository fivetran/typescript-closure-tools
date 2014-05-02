// Generated Thu May  1 16:44:43 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.string {

    /**
     * Wrapper for strings that conform to a data type or language.
     *
     * Implementations of this interface are wrappers for strings, and typically
     * associate a type contract with the wrapped string.  Concrete implementations
     * of this interface may choose to implement additional run-time type checking,
     * see for example {@code goog.html.SafeHtml}. If available, client code that
     * needs to ensure type membership of an object should use the type's function
     * to assert type membership, such as {@code goog.html.SafeHtml.unwrap}.
     * @interface
     */
    interface TypedString {
        implementsGoogStringTypedString: boolean;
        getTypedStringValue: any /*missing*/;
    }
}

