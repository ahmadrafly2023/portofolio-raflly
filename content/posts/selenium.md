---
title: "Selenium WebDriver"
date: 2025-10-30
author: Ahmad Rafly
description: "Rangkuman mendalam tentang konsep, fungsi, cara kerja, instalasi, dan penerapan Selenium WebDriver untuk otomatisasi pengujian aplikasi web."
tags: ["selenium", "webdriver", "automation testing", "python", "software testing"]
categories: ["post"]

cover:
  image: "images/posts/selinium.png"
  alt: "Selenium WebDriver Illustration"
  relative: true
---


## Pendahuluan

Di era berbasis web saat ini, *pengujian otomatis* telah menjadi bagian penting dari jaminan kualitas perangkat lunak.

Salah satu alat yang paling banyak digunakan dalam bidang ini adalah *Selenium WebDriver* — sebuah kerangka kerja sumber terbuka untuk otomatisasi peramban.

Artikel ini merangkum presentasi dari *Kelompok 7 Sistem Informasi 2023*, yang membahas tentang apa itu Selenium, mengapa penggunaannya luas, bagaimana interaksinya dengan peramban, dan cara mengimplementasikan skenario pengujian sederhana menggunakan Python.

---

## Apa Itu Selenium?

*Selenium* adalah kerangka kerja sumber terbuka untuk mengotomatiskan peramban web.
Kerangka kerja ini memungkinkan penguji dan pengembang untuk mensimulasikan interaksi pengguna nyata seperti mengklik, mengetik, menavigasi, dan memvalidasi elemen web.

Selenium mendukung berbagai *bahasa pemrograman*, termasuk:
- Python
- Java
- C#
- JavaScript

Dan berfungsi di berbagai *peramban*:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## Apa Itu Selenium WebDriver?

*WebDriver* adalah *komponen inti* Selenium.
WebDriver bertindak sebagai jembatan antara kode otomatisasi dan peramban.

### Fungsi WebDriver:
- Membuka dan menutup peramban secara otomatis
- Mensimulasikan tindakan pengguna (klik, input teks, pengguliran, dll.)
- Memvalidasi elemen dan hasil halaman
- Menavigasi URL dan pengiriman formulir

Intinya, ini memberi kode Anda "manual" untuk berinteraksi dengan peramban web langsung.

---

## Mengapa Menggunakan Selenium?

Ada banyak alasan mengapa *Selenium* menjadi salah satu pilihan paling populer untuk pengujian otomatisasi web.

| Alasan | Penjelasan |
|---------|--------------|
| *Gratis dan Sumber Terbuka* | Sepenuhnya gratis dengan komunitas yang aktif. |
| *Dukungan Multibahasa* | Berfungsi dengan Python, Java, JavaScript, C#, dll. |
| *Kompatibilitas Lintas Platform* | Berjalan di Windows, macOS, dan Linux. |
| *Dukungan Multi-Peramban* | Bekerja mulus dengan Chrome, Firefox, Edge, Safari. |
| *Siap Integrasi* | Mudah terintegrasi dengan kerangka kerja seperti *PyTest, **JUnit, atau **TestNG*. |
| *Ekosistem yang Kaya* | Dokumentasi dan dukungan komunitas yang kuat. |

---

## Menginstal Selenium dengan Python

Anda dapat menginstal Selenium hanya dengan satu perintah menggunakan pip:

bash
pip install selenium

Kemudian, unduh WebDriver untuk peramban Anda (misalnya, ChromeDriver untuk Chrome).
ChromeDriver: https://chromedriver.chromium.org/downloads
GeckoDriver (Firefox): https://github.com/mozilla/geckodriver/releases
Letakkan berkas driver di folder proyek Anda atau tambahkan ke PATH sistem Anda.

## Membuka Peramban dengan Selenium
Berikut contoh Python sederhana untuk membuka peramban menggunakan Selenium:
python
from selenium import webdriver

# Inisialisasi WebDriver
driver = webdriver.Chrome()

# Buka situs web
driver.get("https://www.saucedemo.com/")

# Tutup peramban setelah 5 detik
import time
time.sleep(5)
driver.quit()

Skrip ini akan secara otomatis meluncurkan Chrome, membuka URL yang ditentukan, lalu menutupnya setelah beberapa detik.

## Berinteraksi dengan Elemen HTML
Anda dapat menggunakan Selenium untuk menemukan dan berinteraksi dengan elemen HTML seperti tombol, kolom input, dan tautan.
python
dari selenium impor webdriver
dari selenium.webdriver.common.by impor By

driver = webdriver.Chrome()
driver.get("https://www.saucedemo.com/")

# Masukkan nama pengguna dan kata sandi
driver.find_element(By.ID, "nama-pengguna").send_keys("pengguna_standar")
driver.find_element(By.ID, "kata sandi").send_keys("saus_rahasia")

# Klik tombol masuk
driver.find_element(By.ID, "tombol-masuk").click()

# Tutup setelah melihat
import waktu
time.sleep(5)
driver.quit()

Penjelasan:
- find_element(By.ID, "nama-pengguna") → Menemukan elemen berdasarkan ID HTML-nya.
- send_keys() → Mengetik teks ke dalam kolom input.
- click() → Mensimulasikan klik tombol.

## Skenario Uji dengan Selenium
Berikut adalah beberapa skenario uji yang didemonstrasikan oleh kelompok selama sesi mereka, menggunakan situs web SauceDemo sebagai contoh.
| ID | Deskripsi | Langkah | Hasil yang Diharapkan |
| ---------- | ------------------- | ------------------------------------------------------ | ---------------------------------- |
| *TS-001* | Login berhasil | Masukkan standard_user dan secret_sauce → Klik Login | Pengguna memasuki *halaman inventaris* |
| *TS-002* | Login gagal | Masukkan kredensial tidak valid → Klik Login | Menampilkan *pesan kesalahan* |
| *TS-003* | Tambahkan produk ke keranjang | Login → Klik *Tambahkan ke Keranjang* | Jumlah keranjang bertambah 1 |

## Contoh Kasus Uji (Login Berhasil)
python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://www.saucedemo.com/")

# Langkah 1: Masukkan kredensial
driver.find_element(By.ID, "nama-pengguna").send_keys("pengguna_standar")
driver.find_element(By.ID, "kata sandi").send_keys("saus_rahasia")

# Langkah 2: Klik Masuk
driver.find_element(By.ID, "tombol-masuk").click()

# Langkah 3: Verifikasi pengalihan
tegaskan "inventaris" di driver.current_url

print("✅ Uji Masuk Lulus")
driver.quit()

Jika proses masuk berhasil, skrip akan mengonfirmasi bahwa pengguna dialihkan ke halaman inventaris.

## Contoh: Menambahkan Produk ke Keranjang
python
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("https://www.saucedemo.com/")

# Masuk
driver.find_element(By.ID, "nama-pengguna").send_keys("pengguna_standar")
driver.find_element(By.ID, "kata_sandi").send_keys("secret_sauce")
driver.find_element(By.ID, "tombol-masuk").click()

# Tambahkan ke keranjang
driver.find_element(By.XPATH, "//button[text()='Tambahkan ke keranjang']").click()

# Verifikasi keranjang
cart_count = driver.find_element(By.CLASS_NAME, "lencana_keranjang_belanja").text
assert cart_count == "1"

print("✅ Produk berhasil ditambahkan ke keranjang")

time.sleep(3)
driver.quit()

## Keunggulan Selenium WebDriver
| Keunggulan | Deskripsi |
| -------------------------- | --------------------------------------------------------- |
| *Efisiensi Otomatisasi* | Mengurangi pengujian manual yang berulang. |
| *Pengujian Lintas-Peramban* | Memastikan hasil yang konsisten di seluruh peramban. |
| *Hemat Biaya* | Sumber terbuka tanpa biaya lisensi. |
| *Ramah Integrasi* | Bekerja dengan alat CI/CD seperti Jenkins, GitHub Actions, dll. |
| *Meningkatkan Akurasi Pengujian* | Menghilangkan kesalahan manusia dalam tugas yang berulang. |

## Kesimpulan

Selenium WebDriver adalah alat yang andal dan fleksibel untuk mengotomatiskan tindakan peramban.
Ini membantu teknisi QA memvalidasi aplikasi web secara lebih efisien, sekaligus menghemat waktu dan memastikan konsistensi.

Dengan mengintegrasikan Selenium dengan framework seperti PyTest atau JUnit, developer dapat membangun rangkaian otomatisasi andal yang menjadi fondasi pengujian perangkat lunak modern.