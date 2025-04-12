function parseLocation(locationString) {
  if (!locationString) {
    return { city: "", country: "" };
  }
  const parts = locationString.split(",").map((part) => part.trim());
  return {
    city: parts[0] || "",
    country: parts[1] || ""
  };
}
function getDefaultTuitionRange() {
  return {
    min: 0,
    max: 0,
    currency: "USD"
  };
}
function localizeUniversity(university, lang) {
  const name = university.name[lang] || university.name.en || "";
  const students = university.students[lang] || university.students.en || "";
  const fields = university.fields[lang] || university.fields.en || [];
  const shortDescription = university.shortDescription ? university.shortDescription[lang] || university.shortDescription.en || "" : void 0;
  return {
    ...university,
    name,
    students,
    fields,
    shortDescription
  };
}
function localizeUniversities(universities, lang) {
  return universities.map((uni) => localizeUniversity(uni, lang));
}
function extractProgramsByLang(programs, lang) {
  if (!programs) {
    return [];
  }
  if (Array.isArray(programs)) {
    return programs;
  }
  if (typeof programs === "object" && programs !== null) {
    const programsObj = programs;
    const langPrograms = programsObj[lang];
    if (Array.isArray(langPrograms)) {
      return langPrograms;
    }
    const enPrograms = programsObj["en"];
    if (Array.isArray(enPrograms)) {
      return enPrograms;
    }
  }
  return [];
}
function convertEntryToUniversity(entry, lang) {
  if (!entry || !entry.data) {
    throw new Error("Invalid university entry data");
  }
  const data = entry.data;
  const slug = entry.id.replace(/\.(md|yaml)$/, "");
  const location = parseLocation(data.location);
  const isI18n = data.name && typeof data.name === "object" && ("uz" in data.name || "ru" in data.name || "en" in data.name);
  const processedPrograms = extractProgramsByLang(data.programs, lang);
  const faqs = data.faqs || void 0;
  const dorms = data.dorms || void 0;
  const facilities = data.facilities || void 0;
  const scholarships = data.scholarships || void 0;
  const galleryCategories = data.galleryCategories || void 0;
  const careerOpportunities = data.careerOpportunities || void 0;
  const costs = data.costs || void 0;
  const admissionRequirements = data.admissionRequirements || void 0;
  const admissionDeadlines = data.admissionDeadlines || void 0;
  const educationType = data.educationType || void 0;
  const featured = !!data.featured;
  const hasGrants = !!data.hasGrants;
  const established = data.established || data.foundedYear || void 0;
  const ranking = data.ranking || 0;
  if (isI18n) {
    const i18nData = {
      id: slug,
      name: data.name,
      city: location.city,
      rating: data.rating || 0,
      students: data.students || { uz: "", ru: "", en: "" },
      fields: data.fields || { uz: [], ru: [], en: [] },
      priceRange: data.priceRange || "",
      image: data.image || "",
      logoImage: data.logo || "",
      shortDescription: data.description || "",
      isTopUniversity: featured,
      location,
      price: {
        amount: data.annualFee || 0,
        currency: "USD"
      },
      tuitionRange: data.tuitionRange || getDefaultTuitionRange(),
      programs: processedPrograms
    };
    const university = localizeUniversity(i18nData, lang);
    return {
      ...university,
      featured,
      hasGrants,
      established,
      ranking,
      educationType,
      faqs,
      dorms,
      facilities,
      scholarships,
      galleryCategories,
      careerOpportunities,
      costs,
      admissionRequirements,
      admissionDeadlines,
      description: data.description,
      logo: data.logo
    };
  } else {
    return {
      id: slug,
      name: data.name || "",
      city: location.city,
      rating: data.rating || 0,
      students: data.students || "",
      fields: Array.isArray(data.fields) ? data.fields : [],
      priceRange: data.priceRange || "",
      image: data.image || "",
      logoImage: data.logo || "",
      shortDescription: data.description || "",
      isTopUniversity: featured,
      location,
      price: {
        amount: data.annualFee || 0,
        currency: "USD"
      },
      tuitionRange: data.tuitionRange || getDefaultTuitionRange(),
      programs: processedPrograms,
      // Additional fields
      featured,
      hasGrants,
      established,
      ranking,
      educationType,
      faqs,
      dorms,
      facilities,
      scholarships,
      galleryCategories,
      careerOpportunities,
      costs,
      admissionRequirements,
      admissionDeadlines,
      description: data.description,
      logo: data.logo
    };
  }
}
function convertEntriesToUniversities(entries, lang) {
  if (!entries || !Array.isArray(entries)) {
    return [];
  }
  return entries.map((entry) => {
    try {
      return convertEntryToUniversity(entry, lang);
    } catch (error) {
      console.error(`Error converting entry ${entry?.id || "unknown"}:`, error);
      return {
        id: entry?.id || "error",
        name: "Error loading university",
        city: "",
        rating: 0,
        students: "",
        fields: [],
        priceRange: "",
        image: "",
        isTopUniversity: false,
        location: { city: "", country: "" },
        price: { amount: 0, currency: "USD" },
        tuitionRange: { min: 0, max: 0, currency: "USD" },
        programs: []
      };
    }
  });
}
export {
  convertEntriesToUniversities,
  convertEntryToUniversity,
  localizeUniversities,
  localizeUniversity
};
