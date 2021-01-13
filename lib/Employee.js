const inquirer = require('inquirer');

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Team Manager's name!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the employee ID.",
            valitdate: idInput => {
                if (idInput) {
                    if (isNaN(idInput)) {
                        return "Enter numer values only for ID!";
                    } else true
                } else {
                    console.log("Please enter Team Manager's ID!");
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter the email address.",
            validate: emailInput => {
                if (!emailInput) {
                    console.log("Please enter an email!");
                    return false;
                } if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
                    return true
                } else {
                    console.log("You have entered an invalid email address!");
                    return false
                }
            }
        }
    ])
}

module.exports = promptEmployee
