function matrixGenerator(str) {
  let result = [];
  let jumlahArr = 1;
  for (let h = 1; h < str.length; h++) {
    if (h * h >= str.length) {
      jumlahArr = h;
      break;
    }
  }
  let selisih = jumlahArr * jumlahArr - str.length;
  let indexStr = 0;
  for (let i = 1; i <= jumlahArr; i++) {
    let tempArr = [];
    for (let j = 1; j <= jumlahArr; j++) {
      if (selisih > 0) {
        tempArr.push("*");
        selisih--;
      } else if (tempArr.length + 1 < jumlahArr) {
        tempArr.push(str[indexStr]);
        indexStr++;
      } else {
        result.push(tempArr);
        tempArr.push(str[indexStr]);
        indexStr++;
      }
    }
  }
  return result;
}

console.log(matrixGenerator("abcdefgh"));
