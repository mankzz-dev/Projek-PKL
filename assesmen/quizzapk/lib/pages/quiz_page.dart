import 'package:flutter/material.dart';
import '../models/question.dart';
import 'result_page.dart';

class QuizPage extends StatefulWidget {
  const QuizPage({super.key});

  @override
  State<QuizPage> createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  int currentIndex = 0;
  int score = 0;

  void checkAnswer(int selectedIndex) {
    if (selectedIndex == sampleQuestions[currentIndex].correctIndex) {
      score++;
    }

    if (currentIndex < sampleQuestions.length - 1) {
      setState(() {
        currentIndex++;
      });
    } else {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => ResultPage(score: score)),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final question = sampleQuestions[currentIndex];

    return Scaffold(
      appBar: AppBar(
        title: Text('Soal ${currentIndex + 1}/${sampleQuestions.length}'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              question.text,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
            ),
            const SizedBox(height: 30),
            ...List.generate(
              question.options.length,
              (index) => Container(
                width: double.infinity,
                margin: const EdgeInsets.symmetric(vertical: 8),
                child: ElevatedButton(
                  onPressed: () => checkAnswer(index),
                  child: Text(question.options[index]),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}