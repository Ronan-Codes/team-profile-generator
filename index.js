const inquirer = require('inquirer');
const menu = require('inquirer-menu');


const generateMarkdown = require('./src/generate-markdown.js');
const { writeFile, copyFile } = require('./src/generate-site');



//const Employee = requre('./lib/Employee.js');
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')


let managers = [];
let engineers = [];
let interns = []

/*
const promptEmployee = require('./lib/Employee.js');
*/

function promptUser() {


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
            type: "input",
            name: "officeNumber",
            message: "Enter office number.",
        }

    ])
    .then(addManager)

};

function promptMenu() {
    return {
        type: "list",
        name: "menu",
        message: 'Add Engineers/Interns',
        choices: {
            "Add Engineer": promptEngineer,
            "Add Intern": promptIntern,
        }
    };
};

function promptEngineer() {


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
    .then(addEngineer)
};

function promptIntern() {


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
    .then(addIntern)
};

const addManager = (managerData) => {
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);

    managers.push(manager);

    console.log("Manager has been added to team!");
};

const addEngineer = (engineerData) => {
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

    engineers.push(engineer);

    console.log("Engineer has been added to team!");
};

const addIntern = (internData) => {
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);

    interns.push(intern);

    console.log("Intern has been added to team!");
};

promptUser()
.then(() => {
    menu(promptMenu)
    .then(() => {
        console.log(managers, engineers, interns)
        return generateMarkdown(managers, engineers, interns);

    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
        console.log("Team is complete, open html to see!");
    })
    .catch(err => {
        console.log(err);
    })
})
