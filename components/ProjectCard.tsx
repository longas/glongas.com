interface ProjectCardProps {
  title: string;
  summary: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, href }) => {
  return (
    <a className="group" href={href}>
      <div className="w-24 h-1 origin-left transform group-hover:scale-x-150 duration-200 bg-glongas-green group-hover:bg-gray-600" />

      <h3 className="mt-2 text-2xl font-bold">{title}</h3>

      <p className="mt-2 text-gray-700">{summary}</p>
    </a>
  );
};

export default ProjectCard;
