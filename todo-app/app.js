const fs = require('fs');
const path = require('path');

const tasksFolder = path.join(__dirname, 'tasks');

// add task
function addTask(date, task) {
    const filePath = path.join(tasksFolder, `${date}.txt`);
    fs.appendFileSync(filePath, `- ${task}\n`, 'utf8');
    console.log(`Task added for ${date}`);
}

//view task
function viewTasks(date) {
    const filePath = path.join(tasksFolder, `${date}.txt`);
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log(`\nTasks for ${date}:\n${data}`);
    } else {
        console.log(`No tasks found for ${date}`);
    }
}

//delete all tasks
function clearTasks(date) {
    const filePath = path.join(tasksFolder, `${date}.txt`);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`All tasks cleared for ${date}`);
    } else {
        console.log(`No file found for ${date}`);
    }
}

// Command line arguments
const args = process.argv.slice(2);
const command = args[0];
const date = args[1];
const task = args.slice(2).join(' ');

switch (command) {
    case 'add':
        addTask(date, task);
        break;
    case 'view':
        viewTasks(date);
        break;
    case 'clear':
        clearTasks(date);
        break;
    default:
        console.log("\nCommands:");
        console.log("  node app.js add <date> <task>");
        console.log("  node app.js view <date>");
        console.log("  node app.js clear <date>\n");
        break;
}

