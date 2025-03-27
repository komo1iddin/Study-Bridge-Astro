export interface ContactTranslations {
  title: string;
  subtitle: string;
  cta: {
    contactUs: string;
    callUs: string;
    emailUs: string;
    whatsApp: string;
    getConsultation: string;
  };
  form: {
    title: string;
    description: string;
    name: {
      label: string;
      placeholder: string;
    };
    phone: {
      label: string;
      placeholder: string;
    };
    email: {
      label: string;
      placeholder: string;
    };
    message: {
      label: string;
      placeholder: string;
    };
    privacy: {
      text: string;
      link: string;
    };
    submit: string;
  };
  modal: {
    title: string;
    description: string;
  };
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    workHours: string;
  };
} 