import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const InviteUserForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  // const onSubmit = (data) => {
  //     console.log("submit invite")
  // }
  return (
    <div>
      <Form {...form}>
        <form className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Enter user email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <Button type="submit" className="w-full">
            Invite User
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default InviteUserForm;
