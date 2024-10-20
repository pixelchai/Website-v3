import { promisify } from "util";
import { exec } from "child_process";

export async function getExecStdout(cmd: string) {
  try {
    const res = await promisify(exec)(cmd);
    return res.stdout.trim();
  } catch {
    return "";
  }
}
