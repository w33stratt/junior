function hitung(jamMasuk, jamKeluar) {
  var nama = document.dedeform.inama.value;
  var alamat = document.dedeform.ialamat.value;
  var kode = document.dedeform.ikode.value;
  var lama = parseFloat(document.dedeform.ilama.value);
  var um = 0.0;
  var tarif = 0.0;
  var bayar = 0.0;
  var diskon = 0.0;
  var totbay = 0.0;

  if (kode == "A") {
    tarif = 500000;
  } else if (kode == "B") {
    tarif = 350000;
  } else if (kode == "C") {
    tarif = 1600000;
  } else {
    tarif = 2800000;
  }

  if (kode == "A") {
    um = 500000;
  } else if (kode == "B") {
    um = 350000;
  } else if (kode == "C") {
    um = 1600000;
  } else {
    um = 2800000;
  }

  if (lama > 7) {
    diskon = 0.05 * tarif;
  } else {
    diskon = 0.0;
  }
  tarif = tarif - diskon;

  bayar = tarif * lama + um;
  tambahan = 0.1 * bayar;
  totbay = ppn + bayar;
  document.dedeform.onama.value = nama;
  document.dedeform.obayar.value = eval(bayar);
  document.dedeform.odiskon.value = eval(diskon);
  document.dedeform.oppn.value = eval(ppn);
  document.dedeform.total.value = eval(totbay);
}
