/*
                        <--- Day 2: 1202 Program Alarm --->
*/

"use strict";


let intCodeProgram = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 6, 19, 2, 19, 6, 23, 1, 
    23, 5, 27, 1, 9, 27, 31, 1, 31, 10, 35, 2, 35, 9, 39, 1, 5, 39, 43, 2, 43, 9, 47, 1, 5, 47, 51,
    2, 51, 13, 55, 1, 55, 10, 59, 1, 59, 10, 63, 2, 9, 63, 67, 1, 67, 5, 71, 2, 13, 71, 75, 1, 75,
    10, 79, 1, 79, 6, 83, 2, 13, 83, 87, 1, 87, 6, 91, 1, 6, 91, 95, 1, 10, 95, 99, 2, 99, 6, 103,
    1, 103, 5, 107, 2, 6, 107, 111, 1, 10, 111, 115, 1, 115, 5, 119, 2, 6, 119, 123, 1, 123, 5, 127,
    2, 127, 6, 131, 1, 131, 5, 135, 1, 2, 135, 139, 1, 139, 13, 0, 99, 2, 0, 14, 0];


(function restoreGravityAssistStateProgram() {
    // Before running the program, replace the values at position 1 & 2.
    intCodeProgram[1] = 12;
    intCodeProgram[2] = 2;

    // Value at position 0 after the program halts.
    const firstValue = () => {
        // Start processing opcode from the 0'th position.
        processOpcode(0);

        // The first value in the program after processing the opcode.
        return intCodeProgram[0];
    }


    /**
     * Processes each opcode and moves to the next one, untill you arrive at opcode 99.
     * 
     * @param {int} step - The next opcode position.
     */
    const processOpcode = (step) => {
        // The value at the first position is the opcode.
        const opCode = intCodeProgram[step];

        // Halt the program if opcode 99 is encountered.
        if (opCode === 99) { return; }

        // The three inputs after the opcode indicates where the inputs and outputs are, not their values.
        const operator1 = intCodeProgram[step + 1]; // indicates the position of first input.
        const operator2 = intCodeProgram[step + 2]; // indicates the position of the second input.
        // indicates the position at which the output shoud be stored.
        const finalPosition = intCodeProgram[step + 3]; 

        switch (opCode) {
            case 1:
                // opcode 1 adds together the numbers read from two positions and stores the result in
                // a third position.
                intCodeProgram[finalPosition] = intCodeProgram[operator1] + intCodeProgram[operator2];
                break;
            case 2:
                // opcode 2 works exactly like opcode 1, except it multiplies the two input instead of 
                // adding them.
                intCodeProgram[finalPosition] = intCodeProgram[operator1] * intCodeProgram[operator2];
                break;
            default:
                break;
        }
        // Step forward 4 position to reach the next opcode. Repeat.
        step += 4;
        processOpcode(step);
    }


    console.log("The value left at position 0 after program halts is " + firstValue());
})();