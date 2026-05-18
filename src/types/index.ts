import { z } from "zod";

export const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  website: z.string().url(),
});

export type LeadInput = z.infer<typeof LeadSchema>;