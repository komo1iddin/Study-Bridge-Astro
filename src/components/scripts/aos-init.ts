// aos-init.ts
// Оптимизированная инициализация AOS (Animate On Scroll)

// Объявляем тип для window.AOS
declare global {
  interface Window {
    AOS: any;
  }
}

// Функция для проверки наличия и инициализации AOS
function initializeAOS() {
  // Проверяем, доступен ли AOS
  if (typeof window.AOS === 'undefined') {
    // Если AOS не доступен, загружаем его динамически
    loadAOS();
    return;
  }
  
  // Инициализируем AOS с оптимизированными настройками
  window.AOS.init({
    // Уменьшаем длительность анимации для более быстрых переходов
    duration: 400,
    // Запускаем анимацию только один раз
    once: true,
    // Используем более быстрый тайминг
    easing: 'ease-out',
    // Уменьшаем смещение для более раннего запуска анимации
    offset: 50,
    // Отключаем анимацию при переходах между страницами
    disable: false,
    // Включаем AOS только после полной загрузки страницы
    startEvent: 'DOMContentLoaded'
  });
}

// Функция для динамической загрузки AOS
function loadAOS() {
  // Загружаем CSS
  if (!document.querySelector('link[href*="aos.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/vendor/aos/aos.css';
    document.head.appendChild(link);
  }
  
  // Загружаем JavaScript
  if (!document.querySelector('script[src*="aos.js"]')) {
    const script = document.createElement('script');
    script.src = '/vendor/aos/aos.js';
    script.onload = () => {
      // После загрузки скрипта инициализируем AOS
      initializeAOS();
    };
    document.body.appendChild(script);
  }
}

// Функция для повторной инициализации AOS после переходов между страницами
function refreshAOS() {
  if (typeof window.AOS !== 'undefined') {
    // Обновляем AOS после перехода между страницами
    window.AOS.refresh();
  }
}

// Инициализируем AOS при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeAOS);

// Обновляем AOS после переходов между страницами в Astro
document.addEventListener('astro:page-load', refreshAOS);

// Отключаем анимацию во время переходов между страницами
document.addEventListener('astro:before-preparation', () => {
  if (typeof window.AOS !== 'undefined') {
    // Отключаем анимацию во время перехода
    document.querySelectorAll('[data-aos]').forEach(element => {
      element.removeAttribute('data-aos-animate');
      element.classList.add('aos-animate');
    });
  }
});

// Экспортируем функции для возможного использования в других модулях
export { initializeAOS, refreshAOS };
