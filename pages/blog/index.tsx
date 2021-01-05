import { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import BlogList from "../../components/BlogPostList";
import Layout from "../../layouts/Layout";
import { getAllPostsFrontMatter, IPostFrontMatter } from "../../lib/mdx";

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <NextSeo title="Blog - Gabriel Longás" />

      <BlogList posts={posts} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: IPostFrontMatter[];
}> = async () => {
  const posts = getAllPostsFrontMatter();

  return {
    props: {
      posts,
    },
  };
};
