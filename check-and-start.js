import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;
const nodeModulesPath = path.resolve(__dirname, "node_modules");

if (!fs.existsSync(nodeModulesPath)) {
  console.log("node_modules not found. Running npm install...");
  execSync("npm install", { stdio: "inherit" });
}

console.log("Starting Vite...");
execSync("npm run dev", { stdio: "inherit" });
