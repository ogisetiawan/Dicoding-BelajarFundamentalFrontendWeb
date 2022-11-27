<?php
/*
 * @Author: ogisetiawan21@gmail.com 
 * @Date: 2022-11-18 15:03:10 
 * @Last Modified by: ogisetiawan21@gmail.com
 * @Last Modified time: 2022-11-27 21:24:00
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
