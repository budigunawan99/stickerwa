"use server";

import { redirect } from "next/navigation";
import { createClient } from "../supabase/supabase-server-side";
import { revalidatePath } from "next/cache";

export const login = async (formData) => {};

export const register = async (formData) => {
  const supabase = createClient();
  console.log(formData);
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  let result = {
    success: "",
    error: "",
  };

  try {
    const { error } = await supabase.auth.signUp(data);
    if (error) {
      throw `${Object.values(error)[3]}`;
    }
    result.success = "Check email to continue sign in process";
  } catch (err) {
    result.error = err;
  }

  if (result.error !== "") {
    redirect(`/register?msg=${result.error}`);
  }
  redirect(`/login?msg=${result.success}`);
};
