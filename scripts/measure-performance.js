#!/usr/bin/env node

/**
 * Скрипт для измерения производительности навигации между страницами
 * Использует Puppeteer для автоматизации браузера и сбора метрик
 * 
 * Запуск: node measure-performance.js
 * 
 * Результаты будут выведены в консоль и сохранены в файл performance-results.json
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем текущую директорию в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Конфигурация
const BASE_URL = 'http://localhost:4321'; // URL вашего локального сервера
const PAGES_TO_TEST = [
  '/',
  '/uz/contacts',
  '/uz/about',
  '/uz/services',
  '/uz/blog'
];
const ITERATIONS = 3; // Количество повторений для каждой страницы

// Функция для измерения времени загрузки страницы
async function measurePageLoad(page, url) {
  // Переходим на страницу и ждем загрузки
  const navigationStart = Date.now();
  await page.goto(url, { waitUntil: 'networkidle0' });
  const navigationEnd = Date.now();
  
  // Собираем метрики производительности
  const performanceMetrics = await page.evaluate(() => {
    const perfEntries = performance.getEntriesByType('navigation');
    if (perfEntries.length > 0) {
      const navigationEntry = perfEntries[0];
      return {
        domContentLoaded: navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime,
        load: navigationEntry.loadEventEnd - navigationEntry.startTime,
        firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
        firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
      };
    }
    return null;
  });
  
  // Возвращаем результаты
  return {
    url,
    navigationTime: navigationEnd - navigationStart,
    ...performanceMetrics
  };
}

// Основная функция
async function runPerformanceTest() {
  console.log('🚀 Запуск теста производительности...');
  
  // Запускаем браузер
  const browser = await puppeteer.launch({
    headless: 'new', // Используем новый headless режим
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  // Создаем новую страницу
  const page = await browser.newPage();
  
  // Результаты для всех страниц
  const results = {};
  
  // Тестируем каждую страницу
  for (const pageUrl of PAGES_TO_TEST) {
    const fullUrl = `${BASE_URL}${pageUrl}`;
    console.log(`\n📄 Тестирование страницы: ${fullUrl}`);
    
    const pageResults = [];
    
    // Выполняем несколько итераций для получения более точных результатов
    for (let i = 0; i < ITERATIONS; i++) {
      console.log(`   Итерация ${i + 1}/${ITERATIONS}...`);
      const result = await measurePageLoad(page, fullUrl);
      pageResults.push(result);
      
      // Небольшая пауза между итерациями
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Вычисляем средние значения
    const avgNavigationTime = pageResults.reduce((sum, r) => sum + r.navigationTime, 0) / ITERATIONS;
    const avgDomContentLoaded = pageResults.reduce((sum, r) => sum + r.domContentLoaded, 0) / ITERATIONS;
    const avgLoad = pageResults.reduce((sum, r) => sum + r.load, 0) / ITERATIONS;
    
    // Сохраняем результаты
    results[pageUrl] = {
      averageNavigationTime: avgNavigationTime,
      averageDomContentLoaded: avgDomContentLoaded,
      averageLoadTime: avgLoad,
      iterations: pageResults
    };
    
    // Выводим результаты
    console.log(`   ⏱️ Среднее время навигации: ${avgNavigationTime.toFixed(2)}ms`);
    console.log(`   ⏱️ Среднее время DOMContentLoaded: ${avgDomContentLoaded.toFixed(2)}ms`);
    console.log(`   ⏱️ Среднее время полной загрузки: ${avgLoad.toFixed(2)}ms`);
  }
  
  // Закрываем браузер
  await browser.close();
  
  // Сохраняем результаты в файл
  const resultsPath = path.join(__dirname, '../performance-results.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  
  console.log('\n✅ Тест завершен! Результаты сохранены в файл: performance-results.json');
}

// Запускаем тест
runPerformanceTest().catch(error => {
  console.error('❌ Ошибка при выполнении теста:', error);
  process.exit(1);
});
