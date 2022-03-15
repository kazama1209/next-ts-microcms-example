import Image from "next/image";

import styles from "./PostDetail.module.scss";
import { Post } from "types";

type BlogDetailProps = {
  post: Post;
};

const BlogDetail: React.FC<BlogDetailProps> = ({ post }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex-col">
          <div className={styles.contentWrapper}>
            <Image
              src={post.thumbnail?.url || "/no_image.png"}
              width={640}
              height={480}
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
      </div>
    </div>
  );
};

export default BlogDetail;
