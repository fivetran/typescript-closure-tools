/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />

declare module goog.editor.plugins {

    class Blockquote extends Blockquote__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Blockquote__Class extends goog.editor.Plugin__Class  { 
    
            /**
             * Plugin to handle splitting block quotes.  This plugin does nothing on its
             * own and should be used in conjunction with EnterHandler or one of its
             * subclasses.
             * @param {boolean} requiresClassNameToSplit Whether to split only blockquotes
             *     that have the given classname.
             * @param {string=} opt_className The classname to apply to generated
             *     blockquotes.  Defaults to 'tr_bq'.
             * @constructor
             * @extends {goog.editor.Plugin}
             * @final
             */
            constructor(requiresClassNameToSplit: boolean, opt_className?: string);
    
            /**
             * Checks if a node is a blockquote which can be split. A splittable blockquote
             * meets the following criteria:
             * <ol>
             *   <li>Node is a blockquote element</li>
             *   <li>Node has the blockquote classname if the classname is required to
             *       split</li>
             * </ol>
             *
             * @param {Node} node DOM node in question.
             * @return {boolean} Whether the node is a splittable blockquote.
             */
            isSplittableBlockquote(node: Node): boolean;
    
            /**
             * Checks if a node is a blockquote element which has been setup.
             * @param {Node} node DOM node to check.
             * @return {boolean} Whether the node is a blockquote with the required class
             *     name applied.
             */
            isSetupBlockquote(node: Node): boolean;
    
            /**
             * Checks if a node is a blockquote element which has not been setup yet.
             * @param {Node} node DOM node to check.
             * @return {boolean} Whether the node is a blockquote without the required
             *     class name applied.
             */
            isUnsetupBlockquote(node: Node): boolean;
    
            /**
             * Gets the class name required for setup blockquotes.
             * @return {string} The blockquote class name.
             */
            getBlockquoteClassName(): string;
    } 
    
}

declare module goog.editor.plugins.Blockquote {

    /**
     * Command implemented by this plugin.
     * @type {string}
     */
    var SPLIT_COMMAND: string;

    /**
     * Class ID used to identify this plugin.
     * @type {string}
     */
    var CLASS_ID: string;

    /**
     * Checks if a node is a blockquote node.  If isAlreadySetup is set, it also
     * makes sure the node has the blockquote classname applied.  Otherwise, it
     * ensures that the blockquote does not already have the classname applied.
     * @param {Node} node DOM node to check.
     * @param {boolean} isAlreadySetup True to enforce that the classname must be
     *                  set in order for it to count as a blockquote, false to
     *                  enforce that the classname must not be set in order for
     *                  it to count as a blockquote.
     * @param {boolean} requiresClassNameToSplit Whether only blockquotes with the
     *     class name should be split.
     * @param {string} className The official blockquote class name.
     * @return {boolean} Whether node is a blockquote and if isAlreadySetup is
     *    true, then whether this is a setup blockquote.
     * @deprecated Use {@link #isSplittableBlockquote},
     *     {@link #isSetupBlockquote}, or {@link #isUnsetupBlockquote} instead
     *     since this has confusing behavior.
     */
    function isBlockquote(node: Node, isAlreadySetup: boolean, requiresClassNameToSplit: boolean, className: string): boolean;
}
