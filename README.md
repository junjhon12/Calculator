# 🧮 Vanilla JavaScript Arithmetic Engine

![JavaScript](https://img.shields.io/badge/Logic-JavaScript_ES6+-f7df1e?logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/Style-CSS3-1572B6?logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/Structure-HTML5-E34F26?logo=html5&logoColor=white)

A high-performance, browser-based calculator built with pure JavaScript. This project moves beyond simple UI by implementing a **custom token-based mathematical parser**, avoiding the security risks associated with the native `eval()` function.

🔗 **Live Demo:** [Insert Your GitHub Pages Link Here]

---

## 🚀 Technical Highlights

### **1. Secure Expression Parsing**
Unlike standard tutorial calculators, this engine uses a custom `calculate()` function. It tokenizes the input string and processes calculations in two distinct passes to respect **operator precedence (PEMDAS/BODMAS)**:
* **Pass 1:** Multiplication (`*`) and Division (`/`).
* **Pass 2:** Addition (`+`) and Subtraction (`-`).

### **2. Dynamic UI Generation**
To maintain a "thin" HTML structure, the entire interface—including the display, keypad, and grid layout—is constructed programmatically. This demonstrates deep knowledge of the **DOM API** and `appendChild` patterns.

### **3. Efficient Event Handling**
Utilizes **Event Delegation** by attaching a single listener to the parent container. This optimizes memory usage and performance by managing all button interactions through a single entry point.

---

## ✨ Key Features

* **Smart Operator Logic:** Automatically prevents invalid consecutive operators (e.g., `5 + -` becomes `5 -`).
* **Negative Number Support:** Correcty handles negative values at the start of expressions.
* **Responsive Grid:** A clean, centered interface styled with Flexbox.
* **Pure Vanilla:** Zero dependencies or external libraries.

---

## 📂 Repository Structure

```text
/
├── index.html   # Minimal entry point
├── styles.css   # Layout and theme definitions
├── script.js    # Core parser and UI logic
└── README.md    # Project documentation
🛠️ Installation & Usage
Clone the repo:

Bash

git clone [https://github.com/junjhon12/Calculator.git](https://github.com/junjhon12/Calculator.git)
Open index.html in any modern browser.

Created as part of my journey to master JavaScript logic and secure coding practices.
