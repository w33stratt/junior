function deretAngka(nilai1, nilai2, deret) {
  kata1 = dud;
  kata2 = hey;
  nilai1 = -1;
  nilai2 = 2;

  let deret = "";

  for (let i = 0; i <= nilai1; i++) {
    for (let i = 0; i < nilai2; i++) {
      if (i % 5 === 0 && i % 3 === 0) deret += `${kata1}${kata2} `;
      if (i % 3 === 0) deret += `${kata1} `;
      if (i % 5 === 0) deret += `${kata2} `;
    }
  }

  return deret;
}

console.log(deretAngka(6));
