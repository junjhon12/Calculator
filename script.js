// Select the main container element from the HTML
const container = document.querySelector('main');

// Apply CSS styles dynamically using JavaScript
container.style.height = "20rem";
container.style.width = "20rem";
container.style.border = "2px solid black";
container.style.display = "flex";
container.style.flexDirection = "column";

// Create the display element where numbers appear
const display = document.createElement('div');
display.style.flexBasis = "20%";
display.style.borderBottom = "2px solid black";
display.style.display = "flex";
display.style.alignItems = "center";
display.style.justifyContent = "flex-end";
display.style.padding = "0 1rem";
display.style.fontSize = "2rem";
display.innerText = "0";
container.appendChild(display);

// Create a container for the keypad
const keys = document.createElement('div');
keys.style.flexBasis = "80%";
keys.style.display = "flex";
keys.style.flexWrap = "wrap";
container.appendChild(keys);

// Define the calculator buttons in the order they should appear
const buttonLayout = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '.', '+',
    '='
];

// Generate buttons dynamically based on the layout array
buttonLayout.forEach(key => {
    const button = document.createElement('button');
    button.innerText = key;
    // Make the '=' button span the full width, others take 1/4th
    button.style.width = key === '=' ? "100%" : "25%";
    button.style.height = "20%";
    button.style.fontSize = "1.5rem";
    button.style.cursor = "pointer";
    keys.appendChild(button);
});

document.body.appendChild(container);

// Calculator functionality (basic)
let currentInput = '';

// Custom calculation function to avoid using eval()
const calculate = (expression) => {
    // Split input string by spaces into an array of numbers and operators
    const tokens = expression.trim().split(/\s+/);
    
    // Handle case where the first number is negative
    if (tokens[0] === '-' && tokens.length > 1) {
        tokens.splice(0, 2, '-' + tokens[1]);
    }
    
    // Define operations with precedence: * and / are processed before + and -
    const ops = [
        { '*': (a, b) => a * b, '/': (a, b) => a / b },
        { '+': (a, b) => a + b, '-': (a, b) => a - b }
    ];
    
    // Iterate through precedence levels
    ops.forEach(operators => {
        for (let i = 0; i < tokens.length; i++) {
            if (operators[tokens[i]]) {
                const a = parseFloat(tokens[i - 1]);
                const b = parseFloat(tokens[i + 1]);
                const result = operators[tokens[i]](a, b);
                // Replace the operator and its two operands with the result
                tokens.splice(i - 1, 3, result);
                i--;
            }
        }
    });
    return tokens[0];
};

const updateDisplay = () => {
    display.innerText = currentInput || '0';
};
updateDisplay();

// Use Event Delegation: Add one listener to the parent 'keys' div
keys.addEventListener('click', (event) => {
    // Only trigger if a button was clicked (ignore clicks on the container gap)
    if (event.target.tagName !== 'BUTTON') return;
    const value = event.target.innerText;
    
    if (value === 'C') {
        currentInput = '';
    } else if (value === '=') {
        const result = calculate(currentInput);
        currentInput = (result === undefined || isNaN(result)) ? 'Error' : result.toString();
    } else {
        const operators = ['+', '-', '*', '/'];
        const lastChar = currentInput.trim().slice(-1);
        
        if (operators.includes(value) && operators.includes(lastChar)) {
            // Replace the last operator if a new one is pressed
            currentInput = currentInput.trim().slice(0, -1) + ` ${value} `;
        } else {
            // Add spaces around operators to help with splitting later
            currentInput += operators.includes(value) ? ` ${value} ` : value;
        }
    }
    updateDisplay();
});
