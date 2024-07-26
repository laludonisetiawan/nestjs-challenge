<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# 🎯 REST API Challenge BE

## 🎲 Design Pattern yang Digunakan

Dalam proyek ini, saya menggunakan beberapa pola desain untuk meningkatkan struktur, fleksibilitas, dan kemudahan pemeliharaan kode. 
Berikut adalah pola desain yang diterapkan:

### 🍃 Modular Architecture
Proyek ini dibagi ke dalam beberapa modul yang memiliki tanggung jawab spesifik. Pendekatan ini mempermudah pengelolaan kode, meningkatkan skalabilitas, dan memudahkan penambahan fitur baru tanpa mengganggu modul lain.

### 🍃 Dependency Injection
NestJS menyediakan sistem Dependency Injection secara built-in, memungkinkan pemisahan pembuatan dependensi dari logika bisnis. Ini mempermudah pengujian unit, meningkatkan fleksibilitas, dan reusabilitas kode.

### 🍃 DTO (Data Transfer Object)
DTO digunakan untuk mendefinisikan struktur data yang akan dikirimkan atau diterima oleh API. Ini memastikan validasi dan integritas data, serta membantu dalam dokumentasi dan pemahaman struktur data yang digunakan.

### 🍃 Repository Pattern
Repository Pattern memisahkan logika akses data dari logika bisnis. Repository bertanggung jawab untuk berinteraksi dengan database dan menyediakan metode untuk CRUD, membuat kode lebih bersih dan terorganisir.

### 🍃 Strategy Pattern
Digunakan dalam strategi otentikasi, mempermudah penambahan atau perubahan strategi otentikasi tanpa mengubah logika utama aplikasi.


## ⚙ Installation

bash
$ npm install


## ▶ Running the app

bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod


## 🧪 Test

bash
# e2e tests
$ npm run test:e2e
