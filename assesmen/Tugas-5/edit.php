<?php
include './data/config.php';

$id = $_GET['id'] ?? null;
if (!$id) {
    header("Location: index.php");
    exit;
}

$data = $conn->query("SELECT * FROM produk WHERE id = $id")->fetch_assoc();
if (!$data) {
    echo "Produk tidak ditemukan.";
    exit;
}

$success = null; // Untuk menyimpan status alert

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nama  = $conn->real_escape_string($_POST['nama']);
    $harga = (int) $_POST['harga'];
    $conn->query("UPDATE produk SET nama='$nama', harga=$harga WHERE id = $id");
    $success = "Produk berhasil diperbarui!";
    // Perbarui data yang ditampilkan
    $data = ['nama' => $nama, 'harga' => $harga];
}

?>

<?php include './layout/navbar.php'; ?>

<div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">✏️ Edit Produk</h2>
    <?php if ($success): ?>
        <div class="bg-green-100 text-green-800 px-4 py-3 rounded mb-4 relative">
            <?= $success ?>
            <button onclick="this.parentElement.remove();" class="absolute top-1 right-3 text-xl leading-none">&times;</button>
        </div>
    <?php endif; ?>
    <form method="POST" class="space-y-4">
        <div>
            <label class="block mb-1 text-sm font-medium">Nama Produk</label>
            <input type="text" name="nama" value="<?= htmlspecialchars($data['nama']) ?>" required class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div>
            <label class="block mb-1 text-sm font-medium">Harga Produk</label>
            <input type="number" name="harga" value="<?= $data['harga'] ?>" required class="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div class="flex justify-between mt-6">
            <a href="index.php" class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Batal</a>
            <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">Update</button>
        </div>
    </form>
</div>

<?php include './layout/footer.php'; ?>