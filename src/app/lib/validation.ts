import {z} from "zod"

const fullNameRegex = /^[A-Za-z][A-Za-z\s'\-]{1,79}$/; 
export const SERVICES = ["UI/UX", "Branding", "Web Dev", "Mobile App"] as const;


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

    services: z.preprocess(
      (val) => {
        if (val === undefined || val === null || val === false) return [];
        if (typeof val === "string") return [val];
        return val; 
      },
      z.array(z.enum(SERVICES)).min(1, "Select at least one service")
    ),

    budgetUsd: z
    .number({ invalid_type_error: "Budget must be a number" })
    .int("Budget must be an integer")
    .min(100, "Minimum is 100")
    .max(1_000_000, "Maximum is 1,000,000")
    .optional(),
  
    acceptTerms: z
    .boolean({
      required_error: "You must agree to the terms and conditions.",
      invalid_type_error: "You must agree to the terms and conditions.",
    })
    .refine((val) => val === true, {
      message: "You must agree to the terms and conditions.",
    }),
});

export type OnboardInput = z.infer<typeof OnboardSchema>;