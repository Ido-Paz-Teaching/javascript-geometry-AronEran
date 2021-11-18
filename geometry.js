function getTriangleArea(height, width) {
  /* Your amazing code here 🚀 */
  return height * width / 2;
}

function getSquareArea(side) {
  /* Your amazing code here 🚀 */
  return Math.pow(side,2);
}

function getCircleArea(radius) {
  /* Your amazing code here 🚀 */
  let s = Math.PI * Math.pow(radius,2);
  return Number( s.toFixed(2) );
}

//Please , don't remove the following code 
if (typeof module !== 'undefined') {
  module.exports = {
    getTriangleArea,
    getSquareArea,
    getCircleArea
  };
}