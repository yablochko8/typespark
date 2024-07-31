#!/usr/bin/env node

import { exec } from "child_process";

const command = "typespark";

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }

  console.log(`Output: ${stdout}`);
});
