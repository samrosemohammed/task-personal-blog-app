"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactAction } from "@/lib/action";
import { ContactSchema, contactSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const onContactSubmit = async (data: ContactSchema) => {
    // Handle form submission logic here
    const res = await contactAction(data);
    if (res.success) {
      toast.success(res.message);
    }
  };
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <Card className="max-w-lg mx-auto w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Contact Us</CardTitle>
          <CardDescription>Hello from the contact page.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onContactSubmit)}>
          <CardContent className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label>Your Name</Label>
              <Input {...register("name")} />
              {errors.name && (
                <p className="text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Your Email</Label>
              <Input {...register("email")} />
              {errors.email && (
                <p className="text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Your Message</Label>
              <Textarea {...register("message")} />
              {errors.message && (
                <p className="text-destructive">{errors.message.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter className="mt-4 flex justify-between items-center">
            <Button asChild variant={"secondary"}>
              <Link href={"/"}>Cancel</Link>
            </Button>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? (
                <Loader2 className="size-4 animate-spin ml-2" />
              ) : null}
              Submit Your Message
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
export default page;
