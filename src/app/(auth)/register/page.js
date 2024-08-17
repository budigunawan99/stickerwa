"use client";

import BottomGradient from "@/components/ui/BottomGradient";
import FormAlert from "@/components/ui/FormAlert";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import LabelInputContainer from "@/components/ui/LabelInputContainer";
import { register } from "@/lib/actions/user.actions";

import { IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import SubmitButton from "../submit-button";

const RegisterPage = () => {
  const [credential, setCredential] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errorInputClass, setErrorInputClass] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errorInputMessage, setErrorInputMessage] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [state, setState] = useState({ error: "" });

  const checkValueError = (name, value) => {
    if (name === "password_confirmation") {
      if (credential.password !== value) {
        setErrorInputClass((prevState) => {
          return {
            ...prevState,
            password_confirmation:
              "outline-none ring-[2px] ring-red-500/50 dark:focus-visible:ring-red-500",
          };
        });
        setErrorInputMessage((prevState) => {
          return {
            ...prevState,
            password_confirmation:
              "Password confirmation have to match with your password",
          };
        });
      } else {
        setErrorInputClass((prevState) => {
          return {
            ...prevState,
            password_confirmation: "",
          };
        });
        setErrorInputMessage((prevState) => {
          return {
            ...prevState,
            password_confirmation: "",
          };
        });
      }
    }
    return value;
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredential((previousInputs) => ({
      ...previousInputs,
      [name]: checkValueError(name, value),
    }));
  };

  const closeAlert = () => {
    setState({ error: "" });
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (!searchParams.has("msg")) {
      return;
    }
    const msg = searchParams.get("msg");
    setState({ error: msg || "" });

    const search = new URLSearchParams(searchParams);
    search.delete("msg");
    router.replace("/register", undefined, { shallow: true });
  }, [searchParams, router]);

  return (
    <>
      <h1 className="text-center text-[2.5rem] font-bold mb-10">Sign up</h1>
      {state?.error !== "" && (
        <div className="max-w-md w-full mx-auto mb-5">
          <FormAlert message={state?.error} action={closeAlert} />
        </div>
      )}
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input dark:bg-black border-[1px] border-solid border-neutral-300">
        <h2 className="font-bold text-xl dark:text-neutral-200">
          Welcome to StickerWA
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Sign up to to StickerWA
        </p>

        <form className="my-8 mb-0">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="Type your username here"
              type="text"
              value={credential.username}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="Type your email here"
              type="email"
              value={credential.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              value={credential.password}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password_confirmation">Password Confirmation</Label>
            <Input
              id="password_confirmation"
              name="password_confirmation"
              placeholder="••••••••"
              type="password"
              value={credential.password_confirmation}
              onChange={handleChange}
              className={errorInputClass.password_confirmation}
              required
            />
            <p className="text-red-500 text-sm">
              {errorInputMessage.password_confirmation}
            </p>
          </LabelInputContainer>
          <SubmitButton
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
           pendingText="Loading..."
            formAction={register}
          >
            Sign up &rarr;
            <BottomGradient />
          </SubmitButton>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col space-y-7">
            <button className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Google
              </span>
              <BottomGradient />
            </button>
            <p className="text-neutral-600 text-sm max-w-sm dark:text-neutral-300">
              Already have an account? &nbsp;
              <Link className="text-green-300" href="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
