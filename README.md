# Nasi Darurat Batam

Website satu halaman (single page) untuk gerakan sosial **Nasi Darurat Batam** — komunitas yang menyalurkan nasi bungkus darurat dari hasil donasi masyarakat kepada warga Batam yang sedang kesulitan.

Situs ini dibuat statis (HTML/CSS/JS murni) sehingga bisa langsung di-*deploy* lewat **GitHub Pages** tanpa proses build.

## Struktur proyek

```
nasi-darurat-batam/
├── index.html      # seluruh konten halaman (hero, tentang, visi-misi, kegiatan, galeri, cara bantu, kontak)
├── style.css        # semua styling & desain
├── script.js         # animasi angka statistik, menu mobile, scroll reveal
├── assets/
│   └── galeri/       # taruh foto kegiatan asli di sini (lihat catatan di bawah)
└── README.md
```

## Cara pakai / kustomisasi

1. **Ganti data statistik.** Di `index.html`, cari komentar `<!-- GANTI: ... -->` — angka porsi nasi, jumlah dapur, jumlah relawan, dan timeline kegiatan masih berupa **contoh/placeholder**. Ganti dengan data asli organisasi.
2. **Ganti foto galeri.** Kartu galeri saat ini memakai pola warna sebagai pengganti foto (karena belum ada foto asli). Taruh foto kegiatan di folder `assets/galeri/`, lalu ganti `<div class="galeri-media placeholder">...</div>` dengan `<img src="assets/galeri/nama-file.jpg" alt="...">`.
3. **Ganti kontak & rekening donasi.** Cari bagian "Cara Membantu" dan "Kontak" di `index.html`, isi dengan nomor WhatsApp, rekening bank, dan akun media sosial yang sebenarnya.
4. **Warna & font** diatur lewat CSS custom properties di bagian atas `style.css` (`:root`), jadi bisa diubah dari satu tempat saja.

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `nasi-darurat-batam`.
2. Upload seluruh isi folder ini (jangan folder itu sendiri) ke root repository.
3. Buka **Settings → Pages**, pilih source **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Tunggu beberapa menit, situs akan aktif di `https://<username-github>.github.io/nasi-darurat-batam/`.

## Lisensi konten

Teks di dalam situs ini adalah draf awal yang bisa diedit bebas sesuai kebutuhan organisasi. Tidak ada aset berbayar atau berhak cipta pihak ketiga yang digunakan — semua ikon dibuat sebagai SVG asli di dalam `index.html`.
