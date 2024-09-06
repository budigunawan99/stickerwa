import { z } from "zod";

export const schema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Email is not valid"),
  password: z.string().min(6, "Password length minimum is 6 characters"),
  password_confirmation: z
    .string()
    .min(6, "Password length minimum is 6 characters"),
});
