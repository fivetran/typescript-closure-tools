// Generated Thu May  1 12:43:38 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.module {

    /**
     * An interface that loads JavaScript modules.
     * @interface
     */
    interface AbstractModuleLoader {
        loadModules(ids: string[], moduleInfoMap: Object, opt_successFn?: () => any /*missing*/, opt_errorFn?: (_0: number) => any /*missing*/, opt_timeoutFn?: () => any /*missing*/, opt_forceReload?: boolean): void;
        prefetchModule(id: string, moduleInfo: goog.module.ModuleInfo): void;
    }
}

