<?php
include './data/config.php';
include './layout/navbar.php';

$success = null;

// Proses simpan data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama  = $conn->real_escape_string($_POST['nama']);
    $harga = (int) $_POST['harga'];

    if ($nama && $harga >= 0) {
        $conn->query("INSERT INTO produk (nama, harga) VALUES ('$nama', $harga)");
        $success = "Produk berhasil ditambahkan!";
    }
}
?>

<div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">➕ Tambah Produk</h2>

    <?php if ($success): ?>
        <div class="bg-green-100 text-green-800 px-4 py-3 rounded mb-4 relative">
            <?= $success ?>
            <button onclick="this.parentElement.remove();" class="absolute top-1 right-3 text-xl leading-none">&times;</button>
        </div>
    <?php endif; ?>

    <form method="POST" class="space-y-4">
        <div>
            <label class="block mb-1 text-sm font-medium">Nama Produk</label>
            <input type="text" name="nama" required class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div>
            <label class="block mb-1 text-sm font-medium">Harga Produk</label>
            <input type="number" name="harga" required min="0" class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>

        <div class="flex justify-between mt-6">
            <a href="index.php" class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Kembali</a>
            <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">Simpan</button>
        </div>
    </form>
</div>

<?php include './layout/footer.php'; ?>