---
title: "Test Scenario, Test Case, dan Bug Report"
date: 2025-10-29
author: Ahmad Rafly
description: "Rangkuman komprehensif tentang konsep, struktur, dan implementasi test scenario, test case, serta bug report dalam proses pengujian perangkat lunak."
tags: ["testing", "QA", "test case", "bug report", "scenario"]
categories: ["post"]

cover:
  image: "images/posts/testscanario.png"
  alt: "Test Scenario dan Bug Report"
  relative: true
---

## Pengantar
Dalam proses **Software Testing**, terdapat tiga komponen utama yang saling melengkapi yaitu **Test Scenario**, **Test Case**, dan **Bug Report**.  
Ketiganya berfungsi untuk memastikan bahwa aplikasi berjalan sesuai kebutuhan, bebas dari kesalahan, serta memiliki kualitas yang stabil dan dapat diandalkan:contentReference

---

## 🔍 Pengertian Dasar

### **1. Test Scenario**
Adalah **gambaran umum mengenai apa yang akan diuji**, berfokus pada fungsi atau modul yang perlu divalidasi untuk memastikan aplikasi berfungsi sebagaimana mestinya.  
➡️ Pertanyaan utama: *“Apa yang harus diuji?”*  

**Contoh:**  
Memeriksa apakah fitur *Login* dapat mengautentikasi pengguna dengan benar.

---

### **2. Test Case**
Merupakan **langkah-langkah detail dari proses pengujian**, mencakup kondisi awal, data yang digunakan, proses uji, hingga hasil yang diharapkan.  
➡️ Pertanyaan utama: *“Bagaimana cara mengujinya?”*  

**Contoh:**  
1. Buka halaman login.  
2. Masukkan email dan password valid.  
3. Klik tombol “Masuk”.  
✅ **Expected Result:** Pengguna diarahkan ke halaman dashboard:contentReference

---

### **3. Bug Report**
Adalah **laporan formal tentang kesalahan atau masalah pada sistem**, berisi informasi rinci seperti langkah reproduksi, hasil aktual, hasil yang diharapkan, tingkat keparahan (*severity*), serta prioritas perbaikan (*priority*)

---

## 🧩 Hubungan Antara Test Scenario dan Test Case
Menurut diagram di halaman 4, hubungan antara keduanya bersifat hirarkis:
- **Test Scenario** menjawab *apa* yang diuji.  
- **Test Case** menjelaskan *bagaimana* cara pengujiannya
---

## 🧱 Template Sederhana

### **Test Scenario**
| Field | Keterangan |
|:------|:------------|
| **ID Scenario** | Nomor unik skenario pengujian |
| **Deskripsi** | Ringkasan skenario pengujian |
| **Modul/Fitur** | Modul atau fitur yang diuji:contentReference[oaicite:4]{index=4} |

---

### **Test Case**
| Field | Keterangan |
|:------|:------------|
| **ID Test Case** | Nomor unik test case |
| **Deskripsi** | Ringkasan pengujian |
| **Precondition** | Kondisi awal sebelum uji |
| **Test Steps** | Langkah-langkah pengujian |
| **Test Data** | Data yang digunakan |
| **Expected Result** | Hasil yang diharapkan |
| **Actual Result** | Hasil aktual setelah pengujian |
| **Status** | Lulus / Gagal (Pass / Fail):contentReference[oaicite:5]{index=5} |

---

## 🧮 Contoh Implementasi – Aplikasi BMI
Berdasarkan *Test Plan Kelompok 3*, contoh test scenario dan test case untuk aplikasi BMI sebagai berikut

### **Test Scenario**
| ID | Deskripsi | Modul/Fitur |
|:--:|:-----------|:-------------|
| TS001 | Periksa fungsi slider input | Slider input berat & tinggi |
| TS002 | Periksa hasil perhitungan dan klasifikasi BMI | Perhitungan & klasifikasi BMI |
| TS003 | Periksa fungsi penyimpanan history BMI | History BMI |

---

### **Test Case (Contoh TS001 – Slider Input)**
| ID | Deskripsi | Precondition | Test Steps | Test Data | Expected Result |
|:--:|:-----------|:--------------|:-------------|:-------------|:----------------|
| TC001 | Verifikasi slider input berat | Aplikasi terbuka | Geser slider berat ke nilai tertentu dan periksa label | Slider = 60 kg | Label menampilkan 60 kg |
| TC002 | Verifikasi slider input tinggi | Aplikasi terbuka | Geser slider tinggi ke nilai tertentu dan periksa label | Slider = 170 cm | Label menampilkan 170 cm
---

### **Test Case (Contoh TS002 – Perhitungan & Klasifikasi BMI)**
| ID | Deskripsi | Test Data | Expected Result |
|:--:|:-----------|:-----------|:----------------|
| TC003 | Verifikasi hasil perhitungan BMI | Berat = 65 kg, Tinggi = 170 cm | BMI = 22.49 (sesuai rumus kg/m²) |
| TC004 | Verifikasi kategori Underweight | Berat = 45 kg, Tinggi = 170 cm | BMI = 15.6 → Kategori “Underweight” |
| TC005 | Verifikasi kategori Normal | Berat = 60 kg, Tinggi = 165 cm | BMI = 22.04 → Kategori “Normal” |
| TC006 | Verifikasi kategori Overweight | Berat = 75 kg, Tinggi = 170 cm | BMI = 25.95 → Kategori “Overweight” |
| TC007 | Verifikasi kategori Obese | Berat = 90 kg, Tinggi = 165 cm | BMI = 33.06 → Kategori “Obese” |

---

### **Test Case (Contoh TS003 – History BMI)**
| ID | Deskripsi | Test Data | Expected Result |
|:--:|:-----------|:-----------|:----------------|
| TC008 | Verifikasi penyimpanan hasil BMI | Berat = 65 kg, Tinggi = 170 cm | Hasil terbaru tersimpan di halaman History |
| TC009 | Verifikasi banyak data History | Beberapa hasil BMI berturut | Semua data tersimpan sesuai urutan tanpa hilang |

---

## 🐞 Bug Report

### **Konsep**
Bug Report adalah **laporan resmi kesalahan** yang ditemukan selama pengujian. Tujuannya untuk membantu developer memahami dan memperbaiki masalah dengan cepat.  
Laporan mencakup **bug ID, deskripsi, langkah reproduksi, hasil aktual, hasil yang diharapkan, dan metadata seperti prioritas dan severity**
---

### **Severity vs Priority**
| **Severity** | **Penjelasan** | **Priority** | **Penjelasan** |
|:--------------|:---------------|:-------------|:----------------|
| **Low** | Tidak menyebabkan kerusakan sistem. | **P4 – Low** | Bug minor / kosmetik. |
| **Minor (Medium)** | Tidak memengaruhi fungsi utama, hanya menyebabkan ketidaknyamanan. | **P3 – Medium** | Bisa diperbaiki di rilis berikutnya. |
| **Major (High)** | Mengganggu fungsi utama namun tidak menyebabkan crash total. | **P2 – High** | Harus segera diperbaiki karena berdampak luas. |
| **Critical** | Menyebabkan crash atau kerusakan data. | **P1 – Urgent/Critical** | Bug kritis yang harus diperbaiki segera |

---

### **Contoh Bug Report – Aplikasi BMI**
| Field | Isi |
|:------|:----|
| **Bug Title** | Perhitungan BMI salah saat input berat 60 kg & tinggi 170 cm |
| **Bug ID** | BMI-001 |
| **Step to Reproduce** | 1. Buka aplikasi BMI → 2. Masukkan Berat = 60 → 3. Masukkan Tinggi = 170 → 4. Klik “Hitung” |
| **Actual Result** | Hasil BMI = 12.5 |
| **Expected Result** | Hasil BMI = 20.8 |
| **Build Number** | Version 1.0.0 |
| **Severity** | Major (High) |
| **Priority** | P2 – High |
| **Assignee** | Developer |
| **Reporter** | SQA (Software Quality Assurance) |
| **Reported on** | 31-08-2025 |
| **Testing on** | Android |

---

## 🛡️ Cara Menghindari Bug
Menurut slide 16–17, pencegahan bug dilakukan **tidak hanya saat testing**, tetapi sepanjang siklus pengembangan:
1. **Pahami Persyaratan** – pastikan seluruh tim memahami kebutuhan sistem.  
2. **Unit Testing** – uji tiap komponen sejak awal.  
3. **Code Review** – saling meninjau kode antar-developer.  
4. **Rencana Pengujian (Test Plan)** – buat rencana menyeluruh sebelum eksekusi.  
5. **Pengujian Otomatis** – manfaatkan *automation testing* untuk efisiensi.  
6. **Kolaborasi Tim** – jaga komunikasi antara pengembang dan penguji

---

## 💡 Kesimpulan
- **Test Scenario** menentukan *apa* yang diuji.  
- **Test Case** menjelaskan *bagaimana* pengujian dilakukan.  
- **Bug Report** mendokumentasikan hasil kesalahan agar mudah diperbaiki.  
Ketiganya membentuk **kerangka penting dalam proses QA**, menjamin aplikasi **berfungsi dengan benar, stabil, dan bebas bug sebelum dirilis**.
