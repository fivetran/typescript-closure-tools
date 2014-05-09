interface Arguments extends IArguments { }

declare module goog {
    module _string { }

    export import string = _string;
}