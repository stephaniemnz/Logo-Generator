const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


function generateLogo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What are your company initials?',
      },
      {
        type: 'input',
        name: 'color',
        message: 'What is your company color?',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'text color?',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape.',
        choices: ['circle', 'triangle', 'square'],
      },
    
    ])
    .then((answers) => {
      let shape;
      switch (answers.shape) {
        case "circle":
          shape = new Circle (answers.color, answers.name, answers.textColor);
          break;
        case "triangle":
          shape = new Triangle (answers.color, answers.name, answers.textColor);
          break;
        case "square":
          shape = new Square (answers.color, answers.name, answers.textColor);
          break;
        }

      fs.writeFileSync('logo.svg', shape.render());
      console.log('Logo created!');
    });
}
generateLogo();