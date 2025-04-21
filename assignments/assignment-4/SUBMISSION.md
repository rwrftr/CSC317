# SUBMISSION.md

## Student Information
- **Name:** Roan Rafter
- **Student ID:** 923124654

## Project Links
- **GitHub Repository:** [CSC317](https://github.com/rwrftr/CSC317)
- **Live GitHub Pages Site:** [Index](https://rwrftr.github.io/CSC317/assignments/assignment-4/index.html)

## Implementation Summary
For this project, I created a JavaScript calculator that supports basic arithmetic operations (addition, subtraction, multiplication, division), percentage calculation, positive/negative toggling, and decimal input. 

I used HTML, CSS, and vanilla JavaScript to implement the calculator. The layout uses a CSS grid for arranging the buttons, and I applied custom colors inspired by the assignment guidelines. I implemented keyboard event support for better user accessibility. Basic input validation is done to prevent consecutive operators.

## Challenges and Solutions
- **Keyboard Support:** Handling keyboard events required checking if the user typed a number, or an operator. I solved this by maintaining two arrays (`opArray`, `numArray`) and if the typed character was in one of them.
- **Percent Operator** Since eval treats % like modulo, I decided I would not be able to handle expressions like "8 % 2" (what is 8 % of 2) but I figured if you had "8%' and it turned into 0.08 and you multiplied that by your second number, it would do the same thing. Perhaps if I was able to find the rewritten eval function you mentioned in class, I would be able to add a case for this and write code that handles it.
- **Polarity Flipping:** I wasn't sure how the +/- operator was supposed to handle cases where the input string was an expression, so I restricted it to only single-number situations.
- **Responsiveness:** Initial layout was way too wide, so I changed the calculator container width, and copied over some CSS that should help smaller screens. I also added button effects like hover and active to make the interface feel responsive.

## Additional Features
- Button hover and active animations for improved UI responsiveness.
- Basic prevention of invalid operator chains.

## Acknowledgments
- w3Schools for most javascript information.
- ChatGPT for reviewing logic, spotting typos, and writing resizing css.
- [mozilla docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) for information on `keyup` event handling.

---
