import fs from "fs";
import path from "path";

export interface IProject {
  title: string;
  summary: string;
  href: string;
}

export function getProjects(): IProject[] {
  const file = fs.readFileSync(
    path.join(process.cwd(), "data", "projects.json"),
    "utf8"
  );

  return JSON.parse(file);
}
