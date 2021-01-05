import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import ProjectList from "../components/ProjectList";
import Layout from "../layouts/Layout";
import { getProjects, IProject } from "../lib/projects";

export default function ProjectsPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <NextSeo title="Projects - Gabriel Longás" />

      <ProjectList projects={projects} cols={1} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: IProject[];
}> = async () => {
  const projects = getProjects();

  return {
    props: {
      projects,
    },
  };
};
