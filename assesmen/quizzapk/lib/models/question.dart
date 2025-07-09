class Question {
  final String text;
  final List<String> options;
  final int correctIndex;

  Question({
    required this.text,
    required this.options,
    required this.correctIndex,
  });
}

List<Question> sampleQuestions = [
  Question(
    text: 'Apa nama ibukota Indonesia?',
    options: ['Bandung', 'Surabaya', 'Medan', 'Jakarta'],
    correctIndex: 3,
  ),
  Question(
    text: 'Widget utama untuk membuat layout di Flutter adalah...',
    options: ['Text', 'Image', 'Scaffold', 'AppBar'],
    correctIndex: 2,
  ),
  Question(
    text: 'Siapa penemu Gravitasi?',
    options: [
      'Isaac Newton',
      'Albert Einstein',
      'Galileo Galilei',
      'Nikola Tesla',
    ],
    correctIndex: 0,
  ),
];