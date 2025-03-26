export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface Filters {
  locations: FilterOption[];
  programs: FilterOption[];
  tuitionRanges: FilterOption[];
  ratings: FilterOption[];
}

export const filters: Filters = {
  locations: [
    { value: 'beijing', label: 'Пекин', count: 15 },
    { value: 'shanghai', label: 'Шанхай', count: 12 },
    { value: 'hangzhou', label: 'Ханчжоу', count: 8 },
    { value: 'guangzhou', label: 'Гуанчжоу', count: 10 }
  ],
  programs: [
    { value: 'bachelor', label: 'Бакалавриат', count: 30 },
    { value: 'master', label: 'Магистратура', count: 28 },
    { value: 'phd', label: 'Докторантура', count: 15 },
    { value: 'language', label: 'Языковые курсы', count: 25 }
  ],
  tuitionRanges: [
    { value: '0-3000', label: 'До $3,000' },
    { value: '3000-5000', label: '$3,000 - $5,000' },
    { value: '5000-8000', label: '$5,000 - $8,000' },
    { value: '8000+', label: 'Более $8,000' }
  ],
  ratings: [
    { value: '4.5+', label: '4.5 и выше' },
    { value: '4.0-4.5', label: '4.0 - 4.5' },
    { value: '3.5-4.0', label: '3.5 - 4.0' }
  ]
};