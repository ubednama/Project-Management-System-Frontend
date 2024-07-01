import { useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const Auth = () => {
  const [active, setActive] = useState(true);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="font-poppins font-sans flex flex-col justify-center items-center min-h-screen sm:bg-[#131313]">
      <h1 className="text-white font-semibold text-xl sm:text-5xl mb-20 !font-poppins">
        Project Management System
      </h1>
      <div
        className={`box relative rounded-2xl flex ${
          active ? "h-[30rem]" : "h-[25rem]"
        } w-[25rem] bg-black filter-drop-shadow justify-center items-center`}
      >
        <div className="absolute flex w-full flex-col rounded-lg bg-opacity-20 shadow-inset-bottom z-10 items-center justify-center">
          <div className="w-full px-10 space-y-5">
            <div className="space-y-5 flex flex-col items-center">
              <h1 className="text-center text-2xl font-semibold py-4 mb-4">
                {active ? "Sign Up" : "Login"}
              </h1>
              <Form {...form}>
                <form className="space-y-2 flex flex-col items-center">
                  {active && (
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              className="border w-full border-gray-700 py-5 px-5"
                              placeholder="Full Name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
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
                            placeholder="Email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            type="password"
                            className="border w-full border-gray-700 py-5 px-5"
                            placeholder="Password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {active && (
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              {...field}
                              type="password"
                              className="border w-full border-gray-700 py-5 px-5"
                              placeholder="Confirm Password"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </form>
              </Form>
              <Button
                type="submit"
                className="mt-4"
                onClick={() => console.log("hey")}
              >
                {active ? "Sign Up" : "Login"}
              </Button>
            </div>
            <div>
              <div className="">
                <span className="text-sm">Already Have Account?</span>
                <Button
                  variant="ghost"
                  size=""
                  onClick={() => setActive(!active)}
                >
                  {active ? "Login" : "Sign Up"}
                </Button>
              </div>
              <div className="">
                <span className="text-sm">Wanna read terms & conditions??</span>
                <Button variant="ghost" size="">
                  go here
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-1 border-[5px] border-[#25252b] rounded-lg"></div>
      </div>
    </div>
  );
};

export default Auth;
