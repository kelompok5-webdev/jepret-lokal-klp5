function rupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function hitung() {
  var hargaPaket = Number(document.getElementById("paket").value);
  var jumlah = Number(document.getElementById("jumlah").value);
  var kode = document.getElementById("kode-promo").value.toUpperCase().trim();
  var hasil = document.getElementById("hasil");

  // Pesan jika jumlah kosong atau kurang dari 1
  if (!jumlah || jumlah < 1) {
    hasil.innerHTML = '<p class="error">Isi jumlah produk minimal 1.</p>';
    return;
  }

  // Harga awal = harga paket x jumlah produk
  var hargaAwal = hargaPaket * jumlah;

  // Logika diskon (tidak ditumpuk, kode promo dicek lebih dulu)
  var persen;
  var keterangan;
  if (kode === "GRADPROM") {
    persen = 15;
    keterangan = "Promo Graduation (GRADPROM)";
  } else if (jumlah >= 3) {
    persen = 10;
    keterangan = "Bundling Hemat";
  } else {
    persen = 0;
    keterangan = "Tidak ada diskon";
  }

  var diskon = Math.round(hargaAwal * persen / 100);
  var totalBayar = hargaAwal - diskon;

  hasil.innerHTML =
    "<p>Harga awal: " + rupiah(hargaAwal) + "</p>" +
    "<p>Diskon (" + persen + "%, " + keterangan + "): " + rupiah(diskon) + "</p>" +
    '<p class="total">Total bayar: ' + rupiah(totalBayar) + "</p>";
}

document.getElementById("btn-hitung").addEventListener("click", hitung);
