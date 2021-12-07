var matrixReshape = function (mat, r, c) {
  const mainRow = mat.length;
  const mainColumn = mat[0].length;

  if (r * c !== mainColumn * mainRow) {
    return mat;
  }
  const returnMat = [];
  let newMat = [];
  let row = 0,
    col = 0;
  for (i = 0; i < r * c; i++) {
    newMat.push(mat[row][col]);
    if ((i + 1) % mainColumn === 0) {
      row++;
      col = -1;
    }
    if ((i + 1) % c === 0) {
      returnMat.push(newMat);
      newMat = [];
    }
    col++;
  }
  return returnMat;
};

console.log(matrixReshape([[1, 2, 3, 4]], 2, 2));
