const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


function generateLogo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Input up to 3 initials for your company name.',
      },
      {
        type: 'input',
        name: 'color',
        message: 'What is your company color?',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?',
      },
      {
        type: 'list',
        name: 'shape',
        message: '  ',
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