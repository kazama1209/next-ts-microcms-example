import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

import Common from "components/layouts/Common";
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
      <div className="flex justify-center">
        <div className="flex-col my-5">
          <Image
            src={post.thumbnail?.url || "/no_image.png"}
            width={384}
            height={288}
            alt="thumbnail image"
          />
          <div
            className="prose w-96 mt-3"
            dangerouslySetInnerHTML={{
              __html: `${post.body}`,
            }}
          />
        </div>
      </div>
    </Common>
  );
};

export default BlogId;
