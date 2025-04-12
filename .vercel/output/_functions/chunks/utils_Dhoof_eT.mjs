function calculateDaysRemaining(deadline) {
  const today = /* @__PURE__ */ new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}
function parseLocation(location) {
  if (!location) return { city: "", country: "" };
  const parts = location.split(",").map((part) => part.trim());
  return {
    city: parts[0] || "",
    country: parts[1] || "China"
  };
}
function convertYamlToUniversity(yamlData, id, lang) {
  const locationObj = parseLocation(yamlData.location);
  const city = locationObj.city;
  const name = yamlData.name ? yamlData.name[lang] || yamlData.name.en || "" : "";
  let students = "";
  if (yamlData.students) {
    students = typeof yamlData.students === "string" ? yamlData.students : yamlData.students[lang] || yamlData.students.en || "";
  } else if (yamlData.studentsCount) {
    students = `${yamlData.studentsCount}+`;
  }
  let description = "";
  if (yamlData.description) {
    description = typeof yamlData.description === "string" ? yamlData.description : yamlData.description[lang] || yamlData.description.en || "";
  }
  const faculties = Array.isArray(yamlData.faculties) ? yamlData.faculties : yamlData.faculties?.[lang] || yamlData.faculties?.en || [];
  const ranking = yamlData.ranking || yamlData.rating || 0;
  const foundedYear = yamlData.foundedYear || yamlData.established || 0;
  const programs = yamlData.programs || [];
  const annualFee = yamlData.annualFee || 0;
  return {
    id,
    name,
    location: locationObj,
    city,
    description,
    ranking,
    rating: ranking,
    // Ensure both rating and ranking are populated
    foundedYear,
    established: foundedYear,
    studentsCount: yamlData.studentsCount || 0,
    internationalStudents: yamlData.internationalStudents || 0,
    students,
    faculties,
    fields: faculties,
    // Ensure both faculties and fields are populated
    programs,
    hasGrants: yamlData.grants?.available || yamlData.hasGrants || false,
    featured: yamlData.featured || false,
    isTopUniversity: yamlData.featured || false,
    // For compatibility
    logo: yamlData.logo || "/placeholder.svg",
    logoImage: yamlData.logo || "/placeholder.svg",
    // For compatibility
    image: yamlData.image || "/placeholder.svg",
    priceRange: yamlData.priceRange || `${annualFee} - ${annualFee * 2}`,
    price: {
      amount: annualFee,
      currency: "USD"
    },
    tuitionRange: {
      min: annualFee,
      max: annualFee * 2,
      currency: "USD"
    },
    careerOpportunities: yamlData.careerOpportunities || {
      companies: [],
      salaryRanges: []
    },
    costs: yamlData.costs || {
      tuition: [],
      additional: []
    },
    scholarships: yamlData.scholarships || [],
    features: [],
    images: {
      main: yamlData.image || "/placeholder.svg",
      gallery: []
    },
    educationType: yamlData.educationType || [],
    programTypes: yamlData.programTypes || []
  };
}
export {
  calculateDaysRemaining as a,
  convertYamlToUniversity as c
};
