# Vanilla JavaScript Calculator

A fully functional calculator built entirely with vanilla JavaScript. This project demonstrates dynamic DOM manipulation, event delegation, and a custom mathematical expression parser.

## Features

- **Dynamic UI Generation**: The entire user interface (display, keypad, layout) is constructed programmatically using JavaScript. No hardcoded HTML structure is required inside the `<body>`.
- **Secure Calculation**: Replaces the unsafe `eval()` function with a custom `calculate()` parser that tokenizes inputs and respects mathematical operator precedence (PEMDAS/BODMAS).
- **Smart Input Logic**:
  - Prevents consecutive operators (e.g., replacing `+` with `-` if typed immediately after).
  - Handles negative numbers at the start of expressions.
  - Clear ('C') functionality.
- **Responsive Layout**: Styled using Flexbox for a clean, grid-based interface.

## How It Works

### 1. DOM Manipulation
The script selects the `<main>` element and appends the display and button grid. CSS styles are applied directly via the `style` property to keep the project self-contained.

### 2. Custom Parser
Instead of using `eval()`, the calculator uses a token-based approach:
1.  **Tokenization**: Splits the input string by spaces (operators are padded with spaces during input).
2.  **Precedence Handling**: Iterates through the tokens in two passes:
    -   **Pass 1**: Multiplication (`*`) and Division (`/`).
    -   **Pass 2**: Addition (`+`) and Subtraction (`-`).

### 3. Event Delegation
A single event listener is attached to the parent `keys` container to handle all button clicks, improving performance compared to attaching listeners to individual buttons.

## Usage

1.  Include the script in your HTML file:
    ```html
    <body>
        <main></main>
        <script src="script.js"></script>
    </body>
    ```
2.  Open the HTML file in any modern web browser.
