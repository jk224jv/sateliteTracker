/**
 * Simulated signal module.
 *
 * @module src/sim
 * @author Jimmy Karlsson <jk224jc@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Reads the local file signalSimulated.html
 * and stores the html tables as a 2d array.
 * While it would be simpler to handle the result
 * in the same pass, I have opted not to for practice in modular coding.
 *
 * returns {array} [X-cord][Y-cord] = signalStrenght.
 */

//import defaultExport from './node_modules/n-readlines/readlines'
import LineByLine from 'n-readlines'

export function simSignal() {
       // define initial X, Y coridnates
       let currentY = 0
       let currentX = 0
       // make an 2D array called signalStr thats 360 x 90 and prefill with value 0 
       let signalStr = new Array(360).fill(0).map(row => new Array(90).fill(0))

       // use n-readlines to read the html table stored in signalSimulated.html
       // the table represents the signalstrenth by color black<->white in hex
       const signalSimulatedLines = new LineByLine('./signalSimulatedInv.html')
       // define strings used by filehandler
       let readLine
       let line

       //while there is still a line to be read, do:
       while (line = signalSimulatedLines.next()) {
              //make a string out of each line and store in the string variable readLine
              readLine = line.toString('ascii')

              //check if the current tableline holds any valuedata.
              if (readLine.includes('#')) {
                     //get the possition in the string where the value is located-
                     let dataPos = (readLine.indexOf('#'))
                     //store the value in the array signalStr at coresponding cordinates. 
                     // we know the value is a represented as a back and white collor so the hex will be 0x00_00_00 <-> 0xff_ff_ff so we can save memory by only looking at one hex
                     signalStr[currentX][currentY] = readLine.substring((dataPos + 1), (dataPos + 3))
              }
              //check if the current tableline is the end of the tablerow, if so reset currentX to 0 and inc currentY.
              if (readLine.includes('/TR')) {
                     currentY++
                     currentX = 0
              }
              //check if the current tableline is the end of the tablecollumn, if so inc currentX
              if (readLine.includes('/TD')) {
                     currentX++
              }
       }

       //all the lines are read, report success and memory usage.
       console.log('Simulated signal loaded.')
       const used = process.memoryUsage().heapUsed / 1024 / 1024;
       console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`)

       //return the matrix to the main app.js
       return signalStr
}
// The Omnissiah directs our footsteps along the path of knowledge