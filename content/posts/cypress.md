---
title: "Cypress"
date: 2025-10-08
author: Ahmad Rafly
description: "Rangkuman lengkap tentang konsep, fitur, langkah instalasi, serta penerapan Cypress sebagai framework modern untuk pengujian end-to-end aplikasi web."
tags: ["cypress", "end-to-end testing", "automation", "qa", "javascript", "software testing"]
categories: ["post"]

cover:
  image: "images/posts/cypress.png"
  alt: "Cypress Testing Illustration"
  relative: true
---


## Pendahuluan

Dalam dunia pengembangan web modern, *Cypress* telah muncul sebagai salah satu kerangka kerja pengujian yang paling canggih dan intuitif untuk pengujian *end-to-end (E2E)*.
Cypress memungkinkan pengembang dan penguji untuk mensimulasikan interaksi pengguna nyata dengan aplikasi web — memastikan sistem berperilaku seperti yang diharapkan di seluruh peramban.

Artikel ini merangkum presentasi dari *Kelompok 8 Sistem Informasi 2023*, yang menjelaskan apa itu Cypress, fitur-fiturnya, langkah-langkah pengaturan, perintah-perintah dasar, dan mengapa ia menonjol dibandingkan alat pengujian tradisional seperti Selenium.

---

## Apa Itu Cypress?

*Cypress* adalah *kerangka kerja pengujian ujung ke ujung modern* untuk aplikasi web, terutama yang dibangun dengan *React, **Vue, **Angular*, dan teknologi front-end modern lainnya.

Cypress memungkinkan pengembang untuk menulis pengujian yang berjalan langsung di peramban, memberikan umpan balik waktu nyata saat pengujian dijalankan.

### Cypress dalam Piramida Pengujian

| Tingkat | Deskripsi | Peran Cypress |
|--------|--------------|--------------|
| *Pengujian Unit* | Menguji komponen atau fungsi individual. | Dapat diintegrasikan untuk pengujian komponen. |
| *Pengujian Integrasi* | Memverifikasi bagaimana modul bekerja bersama. | Didukung oleh Cypress. |
| *Pengujian End-to-End (E2E)* | Mensimulasikan alur pengguna yang sebenarnya melalui seluruh aplikasi. | Cypress terutama digunakan di sini. |

Cypress terutama beroperasi pada tingkat *End-to-End* tetapi juga dapat menangani *Integrasi* dan *Pengujian Komponen* secara efektif.

---

## Instalasi dan Pengaturan

Sebelum memulai, pastikan *Node.js* telah terinstal di sistem Anda.

### 🔧 Langkah-Langkah Menginstal Cypress:

bash
npm init -y
npm install cypress --save-dev

## Menjalankan Cypress
bash
npx cypress open

Perintah ini membuka Cypress Test Runner, sebuah UI interaktif untuk mengelola dan menjalankan skrip pengujian Anda.

Untuk menjalankan pengujian langsung di peramban tertentu:
bash
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge

## Perintah Dasar Cypress

Cypress menyediakan perintah yang mudah dipahami yang meniru tindakan pengguna sebenarnya di halaman web.
| Perintah | Deskripsi | Contoh |
| --------------------- | --------------------------------- | ------------------------------------------ |
| cy.visit('URL') | Membuka halaman web. | cy.visit('https://www.saucedemo.com') |
| cy.get('selector') | Menemukan elemen dengan selector. | cy.get('#username') |
| cy.type('text') | Mengetik ke dalam kolom input. | cy.get('#password').type('secret_sauce') |
| cy.click() | Mensimulasikan klik tombol atau tautan. | cy.get('#login-button').click() |
| cy.contains('text') | Menemukan elemen berdasarkan teks yang terlihat. | cy.contains('Tambahkan ke keranjang') |
| cy.url() | Mendapatkan URL halaman saat ini. | cy.url().should('include', '/inventory') |
Perintah Cypress dirancang secara asinkron, artinya Cypress secara otomatis menunggu elemen muncul — tidak perlu perintah wait() manual.

## Fitur Utama Cypress
Cypress dirancang dengan arsitektur modern yang memberikannya keunggulan besar dibandingkan alat pengujian lama.
| Fitur | Deskripsi |
| --------------------------- | --------------------------------------------------------------------- |
| *Arsitektur Modern* | Dibuat untuk aplikasi web modern menggunakan JavaScript. |
| *Interactive Test Runner* | Eksekusi pengujian visual yang menampilkan setiap langkah secara real-time. |
| *Perjalanan Waktu* | Memungkinkan Anda melihat snapshot aplikasi di setiap langkah pengujian. |
| *Penantian Otomatis* | Tidak perlu menambahkan waktu tidur atau penundaan manual — Cypress menunggu secara otomatis. |
| *Eksekusi Browser yang Sesungguhnya* | Pengujian dijalankan di dalam lingkungan browser yang sebenarnya, bukan simulasi. |
| *Cepat dan Andal* | Dioptimalkan untuk menjalankan pengujian dengan cepat tanpa masalah. |
Fitur-fitur ini menjadikan Cypress sangat efektif untuk pengujian berbasis UI dan simulasi pengguna nyata.

## 🧪 Contoh Kasus Uji

**Skenario:** Pengujian fitur login pada situs [saucedemo.com](https://www.saucedemo.com)

Berikut contoh implementasi pengujian menggunakan **Cypress**:

```javascript
describe('Uji Fungsionalitas Login', () => {
  it('Harus berhasil login dengan kredensial yang valid', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    // Verifikasi pengalihan ke halaman inventaris
    cy.url().should('include', '/inventory');
  });

  it('Seharusnya menampilkan pesan kesalahan untuk kredensial yang tidak valid', () => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('user_salah');
    cy.get('#password').type('password_salah');
    cy.get('#login-button').click();

    // Verifikasi pesan error muncul
    cy.contains('Epic sadface: Username and password do not match').should('be.visible');
  });
});


---
## Mengapa Cypress Berbeda dari Selenium
| Fitur | Cypress | Selenium |
| -------------------- | ---------------------------------- | ----------------------------------------------- |
| *Arsitektur* | Berjalan di dalam peramban. | Beroperasi di luar peramban melalui WebDriver. |
| *Pengaturan* | Sederhana (npm install cypress). | Membutuhkan beberapa driver (misalnya, ChromeDriver). |
| *Kecepatan* | Eksekusi pengujian lebih cepat. | Sedikit lebih lambat karena komunikasi eksternal. |
| *Debugging* | Snapshot waktu nyata (Perjalanan Waktu). | Mengandalkan log atau tangkapan layar. |
| *Dukungan Bahasa* | Hanya JavaScript. | Multibahasa (Java, Python, C#, dll.). |

## Studi Kasus: Otomatisasi Login dengan Cypress

Dalam sesi pengodean langsung, Kelompok 8 mendemonstrasikan pengujian End-to-End untuk proses login menggunakan situs https://www.saucedemo.com.

Hasil Pengujian:
- Login berhasil → Diarahkan ke halaman inventaris.
- Kredensial tidak valid → Menampilkan pesan kesalahan.
- Cypress Test Runner memberikan umpan balik visual untuk setiap langkah pengujian.
Hal ini membuktikan kemampuan Cypress untuk menangani interaksi UI yang kompleks dengan mudah, sekaligus mempertahankan skrip pengujian yang mudah dibaca dan dipelihara.

## Kesimpulan

Cypress adalah framework pengujian yang andal dan modern yang menyederhanakan proses otomatisasi pengujian aplikasi web.
Sintaksnya yang intuitif, test runner yang interaktif, dan fitur bawaan seperti Time Travel dan Automatic Waits menjadikannya ideal untuk aplikasi front-end modern.

Melalui studi kasus login SauceDemo, Cypress menunjukkan keunggulannya dalam mensimulasikan perilaku pengguna yang realistis untuk skenario pengujian positif maupun negatif — membantu pengembang memastikan keandalan dan kualitas perangkat lunak.