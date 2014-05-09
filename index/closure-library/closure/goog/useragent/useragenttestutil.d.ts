/// <reference path="../../../globals.d.ts" />

declare module goog.userAgentTestUtil {

    /**
     * Rerun the initialization code to set all of the goog.userAgent constants.
     * @suppress {accessControls}
     */
    function reinitializeUserAgent(): void;

    /**
     * Browser definitions.
     * @enum {string}
     */
    enum UserAgents { GECKO, IE, OPERA, WEBKIT } 

    /**
     * Return whether a given user agent has been detected.
     * @param {string} agent Value in UserAgents.
     * @return {boolean} Whether the user agent has been detected.
     */
    function getUserAgentDetected(agent: string): boolean;
}
