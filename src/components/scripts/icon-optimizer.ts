// icon-optimizer.ts
// Скрипт для оптимизации загрузки иконок Lucide

// Функция для оптимизации существующих иконок на странице
function optimizeExistingIcons() {
  // Находим все элементы иконок Lucide на странице
  const iconElements = document.querySelectorAll('svg[data-lucide]');
  
  // Применяем оптимизации к каждой иконке
  iconElements.forEach(icon => {
    // Устанавливаем атрибуты для оптимизации рендеринга
    icon.setAttribute('loading', 'lazy');
    icon.style.contain = 'strict';
    icon.style.willChange = 'transform';
    
    // Добавляем подсказку для браузера о предстоящих изменениях
    icon.style.transform = 'translateZ(0)';
  });
}

// Инициализация оптимизаций
document.addEventListener('astro:page-load', () => {
  // Оптимизируем существующие иконки
  optimizeExistingIcons();
});

// Оптимизируем иконки после каждого перехода
document.addEventListener('astro:after-swap', optimizeExistingIcons);

// Экспортируем функцию для возможного использования в других модулях
export { optimizeExistingIcons };
