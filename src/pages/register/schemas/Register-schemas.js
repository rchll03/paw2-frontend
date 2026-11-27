import { z } from "zod";

const RegisterSchema = z.object({
  name: z.string().trim().min(3, "Nama Minimal 3 Karakter"),
  email: z.email(),
  password: z.string().min(8, "Nama Minimal 8 Karakter"),
});

export default RegisterSchema;
