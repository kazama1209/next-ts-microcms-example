import { GetStaticPaths, GetStaticProps } from "next";

import Common from "components/layouts/Common";
import Posts from "components/blog/Posts";
import { getAllPosts } from "lib/api/posts";

import { Post } from "types";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllPosts();
  const allPosts: Post[] = res.data.contents;

  const per_page = 8;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const paths = range(1, Math.ceil(allPosts.length / per_page)).map(
    (number) => `/blog/page/${number}`
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await getAllPosts();
  const posts: Post[] = res.data.contents;

  return {
    revalidate: 1,
    props: {
      posts,
    },
  };
};

type BlogPageProps = {
  posts: Post[];
};

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <Common>
      <div className="my-3 mx-5">
        <Posts posts={posts} />
      </div>
    </Common>
  );
};

export default BlogPage;
