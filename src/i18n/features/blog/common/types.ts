export interface BlogCommonTranslations {
  /**
   * Blog header translations
   */
  header: {
    title: string;
    subtitle: string;
  };

  /**
   * Search bar translations
   */
  search: {
    placeholder: string;
    resultsCount: string;
    noResults: string;
    clearSearch: string;
  };

  /**
   * Category filter translations
   */
  categories: {
    title: string;
    all: string;
    academic: string;
    studyTips: string;
    career: string;
    studentLife: string;
    technology: string;
  };

  /**
   * Blog card translations
   */
  card: {
    readMore: string;
    minuteRead: string;
  };

  /**
   * Blog list translations
   */
  list: {
    loadMore: string;
    noPostsFound: string;
    recentPosts: string;
    featuredPosts: string;
  };

  /**
   * Article translations
   */
  article: {
    tableOfContents: string;
    relatedPosts: string;
    publishedOn: string;
    updatedOn: string;
    shareArticle: string;
    authorInfo: string;
    content: {
      inDevelopment: {
        title: string;
        description: string;
      };
      share: {
        twitter: string;
        facebook: string;
        linkedin: string;
        copyLink: string;
        linkCopied: string;
      };
    };
  };

  /**
   * Breadcrumb translations
   */
  breadcrumb: {
    home: string;
    blog: string;
  };

  /**
   * Pagination translations
   */
  pagination: {
    page: string;
    of: string;
    noResults: {
      title: string;
      description: string;
    };
  };

  sidebar: {
    title: string;
    subtitle: string;
    shareTitle: string;
    shareDescription: string;
    shareButton: string;
    copyButton: string;
    mobileTocButton: string;
    mobileTocTitle: string;
  };

  featuredPosts: {
    title: string;
    subtitle: string;
  };

  latestPosts: {
    title: string;
    subtitle: string;
    readMore: string;
  };
} 