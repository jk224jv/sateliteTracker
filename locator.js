/**
 * Simulated signal module.
 *
 * @module src/locator
 * @author Jimmy Karlsson <jk224jc@student.lnu.se>
 * @version 1.0.0
 */

// ------------------------------------------------------------------------------
//  Public interface
// ------------------------------------------------------------------------------

/**
 * Scanns the signalMatrix to find the X,Y location with the 
 * highest value = best signal strength
 *  *
 * returns {object} {X-cord][Y-cord} = best cordinates.
 */



export function findBestSignal(signalMatrix) {
       console.log ('Running locator script ...' + '\n')

       //define variables for systematic scanning the Matrix
       let bestFound = 0    // highest value found
       //we know there will be a blob of highest value so we find the perimiter
       let xOfBestFound = {fromX:0, toX:0}   //where was the highest value found located on X-axis
       let yOfBestFound = {fromY:0, toY:0}   //where was the highest value flound located on Y-axis

       //get the value of each position in signalMatrix
       for (let currentX = 0; currentX < 360; currentX++){// 0 - 359, 360 positions
              for (let currentY = 0; currentY < 90; currentY++) {// 0 -89, 90 positions
                     //it the value is better than previously found record the position
                     if (signalMatrix[currentX][currentY] > bestFound) {
                            bestFound = signalMatrix[currentX][currentY]
                            xOfBestFound.fromX = currentX
                            yOfBestFound.fromY = currentY
                     }
                     //are we still in the blob of highest value? if so extend the perimiter
                     if (signalMatrix[currentX][currentY] == bestFound) {
                            bestFound = signalMatrix[currentX][currentY]
                            xOfBestFound.toX = currentX
                            yOfBestFound.toY = currentY
                     }
       }
       }
       //communicate the result
       console.log('found the value:' + bestFound + ' @ X:' + xOfBestFound.fromX + ' - ' + xOfBestFound.toX + ' , Y:' + yOfBestFound.fromY + ' - ' + yOfBestFound.toY)
       
       //calculate and return the center of the perimiter
       return {x:Math.floor(xOfBestFound.toX-((xOfBestFound.toX-xOfBestFound.fromX)/2)), y:Math.floor(yOfBestFound.toY-((yOfBestFound.toY-yOfBestFound.fromY)/2))}
}
// The Omnissiah directs our footsteps along the path of knowledge