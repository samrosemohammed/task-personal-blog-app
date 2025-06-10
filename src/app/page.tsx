import { BlogPost } from "@/components/BlogPost";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <NavBar />
      <BlogPost />
    </MaxWidthWrapper>
  );
}
