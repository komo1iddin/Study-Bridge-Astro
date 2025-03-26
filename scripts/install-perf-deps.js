#!/usr/bin/env node

/**
 * Скрипт для установки зависимостей, необходимых для измерения производительности
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Проверяем, установлен ли puppeteer
try {
  require.resolve('puppeteer');
  console.log('✅ Puppeteer уже установлен');
} catch (error) {
  console.log('📦 Установка puppeteer...');
  
  try {
    execSync('npm install --save-dev puppeteer', { stdio: 'inherit' });
    console.log('✅ Puppeteer успешно установлен');
  } catch (error) {
    console.error('❌ Ошибка при установке puppeteer:', error.message);
    process.exit(1);
  }
}

// Добавляем скрипты в package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');

try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  
  // Добавляем скрипты для измерения производительности
  packageJson.scripts = packageJson.scripts || {};
  
  if (!packageJson.scripts.measure) {
    packageJson.scripts.measure = 'node scripts/measure-performance.js';
    console.log('✅ Добавлен скрипт "npm run measure" для измерения производительности');
  } else {
    console.log('✅ Скрипт "npm run measure" уже существует');
  }
  
  // Сохраняем изменения
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf-8');
  
  console.log('\n🚀 Все готово! Теперь вы можете запустить измерение производительности с помощью:');
  console.log('   npm run measure');
} catch (error) {
  console.error('❌ Ошибка при обновлении package.json:', error.message);
  process.exit(1);
}
