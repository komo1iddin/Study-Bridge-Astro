// performance-optimizer.ts
// Скрипт для оптимизации производительности сайта

// Функция для измерения производительности
function measurePerformance() {
  // Измеряем время загрузки страницы
  if (performance && performance.timing) {
    const pageLoadTime = performance.now();
    console.log(`Page load time: ${pageLoadTime.toFixed(2)}ms`);
    
    // Сохраняем метрики в localStorage для анализа
    try {
      const metrics = JSON.parse(localStorage.getItem('performance_metrics') || '[]');
      metrics.push({
        url: window.location.pathname,
        timestamp: Date.now(),
        loadTime: pageLoadTime,
        userAgent: navigator.userAgent
      });
      
      // Ограничиваем количество сохраненных метрик
      if (metrics.length > 20) {
        metrics.shift();
      }
      
      localStorage.setItem('performance_metrics', JSON.stringify(metrics));
    } catch (e) {
      // Игнорируем ошибки localStorage
    }
  }
}

// Функция для оптимизации изображений
function optimizeImages() {
  // Находим все изображения на странице
  const images = document.querySelectorAll('img');
  
  // Используем IntersectionObserver для ленивой загрузки
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        
        // Если изображение имеет data-src, загружаем его
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc) {
          img.src = dataSrc;
          img.removeAttribute('data-src');
        }
        
        // Прекращаем наблюдение после загрузки
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '200px 0px', // Предзагрузка за 200px до появления
    threshold: 0.01 // Загружаем при появлении 1% изображения
  });
  
  // Наблюдаем за всеми изображениями
  images.forEach(img => {
    // Пропускаем уже загруженные изображения
    if (!img.getAttribute('data-src')) {
      return;
    }
    
    imageObserver.observe(img);
  });
}

// Функция для оптимизации шрифтов
function optimizeFonts() {
  // Устанавливаем font-display: swap для всех шрифтов
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-display: swap !important;
    }
  `;
  document.head.appendChild(style);
}

// Функция для отключения ненужных анимаций
function disableUnnecessaryAnimations() {
  // Проверяем, предпочитает ли пользователь уменьшенное движение
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduced-motion');
  }
  
  // Отключаем анимации на мобильных устройствах для повышения производительности
  if (window.innerWidth < 768) {
    document.documentElement.classList.add('mobile-optimized');
  }
}

// Инициализация оптимизаций
function initOptimizations() {
  // Измеряем производительность
  measurePerformance();
  
  // Оптимизируем изображения
  optimizeImages();
  
  // Оптимизируем шрифты
  optimizeFonts();
  
  // Отключаем ненужные анимации
  disableUnnecessaryAnimations();
  
  // Выводим сообщение в консоль
  console.log('🚀 Performance optimizations applied');
}

// Запускаем оптимизации после загрузки страницы
document.addEventListener('astro:page-load', initOptimizations);

// Экспортируем функции для возможного использования в других модулях
export { 
  measurePerformance, 
  optimizeImages, 
  optimizeFonts, 
  disableUnnecessaryAnimations 
};