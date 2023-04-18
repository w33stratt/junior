function hitung(pokok, tenor, bungaPerBln) {
  var pokok= parseFloat(document.grup.ipokok.value);
  var tenor= parseFloat(document.grup.itenor.value);
  var bunga= parseFloat(document.grup.ibunga.value/100);
  var pinjaman= parseFloat(document.grup.ipinjaman.value);
  var bungaBulan= parseFloat(document.grup.ibungaBulan.value);
  var total = parseFloat(document.grup.itotal.value);
  for (let i = 0; i <=bungaBulan; i++) {
    pokok=pokok+(pokok*bunga);
    hasil=hasil+"Saldo Bulan  "+i+"=Rp. "+pokok+"\n";
  }
  document.group.ohasil.value=hasil;
}

<pre>
  Data input: 
  pokok <input type="text" size="20" name="isaldo">
  tenor <input type="text" size="20" name="itenor"> 
  bunga <input type="text" size="20" name="ibunga"> %
  pinjaman <input type="text" size="20" name="ipinjaman"> Bulan
  bungaBulan <input type="text" size="20" name="ibungaBulan"> Bulan
  
</pre>

<pre>
  Hasil : <textarea name= "ototal" rows="15" cols="70"></textarea>
</pre>