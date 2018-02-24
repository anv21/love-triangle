/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const foundLoveTriangles = [];

  for (let i = 0; i < preferences.length; i++) {
    if (preferences[i] !== null) {
      for (let j = 0; j < preferences.length; j++) {
        if (j !== i && preferences[j] !== null) {
          for (let k = 0; k < preferences.length; k++) {
            if (k !== i && k !== j && preferences[k] !== null) {

              const isLoveTriangle = preferences[i] === j + 1 && preferences[j] === k + 1 && preferences[k] === i + 1;

              if (isLoveTriangle) {
                const loveTriangleId = [i, j, k].sort().join('|');
                if (foundLoveTriangles.indexOf(loveTriangleId) === -1) {
                  foundLoveTriangles.push(loveTriangleId);
                  preferences[i] = null;
                  preferences[j] = null;
                  preferences[k] = null;
                }

              }

            }
          }
        }
      }
    }
  }

  return foundLoveTriangles.length;
};
