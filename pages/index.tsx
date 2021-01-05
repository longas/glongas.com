import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import BlogList from "../components/BlogPostList";
import Divider from "../components/Divider";
import ProjectList from "../components/ProjectList";
import Welcome from "../components/Welcome";
import Layout from "../layouts/Layout";
import { getAllPostsFrontMatter, IPostFrontMatter } from "../lib/mdx";
import { getProjects, IProject } from "../lib/projects";

export default function HomePage({
  posts,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Welcome />

      <Divider />

      <BlogList posts={posts} more />

      <Divider />

      <ProjectList projects={projects} cols={2} more />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: IPostFrontMatter[];
  projects: IProject[];
}> = async () => {
  const posts = getAllPostsFrontMatter();
  const projects = getProjects();

  return {
    props: {
      posts: posts.slice(0, 3),
      projects: projects.slice(0, 2),
    },
  };
};
