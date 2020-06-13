/*  
                                 <--- Part Two --->
During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops
the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and
subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. 
Any mass that would require negative fuel should instead be treated as if it requires zero fuel;
the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is
outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, 
continuing until a fuel requirement is zero or negative. For example:

    A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), 
    so the total fuel required is still just 2.
    At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, 
    which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
    The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.
*/

"use strict";


 // Each module and its mass.
const allMass = [144358, 92044, 53617, 71695, 134329, 149370, 57980, 71899, 58281, 67662,
    81199, 123700, 140080, 63608, 71520, 51020, 125731, 58038, 64709, 120935, 65512, 142680, 135615,
    64251, 131894, 92421, 135197, 118339, 111812, 133283, 100622, 67295, 125093, 56381, 76811,
    82373, 147433, 96033, 114523, 134209, 111383, 130114, 56037, 144439, 135345, 78408, 98586, 118732, 84373, 62412, 146946, 96024, 101322, 91590, 59401, 113838, 98867, 76950, 130379,
    120006, 66525, 64876, 83451, 114127, 98963, 81096, 110360, 123755, 77552, 76400, 146026, 70976,
    53906, 149079, 121966, 63970, 67562, 62162, 67534, 118706, 138329, 81170, 101462, 130641,
    73241, 86687, 67198, 141550, 117396, 98423, 51743, 88076, 114089, 118106, 96609, 145837, 61959,
    118543, 63914, 54664];


(function () {
    let totalFuel = 0;
    
    /**
     * 
     * @param {int} moduleMass Mass of each module.
     */
    let fuelRequired = (moduleMass) => {
        let fuel = Math.floor(moduleMass / 3) - 2;
        if (fuel > 0) {
            totalFuel += fuel
            fuelRequired(fuel);
        }
        return totalFuel;
    }

    for (const mass of allMass) {
        fuelRequired(mass);
    }

    console.log("The total fuel required for all the modules on the spacecraft, including fuel is "
        + totalFuel);
})();