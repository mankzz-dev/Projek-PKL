import 'package:flutter/material.dart';
import 'pages/start_page.dart';

void main() {
  runApp(const QuizzApk());
}

class QuizzApk extends StatelessWidget {
  const QuizzApk({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Kuis Flutter',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.cyan),
      home: const StartPage(),
    );
  }
}
