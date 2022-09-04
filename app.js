/**
 * The starting point of the application.
 *
 * @author Jimmy Karlsson <jk224jv@student.lnu.se>
 * @version 1.0.0
 */

//We assume this is the connection to a fysical satelitedish. 
 let hardwareInput = undefined
 let hardwareMotorControlX = 0
 let hardwareMotorControlY = 0

//  Get the module "simSignal". Using ./ to indicate that it is placed in the same directory as this file.
//  SimSignal will provide a simulated signal for testing or if hardware is unavailable.
import * as Signal from './sim.js'

// Get data from connected hardware,
// ||, OR
// Call the function "simSignal" without any arguments and save the
// return value in the constant "simMatrix".
// we know the hardwareInput is falsy, so simSignal will be called.
let signalMatrix = hardwareInput || Signal.simSignal()

//  Get the module "findBestSignal". Using ./ to indicate that it is placed in the same directory as this file.
//  findBestSignal will locate and return the X,Y cordinates with the highest signalStrenth
import * as locator from './locator.js'

//define the object bestCords with X, Y
//Call the function findBestSignal with signalMatrix as an argument
let bestCords = {x:0, y:0}
bestCords = locator.findBestSignal(signalMatrix)

//send cords to the engine controller... we don't have one so print to screen
// Print the value of the constant "signalMatrix" to the terminal (console) to verify function. 

console.log('\n' + 'Best signal is recieved at:')
console.log('X: ' + bestCords.x + '\u00B0')
console.log('Y: ' + bestCords.y + '\u00B0')
console.log('\n should be 132,40 if default data is used or 226,49 for inverted')