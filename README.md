# Portofolio Pribadi — Annuril Baihaqi Achmadi
> **Education × Technology × AI**  
> *Bridging instructional design, digital learning media, and human-centered AI solutions.*

Website portofolio profesional ini dirancang khusus untuk merepresentasikan profil **Annuril Baihaqi Achmadi**, seorang sarjana Pendidikan Bahasa Inggris dari Universitas Nahdlatul Ulama Yogyakarta (Lulusan 2026), yang berfokus pada teknologi pendidikan, pengembangan media pembelajaran digital (khususnya konteks pendidikan nonformal / Paket C), perancangan materi instruksional, dan pemanfaatan AI.

---

## 📁 Struktur Berkas Proyek

Website ini dibangun menggunakan **Vanilla HTML5, CSS3 murni, dan Vanilla JavaScript** tanpa dependensi pihak ketiga atau framework yang berat.

```text
Portofolio Abay/
├── index.html                   # Berkas utama struktur halaman
├── favicon.svg                  # Favicon vektor modern berbasis inisial AA
├── css/
│   └── style.css                # Sistem desain modular, token CSS variabel, & dark mode
├── js/
│   └── script.js                # Interaksi: tema dark/light, navigasi sticky, modal, clipboard
├── assets/
│   ├── images/
│   │   ├── avatar-monogram.svg  # Placeholder monogram profesional AA (siap diganti foto)
│   │   ├── project-01-elearning.svg   # Ilustrasi modul e-learning Simple Present Tense
│   │   ├── project-02-mantul.svg      # Ilustrasi/mockup antarmuka aplikasi MANTUL
│   │   ├── project-03-english-daily.svg # Ilustrasi portal web English Daily
│   │   └── project-04-lesson-plans.svg  # Ilustrasi dokumen instruksional RPP & materi
│   ├── documents/
│   │   └── PANDUAN-DOKUMEN.txt  # Panduan penempatan berkas PDF (RPP, worksheet, dll.)
│   └── icons/                   # Tempat ikon SVG tambahan jika diperlukan
└── README.md                    # Dokumentasi lengkap panduan pengelolaan website
```

---

## 🚀 1. Cara Menjalankan Website Secara Lokal

Website ini bersifat statis murni sehingga tidak memerlukan instalasi Node.js, Python server, Apache, atau backend apa pun.

### Langkah Cepat:
1. Buka folder proyek di komputer Anda: `d:\Portofolio Abay\`.
2. Klik ganda pada berkas **`index.html`**.
3. Website akan otomatis terbuka dan berjalan sempurna di Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari.

*(Opsional: Jika Anda menggunakan VS Code / Antigravity IDE, Anda juga dapat membukanya menggunakan ekstensi **Live Server**).*

---

## ✏️ 2. Cara Mengganti Teks Profil & Narasi

Seluruh teks utama tersusun secara rapi dan semantik di dalam berkas [index.html](file:///d:/Portofolio%20Abay/index.html).

1. Buka berkas [index.html](file:///d:/Portofolio%20Abay/index.html) menggunakan teks editor.
2. Gunakan fitur pencarian (`Ctrl + F`) untuk menemukan bagian yang ingin diubah:
   - **Nama / Headline**: Cari elemen `<h1>` dengan class `.hero-headline` di baris Hero Section.
   - **Narasi "Tentang Saya"**: Cari `<section id="about">` untuk menyunting teks paragraf perkenalan.
   - **Informasi Akademik**: Cari `.about-credentials-card` untuk memperbarui status atau jurusan.

---

## 📸 3. Cara Menambahkan Foto Profil Asli

Secara bawaan, website menggunakan visual monogram profesional **AA** (`assets/images/avatar-monogram.svg`) agar tidak menggunakan foto palsu.

Saat foto profil profesional Anda (foto formal / semi-formal berlatar rapi) sudah siap:
1. Simpan foto Anda di folder: `assets/images/` dengan nama, misalnya, `profile-photo.jpg`.
2. Buka [index.html](file:///d:/Portofolio%20Abay/index.html).
3. Cari tag `<img>` pada baris Hero Section:
   ```html
   <!-- Ganti dari: -->
   <img src="assets/images/avatar-monogram.svg" alt="..." id="profileAvatarImg" width="400" height="400">

   <!-- Menjadi: -->
   <img src="assets/images/profile-photo.jpg" alt="Foto Annuril Baihaqi Achmadi" id="profileAvatarImg" width="400" height="400">
   ```
4. Simpan berkas dan muat ulang browser. Foto Anda akan otomatis terbingkai rapi dengan efek rounded dan shadow.

---

## 🖼️ 4. Cara Menambahkan Screenshot Proyek Aktual

Saat ini kartu proyek telah dilengkapi visualisasi representatif berbasis vektor yang bersih dan tajam di layar Retina:
- **Project 01**: `assets/images/project-01-elearning.svg`
- **Project 02 (MANTUL)**: `assets/images/project-02-mantul.svg`
- **Project 03 (English Daily)**: `assets/images/project-03-english-daily.svg`
- **Project 04 (Lesson Plans)**: `assets/images/project-04-lesson-plans.svg`

Jika Anda ingin menggantinya dengan tangkapan layar (screenshot) asli dari aplikasi atau website:
1. Simpan gambar screenshot berformat `.webp`, `.png`, atau `.jpg` di dalam folder `assets/images/` (contoh: `screenshot-mantul-live.png`).
2. Buka [index.html](file:///d:/Portofolio%20Abay/index.html) dan cari kartu proyek yang bersangkutan (misal ID `#project-02`).
3. Ganti atribut `src` pada tag `<img>` di dalam `.project-visual-inner`:
   ```html
   <img src="assets/images/screenshot-mantul-live.png" alt="Screenshot Aplikasi MANTUL" width="600" height="380" loading="lazy">
   ```

---

## 📄 5. Cara Menambahkan Dokumen Pembelajaran (PDF)

Pada kartu **Project 04 (English Teaching Materials and Lesson Plans)**, pengunjung dapat membuka modal daftar sampel dokumen.

Untuk menautkan berkas PDF asli Anda:
1. Masukkan berkas PDF Anda ke folder `assets/documents/`, misalnya:
   - `assets/documents/rpp-simple-present.pdf`
   - `assets/documents/worksheet-bahasa-inggris.pdf`
   - `assets/documents/teaching-script-paket-c.pdf`
2. Buka [index.html](file:///d:/Portofolio%20Abay/index.html) pada bagian modal dokumen (`#docModalOverlay`).
3. Ubah atribut `href` pada tombol unduh/buka:
   ```html
   <!-- Dari panduan file txt ke file pdf Anda: -->
   <a href="assets/documents/rpp-simple-present.pdf" target="_blank" class="btn btn--secondary btn--sm">
     Buka PDF ↗
   </a>
   ```

---

## 📬 6. Cara Mengubah Tautan Kontak

Di bagian kontak (`#contact`), terdapat beberapa informasi yang perlu Anda sesuaikan dengan data pribadi Anda:

1. **Alamat Email**:
   - Di [index.html](file:///d:/Portofolio%20Abay/index.html), cari elemen dengan ID `emailDisplayValue` dan ganti teksnya.
   - Cari tombol `mailto:` dengan ID `btnSendEmailDirect` dan ganti alamatnya:
     ```html
     <a href="mailto:email.anda@gmail.com?subject=Inquiry%20Portofolio%20Annuril" class="btn btn--primary" id="btnSendEmailDirect">
     ```
   - Di [js/script.js](file:///d:/Portofolio%20Abay/js/script.js), cari variabel `EMAIL_ADDRESS` pada baris sekitar 190 dan ubah nilainya:
     ```javascript
     const EMAIL_ADDRESS = 'email.anda@gmail.com';
     ```
2. **Profil LinkedIn**:
   - Buka [index.html](file:///d:/Portofolio%20Abay/index.html) pada bagian `#linkLinkedinWrap`.
   - Ubah dari tag `<div>` pembungkus placeholder menjadi tag `<a>`:
     ```html
     <a href="https://linkedin.com/in/username-anda" target="_blank" rel="noopener noreferrer" class="contact-link-item">
       <!-- teks dan icon -->
     </a>
     ```
3. **Akun GitHub**:
   - Tautan telah terpasang ke repositori aktual Anda: `https://github.com/baihaqiachmadi83-lang`.

---

## 🌐 7. Cara Menerbitkan Website Menggunakan GitHub Pages

Karena website ini menggunakan struktur berkas standar dengan path relatif (`index.html` di akar folder), website ini 100% siap dipublikasikan ke **GitHub Pages** secara gratis.

### Langkah-langkah:
1. **Buat Repositori Baru di GitHub**:
   - Masuk ke akun GitHub Anda ([github.com/baihaqiachmadi83-lang](https://github.com/baihaqiachmadi83-lang)).
   - Buat repositori baru, misalnya bernama: `portfolio` atau `baihaqiachmadi83-lang.github.io`.
   - Pilih visibilitas **Public**.
2. **Unggah Berkas ke GitHub**:
   - Jalankan perintah git di terminal komputer Anda dari folder ini:
     ```bash
     git init
     git add .
     git commit -m "Initial release: Portfolio Annuril Baihaqi Achmadi"
     git branch -M main
     git remote add origin https://github.com/baihaqiachmadi83-lang/portfolio.git
     git push -u origin main
     ```
   - *(Atau, Anda dapat mengunggah berkas langsung melalui antarmuka web GitHub dengan tombol "Upload files").*
3. **Aktifkan GitHub Pages**:
   - Di repositori GitHub Anda, klik menu **Settings** (Pengaturan).
   - Pada bilah sisi kiri, klik **Pages**.
   - Pada bagian **Build and deployment**:
     - *Source*: Pilih **Deploy from a branch**.
     - *Branch*: Pilih **main** dan folder **/(root)**.
     - Klik **Save**.
4. **Selesai**:
   - Dalam 1–2 menit, website portofolio Anda akan tayang secara publik di alamat:
     `https://baihaqiachmadi83-lang.github.io/portfolio/` (atau nama repositori Anda).

---

## 📋 Checklist Data yang Masih Perlu Dilengkapi (Placeholder Audit)

Untuk menjaga kredibilitas dan integritas profesional, bagian berikut sengaja disiapkan dalam bentuk placeholder yang jelas dan tidak diisi dengan klaim palsu:

- [x] **Foto Profil**: Foto asli telah ditambahkan ke `assets/images/profile-photo.jpg` dengan efek bokeh blur background.
- [x] **Alamat Email Asli**: Terpasang ke `baihaqiachmadi83@gmail.com` di index.html dan js/script.js.
- [x] **Tautan Akun LinkedIn**: Terhubung ke `https://www.linkedin.com/in/annuril-baihaqi-achmadi`.
- [ ] **Dokumen PDF Portofolio**: Masukkan berkas RPP, worksheet, dan modul ke `assets/documents/`.
- [ ] **Konfirmasi Konferensi Akademik**: Pada bagian *Pengalaman & Riwayat Akademik*, perbarui nama konferensi internasional dan tanggal pelaksanaan setelah jadwal resmi diterima.
- [ ] **Kemampuan Teknis Terverifikasi**: Pada kartu keahlian terverifikasi, tambahkan keahlian teknis (tools/software) spesifik yang telah teruji.

---

© 2026 **Annuril Baihaqi Achmadi**. Seluruh hak cipta dilindungi.
