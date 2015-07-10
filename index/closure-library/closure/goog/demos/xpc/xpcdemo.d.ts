/// <reference path="../../../../globals.d.ts" />

declare module xpcdemo {

    /**
     * Initializes XPC in the containing page.
     */
    function initOuter(): void;

    /**
     * Initialization in the iframe.
     */
    function initInner(): void;

    /**
     * Kills the peer iframe and the disposes the channel.
     */
    function teardown(): void;

    /**
     * Logging function. Inserts log-message into element with it id 'console'.
     * @param {string} msgString The log-message.
     */
    function log(msgString: string): void;

    /**
     * Sends a ping request to the peer.
     */
    function ping(): void;

    /**
     * Start mousemove event forwarding. Registers a listener on the document which
     * sends them over the channel.
     */
    function startMousemoveForwarding(): void;

    /**
     * Stop mousemove event forwarding.
     */
    function stopMousemoveForwarding(): void;

    /**
     * Send multiple messages.
     * @param {number} n The number of messages to send.
     */
    function sendN(n: number): void;
}
