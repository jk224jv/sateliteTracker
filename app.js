/**
 * The starting point of the application.
 *
 * @author Jimmy Karlsson <jk224jv@student.lnu.se>
 * @version 1.0.0
 */

// Get the module "simSignal". Using ./ to indicate that it is
// placed in the same directory as this file.
import * as Signal from './sim.js'

// Call the function "simSignal" without any arguments and save the
// return value in the constant "simMatrix".

let signalMatrix = Signal.simSignal()

// Print the value of the constant "signalMatrix" to the terminal (console) to verify function. 
console.log(signalMatrix[1][1])
console.log(signalMatrix[0][1])
console.log(signalMatrix[3][4])