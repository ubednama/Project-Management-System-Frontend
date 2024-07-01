import { useForm } from "react-hook-form";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";

const CreateCommentForm = () => {
  const form = useForm({
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log("create issue", data);
  };
  return (
    <div className="border-b pb-3">
      <Form {...form}>
        <form
          action=""
          className="flex gap-2 items-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <div className="flex gap-1.5 items-center">
                  <div>
                    <Avatar>
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="border w-full flex-grow"
                      placeholder="Enter Comment.."
                    />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" variant="" size="">
            Post
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCommentForm;
