import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export type PostType = {
  id: number;
  title: string;
  content: string;
};

export async function postsLoader() {
  const result = await axios.get<PostType[]>("http://localhost:3000/posts");
  return result.data;
}

export function Posts() {
  const posts = useLoaderData() as PostType[];
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Posts</h2>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Link
            className="underline text-indigo-600"
            key={post.id}
            to={`/blog/${post.id}`}
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
