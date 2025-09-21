// Константи для варіанту 2
const date = "202408";         // Серпень 2024 у форматі YYYYMM
const time_period = "m";       // Період: m (місяць)

// Створюємо об'єкт URL
const baseUrl = "https://bank.gov.ua/";
const apiPath = "/api/fininc_exp";

const url = new URL(apiPath, baseUrl);

// Додаємо параметри до URL
url.searchParams.append('date', date);
url.searchParams.append('period', time_period);

// Виводимо URL у консоль
console.log(url.toString());