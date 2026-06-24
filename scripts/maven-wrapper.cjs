const { spawnSync } = require("node:child_process");
const path = require("node:path");

const backendDir = path.join(__dirname, "..", "backend");
const command = process.platform === "win32" ? "mvnw.cmd" : "./mvnw";
const result = spawnSync(command, process.argv.slice(2), {
  cwd: backendDir,
  stdio: "inherit",
  shell: process.platform === "win32"
});

process.exit(result.status ?? 1);
