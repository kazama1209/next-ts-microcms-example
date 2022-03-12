import Image from "next/image";

import { Post } from "types";

type BlogDetailProps = {
  post: Post;
};

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  return (
    <div className="flex justify-center">
      <div className="flex-col">
        <Image
          src={post.thumbnail?.url || "/no_image.png"}
          width={384}
          height={288}
          alt="thumbnail image"
        />
        <div
          className="prose mt-3"
          dangerouslySetInnerHTML={{
            __html: `${post.body}`,
          }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
