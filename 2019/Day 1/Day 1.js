/*                  
				<--- Day 1: The Tyranny of the Rocket Equation --->

Santa has become stranded at the edge of the Solar System while delivering presents to other
planets! To accurately calculate his position in space, safely align his warp drive, and return to
Earth in time to save Christmas.

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.
*/

"use strict";


// All the modules and its mass.
const allMass = [144358, 92044, 53617, 71695, 134329, 149370, 57980, 71899, 58281, 67662,
	81199, 123700, 140080, 63608, 71520, 51020, 125731, 58038, 64709, 120935, 65512, 142680, 135615,
	64251, 131894, 92421, 135197, 118339, 111812, 133283, 100622, 67295, 125093, 56381, 76811,
	82373, 147433, 96033, 114523, 134209, 111383, 130114, 56037, 144439, 135345, 78408, 98586, 118732, 84373, 62412, 146946, 96024, 101322, 91590, 59401, 113838, 98867, 76950, 130379,
	120006, 66525, 64876, 83451, 114127, 98963, 81096, 110360, 123755, 77552, 76400, 146026, 70976,
	53906, 149079, 121966, 63970, 67562, 62162, 67534, 118706, 138329, 81170, 101462, 130641,
	73241, 86687, 67198, 141550, 117396, 98423, 51743, 88076, 114089, 118106, 96609, 145837, 61959,
	118543, 63914, 54664];


/**
 * Finds the total fuel required to launch all the modules based on its mass. Specificaly,
 * to find the fuel required for a module, take its mass, divide by three, round down,
 * and subtract two.
 */
(function () {
	const fuelRequiredForEachModule = () => {
		// The total fuel required to launch.
		let totalFuel = 0;

		// Calculate the mass required for each module.
		for (let mass of allMass) {
			totalFuel += Math.floor(mass / 3) - 2;
		}
		return totalFuel;
	}

	console.log("The total fuel required for all the modules on the spacecraft is "
		+ fuelRequiredForEachModule());
})();