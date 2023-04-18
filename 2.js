function slice(data, index) {
  let indexAwal = index[0];
  let indexAkhir = !index[1] ? data.length : index[1];
  if (!indexAwal) {
    return data;
  }

  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (i >= indexAwal && i < indexAkhir) {
      result.push(data[i]);
    }
  }
  return result;
}

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], [2]));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], [2, 4]));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], [1, 5]));
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], []));
