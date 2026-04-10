import fs from "fs-extra";
import path from "path";

export async function generateProject(config) {
  const targetDir = path.join(process.cwd(), "my-app");

  const templatePath = path.join(
    process.cwd(),
    "templates",
    "vanilla"
  );

  await fs.copy(templatePath, targetDir);

  console.log("✅ Projet généré dans :", targetDir);
}