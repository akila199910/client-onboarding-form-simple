import {z} from "zod"

const fullNameRegex = /^[A-Za-z][A-Za-z\s'\-]{1,79}$/; 


export const OnboardSchema = z.object({
  fullName: z
    .string({ required_error: "Full name is required" })
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name must be at most 80 characters")
    .regex(fullNameRegex, "Only letters, spaces, apostrophes, and dashes allowed"),
  email: z
    .string({ required_error: "Email is required" })
    .email("Please enter a valid email"),
  companyName: z
    .string({ required_error: "Company name is required" })
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be at most 100 characters"),

    budgetUsd: z
    .number({ invalid_type_error: "Budget must be a number" })
    .int("Budget must be an integer")
    .min(100, "Minimum is 100")
    .max(1_000_000, "Maximum is 1,000,000")
    .optional(),
  
  acceptTerms: z.literal(true, { errorMap: () => ({ message: "You must accept the terms" }) }),
});

export type OnboardInput = z.infer<typeof OnboardSchema>;