import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Calculator(),
    );
  }
}

class Calculator extends StatefulWidget {
  const Calculator({super.key});

  @override
  State<Calculator> createState() => _CalculatorState();
}

class _CalculatorState extends State<Calculator> {
  String displayText = '0';
  double firstNum = 0;
  double secondNum = 0;
  String operator = '';
  bool shouldClear = false;

  void onPressed(String value) {
    setState(() {
      if (value == 'AC') {
        displayText = '0';
        firstNum = 0;
        secondNum = 0;
        operator = '';
        shouldClear = false;
      } else if (value == '+/-') {
        if (displayText != '0') {
          if (displayText.startsWith('-')) {
            displayText = displayText.substring(1);
          } else {
            displayText = '-$displayText';
          }
        }
      } else if (value == '%') {
        displayText = (double.parse(displayText) / 100).toString();
      } else if (value == '+' || value == '-' || value == '×' || value == '÷') {
        firstNum = double.parse(displayText);
        operator = value;
        shouldClear = true;
      } else if (value == '=') {
        secondNum = double.parse(displayText);
        switch (operator) {
          case '+':
            displayText = (firstNum + secondNum).toString();
            break;
          case '-':
            displayText = (firstNum - secondNum).toString();
            break;
          case '×':
            displayText = (firstNum * secondNum).toString();
            break;
          case '÷':
            displayText = secondNum != 0
                ? (firstNum / secondNum).toString()
                : 'Error';
            break;
        }
        operator = '';
        shouldClear = true;
      } else {
        if (displayText == '0' || shouldClear) {
          displayText = value;
          shouldClear = false;
        } else {
          displayText += value;
        }
      }
    });
  }

  Widget buildButton(
    String text, {
    Color? bgColor,
    Color textColor = Colors.white,
  }) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(8),
        child: ElevatedButton(
          onPressed: () => onPressed(text),
          style: ElevatedButton.styleFrom(
            padding: const EdgeInsets.all(20),
            backgroundColor: bgColor ?? Colors.grey[850],
            shape: const CircleBorder(),
          ),
          child: Text(text, style: TextStyle(fontSize: 24, color: textColor)),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            // Display
            Expanded(
              child: Container(
                alignment: Alignment.bottomRight,
                padding: const EdgeInsets.all(24),
                child: Text(
                  displayText,
                  style: const TextStyle(
                    fontSize: 60,
                    color: Colors.white,
                    fontWeight: FontWeight.w300,
                  ),
                ),
              ),
            ),

            // Buttons
            Column(
              children: [
                Row(
                  children: [
                    buildButton('AC', bgColor: Colors.grey),
                    buildButton('+/-', bgColor: Colors.grey),
                    buildButton('%', bgColor: Colors.grey),
                    buildButton('÷', bgColor: Colors.orange),
                  ],
                ),
                Row(
                  children: [
                    buildButton('7'),
                    buildButton('8'),
                    buildButton('9'),
                    buildButton('×', bgColor: Colors.orange),
                  ],
                ),
                Row(
                  children: [
                    buildButton('4'),
                    buildButton('5'),
                    buildButton('6'),
                    buildButton('-', bgColor: Colors.orange),
                  ],
                ),
                Row(
                  children: [
                    buildButton('1'),
                    buildButton('2'),
                    buildButton('3'),
                    buildButton('+', bgColor: Colors.orange),
                  ],
                ),
                Row(
                  children: [
                    Expanded(
                      flex: 2,
                      child: Padding(
                        padding: const EdgeInsets.all(8),
                        child: ElevatedButton(
                          onPressed: () => onPressed('0'),
                          style: ElevatedButton.styleFrom(
                            padding: const EdgeInsets.symmetric(vertical: 20),
                            backgroundColor: Colors.grey[850],
                            shape: const StadiumBorder(),
                          ),
                          child: const Align(
                            alignment: Alignment.centerLeft,
                            child: Padding(
                              padding: EdgeInsets.only(left: 20),
                              child: Text(
                                '0',
                                style: TextStyle(
                                  fontSize: 24,
                                  color: Colors.white,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    buildButton('.', bgColor: Colors.grey[850]),
                    buildButton('=', bgColor: Colors.orange),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
