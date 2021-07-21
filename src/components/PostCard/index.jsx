import { PostContent } from "../PostContent";

export const PostCard = ({ post }) => (
    <div className="post"  >
        <img src={post.cover} alt={post.title} />
        <PostContent post={post} />
    </div>
);
