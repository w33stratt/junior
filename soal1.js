function test() {
  var a = 1;
  var b = 2;
  console.log("a awal = ", a);
  console.log("b awal = ", b);

  a -= b;
  b += a;
  a = b - a;

  console.log("a final = ", a);
  console.log("b final = ", b);
}

test();
