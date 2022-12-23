import { useParams } from "react-router-dom";
import { PostType } from "./Posts";
import axios from "axios";
import { useEffect, useState } from "react";

async function getPost(id: string) {
  const result = await axios.get<PostType>(`http://localhost:3000/posts/${id}`);
  return result.data;
}

export function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    if (!postId) return;
    getPost(postId).then((res) => setPost(res));
  }, []);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
