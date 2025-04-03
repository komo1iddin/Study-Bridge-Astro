import { defineCollection, z } from 'astro:content';

const universitiesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.union([
      z.string(),
      z.object({
        uz: z.string(),
        ru: z.string(),
        en: z.string(),
      }),
    ]),
    location: z.string(),
    rating: z.number().optional(),
    ranking: z.number().optional(),
    students: z.union([
      z.string(),
      z.object({
        uz: z.string().optional(),
        ru: z.string().optional(),
        en: z.string().optional(),
      }).optional(),
    ]).optional(),
    faculties: z.union([
      z.array(z.string()),
      z.object({
        uz: z.array(z.string()).optional(),
        ru: z.array(z.string()).optional(),
        en: z.array(z.string()).optional(),
      }).optional(),
    ]).optional(),
    image: z.string().optional(),
    logo: z.string().optional(),
    foundedYear: z.number().optional(),
    established: z.number().optional(),
    featured: z.boolean().optional(),
  }),
});

const grantsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.object({
      uz: z.string(),
      ru: z.string(),
      en: z.string(),
    }),
    description: z.object({
      uz: z.string(),
      ru: z.string(),
      en: z.string(),
    }),
    type: z.string(),
    coverage: z.object({
      uz: z.array(z.string()),
      ru: z.array(z.string()),
      en: z.array(z.string()),
    }),
    deadline: z.string(),
    requirements: z.object({
      uz: z.array(z.string()),
      ru: z.array(z.string()),
      en: z.array(z.string()),
    }),
    documents: z.object({
      uz: z.array(z.string()),
      ru: z.array(z.string()),
      en: z.array(z.string()),
    }),
    benefits: z.object({
      uz: z.array(z.string()),
      ru: z.array(z.string()),
      en: z.array(z.string()),
    }),
    image: z.string(),
    color: z.string(),
  }),
});

const faqCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    categoryId: z.string(),
    question: z.record(z.string(), z.string()),
    answer: z.record(z.string(), z.string()),
    order: z.number().optional(),
    lastUpdated: z.string().optional(),
    image: z.string().optional(),
    sources: z.array(z.object({
      title: z.string(),
      url: z.string()
    })).optional()
  })
});

const programsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    type: z.string(),
    title: z.object({
      uz: z.string(),
      ru: z.string(),
      en: z.string(),
    }),
    description: z.object({
      uz: z.string(),
      ru: z.string(),
      en: z.string(),
    }),
    duration: z.string(),
    features: z.object({
      uz: z.array(z.string()),
      ru: z.array(z.string()),
      en: z.array(z.string()),
    }),
    studyProcess: z.object({
      uz: z.array(z.object({
        title: z.string(),
        description: z.string(),
        hours: z.string(),
      })),
      ru: z.array(z.object({
        title: z.string(),
        description: z.string(),
        hours: z.string(),
      })),
      en: z.array(z.object({
        title: z.string(),
        description: z.string(),
        hours: z.string(),
      })),
    }),
    careerOpportunities: z.object({
      uz: z.array(z.object({
        position: z.string(),
        salary: z.string(),
        companies: z.array(z.string()),
      })),
      ru: z.array(z.object({
        position: z.string(),
        salary: z.string(),
        companies: z.array(z.string()),
      })),
      en: z.array(z.object({
        position: z.string(),
        salary: z.string(),
        companies: z.array(z.string()),
      })),
    }),
    testimonials: z.object({
      uz: z.array(z.object({
        name: z.string(),
        program: z.string(),
        quote: z.string(),
        image: z.string(),
      })),
      ru: z.array(z.object({
        name: z.string(),
        program: z.string(),
        quote: z.string(),
        image: z.string(),
      })),
      en: z.array(z.object({
        name: z.string(),
        program: z.string(),
        quote: z.string(),
        image: z.string(),
      })),
    }),
    icon: z.string(),
    bgColor: z.string(),
    language: z.string(),
  }),
});

const featuresCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.record(z.string(), z.string()),
    description: z.record(z.string(), z.string()),
    icon: z.string().optional()
  }),
});

const postsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.record(z.string(), z.string()),
    description: z
      .record(z.string(), z.string())
      .optional(),
    content: z
      .record(z.string(), z.string())
      .optional(),
    image: z.string().optional(),
    date: z.string().optional()
  }),
});

const postsMdCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({
      uz: z.string(),
      ru: z.string(),
      en: z.string()
    }),
    publishedDate: z.string(),
    excerpt: z.object({
      uz: z.string(),
      ru: z.string(),
      en: z.string()
    }),
    author: z.string(),
    authorImage: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    content: z.object({
      uz: z.string(),
      ru: z.string(),
      en: z.string()
    })
  }),
});

const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    university: z.string(),
    program: z.string(),
    graduationYear: z.number(),
    image: z.string(),
    rating: z.number(),
    quote: z.object({
      uz: z.string(),
      ru: z.string(),
      en: z.string()
    }),
    featured: z.boolean().optional(),
    position: z.record(z.string(), z.string()).optional()
  }),
});

export const collections = {
  'universities': universitiesCollection,
  'grants': grantsCollection,
  'faq': faqCollection,
  'programs': programsCollection,
  'features': featuresCollection,
  'posts': postsCollection,
  'posts-md': postsMdCollection,
  'testimonials': testimonialsCollection
};
