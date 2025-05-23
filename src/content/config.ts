import { defineCollection, z } from "astro:content";

const pricingCollection = defineCollection({
    type: "content",
    schema: z.object({
        id: z.string(),
        name: z.string(),
        price: z.string(),
        description: z.string(),
        isPopular: z.boolean().optional().default(false),
        features: z.array(
            z.object({
                id: z.string(),
                included: z.boolean(),
            })
        ),
        buttonText: z.string(),
    }),
});

const faqCollection = defineCollection({
    type: "content",
    schema: z.object({
        faqs: z.array(
            z.object({
                question: z.string(),
                answer: z.string(),
            })
        ),
    }),
});

export const collections = {
    pricing: pricingCollection,
    faqs: faqCollection,
};
