// transitions.ts
// Оптимизированный скрипт для улучшения производительности переходов между страницами

// Получаем текущий язык из URL
const currentLang = window.location.pathname.split('/')[1] || 'uz';

// Список часто используемых страниц для предварительной загрузки
const criticalPages = [`/${currentLang}`, `/${currentLang}/contacts`];

// Список общих иконок для предварительной загрузки
const commonIcons = [
  'menu', 'x', 'chevron-down', 'chevron-right', 'phone', 'mail', 
  'map-pin', 'calendar', 'clock', 'users', 'book-open'
];

// Флаг для отслеживания, выполнена ли уже предварительная загрузка
let preloadedPages = false;
let preloadedIcons = false;

// Функция для предварительной загрузки критических страниц
function preloadCriticalPages() {
  // Предотвращаем повторную загрузку
  if (preloadedPages) return;
  preloadedPages = true;

  console.log(' Предварительная загрузка критических страниц...');
  
  // Используем fetch с низким приоритетом вместо prefetch
  criticalPages.forEach(page => {
    fetch(page, { priority: 'low', cache: 'force-cache' })
      .catch(() => {/* Игнорируем ошибки */});
  });
}

// Функция для предварительной загрузки общих иконок
function preloadCommonIcons() {
  // Предотвращаем повторную загрузку
  if (preloadedIcons) return;
  preloadedIcons = true;

  console.log(' Предварительная загрузка иконок...');
  
  // Загружаем иконки напрямую, минуя создание DOM-элементов
  commonIcons.forEach(icon => {
    const iconUrl = `/icons/${icon}.svg`;
    fetch(iconUrl, { priority: 'low', cache: 'force-cache' })
      .catch(() => {/* Игнорируем ошибки */});
  });
}

// Инициализация переходов между страницами
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTransitions);
} else {
  initTransitions();
}

// Основная функция инициализации
function initTransitions() {
  // Предварительно загружаем критические страницы и иконки сразу
  setTimeout(() => {
    preloadCriticalPages();
    preloadCommonIcons();
  }, 1000);

  // Обработчик для начала перехода между страницами
  document.addEventListener('astro:before-preparation', event => {
    // Сохраняем время начала перехода
    const navigationStartTime = performance.now();
    
    // Находим основной контент
    const mainContent = document.querySelector('main');
    
    // Добавляем класс для стилизации во время перехода
    document.documentElement.classList.add('is-transitioning');
    
    // Сохраняем время начала перехода в sessionStorage
    sessionStorage.setItem('navigationStartTime', navigationStartTime.toString());
    
    // Отключаем все анимации и переходы для ускорения загрузки
    document.querySelectorAll('*').forEach(element => {
      if (element.style && element.style.transition) {
        element.dataset.originalTransition = element.style.transition;
        element.style.transition = 'none';
      }
      if (element.style && element.style.animation) {
        element.dataset.originalAnimation = element.style.animation;
        element.style.animation = 'none';
      }
    });
  });

  // Обработчик для завершения перехода между страницами
  document.addEventListener('astro:page-load', () => {
    // Получаем время начала перехода из sessionStorage
    const navigationStartTimeStr = sessionStorage.getItem('navigationStartTime');
    const navigationStartTime = navigationStartTimeStr ? parseFloat(navigationStartTimeStr) : performance.now() - 100;
    
    // Удаляем класс перехода
    document.documentElement.classList.remove('is-transitioning');
    
    // Прокручиваем страницу вверх (улучшает воспринимаемую производительность)
    window.scrollTo(0, 0);
    
    // Восстанавливаем анимации и переходы
    setTimeout(() => {
      document.querySelectorAll('*').forEach(element => {
        if (element.dataset.originalTransition) {
          element.style.transition = element.dataset.originalTransition;
          delete element.dataset.originalTransition;
        }
        if (element.dataset.originalAnimation) {
          element.style.animation = element.dataset.originalAnimation;
          delete element.dataset.originalAnimation;
        }
      });
    }, 50);
    
    // Измеряем и выводим время перехода
    const navigationTime = performance.now() - navigationStartTime;
    console.log(`Navigation completed in ${navigationTime.toFixed(2)}ms`);
  });
}

// Экспортируем функции для возможного использования в других модулях
export { preloadCriticalPages, preloadCommonIcons };