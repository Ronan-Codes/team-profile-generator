const generateManagers = managers => {
    let cards = [];

    if(managers.length === 0) {
        return "";
    }

    for (let x = 0; x < managers.length; x++) {
        cards.push(`
            <div class="card">
                <div class="card-header bg-primary">
                    <h4 class="card-title text-white manager-name">${managers[x].name}</h4>
                    <h5 class="card-subtitle text-white"><i class="fas fa-mug-hot"></i> Manager</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item manager-id">ID: ${managers[x].id}</li>
                        <li class="list-group-item manager-email">Email: <a href="mailto:${managers[x].email}">${managers[x].email}</a></li>
                        <li class="list-group-item manager-office">Office Number: ${managers[x].officeNumber}</li>
                    </ul>
                </div>
            </div>
        `);
    }
    return cards;
};

const generateEngineers = engineers => {
    let cards = [];

    if (engineers.length === 0) {
        return "";
    }

    for (let x = 0; x < engineers.length; x++) {
        cards.push(`
            <div class="card">
                <div class="card-header bg-primary">
                    <h4 class="card-title text-white engineer-name">${engineers[x].name}</h4>
                    <h5 class="card-subtitle text-white"><i class="fas fa-glasses"></i> Engineer</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item engineer-id">ID: ${engineers[x].id}</li>
                        <li class="list-group-item engineer-email">Email: <a href="mailto:${engineers[x].email}">${engineers[x].email}</a></li>
                        <li class="list-group-item engineer-github">Github: <a href="https://github.com/${engineers[x].github}" target="_blank">${engineers[x].github}</a></li>
                    </ul>
                </div>
            </div>
        `);
    }
    return cards;
};

const generateInterns = interns => {
    let cards = [];

    if (interns.length === 0) {
        return "";
    }

    for (let x = 0; x < interns.length; x++) {
        cards.push(`
            <div class="card">
                <div class="card-header bg-primary">
                    <h4 class="card-title text-white intern-name">${interns[x].name}</h4>
                    <h5 class="card-subtitle text-white"><i class="fas fa-user-graduate"></i> Intern</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item intern-id">ID: ${interns[x].id}</li>
                        <li class="list-group-item intern-email">Email: <a href="mailto:${interns[x].email}">${interns[x].email}</a></li>
                        <li class="list-group-item intern-school">School: ${interns[x].school}</li>
                    </ul>
                </div>
            </div>
        `);
    }
    return cards;
};



const htmlTemplate = (managers, engineers, interns) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Team Profile Generator</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <header>
                    <nav class="navbar navbar-light bg-danger">
                        <div class="container">
                            <span class="navbar-brand mb-0 h1 text-white">My Team</span>
                        </div>
                    </nav>
                </header>
                <main class="container my-5">
                    <div class="cards-holder">
                        ${generateManagers(managers)}
                        ${generateEngineers(engineers)}
                        ${generateInterns(interns)}
                    </div>
                </main>
                <footer class="container text-center py-3">
                    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Ronan Galvez</h3>
                </footer>
            </body>
        </html>
    `;
};

module.exports = htmlTemplate
