<?php
/*
 * @Author: ogisetiawan21@gmail.com 
 * @Date: 2022-11-18 15:03:10 
 * @Last Modified by: ogisetiawan21@gmail.com
 * @Last Modified time: 2022-12-01 22:02:30
 */
//@ ECMA Script 6
//? Browser dan Node.js adalah contoh implementasi dari ECMA-262/ECMAScript
//? Browser JavaScript digunakan untuk membantu website menjadi lebih interaktif.
//? Sedangkan bagi Node.js, JavaScript digunakan untuk pengembangan aplikasi diluar dari Browser, seperti Server, Desktop, Mobile, bahkan Game
//~ Deklarasi variable
//? var; keyword untuk mendeklarasikan variabel dalam cakupan function atau global. Namun, pendeklarasian variabel menggunakan var akan menyebabkan terangkatnya variabel pada tingkatan atas dari function meskipun tidak dituliskan pada tingkatan atas. Inilah yang dinamakan hoisting
//? const; Ini sangat disarankan jika variabel tersebut tidak akan melakukan re-initialization.
//? let;  merupakan keyword yang sama seperti const tetapi memungkinkan melakukan re-initialization (inisialisasi nilai ulang)
//~ Template literals
//? menggunakan simbol backtick membaca line space secara langsung
//~ Destructuring Array & Object
//? fitur dalam javascript untuk mengeluarkan nilai dari array atau properti-properti dari obyek ke dalam satuan lebih kecil
//~ Spreading Operator dan Rest Parameter
//? Fitur ini biasanya sangat berguna jika kita ingin menggabungkan beberapa array menjadi satu.
//~ Arrow Function
//? fitur yang sama seperti regular function tetapi dituliskan dengan cara yang sederhana.
//~ Class
//? constructor; biasanya hanya digunakan untuk menetapkan nilai awal pada properti berdasarkan nilai yang dikirimkan pada constructor
//? instance; pemanggilan class pada variable baru di luar class
//? Asynchronous; task dijalankan bersamaan, Task yang kecil akan lebih dahulu selesai dibandingkan dengan task yang besar, meskipun task yang besar lebih dahulu dijalankan.\
//~ Promise
//? fitur untuk menangani proses program yang bersifat asyncronous yang menggunakan alternatif lain selain callback function, yaitu chaining function then(). 
//~ Async/Await 
//? merupakan teknik penulisan untuk mengatasi proses asyncronous dengan gaya penulisan syncronous.
//~ Module
//? proses export import class, functin, object yg dpt digunakan di module lainya ( reusable )
//? <script src="app.js" type="module"></script> //? mengaktifkan tag script module pada browser tertentu/terbaru

//@ WEB COMPONENTS
//? fitur yang ada di browser API yang bersifat reusable/modular
//~ Custom Element
//? global variable (object) yg diguakan untuk kustom element HTML

//@ SHADOW DOM
//? enkapsulasi DOM di dalam DOM.
//? dapat memisahkan struktur, style, dan behaviour dari dokumen HTML utama sehingga Shadow DOM menjadi tersembunyi dan terpisah dari kode yang lain pada halaman tersebut.

//@ NPM
//? dependencies ; merupakan objek yang menampung package yang kita gunakan untuk membuat aplikasi. Biasanya package yang didaftarkan pada dependencies merupakan sebuah framework seperti React, Angular, Vue, jQuery atau framework lainny
//~ npm install <package-name>
//! npm uninstall <package-name>
//? devDependecies; mendaftarkan package yang digunakan hanya selama pengembangan saja. Contohnya package yang berfungsi sebagai web server lokal seperti http-server, atau package yang berfungsi untuk membundel JavaScript seperti webpack
//~ npm install <package-name> --save-dev 
//! npm uninstall <package-name> --save-dev
//? runner script atur di package.json tambahkan script 'start' http-server

//@ WEBPACK
//? module bundler static dari beberapa dependecies
//? concept; webpack will observ/define which moule we use then convert one module/or more modules
//? dependencies graph; adalah script2(module with dependencies) yang saling terhubung satu sama lain
//? entry points; hasil script dari dependencies graph agar menjadi bundle static asstes
//~ 5 konsep Webpack
//? Entry : Titik awal di mana webpack akan menganalisa berkas dan membentuk dependency graph.
//? Output : Berkas bundel yang dihasilkan dari berkas-berkas yang dianalisis webpack berdasarkan entry point.
//? Loaders :  Transformation tools pada webpack, yang akan memproses setiap berkas selain JavaScript atau JSON yang kita impor menjadi format yang dapat digunakan ke tahap produksi.
//? Plugin :  Digunakan untuk melakukan tugas seperti optimasi bundel, management aset dan sebagainya.
//? Mode : Kondisi yang digunakan webpack sebagai acuan optimasi apa saja yang harus diterapkan dalam melakukan tugasnya. Dalam mode kita dapat menetapkan nilai production, development atau pun none.
//~ Config build ( standart )
//! npm install webpack webpack-cli --save-dev
//? setup package json 'webpack = build'
//? create src and run 'npm run build' it will create dist folder
//? set import file plugin/library (dependencies)
//? setup dist main.js
//~ Webpack Config Build (custom)
//? create webpack.config.js
//? set entry point and output path in webpack-config
//~ Loader
//? css loader; yang dapat mengunakan berkas css
//? style loader; utk membuat styling
//! npm install style-loader css-loader --save-dev
//? test; merupakan tipe berkas yang akan ditransformasikan.
//? use; merupakan loader mana yang akan digunakan untuk mentransformasikan berkas terkait.
//~ Babel Loader
//? sebuah transpiler yang bertugas untuk mengubah sintaks JavaScript modern (ES6+) menjadi sintaks yang dapat didukung penuh oleh seluruh browser.
//? dapat menuliskan sintaks JavaScript versi terbaru tanpa khawatir memikirkan dukungan pada browser
//~ npm install @babel/core babel-loader @babel/preset-env --save-dev
//~ Menggunakan Plugin
//? Dengan menambahkan plugin HtmlWebpackPlugin, Webpack dapat membuatkan berkas HTML dan memasukkan script hasil bundel pada berkas HTML yang dibuat secara otomatis
//? HtmlWebpackPlugin juga mendukung templating dan penggunaannya sangat dapat dikonfigurasi 
//! npm install html-webpack-plugin --save-dev
//? import package to webpack.config.js and set plugin object
//? remove script tag and css if have
//? move .html file to src and run build
//~ Webpack DevServer 
//? fitur live-reloading jika ada perubahan tanpa harus rebuild
//! npm install webpack-dev-server --save-dev
//? setup package.json "start-dev": "webpack serve"
//? npm run start-dev to running
//? http://localhost:{yourport}/webpack-dev-server (to see webpack are served )
//~ Webpack Enviorenment
//? webpack marge; menggabungkan beberapa enviorenment mode
//! npm install webpack-merge --save-dev
//? create file in root -->  webpack.common.js, webpack.prod.js and webpack.dev.js
//* set package.json "build": "webpack --config webpack.prod.js", and "start-dev": "webpack serve --config webpack.dev.js"
//? dengan ini kita tdk membtuhkanan lagi webpack.config.js karena sudah diatur bberapa mode