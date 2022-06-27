const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const createHTML = require("createHTML");

function validateInput(input) {
  if (input == "") {
    return "Input needed to continue";
  } else {
    return true;
  }
}

let teamMember = [];

function createEmployee() {
  let employeePrompts = [
    {
      type: "input",
      name: "name",
      message: "Type the Manager's Name",
      validate: validateInput,
    },
    {
      type: "input",
      name: "id",
      message: "Type the ID",
      validate: "validateInput",
    },
    {
      type: "input",
      name: "email",
      message: "Type Email",
      validate: "validateInput",
    },
  ];

  inquirer.prompt(createEmployee).then((answers) => {
    const newEmployee = new Employee(answers.name, answers.id, answers.email);
    teamMember.push(newEmployee);

    creatTeamMember();
  });
}