<?php
include './data/config.php';
include './layout/navbar.php';
?>

<!-- Konten Utama -->
<div class="max-w-4xl mx-auto bg-white p-10 md:p-14 rounded-xl shadow-md mt-8">
    <h1 class="text-3xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">📦 Daftar Produk</h1>
    <div class="flex justify-end mb-4">
        <a href="add.php" class="bg-green-500 hover:bg-green-600 transition text-white px-5 py-2 rounded flex items-center gap-2 shadow">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Tambah Produk
        </a>
    </div>

    <div class="overflow-x-auto rounded-lg">
        <table class="w-full text-left border border-gray-300 shadow-sm">
            <thead class="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
                <tr>
                    <th class="px-5 py-3">ID</th>
                    <th class="px-5 py-3">Nama</th>
                    <th class="px-5 py-3">Harga</th>
                    <th class="px-5 py-3 text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="text-gray-700">
                <?php
                $result = $conn->query("SELECT * FROM produk ORDER BY id DESC");
                while ($row = $result->fetch_assoc()):
                ?>
                    <tr class="hover:bg-gray-50 transition">
                        <td class="px-5 py-3 border-t"><?= $row['id'] ?></td>
                        <td class="px-5 py-3 border-t"><?= htmlspecialchars($row['nama']) ?></td>
                        <td class="px-5 py-3 border-t">Rp<?= number_format($row['harga'], 0, ',', '.') ?></td>
                        <td class="px-5 py-3 border-t text-center">
                            <a href="edit.php?id=<?= $row['id'] ?>" class="text-blue-600 hover:underline font-medium">Edit</a> |
                            <a href="delete.php?id=<?= $row['id'] ?>" class="text-red-500 hover:underline font-medium" onclick="return confirm('Yakin ingin menghapus produk ini?')">Hapus</a>
                        </td>
                    </tr>
                <?php endwhile ?>
            </tbody>
        </table>
    </div>
</div>

<?php include './layout/footer.php'; ?>