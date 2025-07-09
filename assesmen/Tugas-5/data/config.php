<?php
// Konfigurasi koneksi database
$host     = 'localhost';
$username = 'root';
$password = '';
$database = 'produk_db';

// Buat koneksi
$conn = new mysqli($host, $username, $password, $database);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi ke database gagal: {$conn->connect_error}");
}