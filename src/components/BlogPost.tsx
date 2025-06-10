import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

interface BlogPostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return postData;
};
export const BlogPost = async () => {
  const data = await getData();
  return (
    <div className="p-6 space-y-6">
      <div className="grid lg:grid-cols-3 gap-4">
        {data.map((blogPost: BlogPostType) => (
          <Card
            key={blogPost.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="capitalize">{blogPost.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{blogPost.body.slice(0, 100)}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/post/${blogPost.id}`}
                className="text-blue-500 flex items-center gap-2 cursor-pointer hover:underline hover:underline-offset-4"
                title="Read more about this post"
                aria-label={`Read more about ${blogPost.title}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Read More <SquareArrowOutUpRight className="size-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
