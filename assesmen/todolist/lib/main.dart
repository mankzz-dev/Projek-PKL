import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

// Widget utama aplikasi
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'To-Do List',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const TodoListPage(), // Halaman utama aplikasi
    );
  }
}

// Widget halaman utama (stateful karena akan ada perubahan data)
class TodoListPage extends StatefulWidget {
  const TodoListPage({super.key});

  @override
  State<TodoListPage> createState() => _TodoListPageState();
}

// Kelas model Task: berisi nama tugas dan status selesai
class Task {
  String title; // Nama tugas
  bool isDone; // Status apakah tugas sudah selesai

  Task(this.title, {this.isDone = false});
}

class _TodoListPageState extends State<TodoListPage> {
  // Daftar tugas yang disimpan di memori
  final List<Task> _tasks = [];

  // Fungsi untuk menampilkan dialog penambahan tugas baru
  void _showAddDialog() {
    String newTask = ''; // Variabel untuk menyimpan input pengguna

    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Tambah Tugas'),
          content: TextField(
            onChanged: (value) {
              newTask = value;
            },
            decoration: const InputDecoration(hintText: 'Masukkan nama tugas'),
          ),
          actions: [
            // Tombol Batal (menutup dialog tanpa menyimpan)
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('Batal'),
            ),
            // Tombol Tambah (menambahkan tugas ke daftar)
            ElevatedButton(
              onPressed: () {
                if (newTask.trim().isNotEmpty) {
                  setState(() {
                    _tasks.add(Task(newTask.trim()));
                  });
                }
                Navigator.of(context).pop(); // Menutup dialog setelah ditambah
              },
              child: const Text('Tambah'),
            ),
          ],
        );
      },
    );
  }

  // Fungsi untuk menandai tugas sudah selesai / belum
  void _toggleTask(int index) {
    setState(() {
      _tasks[index].isDone = !_tasks[index].isDone;
    });
  }

  // Fungsi untuk menghapus tugas dari daftar
  void _removeTask(int index) {
    setState(() {
      _tasks.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Daftar Tugas'),
        backgroundColor: Colors.deepPurple,
        foregroundColor: Colors.white,
      ),
      // Tampilan jika daftar tugas kosong
      body: _tasks.isEmpty
          ? const Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('📄', style: TextStyle(fontSize: 40)),
                  SizedBox(height: 10),
                  Text(
                    'Tidak ada Tugas!',
                    style: TextStyle(fontSize: 16, color: Colors.grey),
                  ),
                ],
              ),
            )
          // Tampilan jika ada tugas di daftar
          : ListView.builder(
              itemCount: _tasks.length, // Jumlah item yang ditampilkan
              itemBuilder: (context, index) {
                final task = _tasks[index];
                return Card(
                  margin: const EdgeInsets.symmetric(
                    horizontal: 12,
                    vertical: 6,
                  ),
                  child: ListTile(
                    // Checkbox untuk menandai selesai
                    leading: Checkbox(
                      value: task.isDone,
                      onChanged: (_) => _toggleTask(index),
                    ),
                    // Judul tugas (akan dicoret jika selesai)
                    title: Text(
                      task.title,
                      style: TextStyle(
                        decoration: task.isDone
                            ? TextDecoration.lineThrough
                            : TextDecoration.none,
                        color: task.isDone ? Colors.grey : Colors.black,
                      ),
                    ),
                    // Tombol hapus tugas
                    trailing: IconButton(
                      icon: const Icon(Icons.delete, color: Colors.red),
                      onPressed: () => _removeTask(index),
                    ),
                  ),
                );
              },
            ),
      // Tombol tambah tugas di pojok kanan bawah
      floatingActionButton: FloatingActionButton(
        onPressed: _showAddDialog,
        child: const Icon(Icons.add),
      ),
    );
  }
}
