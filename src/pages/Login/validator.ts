import { z } from "zod";
import { message } from "../../messages";

export const loginSchema = z.object({
  username: z
    .string({ required_error: message("messages.formRequired") })
    .min(1, message("messages.formRequired")),
  password: z
    .string({ required_error: message("messages.formRequired") })
    .min(1, message("messages.formRequired")),
});
