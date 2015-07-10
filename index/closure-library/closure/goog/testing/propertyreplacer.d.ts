/// <reference path="../../../globals.d.ts" />

declare module goog.testing {

    class PropertyReplacer extends PropertyReplacer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PropertyReplacer__Class  { 
    
            /**
             * Helper class for stubbing out variables and object properties for unit tests.
             * This class can change the value of some variables before running the test
             * cases, and to reset them in the tearDown phase.
             * See googletest.StubOutForTesting as an analogy in Python:
             * http://protobuf.googlecode.com/svn/trunk/python/stubout.py
             *
             * Example usage:
             * <pre>var stubs = new goog.testing.PropertyReplacer();
             *
             * function setUp() {
             *   // Mock functions used in all test cases.
             *   stubs.set(Math, 'random', function() {
             *     return 4;  // Chosen by fair dice roll. Guaranteed to be random.
             *   });
             * }
             *
             * function tearDown() {
             *   stubs.reset();
             * }
             *
             * function testThreeDice() {
             *   // Mock a constant used only in this test case.
             *   stubs.set(goog.global, 'DICE_COUNT', 3);
             *   assertEquals(12, rollAllDice());
             * }</pre>
             *
             * Constraints on altered objects:
             * <ul>
             *   <li>DOM subclasses aren't supported.
             *   <li>The value of the objects' constructor property must either be equal to
             *       the real constructor or kept untouched.
             * </ul>
             *
             * @constructor
             * @final
             */
            constructor();
    
            /**
             * Adds or changes a value in an object while saving its original state.
             * @param {Object|Function} obj The JavaScript or native object or function to
             *     alter. See the constraints in the class description.
             * @param {string} key The key to change the value for.
             * @param {*} value The new value to set.
             */
            set(obj: Object|Function, key: string, value: any): void;
    
            /**
             * Changes an existing value in an object to another one of the same type while
             * saving its original state. The advantage of {@code replace} over {@link #set}
             * is that {@code replace} protects against typos and erroneously passing tests
             * after some members have been renamed during a refactoring.
             * @param {Object|Function} obj The JavaScript or native object or function to
             *     alter. See the constraints in the class description.
             * @param {string} key The key to change the value for. It has to be present
             *     either in {@code obj} or in its prototype chain.
             * @param {*} value The new value to set. It has to have the same type as the
             *     original value. The types are compared with {@link goog.typeOf}.
             * @throws {Error} In case of missing key or type mismatch.
             */
            replace(obj: Object|Function, key: string, value: any): void;
    
            /**
             * Builds an object structure for the provided namespace path.  Doesn't
             * overwrite those prefixes of the path that are already objects or functions.
             * @param {string} path The path to create or alter, e.g. 'goog.ui.Menu'.
             * @param {*} value The value to set.
             */
            setPath(path: string, value: any): void;
    
            /**
             * Deletes the key from the object while saving its original value.
             * @param {Object|Function} obj The JavaScript or native object or function to
             *     alter. See the constraints in the class description.
             * @param {string} key The key to delete.
             */
            remove(obj: Object|Function, key: string): void;
    
            /**
             * Resets all changes made by goog.testing.PropertyReplacer.prototype.set.
             */
            reset(): void;
    } 
    
}
