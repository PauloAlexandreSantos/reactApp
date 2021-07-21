
export const PostContent = ({ post }) => (
    <div className="post-content">
        <h2>{post.id} - {post.title}</h2>
        <p>{post.body}</p>
    </div>
);
