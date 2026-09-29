import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.any(),
		updatedDate: z.any().optional(),
		heroImage: z.string().optional(),
	}).passthrough(),
});

export const collections = { blog };
