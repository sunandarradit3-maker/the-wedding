# 🎊 The Wedding - Undangan Pernikahan Online Islami

Website undangan pernikahan online dengan desain modern, islami, dan fitur lengkap untuk acara pernikahan Anda.

## ✨ Fitur Utama

### 📸 Galeri Foto (8 Foto)
- **2 Foto Mempelai Pria** - Profil Ahmad Rizky
- **2 Foto Mempelai Wanita** - Profil Siti Nurhaliza
- **6 Foto Bersama** - Momen mesra pasangan

### 🗺️ Google Maps Integration
- Embed peta lokasi acara
- Marker interaktif dengan info window
- Link langsung ke Google Maps

### 📞 Kontak Mempelai
- Nomor WhatsApp Ahmad: +62 812 3456 7890
- Nomor WhatsApp Siti: +62 821 9876 5432
- Link langsung ke WhatsApp

### 💬 Sistem Komentar Real-time
- Form untuk mengirim ucapan dan doa
- Komentar publik (bisa dilihat semua orang)
- Sistem penyimpanan menggunakan localStorage
- Auto-refresh setiap 3 detik
- Input sanitization untuk keamanan

### 🎨 Desain Islami Modern
- Warna emas (#d4af37) sebagai aksen islami
- Ayat Qur'an di bagian atas (Ar-Rum: 21)
- Bismillah di header
- Responsive design (mobile-friendly)

## 🛠️ Setup dan Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/sunandarradit3-maker/the-wedding.git
cd the-wedding
```

### 2. Setup Google Maps API
1. Buka [Google Cloud Console](https://console.cloud.google.com)
2. Buat project baru
3. Enable Google Maps JavaScript API
4. Generate API Key
5. Buka `index.html` dan ganti `YOUR_GOOGLE_MAPS_API_KEY` dengan API Key Anda

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&language=id"></script>
```

### 3. Update Data Mempelai
Buka `index.html` dan update:
- Nama mempelai (Ahmad & Siti)
- Nama orang tua
- Tanggal dan jam acara
- Lokasi acara dan koordinat
- Nomor telepon

### 4. Update Foto
Ganti placeholder foto dengan foto asli:
- Buat folder `images` di root project
- Upload foto ke folder tersebut
- Update URL di `index.html`

```html
<img src="images/ahmad-1.jpg" alt="Ahmad Foto 1">
<img src="images/siti-1.jpg" alt="Siti Foto 1">
<img src="images/couple-1.jpg" alt="Couple Foto 1">
```

## 📁 Struktur File

```
the-wedding/
├── index.html        # File HTML utama
├── styles.css        # Styling CSS
├── script.js         # JavaScript untuk interaktivitas
├── images/           # Folder untuk foto (buat sendiri)
│   ├── ahmad-1.jpg
│   ├── ahmad-2.jpg
│   ├── siti-1.jpg
│   ├── siti-2.jpg
│   ├── couple-1.jpg
│   └── ... (6 foto couple)
└── README.md         # File dokumentasi ini
```

## 🚀 Cara Menggunakan

### Online (Deploy ke GitHub Pages)

1. **Push ke GitHub**
```bash
git add .
git commit -m "Initial commit: Setup website undangan pernikahan"
git push origin main
```

2. **Enable GitHub Pages**
   - Buka Settings repository
   - Pilih Pages
   - Pilih branch `main`
   - URL website: `https://sunandarradit3-maker.github.io/the-wedding/`

### Lokal (Development)

1. Buka terminal di folder project
2. Jalankan local server:
   ```bash
   # Dengan Python 3
   python -m http.server 8000
   
   # Atau dengan Python 2
   python -m SimpleHTTPServer 8000
   ```
3. Buka browser: `http://localhost:8000`

## 📝 Mengelola Komentar

### Melihat Komentar
- Semua komentar tersimpan di localStorage browser
- Buka DevTools (F12) → Application → Local Storage

### Menambah Sample Komentar (Testing)
- Buka DevTools Console (F12)
- Jalankan: `addSampleComments()`

### Hapus Semua Komentar
```javascript
localStorage.removeItem('wedding_comments');
```

## 🔒 Keamanan

- ✅ Input sanitization mencegah XSS
- ✅ Email validation
- ✅ Lokalisasi data (localStorage)
- ⚠️ Untuk production, gunakan backend server untuk menyimpan komentar

## 🎯 Customization Tips

### Ubah Warna Tema
Edit file `styles.css`:
```css
/* Warna emas islami */
--primary-color: #d4af37;

/* Ubah di bagian: */
border-top: 4px solid #d4af37; /* Ubah warna ini */
color: #d4af37; /* Ubah warna ini */
```

### Ubah Font
```html
<!-- Di <head> -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
```

### Tambah Section Baru
- Copy-paste struktur section yang sudah ada
- Sesuaikan class dan styling

## 📱 Browser Support

✅ Chrome, Firefox, Safari, Edge (modern versions)
✅ Mobile: iOS Safari, Chrome Mobile

## 🐛 Troubleshooting

### Google Maps tidak muncul
- Pastikan API Key sudah benar
- Cek apakah Maps API sudah di-enable
- Cek limit API Anda

### Komentar tidak muncul
- Pastikan localStorage enabled di browser
- Cek DevTools Console untuk error
- Refresh halaman

### Foto tidak muncul
- Pastikan path foto benar
- Periksa format file (jpg, png, webp)
- Cek ukuran file (optimasi jika terlalu besar)

## 💡 Tips Maintenance

1. **Backup Komentar** - Jika ingin data permanen, export dari localStorage
2. **Update Foto** - Ganti placeholder dengan foto berkualitas tinggi
3. **Optimize Images** - Gunakan tool seperti TinyPNG untuk compress
4. **Test Responsif** - Cek di berbagai ukuran layar
5. **SEO** - Update meta tags untuk better visibility

## 📞 Contact & Support

Jika ada pertanyaan atau membutuhkan customization lebih lanjut:
- 📧 Email: tidak tersedia
- 💬 GitHub Issues: Buka issue di repository

## 📄 License

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan!

## 🙏 Doa

*"Semoga Allah memberkahi pernikahan Ahmad dan Siti dengan kebahagiaan, ridha, dan kasih sayang yang abadi."*

---

**Created with ❤️ by GitHub Copilot**

Made for the wedding of Ahmad & Siti 💕