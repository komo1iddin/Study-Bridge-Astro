import type { UniversityPageTranslations } from './types';

export const universityPageRu: UniversityPageTranslations = {
  breadcrumb: {
    home: 'Главная',
    universities: 'Университеты'
  },
  loading: 'Загрузка...',
  filters: {
    title: 'Фильтры',
    reset: 'Сбросить',
    quickFilters: 'Быстрые фильтры',
    featured: 'Только рекомендуемые университеты',
    educationType: {
      title: 'Тип образования',
      placeholder: 'Выберите тип образования',
      all: 'Все типы',
      bachelor: 'Бакалавриат',
      master: 'Магистратура',
      language: 'Языковые курсы',
      program: 'Программа 1+2'
    },
    location: {
      title: 'Расположение',
      placeholder: 'Выберите город',
      all: 'Все города'
    },
    ranking: {
      title: 'Рейтинг университета',
      placeholder: 'Выберите диапазон рейтинга',
      all: 'Все рейтинги',
      top5: 'Топ 5',
      top10: '6-10',
      top20: '11-20',
      other: '21+'
    },
    grants: {
      title: 'Грантовые возможности',
      placeholder: 'Выберите статус грантов',
      all: 'Все',
      available: 'Доступны',
      notAvailable: 'Не доступны'
    }
  },
  card: {
    viewDetails: 'Подробнее',
    founded: 'Основан',
    students: 'Студенты',
    featured: 'Рекомендуемый',
    grantsAvailable: 'Доступны гранты',
    rank: 'Рейтинг №{rank}'
  },
  list: {
    title: 'Университеты',
    featuredUniversities: 'Рекомендуемые университеты',
    showing: 'Показано {current} из {total} университетов',
    noResults: 'Не найдено университетов, соответствующих вашим фильтрам',
    pagination: {
      prev: 'Предыдущая',
      next: 'Следующая'
    }
  },
  infoCard: {
    title: 'Образование в Китае',
    description: 'Китай стал одним из самых популярных образовательных направлений для иностранных студентов, предлагая образование мирового класса по доступным ценам.',
    stats: {
      universities: {
        value: '2,900+ Университетов',
        description: 'По всем провинциям'
      },
      programs: {
        value: '500,000+ Программ',
        description: 'От бакалавриата до докторантуры'
      },
      students: {
        value: '500,000+ Иностранных студентов',
        description: 'Из более чем 200 стран'
      },
      scholarships: {
        value: '30,000+ Стипендий',
        description: 'Финансируемых государством и университетами'
      }
    }
  },
  mobileFilters: {
    title: 'Фильтры',
    close: 'Закрыть',
    open: 'Фильтр'
  }
}; 