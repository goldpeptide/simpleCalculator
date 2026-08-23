# To do list

## Operation structure

* creating (and test) functions for:
  1. add
  2. subtract
  3. multiply
  4. divide

* A calc operation should consist of a number, an operator, and another number. (E. g., a + b)
  1. Create *three variables, one for each part of the operation*.
  2. Create func-s to update each number var when the digit-buttons are clicked.
      * display should update to reflect the new value

* Create a new func ```operate()``` that takes an operator and two numbers and then calls one of the above functions on the numbers.
  1. store the first / second number input by the user (& as if operator choice)
  2. call ```operate()``` on them (only) when:
     * the user presses the *=* button &
     * runs an operation when supplied with two numbers

**Calculator should not evaluate more than a single pair of numbers at a time.**
*If after second number, there's new operator input:*

* *calculator should evaluate the initial pair of numbers*
  * *(+ display current result).*
* *when next num is added (called), the previous result should become the first num.*
  * *the operation is still with the pair (last result => last operator => last No input)*
  * *If operator(s) are pressed consecutively (skipping No var-s), it should not run any evaluations,*
  *but only take the last operator entered to be used for the next operation.*

[[Example Calculator](https://www.calculatorsoup.com/calculators/math/basic.php)]

### Outlook

* Create a basic HTML calculator with buttons for each digit and operator (including =, but without keyboard keys now).
    1. Should have clear (AC) button
        *Pressing “clear” should wipe out any existing data
        *When a result is displayed, pressing a new digit should clear the result and start a new calculation (instead of appending the digit to the existing result).
    2. should also have a display
      *Round answers with long decimals so that they don’t overflow the display
      *Pressing = before entering all of the numbers or an operator shows error (can be cause issues)
      *Display an error message if the user tries to divide by 0

#### Potential for improvement

1. Add a “backspace” button, so the user can undo their last input if they click the wrong number.
2. Add keyboard support
3. Add a . button and let users input decimals.
   * Make sure you don’t let them type more than one though:
   * Disable the . button if there’s already a decimal separator in the display.
