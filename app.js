// get elements
const buttons = document.querySelectorAll('.buttons button');
const screenDisplay = document.querySelector('.screen');

let calculation = [] // display in an array
let accumalativeCalculation

function calculate(button){
   const value = button.textContent
   // handle the button clicks
   if (value === 'C'){ // clear the screen
      calculation =[]
      screenDisplay.textContent = '.'
      return;
    }else if (value === '=') { // evaluate the expression
        console.log(accumalativeCalculation)
        screenDisplay.textContent = eval(accumalativeCalculation)
    }else{
        calculation.push(value)
        accumalativeCalculation = calculation.join('')
        screenDisplay.textContent = accumalativeCalculation
    }

}
// add event listner to the buttons
buttons.forEach(button => button.addEventListener('click',
 () => calculate(button)));