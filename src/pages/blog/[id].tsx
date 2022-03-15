import { GetStaticPaths, GetStaticProps } from "next";

import Common from "components/layouts/Common";
import PostDetail from "components/blog/PostDetail";

import { getAllPosts, getPostById } from "lib/api/posts";
import { Post } from "types";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getAllPosts();
  const posts: Post[] = res.data.contents;
  const paths = posts.map(({ id }) => `/blog/${id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: string = String(params?.id);
  const res = await getPostById(id);
  const post: Post = res.data;

  return {
    props: { post },
    revalidate: 1,
  };
};

type BlogIdProps = {
  post: Post;
};

const BlogId: React.FC<BlogIdProps> = ({ post }) => {
  return (
    <Common>
      <div className="my-3 mx-5">
        <PostDetail post={post} />
      </div>
    </Common>
  );
};

export default BlogId;
