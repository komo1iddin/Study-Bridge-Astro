#!/usr/bin/env node

/**
 * Скрипт для копирования файлов AOS в публичную директорию
 * Это позволит загружать AOS динамически без проблем с путями
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем текущую директорию в ES модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Пути к файлам
const sourceJsPath = path.join(__dirname, '../node_modules/aos/dist/aos.js');
const sourceCssPath = path.join(__dirname, '../node_modules/aos/dist/aos.css');
const targetDir = path.join(__dirname, '../public/vendor/aos');
const targetJsPath = path.join(targetDir, 'aos.js');
const targetCssPath = path.join(targetDir, 'aos.css');

// Создаем директорию, если она не существует
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`✅ Создана директория: ${targetDir}`);
}

// Копируем JavaScript файл
try {
  fs.copyFileSync(sourceJsPath, targetJsPath);
  console.log(`✅ Скопирован файл: ${sourceJsPath} -> ${targetJsPath}`);
} catch (error) {
  console.error(`❌ Ошибка при копировании JavaScript файла: ${error.message}`);
}

// Копируем CSS файл
try {
  fs.copyFileSync(sourceCssPath, targetCssPath);
  console.log(`✅ Скопирован файл: ${sourceCssPath} -> ${targetCssPath}`);
} catch (error) {
  console.error(`❌ Ошибка при копировании CSS файла: ${error.message}`);
}

console.log('\n🚀 Файлы AOS успешно скопированы в публичную директорию!');
console.log('   Теперь они доступны по путям:');
console.log('   - /vendor/aos/aos.js');
console.log('   - /vendor/aos/aos.css');
