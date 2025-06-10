import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const getData = async (blogPostId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogPostId}`
  );
  const postDatawithId = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch post with ID");
  }
  return postDatawithId;
};
const page = async (params: { params: { id: string } }) => {
  const { id } = await params.params;
  const data = await getData(id);
  console.log("data", data);
  return (
    <MaxWidthWrapper>
      <div className="h-[80vh] flex items-center justify-center">
        <Card className="w-full max-w-2xl shadow-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold capitalize mb-2">
              {data.title}
            </CardTitle>
            <CardDescription>
              <span className="text-sm text-muted-foreground">
                Post ID: {data.id}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line mb-6">
              {data.body.replace(/\n/g, " ")}
            </p>
            <Button asChild className="mt-2">
              <Link href="/" className="w-full flex items-center">
                <ChevronLeft className="size-4" /> Back to Posts
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
};
export default page;
