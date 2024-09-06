"use server";

import { redirect } from "next/navigation";
import { createClient } from "../supabase/supabase-server-side";
import { revalidatePath } from "next/cache";
import { schema } from "@/app/(auth)/schema";

export const login = async (formData) => {};

export const register = async (formData) => {
  const supabase = createClient();
  const { username, email, password, password_confirmation } =
    Object.fromEntries(formData);

  if (password !== password_confirmation) {
    const msg = "Password do not match";
    redirect(`/register?msg=${msg}`);
  }

  const validatedFields = schema.safeParse({
    username,
    email,
    password,
    password_confirmation,
  });

  if (!validatedFields.success) {
    const msg = Object.entries(validatedFields.error.flatten().fieldErrors).map(
      ([key, value]) => {
        return value;
      }
    );
    //For a momment no need to pass entire error at once
    redirect(`/register?msg=${msg[0]}`);
  }

  const data = { username, email, password };

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
    console.log(err)
    result.error = "Terjadi kesalahan. Coba lagi nanti!";
  }

  if (result.error !== "") {
    redirect(`/register?msg=${result.error}`);
  }
  redirect(`/login?msg=${result.success}`);
};
