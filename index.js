#! /usr/bin/env node
import inquirer from "inquirer";
const user = await inquirer.prompt([
    {
        name: "firstNo",
        type: "number",
        message: "Enter First Number"
    },
    {
        name: "oprator",
        type: "list",
        choices: ["+", "-", "*", "/", "%"]
    },
    {
        name: "secondNo",
        type: "number",
        message: "Enter Second Number"
    }
]);
switch (user.oprator) {
    case "+":
        console.log(user.firstNo + user.secondNo);
        break;
    case "-":
        console.log(user.firstNo - user.secondNo);
        break;
    case "*":
        console.log(user.firstNo * user.secondNo);
        break;
    case "/":
        console.log(user.firstNo / user.secondNo);
        break;
    case "%":
        console.log(user.firstNo % user.secondNo);
        break;
}
