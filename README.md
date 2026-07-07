# 🧮 Crystal Calc — Glassmorphism Calculator

A modern, responsive, and visually immersive **Glassmorphism Calculator Website** built using pure **HTML, CSS, and JavaScript**.

This project was developed as my **Week 1 Web Development Internship Project at InternPE**, assigned on **July 6, 2026**.

Instead of building a traditional calculator interface, I designed **Crystal Calc** with a futuristic glass-inspired UI, a stunning full-screen background, responsive controls, keyboard support, smooth animations, and structured JavaScript logic.

---

## ✨ Project Preview

<img width="1365" height="767" alt="image" src="https://github.com/user-attachments/assets/fdd9c814-5bc8-4c23-aca5-6fd3da84743e" />

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/7b07de90-b819-4c82-bc9c-b8953b4ec43e" />

---

## 🚀 Features

* 🧮 Basic arithmetic calculations
* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* 💯 Percentage operations
* 🔢 Decimal number support
* 🧹 Clear all functionality
* ⌫ Delete last character
* ⌨️ Full keyboard input support
* 🪟 Modern glassmorphism UI
* 🌌 Full-screen image background
* ✨ Ambient gradient lighting
* 🎨 Interactive hover effects
* 🖱️ Press animations
* 📱 Responsive mobile-friendly layout
* ⚠️ Error handling for invalid expressions
* 🔄 Consecutive operator handling
* 🎯 Floating calculator animation

---

## 🛠️ Tech Stack

| Technology | Purpose                                                    |
| ---------- | ---------------------------------------------------------- |
| HTML5      | Application structure                                      |
| CSS3       | Styling, glass effects, animations, and responsive design  |
| JavaScript | Calculator logic, events, validation, and keyboard support |

No external JavaScript frameworks or frontend libraries were used.

---

## 📂 Project Structure

```text
crystal-calc/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   └── calculator-preview.png
│
├── README.md
└── LICENSE
```

> The project can also be implemented as a single HTML file containing internal CSS and JavaScript.

---

## 🧱 HTML Structure

The HTML layer defines the complete structure of the calculator.

The application is divided into the following major sections:

```text
Main Wrapper
│
└── Calculator Container
    │
    ├── Top Bar
    │   ├── Branding
    │   └── Decorative Dots
    │
    ├── Display Area
    │   ├── Expression / History
    │   └── Current Result
    │
    ├── Calculator Keypad
    │   ├── Number Buttons
    │   ├── Operator Buttons
    │   ├── Action Buttons
    │   └── Equals Button
    │
    └── Keyboard Instruction Footer
```

This structure keeps the interface organized and makes the project easier to maintain.

---

## 🎨 UI & Styling

The visual design of **Crystal Calc** is inspired by:

* Glassmorphism
* Liquid-glass interfaces
* Futuristic UI design
* Transparent surfaces
* Soft neon lighting
* Layered gradients
* Atmospheric backgrounds

### Main Styling Techniques

The interface uses:

* `backdrop-filter`
* `blur()`
* `saturate()`
* Semi-transparent backgrounds
* Transparent borders
* CSS gradients
* Radial gradients
* Box shadows
* CSS Grid
* CSS transitions
* Keyframe animations
* Responsive media queries

---

## 🪟 Glassmorphism Effect

The calculator body uses multiple CSS techniques to create a realistic glass appearance.

```css
.calculator {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.08)
  );

  backdrop-filter: blur(24px) saturate(140%);
  -webkit-backdrop-filter: blur(24px) saturate(140%);

  border: 1px solid rgba(255, 255, 255, 0.25);

  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.35);
}
```

The effect is created through a combination of:

* Transparency
* Background blur
* Saturation
* Light borders
* Internal highlights
* Soft shadows

Transparency alone was not enough to create a convincing glass effect, so multiple layers were combined.

---

## 🌌 Background Design

The website uses a full-screen background image combined with a dark gradient overlay.

```css
body {
  background:
    linear-gradient(
      135deg,
      rgba(8, 12, 28, 0.55),
      rgba(10, 20, 40, 0.25)
    ),
    url("background-image.jpg")
    center / cover no-repeat fixed;
}
```

Additional radial gradients create ambient cyan and purple lighting around the viewport.

This improves:

* Visual depth
* Text readability
* Glass visibility
* Overall atmosphere

---

## 🎛️ Calculator Button Layout

The keypad is built using **CSS Grid**.

```css
.keys {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
```

This provides:

* Consistent alignment
* Equal spacing
* Responsive behavior
* Easy button positioning

The final row places:

```text
┌──────────────┬──────┬──────┐
│      0       │  .   │  =   │
└──────────────┴──────┴──────┘
```

The `0` button occupies additional horizontal space, while the decimal and equals buttons remain on the same row.

---

## 🧠 JavaScript Logic

The calculator uses JavaScript to manage:

* User input
* Expression building
* Display updates
* Arithmetic calculations
* Decimal validation
* Operator validation
* Delete actions
* Clear actions
* Keyboard input
* Error handling

The current mathematical expression is stored in a variable:

```js
let expression = "";
let resultShown = false;
```

---

## 🔢 Expression Building

Whenever the user clicks a number or operator, the value is added to the current expression.

```js
function appendValue(value) {
  expression += value;
  updateDisplay();
}
```

Additional validation is used to prevent malformed input.

---

## 🔄 Consecutive Operator Handling

The calculator checks whether the last character is already an operator.

For example:

```text
25++
```

Instead of allowing an invalid sequence, the previous operator is replaced.

```js
if (
  operators.includes(value) &&
  operators.includes(lastChar)
) {
  expression =
    expression.slice(0, -1) + value;
}
```

This improves usability and reduces invalid expressions.

---

## 🔘 Decimal Validation

The calculator prevents multiple decimal points inside the same number.

Invalid input:

```text
12.5.7
```

Valid input:

```text
12.57
```

The current number segment is checked before another decimal point is inserted.

```js
const lastNumber =
  expression.split(/[-+*/%]/).pop();

if (lastNumber.includes(".")) {
  return;
}
```

---

## 🧹 Clear Functionality

The **AC** button completely resets the calculator.

```js
function clearAll() {
  expression = "";
  resultShown = false;
  updateDisplay();
}
```

This resets:

* Current expression
* Result state
* Calculator display

---

## ⌫ Delete Functionality

The **DEL** button removes the last entered character.

```js
function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}
```

Example:

```text
12345
```

becomes:

```text
1234
```

---

## 🧮 Calculation Logic

When the equals button is pressed, the expression is evaluated.

Visual mathematical operators are converted when necessary:

```text
÷  →  /
×  →  *
```

The calculator then processes the expression and displays the final result.

Floating-point precision is controlled to avoid unnecessarily long decimal values.

---

## ⚠️ Error Handling

Invalid mathematical expressions are handled safely.

```js
try {
  // Evaluate expression
} catch (error) {
  // Reset calculator safely
}
```

If an error occurs:

* An error message is displayed
* The expression is reset
* The calculator remains functional
* The interface returns to a safe state

---

## ⌨️ Keyboard Support

Crystal Calc supports keyboard interaction.

| Key         | Action                |
| ----------- | --------------------- |
| `0-9`       | Enter numbers         |
| `+`         | Addition              |
| `-`         | Subtraction           |
| `*`         | Multiplication        |
| `/`         | Division              |
| `%`         | Percentage            |
| `.`         | Decimal point         |
| `Enter`     | Calculate result      |
| `=`         | Calculate result      |
| `Backspace` | Delete last character |
| `Escape`    | Clear calculator      |

Keyboard events are handled using:

```js
document.addEventListener("keydown", (event) => {
  // Keyboard logic
});
```

---

## ✨ Interactive Effects

Buttons include multiple visual interaction states.

### Hover State

When hovering over a button:

* Background brightness increases
* Button moves slightly upward
* Visual emphasis improves

### Active State

When clicking a button:

* Button slightly scales down
* Position changes
* Shadow depth changes

Example:

```css
button:hover {
  transform: translateY(-2px);
}

button:active {
  transform:
    translateY(1px)
    scale(0.98);
}
```

---

## 🎈 Floating Animation

The calculator includes a subtle floating animation.

```css
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}
```

This creates a futuristic floating-glass appearance without making the interface difficult to use.

---

## 📱 Responsive Design

The calculator adapts to different screen sizes.

Responsive techniques include:

* Flexible viewport width
* Maximum width constraints
* Responsive typography
* Reduced mobile padding
* Adjusted button heights
* Media queries

Example:

```css
.calculator {
  width: min(92vw, 420px);
}
```

For smaller devices:

```css
@media (max-width: 420px) {
  .calculator {
    padding: 16px;
  }

  button {
    min-height: 58px;
  }
}
```

---

## 🚧 Challenges Faced

During development, I encountered several challenges.

### 1. Creating a Realistic Glass Effect

**Problem:**
Simple transparency made the calculator look like a transparent box rather than glass.

**Solution:**
I combined blur, saturation, gradients, transparent borders, shadows, and internal highlights.

---

### 2. Maintaining Text Readability

**Problem:**
The detailed background image reduced text visibility.

**Solution:**
I added dark overlays, transparent display backgrounds, bright text colors, and controlled contrast.

---

### 3. Final Row Button Alignment

**Problem:**
The equals button initially occupied more grid columns than intended.

**Solution:**
I adjusted the CSS Grid span so that `0`, `.`, and `=` appear on the same row.

---

### 4. Multiple Decimal Points

**Problem:**
Users could potentially enter invalid values such as:

```text
12.5.7
```

**Solution:**
The calculator checks the current number before inserting another decimal point.

---

### 5. Consecutive Operators

**Problem:**
Users could enter invalid operator sequences.

**Solution:**
The calculator replaces the previous operator when another operator is entered immediately after it.

---

### 6. Invalid Expressions

**Problem:**
Malformed expressions could cause calculation failures.

**Solution:**
Error handling was added to recover safely.

---

### 7. Floating-Point Precision

**Problem:**
JavaScript can display unnecessarily long decimal results.

**Solution:**
Result precision is controlled before displaying the final output.

---

### 8. Balancing Animation and Usability

**Problem:**
Strong animations made the interface distracting.

**Solution:**
I used slower timing and subtle movement.

---

## 📚 What I Learned

Through this project, I improved my understanding of:

* HTML structure
* CSS Grid
* Responsive design
* Glassmorphism
* Backdrop filters
* Gradient composition
* CSS animations
* CSS transitions
* DOM manipulation
* Event listeners
* Keyboard events
* JavaScript input validation
* Expression handling
* Error handling
* UI/UX design
* Frontend problem-solving

This project taught me that even a simple calculator requires careful decisions when functionality, responsiveness, visual quality, and usability are developed together.

---

## 🔮 Future Improvements

Future versions may include:

* 🧾 Calculation history
* 🔬 Scientific calculator mode
* 🌗 Light and dark themes
* 🎨 Custom theme selector
* 🔊 Optional sound effects
* 🧠 Memory functions
* `( )` Bracket support
* 📐 Advanced mathematical functions
* 🧮 Improved expression parser
* 🖼️ Custom background selection
* ⚡ Progressive Web App support
* 📶 Offline functionality
* ♿ Enhanced accessibility

---

## 💼 Internship Context

This project was developed as part of my **Web Development Internship at InternPE**.

* **Project:** Calculator Website
* **Internship Week:** Week 1
* **Assigned Date:** July 6, 2026
* **Role:** Web Development Intern
* **Development Type:** Frontend Web Application

The objective was to build a calculator using core frontend technologies while applying practical concepts related to structure, styling, logic, responsiveness, and user interaction.

---

## ▶️ Run Locally

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project folder:

```bash
cd crystal-calc
```

Open:

```text
index.html
```

in your preferred browser.

No package installation or build process is required.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your improvements
5. Push the branch
6. Open a Pull Request

---

## 📄 License

This project is available for educational and portfolio purposes.

If you add a license file, consider using the **MIT License**.

---

## 👨‍💻 Author

**Tanishq Saxena**

Tech Enthusiast • Developer • Programmer • Japanese Learner

If you found this project useful or interesting, consider giving the repository a ⭐.

---

<p align="center">
  Built with HTML, CSS & JavaScript
  <br>
  Developed as a Week 1 Internship Project
</p>
