const inquirer = require('inquirer');

/*const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('/src/generate-site');

const Employee = requre('./lib/Employee.js');
const Engineer = require('.lib')

let employees = [];
let managers = [];
let engineers = [];
let interns = []
*/

const promptEmployee = require('./lib/Employee.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Team Manager's name.",
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
            message: "Enter Team Manager's Employee ID.",
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
            message: "Please enter the Team Manager's email address.",
        },

        {
            type: "input",
            name: "number",
            message: "Enter office number.",
        },

        {
            type: "list",
            name: "=)",
            message: "Have a wonderful day!",
            choices: ["=)", "Thank You!"]
        }

    ]).then(() => {promptMenu()})
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: 'Add Engineer/Intern',
            choices: [
                "Add Engineer",
                "Add Intern",
                "Exit"
            ]
        }
    ])
    .then(({ menu }) => {
        if (menu === 'Add Engineer') {
            promptEngineer();
        }
        if (menu === 'Add Intern') {
            promptIntern();
        }
        else {
            console.log("Your Team Profile has been created!")
            return
        }
    })
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter Employee Name.",
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
            message: "Enter Employee's ID.",
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
            message: "Enter Employee's email address.",
        },

        {
            type: 'input',
            name: 'github',
            message: "Enter Employee's GitHub:",
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    return "Please enter engineer's github";
                }
            }
        }
    ])
    .then(() => {promptMenu()})
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter Employee Name.",
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
            message: "Enter Employee's ID.",
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
            message: "Enter Employee's email address.",
        },

        {
            type: 'input',
            name: 'school',
            message: "Enter Intern's school",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    return "Please enter Intern's school!";
                }
            }
        }
    ])
    .then(() => {promptMenu()})
}

promptUser()
