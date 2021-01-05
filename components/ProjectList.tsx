import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { IProject } from "../lib/projects";
import routes from "../routes";

interface ProjectListProps {
  projects: IProject[];
  cols: 1 | 2;
  more?: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  cols,
  more = false,
}) => {
  return (
    <>
      <h2 className="flex items-center text-4xl md:text-5xl font-medium">
        <span className="mr-1 text-2xl md:text-3xl">💻</span> Projects
      </h2>

      <div
        className={`mt-10 grid grid-cols-1 ${
          cols === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
        } gap-10`}
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}

        {more && (
          <div>
            <Link href={routes.PROJECTS}>
              <a className="font-medium text-glongas-green-dark hover:text-gray-600">
                Check all projects
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectList;
