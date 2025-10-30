---
title: "Unit Testing"
date: 2025-10-29
author: Ahmad Rafly
description: "Rangkuman mendalam tentang konsep, manfaat, pola dasar, dan penerapan Unit Testing menggunakan framework populer seperti Pytest, JUnit, dan Jest."
tags: ["unit testing", "QA", "software testing", "pytest", "junit", "jest"]
categories: ["post"]

cover:
  image: "images/posts/unitesting.png"
  alt: "Unit Testing Illustration"
  relative: true
---

## Pengantar
**Unit Testing** adalah salah satu jenis pengujian perangkat lunak yang berfokus pada pengujian **unit terkecil dalam sistem perangkat lunak** seperti fungsi (*function*), metode (*method*), atau kelas (*class*).  
Tujuannya adalah untuk memastikan bahwa **setiap komponen berfungsi sesuai ekspektasi tanpa ketergantungan terhadap komponen lain**

Unit testing dilakukan **pada tahap paling awal** oleh developer sebelum melanjutkan ke pengujian integrasi, sistem, atau end-to-end.  
Dengan demikian, bug dapat ditemukan sejak dini dan memperkecil biaya perbaikan di tahap akhir

---

## 🎯 Analogi Unit Testing
Bayangkan proses pembuatan mobil:  
Setiap **komponen seperti mesin, ban, dan lampu diuji secara terpisah** sebelum mobil dirakit menjadi satu kesatuan.  
Jika seluruh komponen lulus tes, maka hasil rakitan (mobil utuh) akan lebih andal dan berkualitas tinggi.  
Begitu juga dalam software — **jika tiap fungsi lulus unit test, aplikasi utuh akan lebih stabil**
---

## 💡 Mengapa Unit Testing Itu Penting?
Unit Testing memiliki berbagai manfaat penting bagi pengembang, di antaranya

1. **Mendeteksi bug lebih awal** — kesalahan dapat diketahui saat pengembangan, bukan setelah deployment.  
2. **Meningkatkan kualitas kode** — memastikan fungsi berjalan sesuai desain dan logika program.  
3. **Menghemat waktu dan biaya** — memperbaiki bug lebih cepat di tahap awal proyek.  
4. **Memberikan dokumentasi hidup** — test case berfungsi sebagai referensi otomatis bagaimana kode seharusnya bekerja.  
5. **Mempermudah refactoring** — ketika kode diubah, pengujian memastikan perilaku lama tetap terjaga.  
6. **Meningkatkan kepercayaan diri developer** — karena tahu bahwa setiap perubahan diuji otomatis.

---

## 🧩 Framework Populer untuk Unit Testing
Beberapa framework digunakan luas di berbagai bahasa pemrograman

| Framework | Bahasa | Kapan Digunakan | Keunggulan |
|:-----------|:--------|:----------------|:-------------|
| **JUnit 5** | Java | Untuk Java atau JVM-based language (Kotlin, Scala) | Integrasi penuh, ekosistem matang, struktur berbasis anotasi |
| **Jest** | JavaScript / TypeScript | Saat menggunakan React, Node.js, atau framework frontend modern | Konfigurasi minimal (Zero-Config), *Snapshot Testing*, cepat |
| **Pytest** | Python | Untuk proyek web, data science, API, dan skrip umum | Sintaks sederhana, *fixtures* kuat, pelaporan error detail |

> ⚙️ Ketiga framework ini menyediakan pendekatan otomatis untuk menulis, menjalankan, dan memvalidasi hasil pengujian tanpa harus melakukan pengecekan manual di terminal atau konsol.

---

## 🧠 Pola Dasar Arrange–Act–Assert (AAA)
Unit test biasanya mengikuti **pola AAA (Arrange, Act, Assert)** yang membagi pengujian ke dalam tiga tahap utama
1. **Arrange** — Menyiapkan kondisi awal pengujian.  
   Contoh: membuat objek atau inisialisasi data input.  
2. **Act** — Menjalankan fungsi atau metode yang ingin diuji.  
   Contoh: memanggil fungsi `calculateBMI(weight, height)`.  
3. **Assert** — Memverifikasi hasil pengujian apakah sesuai ekspektasi.  
   Contoh: memastikan output fungsi `calculateBMI(60, 170)` = `20.8`.

> Pendekatan AAA membantu menjaga keteraturan dan kejelasan pada struktur pengujian, serta mudah dibaca bahkan oleh developer baru.

---

## 🧮 Contoh Penerapan Unit Testing

### 🔹 **Menggunakan Pytest (Python)**
**Kode yang diuji:**
```python
class ShoppingCart:
    def __init__(self, max_size):
        self.items = []
        self.max_size = max_size

    def add(self, item):
        if len(self.items) == self.max_size:
            raise OverflowError("Cannot add more items")
        self.items.append(item)
