import { promisify } from "util";
import { exec } from "child_process";
import { fileURLToPath } from "node:url";
import { dirname } from "path";

export async function getExecStdout(cmd: string) {
  try {
    const res = await promisify(exec)(cmd);
    return res.stdout.trim();
  } catch {
    return "";
  }
}

export function getProjectRootPath(): string {
  const curFilename = fileURLToPath(import.meta.url);

  let rootPath = dirname(curFilename);
  // go upwards until we find package.json
  while (!rootPath.endsWith("/src")) {
    rootPath = dirname(rootPath);

    if (rootPath === "/") {
      throw new Error("Could not find project root path");
    }
  }

  return rootPath;
}
