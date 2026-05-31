const geocodingUrl = "https://geocoding-api.open-meteo.com/v1/search";
const reverseGeocodingUrl = "https://geocoding-api.open-meteo.com/v1/reverse";
const reverseFallbackUrl = "https://api.bigdatacloud.net/data/reverse-geocode-client";
const forecastUrl = "https://api.open-meteo.com/v1/forecast";

const messages = {
  ru: {
    city: "Город",
    loading: "Загрузка...",
    getting: "Получаем прогноз",
    updating: "Обновляем прогноз",
    hourly: "По часам",
    daily: "Прогноз на 7 дней",
    charts: "Графики",
    max: "Макс.",
    min: "Мин.",
    now: "Сейчас",
    today: "Сегодня",
    cityNotFound: "Город не найден",
    forecastError: "Не удалось получить прогноз",
    geolocationMissing: "Геолокация недоступна",
    geolocationDenied: "Разрешите доступ к геолокации",
    myLocation: "Моя геолокация",
    feels: "Ощущается",
    feelsNote: "С учетом ветра и влажности",
    humidity: "Влажность",
    humidityAvg: "Средняя за сутки",
    wind: "Ветер",
    gusts: "Порывы до",
    pressure: "Давление",
    pressureAvg: "Среднее за сутки",
    temperature: "Температура",
    clouds: "Облачность",
    rain: "Дождь",
    uv: "UV индекс",
    uvNote: "Максимум сегодня",
    precipitation: "Осадки",
    chance: "Шанс до",
    visibility: "Видимость",
    visibilityNote: "Минимум за 24 часа",
    sun: "Солнце",
    sunrise: "Восход",
    sunset: "Закат",
    windShort: "Ветер",
    rainShort: "Осадки",
    uvShort: "UV",
    details: "Подробнее",
    tempRange: "Диапазон",
    maxWind: "Ветер до",
    gustsShort: "Порывы",
    low: "Низкий",
    normal: "Норма",
    high: "Высокий",
    comfortDry: "Сухо",
    comfortNormal: "Комфортно",
    comfortHumid: "Влажно",
    weak: "Слабый",
    moderate: "Умеренный",
    strong: "Сильный",
    good: "Хорошая",
    reduced: "Сниженная",
    poor: "Плохая",
    dayLength: "Длина дня",
    minToday: "Мин.",
    maxToday: "Макс.",
    avgToday: "Среднее",
    nextPeak: "Пик в ближайшие часы",
    time: "Время",
    syncFavorites: "Синхронизировать",
    syncUnavailable: "Откройте Mini App внутри Telegram",
    saveCity: "Сохранить город",
    savedCity: "Город сохранён",
    favorites: "Избранное",
    favoritesEmpty: "Пока нет избранных городов",
    delete: "Удалить",
    weatherAlert: "Погодное предупреждение",
    noAlerts: "Серьёзных рисков не видно",
    alertUv: "Высокий UV: лучше использовать солнцезащиту в середине дня.",
    alertRain: "Осадки вероятны: возьмите зонт или дождевик.",
    alertWind: "Сильные порывы ветра: будьте осторожны на открытых участках.",
    alertFog: "Возможен туман: видимость может быть снижена.",
    alertHeat: "Жаркая погода: пейте больше воды и избегайте перегрева.",
    alertCold: "Очень холодно: лучше одеться теплее.",
    units: {
      speed: "км/ч",
      pressure: "гПа",
      precip: "мм",
      distance: "км",
      max: "макс.",
    },
  },
  kk: {
    city: "Қала",
    loading: "Жүктелуде...",
    getting: "Болжам алынуда",
    updating: "Болжам жаңартылуда",
    hourly: "Сағат бойынша",
    daily: "7 күндік болжам",
    charts: "Графиктер",
    max: "Макс.",
    min: "Мин.",
    now: "Қазір",
    today: "Бүгін",
    cityNotFound: "Қала табылмады",
    forecastError: "Болжам алынбады",
    geolocationMissing: "Геолокация қолжетімсіз",
    geolocationDenied: "Геолокацияға рұқсат беріңіз",
    myLocation: "Менің геолокациям",
    feels: "Сезіледі",
    feelsNote: "Жел мен ылғалдылық ескерілген",
    humidity: "Ылғалдылық",
    humidityAvg: "Тәуліктік орташа",
    wind: "Жел",
    gusts: "Екпіні",
    pressure: "Қысым",
    pressureAvg: "Тәуліктік орташа",
    temperature: "Температура",
    clouds: "Бұлттылық",
    rain: "Жаңбыр",
    uv: "UV индекс",
    uvNote: "Бүгінгі максимум",
    precipitation: "Жауын-шашын",
    chance: "Ықтималдығы",
    visibility: "Көріну",
    visibilityNote: "24 сағаттағы минимум",
    sun: "Күн",
    sunrise: "Күн шығуы",
    sunset: "Күн батуы",
    windShort: "Жел",
    rainShort: "Жауын",
    uvShort: "UV",
    details: "Толығырақ",
    tempRange: "Аралық",
    maxWind: "Жел дейін",
    gustsShort: "Екпіні",
    low: "Төмен",
    normal: "Қалыпты",
    high: "Жоғары",
    comfortDry: "Құрғақ",
    comfortNormal: "Жайлы",
    comfortHumid: "Ылғалды",
    weak: "Әлсіз",
    moderate: "Орташа",
    strong: "Қатты",
    good: "Жақсы",
    reduced: "Төмендеген",
    poor: "Нашар",
    dayLength: "Күн ұзақтығы",
    minToday: "Мин.",
    maxToday: "Макс.",
    avgToday: "Орташа",
    nextPeak: "Жақын сағаттардағы максимум",
    time: "Уақыт",
    syncFavorites: "Синхрондау",
    syncUnavailable: "Mini App қолданбасын Telegram ішінде ашыңыз",
    saveCity: "Қаланы сақтау",
    savedCity: "Қала сақталды",
    favorites: "Таңдаулы",
    favoritesEmpty: "Таңдаулы қалалар жоқ",
    delete: "Жою",
    weatherAlert: "Ауа райы ескертуі",
    noAlerts: "Маңызды қауіп байқалмайды",
    alertUv: "UV жоғары: күн ортасында күннен қорғаныс қолданыңыз.",
    alertRain: "Жауын-шашын ықтимал: қолшатыр немесе жаңбырлық алыңыз.",
    alertWind: "Жел екпіні қатты: ашық жерде абай болыңыз.",
    alertFog: "Тұман болуы мүмкін: көріну төмендеуі ықтимал.",
    alertHeat: "Күн ыстық: көбірек су ішіп, қызып кетуден сақтаныңыз.",
    alertCold: "Өте суық: жылырақ киініңіз.",
    units: {
      speed: "км/сағ",
      pressure: "гПа",
      precip: "мм",
      distance: "км",
      max: "макс.",
    },
  },
  en: {
    city: "City",
    loading: "Loading...",
    getting: "Getting forecast",
    updating: "Updating forecast",
    hourly: "Hourly",
    daily: "7-day forecast",
    charts: "Charts",
    max: "Max",
    min: "Min",
    now: "Now",
    today: "Today",
    cityNotFound: "City not found",
    forecastError: "Could not get forecast",
    geolocationMissing: "Geolocation is unavailable",
    geolocationDenied: "Allow geolocation access",
    myLocation: "My location",
    feels: "Feels like",
    feelsNote: "With wind and humidity",
    humidity: "Humidity",
    humidityAvg: "Daily average",
    wind: "Wind",
    gusts: "Gusts up to",
    pressure: "Pressure",
    pressureAvg: "Daily average",
    temperature: "Temperature",
    clouds: "Cloud cover",
    rain: "Rain",
    uv: "UV index",
    uvNote: "Today maximum",
    precipitation: "Precipitation",
    chance: "Chance up to",
    visibility: "Visibility",
    visibilityNote: "Minimum for 24 hours",
    sun: "Sun",
    sunrise: "Sunrise",
    sunset: "Sunset",
    windShort: "Wind",
    rainShort: "Rain",
    uvShort: "UV",
    details: "Details",
    tempRange: "Range",
    maxWind: "Wind up to",
    gustsShort: "Gusts",
    low: "Low",
    normal: "Normal",
    high: "High",
    comfortDry: "Dry",
    comfortNormal: "Comfortable",
    comfortHumid: "Humid",
    weak: "Light",
    moderate: "Moderate",
    strong: "Strong",
    good: "Good",
    reduced: "Reduced",
    poor: "Poor",
    dayLength: "Day length",
    minToday: "Min",
    maxToday: "Max",
    avgToday: "Average",
    nextPeak: "Next-hours peak",
    time: "Time",
    syncFavorites: "Sync",
    syncUnavailable: "Open Mini App inside Telegram",
    saveCity: "Save city",
    savedCity: "City saved",
    favorites: "Favorites",
    favoritesEmpty: "No favorite cities yet",
    delete: "Delete",
    weatherAlert: "Weather alert",
    noAlerts: "No major risks visible",
    alertUv: "High UV: use sun protection around midday.",
    alertRain: "Rain is likely: take an umbrella or rain jacket.",
    alertWind: "Strong gusts: be careful in open areas.",
    alertFog: "Fog is possible: visibility may be reduced.",
    alertHeat: "Hot weather: drink more water and avoid overheating.",
    alertCold: "Very cold: dress warmer.",
    units: {
      speed: "km/h",
      pressure: "hPa",
      precip: "mm",
      distance: "km",
      max: "max",
    },
  },
};

const codes = {
  0: { ru: ["Ясно", "☀️"], kk: ["Ашық", "☀️"], en: ["Clear", "☀️"] },
  1: { ru: ["Преимущественно ясно", "🌤"], kk: ["Көбіне ашық", "🌤"], en: ["Mostly clear", "🌤"] },
  2: { ru: ["Переменная облачность", "⛅"], kk: ["Ауыспалы бұлтты", "⛅"], en: ["Partly cloudy", "⛅"] },
  3: { ru: ["Пасмурно", "☁️"], kk: ["Бұлтты", "☁️"], en: ["Overcast", "☁️"] },
  45: { ru: ["Туман", "🌫"], kk: ["Тұман", "🌫"], en: ["Fog", "🌫"] },
  48: { ru: ["Изморозь", "🌫"], kk: ["Қыраулы тұман", "🌫"], en: ["Rime fog", "🌫"] },
  51: { ru: ["Легкая морось", "🌦"], kk: ["Әлсіз сіркіреме", "🌦"], en: ["Light drizzle", "🌦"] },
  53: { ru: ["Морось", "🌦"], kk: ["Сіркіреме", "🌦"], en: ["Drizzle", "🌦"] },
  55: { ru: ["Сильная морось", "🌧"], kk: ["Қатты сіркіреме", "🌧"], en: ["Dense drizzle", "🌧"] },
  61: { ru: ["Небольшой дождь", "🌧"], kk: ["Әлсіз жаңбыр", "🌧"], en: ["Slight rain", "🌧"] },
  63: { ru: ["Дождь", "🌧"], kk: ["Жаңбыр", "🌧"], en: ["Rain", "🌧"] },
  65: { ru: ["Сильный дождь", "🌧"], kk: ["Қатты жаңбыр", "🌧"], en: ["Heavy rain", "🌧"] },
  71: { ru: ["Небольшой снег", "🌨"], kk: ["Әлсіз қар", "🌨"], en: ["Slight snow", "🌨"] },
  73: { ru: ["Снег", "🌨"], kk: ["Қар", "🌨"], en: ["Snow", "🌨"] },
  75: { ru: ["Сильный снег", "❄️"], kk: ["Қатты қар", "❄️"], en: ["Heavy snow", "❄️"] },
  80: { ru: ["Ливни", "🌦"], kk: ["Нөсер", "🌦"], en: ["Rain showers", "🌦"] },
  81: { ru: ["Сильные ливни", "🌧"], kk: ["Қатты нөсер", "🌧"], en: ["Heavy rain showers", "🌧"] },
  82: { ru: ["Очень сильные ливни", "⛈"], kk: ["Өте қатты нөсер", "⛈"], en: ["Violent rain showers", "⛈"] },
  95: { ru: ["Гроза", "⛈"], kk: ["Найзағай", "⛈"], en: ["Thunderstorm", "⛈"] },
  96: { ru: ["Гроза с градом", "⛈"], kk: ["Бұршақты найзағай", "⛈"], en: ["Thunderstorm with hail", "⛈"] },
  99: { ru: ["Сильная гроза с градом", "⛈"], kk: ["Қатты бұршақты найзағай", "⛈"], en: ["Heavy thunderstorm with hail", "⛈"] },
};

const telegramLang = window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code || "";
const initialLang = telegramLang.startsWith("kk") || telegramLang.startsWith("kz")
  ? "kk"
  : telegramLang.startsWith("en")
    ? "en"
    : localStorage.getItem("weatherLang") || "ru";

function readStoredFavorites() {
  try {
    return JSON.parse(localStorage.getItem("weatherFavorites") || "[]");
  } catch {
    return [];
  }
}

function readStoredLocation() {
  try {
    const location = JSON.parse(localStorage.getItem("weatherDefaultLocation") || "null");
    if (!location?.name || location.latitude === undefined || location.longitude === undefined) return null;
    return {
      name: location.name,
      latitude: Number(location.latitude),
      longitude: Number(location.longitude),
      country: location.country || "",
      timezone: location.timezone || "",
    };
  } catch {
    return null;
  }
}

function readCachedForecast(location) {
  try {
    const cache = JSON.parse(localStorage.getItem("weatherForecastCache") || "{}");
    const item = cache[favoriteKey(location)];
    if (!item?.data) return null;
    return item;
  } catch {
    return null;
  }
}

function writeCachedForecast(location, data) {
  try {
    const cache = JSON.parse(localStorage.getItem("weatherForecastCache") || "{}");
    cache[favoriteKey(location)] = { data, savedAt: Date.now() };
    localStorage.setItem("weatherForecastCache", JSON.stringify(cache));
  } catch {
    // Storage can be unavailable in some embedded browser modes.
  }
}

async function fetchJson(url, timeoutMs = 10000) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(msg("forecastError"));
    return await response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

function decodeSyncPayload() {
  const encoded = new URLSearchParams(window.location.search).get("sync");
  if (!encoded) return null;
  try {
    const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(encoded.length / 4) * 4, "=");
    const json = decodeURIComponent(
      Array.from(atob(base64), (char) => `%${char.charCodeAt(0).toString(16).padStart(2, "0")}`).join(""),
    );
    return JSON.parse(json);
  } catch {
    return null;
  }
}

function favoriteKey(location) {
  return `${Number(location.latitude).toFixed(4)}:${Number(location.longitude).toFixed(4)}`;
}

function favoriteIndex(location) {
  if (!location) return -1;
  const key = favoriteKey(location);
  return state.favorites.findIndex((item) => favoriteKey(item) === key);
}

function mergeFavorites(...groups) {
  const merged = new Map();
  groups.flat().forEach((item) => {
    if (!item?.name || item.latitude === undefined || item.longitude === undefined) return;
    merged.set(favoriteKey(item), {
      id: item.id,
      name: item.name,
      latitude: Number(item.latitude),
      longitude: Number(item.longitude),
      country: item.country || "",
      timezone: item.timezone || "",
    });
  });
  return Array.from(merged.values()).slice(0, 8);
}

const syncPayload = decodeSyncPayload();

const state = {
  lang: ["ru", "kk", "en"].includes(syncPayload?.lang) ? syncPayload.lang : ["ru", "kk", "en"].includes(initialLang) ? initialLang : "ru",
  defaultLocation: readStoredLocation(),
  location: readStoredLocation() || { name: "Almaty", latitude: 43.25, longitude: 76.95, country: "Kazakhstan" },
  data: null,
  favorites: mergeFavorites(syncPayload?.favorites || [], readStoredFavorites()),
};
localStorage.setItem("weatherFavorites", JSON.stringify(state.favorites));

const $ = (selector) => document.querySelector(selector);
const round = (value) => Math.round(Number(value));
const msg = (key) => messages[state.lang][key];
const unit = (key) => messages[state.lang].units[key];
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const weatherCanvas = {
  canvas: $("#weatherCanvas"),
  ctx: null,
  mode: "clear",
  width: 0,
  height: 0,
  dpr: 1,
  particles: [],
  clouds: [],
  flashes: [],
  frame: null,
  last: 0,
};

function describe(code) {
  return codes[code]?.[state.lang] || codes[code]?.ru || ["Unknown", "🌡"];
}

function iconType(code) {
  if ([0, 1].includes(code)) return "clear";
  if ([2].includes(code)) return "partly";
  if ([3, 45, 48].includes(code)) return "cloud";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "storm";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rain";
  return "clear";
}

function weatherIcon(type, compact = false) {
  const cls = compact ? "weather-svg compact" : "weather-svg";
  const sun = `
    <circle class="sun" cx="32" cy="32" r="13" />
    <path class="sun-ray" d="M32 6v7M32 51v7M6 32h7M51 32h7M13.6 13.6l5 5M45.4 45.4l5 5M50.4 13.6l-5 5M18.6 45.4l-5 5" />
  `;
  const cloud = `
    <path class="cloud-shade" d="M19 45h27a12 12 0 0 0 1.3-23.9A17 17 0 0 0 15.5 27.5 9 9 0 0 0 19 45Z" />
    <path class="cloud" d="M17 42h29a10 10 0 0 0 .7-20A16 16 0 0 0 16.5 28 7.5 7.5 0 0 0 17 42Z" />
  `;
  const rain = `<path class="rain" d="M22 50l-4 8M34 50l-4 8M46 50l-4 8" />`;
  const snow = `
    <path class="snow" d="M21 52l8 8M29 52l-8 8M25 50v12" />
    <path class="snow" d="M41 52l8 8M49 52l-8 8M45 50v12" />
  `;
  const bolt = `<path class="bolt" d="M35 42 27 60l14-13h-8l6-13-16 18h9Z" />`;

  const body = {
    clear: sun,
    partly: `<g transform="translate(-6 -7) scale(.78)">${sun}</g><g transform="translate(7 10)">${cloud}</g>`,
    cloud,
    rain: `${cloud}${rain}`,
    snow: `${cloud}${snow}`,
    storm: `${cloud}${bolt}`,
  }[type] || sun;

  return `<svg class="${cls}" viewBox="0 0 64 64" aria-hidden="true">${body}</svg>`;
}

function uiIcon(type) {
  const icons = {
    thermo: `<path d="M22 36.5V13a6 6 0 0 1 12 0v23.5a11 11 0 1 1-12 0Z" /><path d="M28 17v25" /><path d="M24 46a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />`,
    humidity: `<path d="M32 8S18 25 18 38a14 14 0 0 0 28 0C46 25 32 8 32 8Z" /><path d="M25 39a7 7 0 0 0 11 6" />`,
    wind: `<path d="M10 24h30a7 7 0 1 0-7-7" /><path d="M10 34h38a6 6 0 1 1-6 6" /><path d="M10 44h18" />`,
    pressure: `<circle cx="32" cy="34" r="18" /><path d="M32 34l10-10" /><path d="M20 46h24" /><path d="M18 34h4M42 34h4M32 20v4" />`,
    uv: `<circle cx="32" cy="32" r="10" /><path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />`,
    rain: `<path d="M20 38h26a10 10 0 0 0 1-20 15 15 0 0 0-28 5 8 8 0 0 0 1 15Z" /><path d="M24 46l-4 8M36 46l-4 8M48 46l-4 8" />`,
    visibility: `<path d="M8 32s9-14 24-14 24 14 24 14-9 14-24 14S8 32 8 32Z" /><circle cx="32" cy="32" r="7" />`,
    sun: `<circle cx="32" cy="32" r="10" /><path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />`,
    chance: `<path d="M20 38h26a10 10 0 0 0 1-20 15 15 0 0 0-28 5 8 8 0 0 0 1 15Z" /><path d="M22 52l20-20" /><circle cx="24" cy="34" r="3" /><circle cx="42" cy="50" r="3" />`,
    gust: `<path d="M9 24h34a7 7 0 1 0-7-7" /><path d="M14 36h36a5 5 0 1 1-5 5" /><path d="M10 48h18" /><path d="M48 24l6 4-6 4" />`,
    sunrise: `<path d="M12 44h40" /><path d="M22 44a10 10 0 0 1 20 0" /><path d="M32 12v18" /><path d="M24 20l8-8 8 8" />`,
    sunset: `<path d="M12 44h40" /><path d="M22 44a10 10 0 0 1 20 0" /><path d="M32 12v18" /><path d="M24 22l8 8 8-8" />`,
  };
  return `<svg class="ui-svg" viewBox="0 0 64 64" aria-hidden="true">${icons[type] || icons.sun}</svg>`;
}

function detailItem(icon, label, value) {
  return `
    <div>
      <span class="detail-icon">${uiIcon(icon)}</span>
      <span class="detail-text">
        <span>${label}</span>
        <strong>${value}</strong>
      </span>
    </div>
  `;
}

function themeForCode(code) {
  if ([0, 1].includes(code)) return "theme-clear";
  if ([2, 3, 45, 48].includes(code)) return "theme-cloudy";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "theme-snow";
  if ([95, 96, 99].includes(code)) return "theme-storm";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "theme-rain";
  return "theme-clear";
}

function applyTheme(code, isDay = true) {
  document.body.classList.remove("theme-clear", "theme-cloudy", "theme-rain", "theme-snow", "theme-storm", "theme-night");
  const theme = themeForCode(code);
  document.body.classList.add(theme);
  document.body.classList.toggle("theme-night", !isDay);
  setWeatherAnimation(theme.replace("theme-", ""));
}

function resizeWeatherCanvas() {
  const canvas = weatherCanvas.canvas;
  if (!canvas) return;
  weatherCanvas.dpr = Math.min(window.devicePixelRatio || 1, 2);
  weatherCanvas.width = window.innerWidth;
  weatherCanvas.height = window.innerHeight;
  canvas.width = Math.floor(weatherCanvas.width * weatherCanvas.dpr);
  canvas.height = Math.floor(weatherCanvas.height * weatherCanvas.dpr);
  canvas.style.width = `${weatherCanvas.width}px`;
  canvas.style.height = `${weatherCanvas.height}px`;
  weatherCanvas.ctx = canvas.getContext("2d");
  weatherCanvas.ctx.setTransform(weatherCanvas.dpr, 0, 0, weatherCanvas.dpr, 0, 0);
  seedWeatherAnimation();
}

function random(min, max) {
  return min + Math.random() * (max - min);
}

function seedWeatherAnimation() {
  const { mode, width, height } = weatherCanvas;
  const isSmall = width < 460;
  const count = {
    clear: isSmall ? 18 : 28,
    cloudy: isSmall ? 7 : 10,
    rain: isSmall ? 70 : 110,
    snow: isSmall ? 42 : 70,
    storm: isSmall ? 55 : 85,
  }[mode] || 20;

  weatherCanvas.particles = Array.from({ length: count }, () => createParticle(mode, width, height));
  weatherCanvas.clouds = Array.from({ length: mode === "cloudy" ? count : 0 }, () => ({
    x: random(-width * 0.2, width),
    y: random(40, height * 0.55),
    r: random(52, 130),
    speed: random(3, 12),
    alpha: random(0.05, 0.13),
  }));
}

function createParticle(mode, width, height) {
  if (mode === "rain" || mode === "storm") {
    return {
      x: random(-width * 0.2, width * 1.2),
      y: random(-height, height),
      length: random(12, mode === "storm" ? 34 : 28),
      speed: random(mode === "storm" ? 520 : 430, mode === "storm" ? 760 : 620),
      drift: random(-150, -80),
      alpha: random(0.22, 0.56),
      splash: 0,
    };
  }
  if (mode === "snow") {
    return {
      x: random(0, width),
      y: random(-height, height),
      size: random(1.4, 4.4),
      speed: random(24, 70),
      drift: random(-18, 18),
      spin: random(0, Math.PI * 2),
      alpha: random(0.35, 0.86),
    };
  }
  return {
    x: random(0, width),
    y: random(0, height),
    size: random(1.2, 3.6),
    speed: random(4, 14),
    alpha: random(0.08, 0.24),
    phase: random(0, Math.PI * 2),
  };
}

function setWeatherAnimation(mode) {
  const normalized = mode === "storm" ? "storm" : mode === "rain" ? "rain" : mode === "snow" ? "snow" : mode === "cloudy" ? "cloudy" : "clear";
  window.dispatchEvent(new CustomEvent("weather-mode-change", { detail: { mode: normalized } }));
  window.weather3D?.setMode?.(normalized);
  if (weatherCanvas.mode === normalized && weatherCanvas.frame) return;
  weatherCanvas.mode = normalized;
  seedWeatherAnimation();
  startWeatherAnimation();
}

function startWeatherAnimation() {
  if (!weatherCanvas.canvas || !weatherCanvas.ctx || motionQuery.matches) {
    stopWeatherAnimation();
    return;
  }
  if (weatherCanvas.frame) return;
  weatherCanvas.last = performance.now();
  weatherCanvas.frame = requestAnimationFrame(drawWeatherFrame);
}

function stopWeatherAnimation() {
  if (weatherCanvas.frame) cancelAnimationFrame(weatherCanvas.frame);
  weatherCanvas.frame = null;
  if (weatherCanvas.ctx) weatherCanvas.ctx.clearRect(0, 0, weatherCanvas.width, weatherCanvas.height);
}

function drawWeatherFrame(now) {
  const dt = Math.min(0.033, (now - weatherCanvas.last) / 1000 || 0.016);
  weatherCanvas.last = now;
  const ctx = weatherCanvas.ctx;
  const { width, height, mode } = weatherCanvas;
  ctx.clearRect(0, 0, width, height);

  if (mode === "cloudy") drawClouds(ctx, dt);
  if (mode === "rain" || mode === "storm") drawRain(ctx, dt, mode);
  if (mode === "snow") drawSnow(ctx, dt);
  if (mode === "clear") drawClear(ctx, dt);
  if (mode === "storm") drawStorm(ctx, dt);

  weatherCanvas.frame = requestAnimationFrame(drawWeatherFrame);
}

function drawClouds(ctx, dt) {
  const { width, height } = weatherCanvas;
  weatherCanvas.clouds.forEach((cloud) => {
    cloud.x += cloud.speed * dt;
    if (cloud.x - cloud.r > width) {
      cloud.x = -cloud.r * 2;
      cloud.y = random(40, height * 0.55);
    }
    const gradient = ctx.createRadialGradient(cloud.x, cloud.y, 0, cloud.x, cloud.y, cloud.r);
    gradient.addColorStop(0, `rgba(255,255,255,${cloud.alpha})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cloud.x, cloud.y, cloud.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawRain(ctx, dt, mode) {
  const { width, height } = weatherCanvas;
  ctx.lineCap = "round";
  weatherCanvas.particles.forEach((drop) => {
    drop.x += drop.drift * dt;
    drop.y += drop.speed * dt;
    const impactY = height * 0.56 + Math.sin(drop.x * 0.014) * 26;
    if (drop.y > impactY && drop.y < impactY + drop.speed * dt + 16) {
      drop.splash = 1;
    }
    if (drop.y > height + 60 || drop.x < -80) {
      Object.assign(drop, createParticle(mode, width, height), { y: random(-120, -20) });
    }
    const gradient = ctx.createLinearGradient(drop.x, drop.y, drop.x + drop.drift * 0.04, drop.y + drop.length);
    gradient.addColorStop(0, "rgba(205,239,255,0)");
    gradient.addColorStop(0.42, `rgba(218,247,255,${drop.alpha})`);
    gradient.addColorStop(1, "rgba(120,205,255,0)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = mode === "storm" ? 2.1 : 1.7;
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x + drop.drift * 0.035, drop.y + drop.length);
    ctx.stroke();

    if (drop.splash > 0) {
      ctx.strokeStyle = `rgba(220,246,255,${0.2 * drop.splash})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(drop.x - 8 * drop.splash, impactY);
      ctx.lineTo(drop.x + 8 * drop.splash, impactY);
      ctx.stroke();
      drop.splash -= dt * 4;
    }
  });
}

function drawSnow(ctx, dt) {
  const { width, height } = weatherCanvas;
  weatherCanvas.particles.forEach((flake) => {
    flake.spin += dt;
    flake.x += (flake.drift + Math.sin(flake.spin) * 10) * dt;
    flake.y += flake.speed * dt;
    if (flake.y > height + 20) {
      Object.assign(flake, createParticle("snow", width, height), { y: -20 });
    }
    if (flake.x < -20) flake.x = width + 20;
    if (flake.x > width + 20) flake.x = -20;
    const gradient = ctx.createRadialGradient(flake.x, flake.y, 0, flake.x, flake.y, flake.size * 3.2);
    gradient.addColorStop(0, `rgba(255,255,255,${flake.alpha})`);
    gradient.addColorStop(0.35, `rgba(255,255,255,${flake.alpha * 0.42})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.size * 3.2, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawClear(ctx, dt) {
  const { width, height } = weatherCanvas;
  const night = document.body.classList.contains("theme-night");
  weatherCanvas.particles.forEach((spark) => {
    spark.phase += dt * spark.speed;
    const alpha = spark.alpha * (0.55 + Math.sin(spark.phase) * 0.45);
    const color = night ? "220,236,255" : "255,245,198";
    const radius = night ? spark.size * 1.5 : spark.size;
    ctx.fillStyle = `rgba(${color},${alpha})`;
    ctx.beginPath();
    ctx.arc(spark.x, spark.y, radius, 0, Math.PI * 2);
    ctx.fill();
    spark.y += night ? Math.sin(spark.phase) * dt * 1.5 : -dt * spark.speed;
    if (spark.y < -10) {
      spark.y = height + 10;
      spark.x = random(0, width);
    }
  });
}

function drawStorm(ctx, dt) {
  const { width, height } = weatherCanvas;
  if (Math.random() < 0.008) {
    weatherCanvas.flashes.push({ alpha: random(0.12, 0.28), life: random(0.08, 0.18) });
  }
  weatherCanvas.flashes = weatherCanvas.flashes.filter((flash) => {
    ctx.fillStyle = `rgba(255,255,255,${flash.alpha})`;
    ctx.fillRect(0, 0, width, height);
    flash.life -= dt;
    flash.alpha *= 0.78;
    return flash.life > 0;
  });
}

function locale() {
  return state.lang === "kk" ? "kk-KZ" : state.lang === "en" ? "en-US" : "ru-RU";
}

function hourLabel(iso) {
  return new Date(iso).toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" });
}

function dayLabel(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString(locale(), { weekday: "short" });
}

function formatHour(iso) {
  return new Date(iso).toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" });
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function minMax(values) {
  return {
    min: Math.min(...values.map(Number)),
    max: Math.max(...values.map(Number)),
  };
}

function hourPeak(hourly, key, count = 24) {
  const values = hourly[key].slice(0, count).map(Number);
  let index = 0;
  values.forEach((value, currentIndex) => {
    if (value > values[index]) index = currentIndex;
  });
  return { value: values[index], time: hourly.time[index] };
}

function pressureStatus(value) {
  if (value < 1005) return msg("low");
  if (value > 1025) return msg("high");
  return msg("normal");
}

function humidityStatus(value) {
  if (value < 35) return msg("comfortDry");
  if (value > 70) return msg("comfortHumid");
  return msg("comfortNormal");
}

function windStatus(value) {
  if (value < 12) return msg("weak");
  if (value < 30) return msg("moderate");
  return msg("strong");
}

function uvStatus(value) {
  if (value < 3) return msg("low");
  if (value < 6) return msg("moderate");
  if (value < 8) return msg("high");
  return "Very high";
}

function visibilityStatus(valueKm) {
  if (valueKm >= 10) return msg("good");
  if (valueKm >= 4) return msg("reduced");
  return msg("poor");
}

function dayLength(sunrise, sunset) {
  const start = new Date(sunrise);
  const end = new Date(sunset);
  const minutes = Math.max(0, Math.round((end - start) / 60000));
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return `${hours}h ${String(rest).padStart(2, "0")}m`;
}

function applyStaticText() {
  document.documentElement.lang = state.lang;
  $("#cityInput").placeholder = msg("city");
  $("#locationName").textContent = state.data ? $("#locationName").textContent : msg("loading");
  $("#condition").textContent = state.data ? $("#condition").textContent : msg("getting");
  $("#hourlyTitle").textContent = msg("hourly");
  $("#dailyTitle").textContent = msg("daily");
  $("#chartsTitle").textContent = msg("charts");
  $("#tempChartTitle").textContent = msg("temperature");
  $("#rainChartTitle").textContent = msg("precipitation");
  $("#saveCityButton").title = msg("saveCity");
  $("#favoritesMenuButton").title = msg("favorites");
  $("#favoritesTitle").textContent = msg("favorites");
  $("#syncFavoritesButton").textContent = msg("syncFavorites");
  updateSaveButtonState();
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  renderFavoritesMenu();
}

function normalizeSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[.,]/g, " ")
    .replace(/\b(город|г|city|town|қала)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function searchVariants(value) {
  const normalized = normalizeSearchText(value);
  const variants = new Set([value.trim(), normalized]);
  if (normalized.endsWith("а")) variants.add(normalized.slice(0, -1) + "ы");
  if (normalized.endsWith("ы")) variants.add(normalized.slice(0, -1) + "а");
  if (normalized.endsWith("ск")) variants.add(normalized.slice(0, -2));
  return Array.from(variants).filter(Boolean);
}

function similarityDistance(left, right) {
  left = normalizeSearchText(left);
  right = normalizeSearchText(right);
  const costs = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let i = 1; i <= left.length; i += 1) {
    let previous = costs[0];
    costs[0] = i;
    for (let j = 1; j <= right.length; j += 1) {
      const current = costs[j];
      costs[j] = Math.min(
        costs[j] + 1,
        costs[j - 1] + 1,
        previous + (left[i - 1] === right[j - 1] ? 0 : 1),
      );
      previous = current;
    }
  }
  return costs[right.length];
}

function bestGeocodeResult(results, query) {
  const normalizedQuery = normalizeSearchText(query);
  return [...results].sort((left, right) => {
    const leftName = normalizeSearchText(left.name);
    const rightName = normalizeSearchText(right.name);
    const leftPrefix = leftName.startsWith(normalizedQuery) ? -6 : 0;
    const rightPrefix = rightName.startsWith(normalizedQuery) ? -6 : 0;
    const leftScore = similarityDistance(left.name, query) + leftPrefix - Math.log10((left.population || 1) + 1);
    const rightScore = similarityDistance(right.name, query) + rightPrefix - Math.log10((right.population || 1) + 1);
    return leftScore - rightScore;
  })[0];
}

async function geocode(city) {
  const language = state.lang === "en" ? "en" : "ru";
  let item = null;
  for (const variant of searchVariants(city)) {
    const params = new URLSearchParams({ name: variant, count: "8", language, format: "json" });
    const data = await fetchJson(`${geocodingUrl}?${params}`, 8000);
    const results = data.results || [];
    if (results.length) {
      item = bestGeocodeResult(results, city);
      break;
    }
  }
  if (!item) throw new Error(msg("cityNotFound"));
  return {
    name: item.name,
    latitude: item.latitude,
    longitude: item.longitude,
    country: item.country,
  };
}

async function reverseGeocode(latitude, longitude) {
  const language = state.lang === "en" ? "en" : "ru";
  const params = new URLSearchParams({
    latitude,
    longitude,
    language,
    format: "json",
  });
  let data;
  try {
    data = await fetchJson(`${reverseGeocodingUrl}?${params}`, 5000);
  } catch {
    return null;
  }
  const item = data.results?.[0];
  if (!item) return reverseGeocodeFallback(latitude, longitude);
  return {
    name: item.name,
    latitude,
    longitude,
    country: item.country || "",
    timezone: item.timezone || "",
  };
}

async function reverseGeocodeFallback(latitude, longitude) {
  const localityLanguage = state.lang === "kk" ? "ru" : state.lang;
  const params = new URLSearchParams({
    latitude,
    longitude,
    localityLanguage,
  });
  try {
    const data = await fetchJson(`${reverseFallbackUrl}?${params}`, 5000);
    const name = data.city || data.locality || data.principalSubdivision;
    if (!name) return null;
    return {
      name,
      latitude,
      longitude,
      country: data.countryName || "",
      timezone: "",
    };
  } catch {
    return null;
  }
}

function isCoordinateName(name) {
  return /^-?\d{1,2}(?:\.\d+)?,\s*-?\d{1,3}(?:\.\d+)?$/.test(String(name || ""));
}

async function resolveLocationName(location) {
  if (!location || !isCoordinateName(location.name)) return location;
  return (await reverseGeocode(location.latitude, location.longitude)) || location;
}

async function loadForecast(location) {
  const params = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    timezone: "auto",
    forecast_days: "7",
    current: [
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "precipitation",
      "weather_code",
      "cloud_cover",
      "pressure_msl",
      "wind_speed_10m",
      "wind_gusts_10m",
    ].join(","),
    hourly: [
      "temperature_2m",
      "relative_humidity_2m",
      "precipitation_probability",
      "precipitation",
      "weather_code",
      "pressure_msl",
      "visibility",
      "uv_index",
      "wind_speed_10m",
    ].join(","),
    daily: [
      "weather_code",
      "temperature_2m_max",
      "temperature_2m_min",
      "apparent_temperature_max",
      "apparent_temperature_min",
      "sunrise",
      "sunset",
      "uv_index_max",
      "rain_sum",
      "showers_sum",
      "snowfall_sum",
      "precipitation_sum",
      "precipitation_probability_max",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
    ].join(","),
  });
  return fetchJson(`${forecastUrl}?${params}`, 10000);
}

function renderCurrent(location, data) {
  const current = data.current;
  const daily = data.daily;
  const [description] = describe(current.weather_code);
  applyTheme(current.weather_code, Boolean(current.is_day));
  $("#heroIcon").innerHTML = weatherIcon(iconType(current.weather_code));
  $("#locationName").textContent = location.country ? `${location.name}, ${location.country}` : location.name;
  $("#temperature").textContent = `${round(current.temperature_2m)}°`;
  $("#condition").textContent = description;
  $("#range").textContent = `${msg("max")} ${round(daily.temperature_2m_max[0])}° ${msg("min")} ${round(daily.temperature_2m_min[0])}°`;
  $("#heroMetrics").innerHTML = [
    [msg("windShort"), `${round(current.wind_speed_10m)} ${unit("speed")}`],
    [msg("rainShort"), `${daily.precipitation_probability_max[0]}%`],
    [msg("uvShort"), `${daily.uv_index_max[0]}`],
  ]
    .map(
      ([label, value]) => `
        <div class="metric-pill">
          <span class="metric-label">${label}</span>
          <span class="metric-value">${value}</span>
        </div>
      `,
    )
    .join("");
  updateSaveButtonState();
}

function renderFavoritesMenu() {
  const holder = $("#favoritesList");
  holder.textContent = "";
  if (!state.favorites.length) {
    holder.innerHTML = `<div class="favorites-empty">${msg("favoritesEmpty")}</div>`;
    return;
  }
  state.favorites.forEach((favorite, index) => {
    const row = document.createElement("article");
    row.className = "favorite-row";
    row.innerHTML = `
      <button class="favorite-open" type="button">
        <strong>${favorite.name}</strong>
        <span>${favorite.country || ""}</span>
      </button>
      <button class="favorite-delete" type="button" title="${msg("delete")}" aria-label="${msg("delete")}">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M6 6l1 15h10l1-15" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
        </svg>
      </button>
    `;
    row.querySelector(".favorite-open").addEventListener("click", async () => {
      closeFavoritesMenu();
      await update(favorite);
    });
    row.querySelector(".favorite-delete").addEventListener("click", () => {
      const [removed] = state.favorites.splice(index, 1);
      localStorage.setItem("weatherFavorites", JSON.stringify(state.favorites));
      renderFavoritesMenu();
    });
    holder.append(row);
  });
}

function saveCurrentCity() {
  const location = state.location;
  const index = favoriteIndex(location);
  if (index >= 0) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.unshift(location);
    state.favorites = state.favorites.slice(0, 8);
  }
  localStorage.setItem("weatherFavorites", JSON.stringify(state.favorites));
  updateSaveButtonState();
  renderFavoritesMenu();
  $("#condition").textContent = msg("savedCity");
}

function updateSaveButtonState() {
  const button = $("#saveCityButton");
  if (!button || !state.location) return;
  const isSaved = favoriteIndex(state.location) >= 0;
  button.classList.toggle("saved", isSaved);
  button.setAttribute("aria-pressed", String(isSaved));
}

function syncFavoritesWithBot() {
  if (!syncPayload || !window.Telegram?.WebApp?.sendData) {
    $("#condition").textContent = msg("syncUnavailable");
    closeFavoritesMenu();
    return;
  }
  window.Telegram.WebApp.sendData(
    JSON.stringify({
      action: "favorites:replace",
      favorites: state.favorites.map((location) => ({
        name: location.name,
        latitude: Number(location.latitude),
        longitude: Number(location.longitude),
        country: location.country || "",
        timezone: location.timezone || "",
      })),
    }),
  );
}

function openFavoritesMenu() {
  renderFavoritesMenu();
  $("#favoritesSheet").hidden = false;
}

function closeFavoritesMenu() {
  $("#favoritesSheet").hidden = true;
}

function toggleLanguageMenu(force) {
  const menu = $("#languageMenu");
  const button = $("#languageButton");
  const isOpen = force ?? !menu.classList.contains("open");
  menu.classList.toggle("open", isOpen);
  button.classList.toggle("active", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
}

function alertMessages(data) {
  const current = data.current;
  const daily = data.daily;
  const alerts = [];
  if (daily.wind_gusts_10m_max[0] >= 55) alerts.push({ level: 3, text: msg("alertWind") });
  else if (daily.wind_gusts_10m_max[0] >= 40) alerts.push({ level: 2, text: msg("alertWind") });
  if (daily.precipitation_probability_max[0] >= 75) alerts.push({ level: 3, text: msg("alertRain") });
  else if (daily.precipitation_probability_max[0] >= 55) alerts.push({ level: 2, text: msg("alertRain") });
  if (daily.uv_index_max[0] >= 8) alerts.push({ level: 3, text: msg("alertUv") });
  else if (daily.uv_index_max[0] >= 6) alerts.push({ level: 2, text: msg("alertUv") });
  if (current.weather_code === 45 || current.weather_code === 48) alerts.push({ level: 2, text: msg("alertFog") });
  if (current.apparent_temperature >= 32) alerts.push({ level: 2, text: msg("alertHeat") });
  if (current.apparent_temperature <= -10) alerts.push({ level: 2, text: msg("alertCold") });
  return alerts.sort((a, b) => b.level - a.level).slice(0, 3);
}

function renderAlerts(data) {
  const card = $("#alertCard");
  const alerts = alertMessages(data);
  if (!alerts.length) {
    card.hidden = true;
    return;
  }
  const maxLevel = Math.max(...alerts.map((item) => item.level));
  card.hidden = false;
  card.classList.remove("alert-medium", "alert-high");
  card.classList.add(maxLevel >= 3 ? "alert-high" : "alert-medium");
  card.innerHTML = `<h2>${msg("weatherAlert")}</h2><p>${alerts.map((item) => item.text).join(" ")}</p>`;
}

function renderCharts(data) {
  const temps = data.hourly.temperature_2m.slice(0, 24).map(Number);
  const rain = data.hourly.precipitation_probability.slice(0, 24).map(Number);
  const times = data.hourly.time.slice(0, 24);
  $("#tempChartMeta").textContent = `${Math.min(...temps)}°...${Math.max(...temps)}°`;
  $("#rainChartMeta").textContent = `${Math.max(...rain)}% ${unit("max")}`;
  renderLineChart($("#tempChart"), $("#tempTooltip"), temps, times, "°");
  renderBarChart($("#rainChart"), $("#rainTooltip"), rain, times, "%");
}

function chartX(index, length) {
  return (index / Math.max(1, length - 1)) * 280 + 24;
}

function chartTimeLabel(iso) {
  return new Date(iso).toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" });
}

function renderGrid(svg, min, max) {
  const mid = Math.round((min + max) / 2);
  return `
    <line class="chart-grid" x1="24" y1="18" x2="304" y2="18"></line>
    <line class="chart-grid" x1="24" y1="62" x2="304" y2="62"></line>
    <line class="chart-grid" x1="24" y1="106" x2="304" y2="106"></line>
    <text class="chart-label" x="6" y="21">${max}</text>
    <text class="chart-label" x="6" y="65">${mid}</text>
    <text class="chart-label" x="6" y="109">${min}</text>
  `;
}

function placeTooltip(svg, tooltip, x, y, value, time, unit) {
  const rect = svg.getBoundingClientRect();
  const px = (x / 320) * rect.width;
  const py = (y / 130) * rect.height;
  tooltip.innerHTML = `<strong>${value}${unit}</strong><span>${chartTimeLabel(time)}</span>`;
  tooltip.style.left = `${px}px`;
  tooltip.style.top = `${py}px`;
  tooltip.classList.add("visible");
}

function setActiveChartMarker(svg, x) {
  const marker = svg.querySelector(".chart-active");
  if (!marker) return;
  marker.setAttribute("x1", x.toFixed(1));
  marker.setAttribute("x2", x.toFixed(1));
  marker.classList.add("visible");
}

function hideActiveChartMarker(svg) {
  svg.querySelector(".chart-active")?.classList.remove("visible");
}

function showNearestChartValue(svg, tooltip, points, values, times, unit, clientX) {
  const rect = svg.getBoundingClientRect();
  const localX = ((clientX - rect.left) / Math.max(1, rect.width)) * 320;
  const index = clamp(Math.round(((localX - 24) / 280) * (values.length - 1)), 0, values.length - 1);
  const [x, y] = points[index];
  placeTooltip(svg, tooltip, x, y, values[index], times[index], unit);
  setActiveChartMarker(svg, x);
}

function renderLineChart(svg, tooltip, values, times, unit) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const points = values.map((value, index) => {
    const x = chartX(index, values.length);
    const y = 106 - ((value - min) / Math.max(1, max - min)) * 88;
    return [x, y];
  });
  const path = points.map(([x, y], index) => `${index ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${path} L304 112 L24 112 Z`;
  svg.innerHTML = `
    ${renderGrid(svg, min, max)}
    <path class="chart-area" d="${area}"></path>
    <path class="chart-line" d="${path}"></path>
    <line class="chart-active" x1="24" y1="12" x2="24" y2="112"></line>
    ${points.map(([x, y], index) => `<circle class="chart-point" cx="${x}" cy="${y}" r="3"></circle><rect class="chart-hit" x="${x - 8}" y="8" width="16" height="112" data-index="${index}"></rect>`).join("")}
    <text class="chart-label" x="24" y="124">${chartTimeLabel(times[0])}</text>
    <text class="chart-label" x="266" y="124">${chartTimeLabel(times[times.length - 1])}</text>
  `;
  attachChartTooltip(svg, tooltip, points, values, times, unit);
}

function renderBarChart(svg, tooltip, values, times, unit) {
  const max = Math.max(10, ...values);
  const width = 280 / values.length;
  const points = values.map((value, index) => {
    const height = Math.max(4, (value / 100) * 88);
    const x = 24 + index * width;
    const y = 106 - height;
    return [x + width / 2, y, height];
  });
  svg.innerHTML = `
    ${renderGrid(svg, 0, max)}
    <line class="chart-active" x1="24" y1="12" x2="24" y2="112"></line>
    ${values.map((value, index) => {
      const height = Math.max(4, (value / 100) * 88);
      const x = 24 + index * width;
      const y = 106 - height;
      return `<rect class="chart-bar" x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${Math.max(4, width - 3).toFixed(1)}" height="${height.toFixed(1)}" rx="3"></rect><rect class="chart-hit" x="${x.toFixed(1)}" y="8" width="${width.toFixed(1)}" height="112" data-index="${index}"></rect>`;
    }).join("")}
    <text class="chart-label" x="24" y="124">${chartTimeLabel(times[0])}</text>
    <text class="chart-label" x="266" y="124">${chartTimeLabel(times[times.length - 1])}</text>
  `;
  attachChartTooltip(svg, tooltip, points.map(([x, y]) => [x, y]), values, times, unit);
}

function attachChartTooltip(svg, tooltip, points, values, times, unit) {
  const show = (index) => {
    const [x, y] = points[index];
    placeTooltip(svg, tooltip, x, y, values[index], times[index], unit);
    setActiveChartMarker(svg, x);
  };
  svg.querySelectorAll(".chart-hit").forEach((hit) => {
    const index = Number(hit.dataset.index);
    hit.addEventListener("pointerenter", () => show(index));
    hit.addEventListener("pointermove", () => show(index));
    hit.addEventListener("pointerdown", () => show(index));
  });
  svg.addEventListener("pointerdown", (event) => {
    svg.setPointerCapture?.(event.pointerId);
    showNearestChartValue(svg, tooltip, points, values, times, unit, event.clientX);
  });
  svg.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" || event.buttons || tooltip.classList.contains("visible")) {
      showNearestChartValue(svg, tooltip, points, values, times, unit, event.clientX);
    }
  });
  svg.addEventListener("pointerup", (event) => {
    svg.releasePointerCapture?.(event.pointerId);
  });
  svg.addEventListener("pointercancel", () => {
    tooltip.classList.remove("visible");
    hideActiveChartMarker(svg);
  });
  svg.addEventListener("pointerleave", () => {
    tooltip.classList.remove("visible");
    hideActiveChartMarker(svg);
  });
}

function renderHourly(data) {
  const holder = $("#hourly");
  const template = $("#hourTemplate");
  holder.textContent = "";
  data.hourly.time.slice(0, 24).forEach((time, index) => {
    const node = template.content.cloneNode(true);
    const type = iconType(data.hourly.weather_code[index]);
    node.querySelector(".hour").textContent = index === 0 ? msg("now") : hourLabel(time);
    node.querySelector(".hour-icon").innerHTML = weatherIcon(type, true);
    node.querySelector(".hour-temp").textContent = `${round(data.hourly.temperature_2m[index])}°`;
    node.querySelector(".hour-rain").textContent = `${data.hourly.precipitation_probability[index]}%`;
    holder.append(node);
  });
}

function renderDaily(data) {
  const holder = $("#daily");
  holder.textContent = "";
  const max = Math.max(...data.daily.temperature_2m_max);
  const min = Math.min(...data.daily.temperature_2m_min);
  data.daily.time.forEach((time, index) => {
    const low = data.daily.temperature_2m_min[index];
    const high = data.daily.temperature_2m_max[index];
    const type = iconType(data.daily.weather_code[index]);
    const [description] = describe(data.daily.weather_code[index]);
    const width = Math.max(18, ((high - low) / Math.max(1, max - min)) * 100);
    if (index === 0) {
      const todayRow = document.createElement("article");
      todayRow.className = "day-card day-card-static";
      todayRow.innerHTML = `
        <div class="day-row">
          <strong>${msg("today")}</strong>
          <span class="day-icon">${weatherIcon(type, true)}</span>
          <span class="bar-wrap"><span class="bar" style="width:${width}%"></span></span>
          <span class="daily-meta">${round(low)}° / ${round(high)}°</span>
        </div>
      `;
      holder.append(todayRow);
      return;
    }

    const card = document.createElement("details");
    card.className = "day-card";
    card.innerHTML = `
      <summary class="day-row">
        <strong>${index === 0 ? msg("today") : dayLabel(time)}</strong>
        <span class="day-icon">${weatherIcon(type, true)}</span>
        <span class="bar-wrap"><span class="bar" style="width:${width}%"></span></span>
        <span class="daily-meta">${round(low)}° / ${round(high)}°</span>
      </summary>
      <div class="day-details">
        <div class="day-condition">${description}</div>
        ${detailItem("thermo", msg("tempRange"), `${round(low)}°...${round(high)}°`)}
        ${detailItem("thermo", msg("feels"), `${round(data.daily.apparent_temperature_min[index])}°...${round(data.daily.apparent_temperature_max[index])}°`)}
        ${detailItem("rain", msg("precipitation"), `${data.daily.precipitation_sum[index]} ${unit("precip")}`)}
        ${detailItem("chance", msg("chance"), `${data.daily.precipitation_probability_max[index]}%`)}
        ${detailItem("wind", msg("maxWind"), `${round(data.daily.wind_speed_10m_max[index])} ${unit("speed")}`)}
        ${detailItem("gust", msg("gustsShort"), `${round(data.daily.wind_gusts_10m_max[index])} ${unit("speed")}`)}
        ${detailItem("uv", msg("uv"), `${data.daily.uv_index_max[index]}`)}
        ${detailItem("sunrise", msg("sunrise"), `${data.daily.sunrise[index].slice(-5)}`)}
        ${detailItem("sunset", msg("sunset"), `${data.daily.sunset[index].slice(-5)}`)}
      </div>
    `;
    holder.append(card);
  });
  setupAnimatedDetails(holder);
}

function renderStats(data) {
  const current = data.current;
  const daily = data.daily;
  const hourly = data.hourly;
  const first24 = (key) => hourly[key].slice(0, 24);
  const avg = (values) => Math.round(values.reduce((sum, value) => sum + Number(value), 0) / values.length);
  const humidityRange = minMax(first24("relative_humidity_2m"));
  const pressureRange = minMax(first24("pressure_msl"));
  const windPeak = hourPeak(hourly, "wind_speed_10m");
  const rainPeak = hourPeak(hourly, "precipitation_probability");
  const uvPeak = hourPeak(hourly, "uv_index");
  const minVisibility = Math.min(...first24("visibility")) / 1000;
  const feelsDiff = round(current.apparent_temperature - current.temperature_2m);
  const stats = [
    {
      tone: "thermo",
      label: msg("feels"),
      value: `${round(current.apparent_temperature)}°`,
      note: msg("feelsNote"),
      progress: clamp((current.apparent_temperature + 30) / 70, 0, 1),
      details: [
        [msg("temperature"), `${round(current.temperature_2m)}°`],
        [msg("feels"), `${round(current.apparent_temperature)}°`],
        ["Δ", `${feelsDiff > 0 ? "+" : ""}${feelsDiff}°`],
      ],
    },
    {
      tone: "humidity",
      label: msg("humidity"),
      value: `${current.relative_humidity_2m}%`,
      note: humidityStatus(current.relative_humidity_2m),
      progress: clamp(current.relative_humidity_2m / 100, 0, 1),
      details: [
        [msg("avgToday"), `${avg(first24("relative_humidity_2m"))}%`],
        [msg("minToday"), `${humidityRange.min}%`],
        [msg("maxToday"), `${humidityRange.max}%`],
      ],
    },
    {
      tone: "wind",
      label: msg("wind"),
      value: `${round(current.wind_speed_10m)} ${unit("speed")}`,
      note: windStatus(current.wind_speed_10m),
      progress: clamp(current.wind_speed_10m / 60, 0, 1),
      details: [
        [msg("gustsShort"), `${round(current.wind_gusts_10m)} ${unit("speed")}`],
        [msg("nextPeak"), `${round(windPeak.value)} ${unit("speed")}`],
        [msg("time"), formatHour(windPeak.time)],
      ],
    },
    {
      tone: "pressure",
      label: msg("pressure"),
      value: `${round(current.pressure_msl)} ${unit("pressure")}`,
      note: pressureStatus(current.pressure_msl),
      progress: clamp((current.pressure_msl - 980) / 70, 0, 1),
      details: [
        [msg("avgToday"), `${avg(first24("pressure_msl"))} ${unit("pressure")}`],
        [msg("minToday"), `${round(pressureRange.min)} ${unit("pressure")}`],
        [msg("maxToday"), `${round(pressureRange.max)} ${unit("pressure")}`],
      ],
    },
    {
      tone: "uv",
      label: msg("uv"),
      value: `${daily.uv_index_max[0]}`,
      note: uvStatus(daily.uv_index_max[0]),
      progress: clamp(daily.uv_index_max[0] / 11, 0, 1),
      details: [
        [msg("uvNote"), `${daily.uv_index_max[0]}`],
        [msg("nextPeak"), `${uvPeak.value}`],
        [msg("time"), formatHour(uvPeak.time)],
      ],
    },
    {
      tone: "rain",
      label: msg("precipitation"),
      value: `${daily.precipitation_sum[0]} ${unit("precip")}`,
      note: `${msg("chance")} ${daily.precipitation_probability_max[0]}%`,
      progress: clamp(daily.precipitation_probability_max[0] / 100, 0, 1),
      details: [
        [msg("chance"), `${daily.precipitation_probability_max[0]}%`],
        [msg("rain"), `${daily.rain_sum?.[0] ?? 0} ${unit("precip")}`],
        [msg("nextPeak"), `${rainPeak.value}% ${formatHour(rainPeak.time)}`],
      ],
    },
    {
      tone: "visibility",
      label: msg("visibility"),
      value: `${minVisibility.toFixed(1)} ${unit("distance")}`,
      note: visibilityStatus(minVisibility),
      progress: clamp(minVisibility / 10, 0, 1),
      details: [
        [msg("minToday"), `${minVisibility.toFixed(1)} ${unit("distance")}`],
        [msg("avgToday"), `${(avg(first24("visibility")) / 1000).toFixed(1)} ${unit("distance")}`],
        [msg("clouds"), `${current.cloud_cover}%`],
      ],
    },
    {
      tone: "sun",
      label: msg("sun"),
      value: daily.sunset[0].slice(-5),
      note: `${msg("sunrise")} ${daily.sunrise[0].slice(-5)}`,
      progress: 0.7,
      details: [
        [msg("sunrise"), daily.sunrise[0].slice(-5)],
        [msg("sunset"), daily.sunset[0].slice(-5)],
        [msg("dayLength"), dayLength(daily.sunrise[0], daily.sunset[0])],
      ],
    },
  ];
  $("#stats").innerHTML = stats
    .map(
      ({ tone, label, value, note, progress, details }) => `
        <details class="stat-card stat-${tone}">
          <summary>
            <div class="stat-head">
              <span class="stat-icon">${uiIcon(tone)}</span>
              <span class="stat-label">${label}</span>
            </div>
            <div class="stat-value">${value}</div>
            <div class="stat-note">${note}</div>
            <div class="stat-meter"><span style="width:${Math.round(progress * 100)}%"></span></div>
          </summary>
          <div class="stat-details">
            ${details.map(([detailLabel, detailValue]) => `<div><span>${detailLabel}</span><strong>${detailValue}</strong></div>`).join("")}
          </div>
        </details>
      `,
    )
    .join("");
  setupAnimatedDetails($("#stats"));
}

function setupAnimatedDetails(root) {
  root.querySelectorAll("details").forEach((details) => {
    const summary = details.querySelector("summary");
    if (!summary || details.dataset.animated === "true") return;
    details.dataset.animated = "true";

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      if (details.dataset.animating === "true") return;
      toggleDetails(details);
    });
  });
}

function toggleDetails(details) {
  const summary = details.querySelector("summary");
  if (!summary) return;

  const startHeightValue = details.getBoundingClientRect().height;
  const startHeight = `${startHeightValue}px`;
  details.dataset.animating = "true";
  details.style.overflow = "hidden";
  details.style.height = startHeight;

  if (details.open) {
    const endHeight = `${summary.getBoundingClientRect().height + getVerticalPadding(details)}px`;
    animateDetailsHeight(details, startHeight, endHeight, () => {
      details.open = false;
      clearDetailsAnimation(details);
    });
    return;
  }

  details.open = true;
  requestAnimationFrame(() => {
    const endHeight = `${details.scrollHeight}px`;
    animateDetailsHeight(details, startHeight, endHeight, () => {
      clearDetailsAnimation(details);
    });
  });
}

function getVerticalPadding(element) {
  const styles = window.getComputedStyle(element);
  return parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
}

function animateDetailsHeight(details, from, to, onFinish) {
  details.style.height = from;
  details.getBoundingClientRect();
  if (typeof details.animate === "function") {
    const animation = details.animate(
      [
        { height: from, opacity: 0.96 },
        { height: to, opacity: 1 },
      ],
      {
        duration: 280,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );
    animation.onfinish = onFinish;
    animation.oncancel = onFinish;
    return;
  }

  details.style.transition = "height 280ms cubic-bezier(0.22, 1, 0.36, 1)";
  requestAnimationFrame(() => {
    details.style.height = to;
  });
  window.setTimeout(onFinish, 300);
}

function clearDetailsAnimation(details) {
  details.style.height = "";
  details.style.overflow = "";
  details.style.transition = "";
  details.dataset.animating = "false";
}

function renderAll() {
  applyStaticText();
  if (!state.data) return;
  renderCurrent(state.location, state.data);
  renderHourly(state.data);
  renderAlerts(state.data);
  renderCharts(state.data);
  renderDaily(state.data);
  renderStats(state.data);
}

async function update(location = state.location) {
  location = await resolveLocationName(location);
  const cached = readCachedForecast(location);
  let renderedCached = false;
  try {
    state.location = location;
    localStorage.setItem("weatherDefaultLocation", JSON.stringify(location));
    $("#locationName").textContent = location.country ? `${location.name}, ${location.country}` : location.name;
    if (cached) {
      state.data = cached.data;
      renderAll();
      renderedCached = true;
    } else {
      $("#condition").textContent = msg("updating");
    }
    state.data = await loadForecast(location);
    writeCachedForecast(location, state.data);
    renderAll();
  } catch (error) {
    if (!renderedCached) $("#condition").textContent = error.name === "AbortError" ? msg("forecastError") : error.message || msg("forecastError");
  }
}

function getBrowserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error(msg("geolocationMissing")));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const resolvedLocation = await reverseGeocode(latitude, longitude);
        resolve(
          resolvedLocation || {
            name: `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`,
            latitude,
            longitude,
            country: "",
            timezone: "",
          },
        );
      },
      () => reject(new Error(msg("geolocationDenied"))),
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 10 * 60 * 1000 },
    );
  });
}

async function useBrowserLocation({ silent = false } = {}) {
  try {
    $("#condition").textContent = msg("getting");
    await update(await getBrowserLocation());
    return true;
  } catch (error) {
    if (!silent) $("#condition").textContent = error.message || msg("geolocationDenied");
    return false;
  }
}

async function startApp() {
  applyStaticText();
  if (state.defaultLocation) {
    await update(state.defaultLocation);
    return;
  }
  const usedLocation = await useBrowserLocation({ silent: true });
  if (!usedLocation) await update();
}

$("#searchForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = $("#cityInput");
  const city = input.value.trim();
  if (!city) return;
  input.blur();
  try {
    await update(await geocode(city));
  } catch (error) {
    $("#condition").textContent = error.message || msg("cityNotFound");
  }
});

$("#cityInput").addEventListener("focus", () => {
  document.body.classList.add("keyboard-open");
});

$("#cityInput").addEventListener("blur", () => {
  document.body.classList.remove("keyboard-open");
  window.setTimeout(resizeWeatherCanvas, 220);
});

document.addEventListener("pointerdown", (event) => {
  const input = $("#cityInput");
  if (document.activeElement === input && !event.target.closest(".search")) {
    input.blur();
  }
  if (!event.target.closest(".language-menu") && !event.target.closest("#languageButton")) {
    toggleLanguageMenu(false);
  }
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("weatherLang", state.lang);
    toggleLanguageMenu(false);
    renderAll();
  });
});

$("#languageButton").addEventListener("click", () => toggleLanguageMenu());
$("#geoButton").addEventListener("click", useBrowserLocation);
$("#refreshButton").addEventListener("click", () => update());
$("#saveCityButton").addEventListener("click", saveCurrentCity);
$("#favoritesMenuButton").addEventListener("click", openFavoritesMenu);
$("#closeFavoritesButton").addEventListener("click", closeFavoritesMenu);
$("#syncFavoritesButton").addEventListener("click", syncFavoritesWithBot);
$("#favoritesSheet").addEventListener("click", (event) => {
  if (event.target.id === "favoritesSheet") closeFavoritesMenu();
});
window.addEventListener("resize", resizeWeatherCanvas);
motionQuery.addEventListener?.("change", () => {
  if (motionQuery.matches) {
    stopWeatherAnimation();
  } else {
    resizeWeatherCanvas();
    startWeatherAnimation();
  }
});

window.Telegram?.WebApp?.ready();
window.Telegram?.WebApp?.expand();

resizeWeatherCanvas();
setWeatherAnimation("clear");
startApp();
