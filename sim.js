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
       let currentY = 0
       let currentX = 0
       let signalStr = new Array(360).fill(0).map(row => new Array(90).fill(0))

       const signalSimulatedLines = new LineByLine('./signalSimulated.html')
       let readLine
       let line

       while (line = signalSimulatedLines.next()) {
              readLine = line.toString('ascii')

              if (readLine.includes('#')) {
                     let dataPos = (readLine.indexOf('#'))
                     signalStr[currentX][currentY] = readLine.substring((dataPos + 1), (dataPos + 3))
              }

              if (readLine.includes('/TR')) {
                     currentY++
                     currentX = 0
              }

              if (readLine.includes('/TD')) {
                     currentX++
              }
       }

       console.log('Simulated signal loaded.')
       const used = process.memoryUsage().heapUsed / 1024 / 1024;
       console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`)

       return signalStr
}