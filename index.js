const inquirer = require('inquirer');

/*
const generateMarkdown = require('./src/generate-markdown.js');
const { writeFile, copyFile } = require('/src/generate-site');
*/


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
    this.name = '';
    this.id = "";
    this.email = "";
    this.office = "";

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
    .then(({ name, id, email, officeNumber }) => {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = officeNumber;
        console.log(this.name, this.id, this.email, this.office);
        promptMenu();

      })

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

function promptEngineer() {
    this.name = '';
    this.id = "";
    this.email = "";
    this.github = "";

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
    .then(({ name, id, email, gitHub }) => {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = gitub;
        console.log(this.name, this.id, this.email, this.github);

        promptMenu();
      })
}

function promptIntern() {
    this.name = '';
    this.id = "";
    this.email = "";
    this.school = "";

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
    .then(({ name, id, email, gitHubInput }) => {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = schoolInput;
        console.log(this.name, this.id, this.email, this.school);

        promptMenu();
    })
}

const addManager = (managerData) => {
    const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);

    managers.push(manager);

    console.log("Manager has been added to team!");
    return;
};

const addEngineer = (engineerData) => {
    const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

    engineers.push(engineer);

    console.log("Engineer has been added to team!");
    return;
};

const addIntern = (internData) => {
    const intern = new Intern(internData.name, internData.id, internData.email, internData.school);

    interns.push(intern);

    console.log("Intern has been added to team!");

    return;
};

promptUser()

/*
promptUser()
.then(userData => {
    return generateMarkdown(userData);
})
.then(readmeContent => {
    return writeFile(readmeContent);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
})
.catch(err => {
    console.log(err);
});
*/
