#!/usr/bin/env node

console.log("Hello, world!");

const { spawn } = require("child_process");
const path = require("path");
const os = require("os");

if (os.platform() !== "darwin") {
  console.log("This script is only supported on macOS.");
  process.exit(1);
}

const scriptPath = path.join(__dirname, "typespark");
const child = spawn("bash", [scriptPath], {
  stdio: "inherit",
});

child.on("exit", function (code, signal) {
  console.log(
    "child process exited with " + `code ${code} and signal ${signal}`
  );
});
