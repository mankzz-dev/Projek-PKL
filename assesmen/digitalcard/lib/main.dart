import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Kartu Nama Digital',
      home: const BusinessCard(),
    );
  }
}

class BusinessCard extends StatelessWidget {
  const BusinessCard({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.lightBlue[300], // Ubah tema jadi biru
      body: SafeArea(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // GestureDetector agar foto bisa diklik
              GestureDetector(
                onTap: () {
                  showDialog(
                    context: context,
                    builder: (_) => Dialog(
                      backgroundColor: Colors.transparent,
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(16),
                        child: Image.asset('assets/gwe.jpg'),
                      ),
                    ),
                  );
                },
                child: const CircleAvatar(
                  radius: 60,
                  backgroundImage: AssetImage('assets/gwe.jpg'),
                ),
              ),

              const SizedBox(height: 15),

              // Nama pengguna
              const Text(
                'Rizqi Ramdhani',
                style: TextStyle(
                  fontSize: 26,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontFamily: 'Arial',
                  shadows: [
                    Shadow(
                      offset: Offset(1, 1),
                      blurRadius: 2,
                      color: Colors.black26,
                    ),
                  ],
                ),
              ),

              // Posisi / jabatan
              const Text(
                'FRONTEND DEVELOPER',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.white70,
                  letterSpacing: 2.5,
                  fontWeight: FontWeight.w500,
                ),
              ),

              const SizedBox(height: 20),

              // Garis pembatas
              SizedBox(
                width: 150,
                child: Divider(color: Colors.lightBlueAccent, thickness: 1),
              ),

              const SizedBox(height: 10),

              // Kartu info nomor telepon
              Card(
                margin: const EdgeInsets.symmetric(
                  horizontal: 30,
                  vertical: 10,
                ),
                child: ListTile(
                  leading: const Icon(Icons.phone, color: Colors.blue),
                  title: const Text(
                    '+62 812-3456-7890',
                    style: TextStyle(fontSize: 16),
                  ),
                ),
              ),

              // Kartu info email
              Card(
                margin: const EdgeInsets.symmetric(horizontal: 30),
                child: ListTile(
                  leading: const Icon(Icons.email, color: Colors.blue),
                  title: const Text(
                    'rizqi@example.com',
                    style: TextStyle(fontSize: 16),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
