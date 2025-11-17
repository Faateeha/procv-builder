import {z} from "zod";

export const personalSchema = z.object({
    fullname: z.string().min(2, "Full name is required"),
    tittle: z.string().optional(),
     email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    location: z.string().optional(),
    summary: z.string().optional(),
});

export type PersonalData = z.infer<typeof personalSchema>;