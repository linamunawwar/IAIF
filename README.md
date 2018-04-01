## Cara menjalankan

## 1. NodeJs
    - Install node js https://nodejs.org/en/
    - pilih 8.11.1 LTS (recommended for most user)
## 2. ReactJs
    - arahkan ke folder root Apps (./web-iaif)
    - jalankan perintah `npm install`
    - jalankan perintah `npm start`
    - kalo ada error, hapus dulu dir node_modules
Selamat Berkoding


## Pengenalan singkat tentang React

React adalah sebuah library `javascript` yang bekerja dengan pemahaman `component-based` yang berarti applikasi dibuat berdasarkan `component`. Lalu apa itu `component`?

Anggap saja sebuah web kita terdiri dari `component`. `component navbar`, `component search`, `component footer` dan lain sebagainya. Kita membuat sebuah folder baru dengan tag `components` lalu di dalam folder tersebut buat `view/component` dan lalu komponen itu akan di render di `component` utama.

## Syntax pada React

Syntax yang digunakan pada react adalah syntax yang dinamakan dengan JSX (JavaScript XML) singkatnya adalah sebuah syntax javascript yang memungkinkan kita untuk menulis HTML di dalam javascript.

## Environemnt

- Standarisasi script dalam membangun aplikasi ini menggunakan javascript ES6
- Precompiler yang dipakai menggunakan `Babel`
- IDE atau text editor yang di pakai bebas apa saja tapi untuk memudahkan disarankan untuk menginstall theme atau color scheme `monokai` atau `oceanic`

## pemahaman lebih lanjut tentang component

untuk memahami sedikit tentang komponen bisa di lihat pada `src/components/navbar` dan `src/components/contact`. Perlu di perhatikan navbar adalah `statefull component` atau yang biasa disebut `class` sedangkan contact adalah `stateless component` atau `functional component`
