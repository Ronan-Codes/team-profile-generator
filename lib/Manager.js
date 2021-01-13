const Employee = require('./Employee.js')

const promptUser = () => {
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
            name: "number",
            message: "Enter office number.",
        }

    ]).then(() => {promptMenu()})
};
