const buttons = document.querySelectorAll('.buttons button');
const screenDisplay = document.querySelector('.screen');


// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent;

      // Handle button clicks
    if (buttonText === '=') {
        // Evaluate the expression
        try {
          const result = eval(screen.textContent);
          screen.textContent = result;
        } catch (error) {
          screen.textContent = 'Error';
        }
      } else if (buttonText === 'C') {
        // Clear the screen
        screen.textContent = '';
      } else {
        // Append the clicked button's text to the screen
        screen.textContent += buttonText;
      }
    });
  });