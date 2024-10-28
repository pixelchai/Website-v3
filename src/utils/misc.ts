import { promisify } from "util";
import { exec } from "child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "path";
import { existsSync } from "fs";

export async function getExecStdout(cmd: string) {
  try {
    const res = await promisify(exec)(cmd);
    return res.stdout.trim();
  } catch {
    return "";
  }
}

export function getProjectRootPath(): string {
  /**
   * Get the project root path -- the path where package.json is located.
   */
  let cur = dirname(fileURLToPath(import.meta.url));

  // go up until we find package.json
  while (!existsSync(resolve(cur, "package.json"))) {
    const parent = resolve(cur, "..");
    if (parent === cur) {
      throw new Error(
        "Could not find project root path. Could not find package.json in parent directories.",
      );
    }
    cur = parent;
  }
  return cur;
}
