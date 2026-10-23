import z from "zod";
import regex from "../constants/regex.js"


const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .regex(regex.emailRegex, "Invalid email format"),

  phone: z
    .string()
    .min(10, "Phone must contain at least 10 digits"),

  password: z
    .string()
    .regex(
      regex.passwordRegex,
      "Password must contain at least 8 characters, uppercase, lowercase, number, and special character"
    ),

  address: z.string().min(1, "Address is required"),

  isActive: z.boolean().default(true),

  createdAt: z.string().default(() => new Date().toISOString())
});

const loginSchema= z.object({
    email:z.string().optional(),
    password:z.string(),
    phone:z.string().optional()
}).refine((data) => Boolean(data.email) || Boolean(data.phone), {
  message: 'Either email or phone is required',
  path: ['email'], // Highlights the error on the email field (optional)
});


export default {registerSchema, loginSchema}