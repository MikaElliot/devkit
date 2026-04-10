import inquirer from "inquirer";
import chalk from "chalk";
import { generateProject } from "./generators/index.js";

export async function runCLI() {
  console.log(chalk.blue("🚀 DevKit CLI"));

  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: "Choisir un framework :",
      choices: ["Vanilla", "React"]
    },
    {
      type: "confirm",
      name: "typescript",
      message: "Utiliser TypeScript ?"
    }
  ]);

  await generateProject(answers);
}