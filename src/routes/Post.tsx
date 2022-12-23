import { PostType } from "./Posts";
import axios from "axios";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function postLoader({ params }: LoaderFunctionArgs) {
  const result = await axios.get<PostType>(
    `http://localhost:3000/posts/${params.postId}`
  );
  return result.data;
}

export function Post() {
  const post = useLoaderData() as PostType;
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
