import 'package:flutter/material.dart';
import 'start_page.dart';
import '../models/question.dart';

class ResultPage extends StatelessWidget {
  final int score;
  const ResultPage({super.key, required this.score});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.cyan[50],
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.emoji_events, size: 80, color: Colors.cyan),
            const SizedBox(height: 20),
            const Text(
              '🎉 Kuis Selesai 🎉',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10),
            Text(
              'Skor Akhir Anda',
              style: TextStyle(fontSize: 16, color: Colors.grey[700]),
            ),
            Text(
              '$score / ${sampleQuestions.length}',
              style: const TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (_) => const StartPage()),
                );
              },
              child: const Text('ULANG KUIS'),
            ),
          ],
        ),
      ),
    );
  }
}