/*
                        <--- Day 2: 1202 Program Alarm --->

An Intcode program is a list of integers separated by commas (like 1,0,0,3,99). To run one, start
by looking at the first integer (called position 0). Here, you will find an opcode - either 1, 2,
or 99. The opcode indicates what to do; for example, 99 means that the program is finished and
should immediately halt. Encountering an unknown opcode means something went wrong.

Opcode 1 adds together numbers read from two positions and stores the result in a third position.
The three integers immediately after the opcode tell you these three positions - the first two
indicate the positions from which you should read the input values, and the third indicates the
position at which the output should be stored.

For example, if your Intcode computer encounters 1,10,20,30, it should read the values at positions
10 and 20, add those values, and then overwrite the value at position 30 with their sum.

Opcode 2 works exactly like opcode 1, except it multiplies the two inputs instead of adding them.
Again, the three integers after the opcode indicate where the inputs and outputs are, not their
values.

Once you're done processing an opcode, move to the next one by stepping forward 4 positions.

For example, 

Suppose you have the following program:

1,9,10,3,2,3,11,0,99,30,40,50

For the purposes of illustration, here is the same program split into multiple lines:

    1,9,10,3,
    2,3,11,0,
    99,
    30,40,50

The first four integers, 1,9,10,3, are at positions 0, 1, 2, and 3. Together, they represent the
first opcode (1, addition), the positions of the two inputs (9 and 10), and the position of the
output (3). To handle this opcode, you first need to get the values at the input positions:
position 9 contains 30, and position 10 contains 40. Add these numbers together to get 70. Then,
store this value at the output position; here, the output position (3) is at position 3, so it
overwrites itself. Afterward, the program looks like this:

    1,9,10,70,
    2,3,11,0,
    99,
    30,40,50

Step forward 4 positions to reach the next opcode, 2. This opcode works just like the previous, but
it multiplies instead of adding. The inputs are at positions 3 and 11; these positions contain 70
and 50 respectively. Multiplying these produces 3500; this is stored at position 0:

    3500,9,10,70,
    2,3,11,0,
    99,
    30,40,50

Stepping forward 4 more positions arrives at opcode 99, halting the program.
*/

"use strict";


let intCode = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 6, 19, 2, 19, 6, 23, 1, 23,
    5, 27, 1, 9, 27, 31, 1, 31, 10, 35, 2, 35, 9, 39, 1, 5, 39, 43, 2, 43, 9, 47, 1, 5, 47, 51, 2,
    51, 13, 55, 1, 55, 10, 59, 1, 59, 10, 63, 2, 9, 63, 67, 1, 67, 5, 71, 2, 13, 71, 75, 1, 75, 10,
    79, 1, 79, 6, 83, 2, 13, 83, 87, 1, 87, 6, 91, 1, 6, 91, 95, 1, 10, 95, 99, 2, 99, 6, 103, 1,
    103, 5, 107, 2, 6, 107, 111, 1, 10, 111, 115, 1, 115, 5, 119, 2, 6, 119, 123, 1, 123, 5, 127,
    2, 127, 6, 131, 1, 131, 5, 135, 1, 2, 135, 139, 1, 139, 13, 0, 99, 2, 0, 14, 0];


// Start doing it
console.log(intCode.length);