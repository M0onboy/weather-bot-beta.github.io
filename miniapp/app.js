const geocodingUrl = "https://geocoding-api.open-meteo.com/v1/search";
const forecastUrl = "https://api.open-meteo.com/v1/forecast";

const messages = {
  ru: {
    city: "Город",
    loading: "Загрузка...",
    getting: "Получаем прогноз",
    updating: "Обновляем прогноз",
    hourly: "По часам",
    daily: "Прогноз на 7 дней",
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
  },
  kk: {
    city: "Қала",
    loading: "Жүктелуде...",
    getting: "Болжам алынуда",
    updating: "Болжам жаңартылуда",
    hourly: "Сағат бойынша",
    daily: "7 күндік болжам",
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
  },
  en: {
    city: "City",
    loading: "Loading...",
    getting: "Getting forecast",
    updating: "Updating forecast",
    hourly: "Hourly",
    daily: "7-day forecast",
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

const state = {
  lang: ["ru", "kk", "en"].includes(initialLang) ? initialLang : "ru",
  location: { name: "Almaty", latitude: 43.25, longitude: 76.95, country: "Kazakhstan" },
  data: null,
};

const $ = (selector) => document.querySelector(selector);
const round = (value) => Math.round(Number(value));
const msg = (key) => messages[state.lang][key];

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

function themeForCode(code) {
  if ([0, 1].includes(code)) return "theme-clear";
  if ([2, 3, 45, 48].includes(code)) return "theme-cloudy";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "theme-snow";
  if ([95, 96, 99].includes(code)) return "theme-storm";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "theme-rain";
  return "theme-clear";
}

function applyTheme(code) {
  document.body.classList.remove("theme-clear", "theme-cloudy", "theme-rain", "theme-snow", "theme-storm");
  document.body.classList.add(themeForCode(code));
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

function applyStaticText() {
  document.documentElement.lang = state.lang;
  $("#cityInput").placeholder = msg("city");
  $("#locationName").textContent = state.data ? $("#locationName").textContent : msg("loading");
  $("#condition").textContent = state.data ? $("#condition").textContent : msg("getting");
  $("#hourlyTitle").textContent = msg("hourly");
  $("#dailyTitle").textContent = msg("daily");
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

async function geocode(city) {
  const language = state.lang === "en" ? "en" : "ru";
  const params = new URLSearchParams({ name: city, count: "1", language, format: "json" });
  const response = await fetch(`${geocodingUrl}?${params}`);
  if (!response.ok) throw new Error(msg("cityNotFound"));
  const data = await response.json();
  const item = data.results?.[0];
  if (!item) throw new Error(msg("cityNotFound"));
  return {
    name: item.name,
    latitude: item.latitude,
    longitude: item.longitude,
    country: item.country,
  };
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
  const response = await fetch(`${forecastUrl}?${params}`);
  if (!response.ok) throw new Error(msg("forecastError"));
  return response.json();
}

function renderCurrent(location, data) {
  const current = data.current;
  const daily = data.daily;
  const [description] = describe(current.weather_code);
  applyTheme(current.weather_code);
  $("#heroIcon").innerHTML = weatherIcon(iconType(current.weather_code));
  $("#locationName").textContent = location.country ? `${location.name}, ${location.country}` : location.name;
  $("#temperature").textContent = `${round(current.temperature_2m)}°`;
  $("#condition").textContent = description;
  $("#range").textContent = `${msg("max")} ${round(daily.temperature_2m_max[0])}° ${msg("min")} ${round(daily.temperature_2m_min[0])}°`;
  $("#heroMetrics").innerHTML = [
    [msg("windShort"), `${round(current.wind_speed_10m)} km/h`],
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
    const card = document.createElement("details");
    card.className = "day-card";
    if (index === 0) card.open = true;
    card.innerHTML = `
      <summary class="day-row">
        <strong>${index === 0 ? msg("today") : dayLabel(time)}</strong>
        <span class="day-icon">${weatherIcon(type, true)}</span>
        <span class="bar-wrap"><span class="bar" style="width:${width}%"></span></span>
        <span class="daily-meta">${round(low)}° / ${round(high)}°</span>
      </summary>
      <div class="day-details">
        <div class="day-condition">${description}</div>
        <div><span>${msg("tempRange")}</span><strong>${round(low)}°...${round(high)}°</strong></div>
        <div><span>${msg("feels")}</span><strong>${round(data.daily.apparent_temperature_min[index])}°...${round(data.daily.apparent_temperature_max[index])}°</strong></div>
        <div><span>${msg("precipitation")}</span><strong>${data.daily.precipitation_sum[index]} mm</strong></div>
        <div><span>${msg("chance")}</span><strong>${data.daily.precipitation_probability_max[index]}%</strong></div>
        <div><span>${msg("maxWind")}</span><strong>${round(data.daily.wind_speed_10m_max[index])} km/h</strong></div>
        <div><span>${msg("gustsShort")}</span><strong>${round(data.daily.wind_gusts_10m_max[index])} km/h</strong></div>
        <div><span>${msg("uv")}</span><strong>${data.daily.uv_index_max[index]}</strong></div>
        <div><span>${msg("sunrise")}</span><strong>${data.daily.sunrise[index].slice(-5)}</strong></div>
        <div><span>${msg("sunset")}</span><strong>${data.daily.sunset[index].slice(-5)}</strong></div>
      </div>
    `;
    holder.append(card);
  });
}

function renderStats(data) {
  const current = data.current;
  const daily = data.daily;
  const hourly = data.hourly;
  const first24 = (key) => hourly[key].slice(0, 24);
  const avg = (values) => Math.round(values.reduce((sum, value) => sum + Number(value), 0) / values.length);
  const stats = [
    ["thermo", "🌡", msg("feels"), `${round(current.apparent_temperature)}°`, msg("feelsNote")],
    ["humidity", "💧", msg("humidity"), `${current.relative_humidity_2m}%`, `${msg("humidityAvg")}: ${avg(first24("relative_humidity_2m"))}%`],
    ["wind", "💨", msg("wind"), `${round(current.wind_speed_10m)} km/h`, `${msg("gusts")} ${round(current.wind_gusts_10m)} km/h`],
    ["pressure", "🧭", msg("pressure"), `${round(current.pressure_msl)} hPa`, `${msg("pressureAvg")}: ${avg(first24("pressure_msl"))} hPa`],
    ["uv", "☀️", msg("uv"), `${daily.uv_index_max[0]}`, msg("uvNote")],
    ["rain", "🌧", msg("precipitation"), `${daily.precipitation_sum[0]} mm`, `${msg("chance")} ${daily.precipitation_probability_max[0]}%`],
    ["visibility", "👁", msg("visibility"), `${(Math.min(...first24("visibility")) / 1000).toFixed(1)} km`, msg("visibilityNote")],
    ["sun", "🌇", msg("sun"), daily.sunset[0].slice(-5), `${msg("sunrise")} ${daily.sunrise[0].slice(-5)}`],
  ];
  $("#stats").innerHTML = stats
    .map(
      ([tone, icon, label, value, note]) => `
        <article class="stat-${tone}">
          <div class="stat-head">
            <span class="stat-icon">${icon}</span>
            <span class="stat-label">${label}</span>
          </div>
          <div class="stat-value">${value}</div>
          <div class="stat-note">${note}</div>
        </article>
      `,
    )
    .join("");
}

function renderAll() {
  applyStaticText();
  if (!state.data) return;
  renderCurrent(state.location, state.data);
  renderHourly(state.data);
  renderDaily(state.data);
  renderStats(state.data);
}

async function update(location = state.location) {
  try {
    state.location = location;
    $("#condition").textContent = msg("updating");
    state.data = await loadForecast(location);
    renderAll();
  } catch (error) {
    $("#condition").textContent = error.message || msg("forecastError");
  }
}

function useBrowserLocation() {
  if (!navigator.geolocation) {
    $("#condition").textContent = msg("geolocationMissing");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      update({
        name: msg("myLocation"),
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    () => {
      $("#condition").textContent = msg("geolocationDenied");
    },
    { enableHighAccuracy: true, timeout: 12000 },
  );
}

$("#searchForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = $("#cityInput").value.trim();
  if (!city) return;
  try {
    await update(await geocode(city));
  } catch (error) {
    $("#condition").textContent = error.message || msg("cityNotFound");
  }
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localStorage.setItem("weatherLang", state.lang);
    renderAll();
  });
});

$("#geoButton").addEventListener("click", useBrowserLocation);
$("#refreshButton").addEventListener("click", () => update());

window.Telegram?.WebApp?.ready();
window.Telegram?.WebApp?.expand();

applyStaticText();
update();
