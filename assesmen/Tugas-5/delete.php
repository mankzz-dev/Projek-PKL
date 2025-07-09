<?php
include './data/config.php';
include './layout/navbar.php';

$id = $_GET['id'] ?? null;
$deleted = false;

if ($id) {
    $conn->query("DELETE FROM produk WHERE id = $id");
    $deleted = true;
}
?>

<div class="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow text-center">
    <?php if ($deleted): ?>
        <div class="bg-green-100 text-green-800 px-4 py-3 rounded mb-6 relative">
            Produk berhasil dihapus!
            <button onclick="this.parentElement.remove();" class="absolute top-1 right-3 text-xl leading-none">&times;</button>
        </div>
    <?php else: ?>
        <div class="bg-red-100 text-red-800 px-4 py-3 rounded mb-6">
            Produk tidak ditemukan atau sudah dihapus.
        </div>
    <?php endif; ?>

    <a href="index.php" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">Kembali ke Daftar Produk</a>
</div>

<?php include './layout/footer.php'; ?>