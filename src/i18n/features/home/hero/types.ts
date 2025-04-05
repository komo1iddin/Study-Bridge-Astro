export interface HeroTranslations {
  stats: {
    universities: string;
    students: string;
    success: string;
    experience: string;
  };
  cards: {
    scholarship: {
      title: string;
      desc: string;
    };
    admission: {
      title: string;
      desc: string;
    };
  };
  badge: {
    enrollment: string;
  };
  title: {
    first: string;
    highlight: string;
    connector?: string;
  };
  description: string;
  buttons: {
    apply: string;
    programs: string;
  };
  image: {
    alt: string;
  };
  tooltip: {
    label: string;
    content: string;
  };
  testimonials?: Array<{
    name: string;
    role: string;
    image: string;
    quote: string;
  }>;
} 