const geocodingUrl = "https://geocoding-api.open-meteo.com/v1/search";
const forecastUrl = "https://api.open-meteo.com/v1/forecast";

const codes = {
  0: ["Ясно", "☀️"],
  1: ["Преимущественно ясно", "🌤"],
  2: ["Переменная облачность", "⛅"],
  3: ["Пасмурно", "☁️"],
  45: ["Туман", "🌫"],
  48: ["Изморозь", "🌫"],
  51: ["Легкая морось", "🌦"],
  53: ["Морось", "🌦"],
  55: ["Сильная морось", "🌧"],
  61: ["Небольшой дождь", "🌧"],
  63: ["Дождь", "🌧"],
  65: ["Сильный дождь", "🌧"],
  71: ["Небольшой снег", "🌨"],
  73: ["Снег", "🌨"],
  75: ["Сильный снег", "❄️"],
  80: ["Ливни", "🌦"],
  81: ["Сильные ливни", "🌧"],
  82: ["Очень сильные ливни", "⛈"],
  95: ["Гроза", "⛈"],
  96: ["Гроза с градом", "⛈"],
  99: ["Сильная гроза с градом", "⛈"],
};

const state = {
  location: { name: "Almaty", latitude: 43.25, longitude: 76.95, country: "Kazakhstan" },
};

const $ = (selector) => document.querySelector(selector);
const round = (value) => Math.round(Number(value));

function describe(code) {
  return codes[code] || ["Неизвестно", "🌡"];
}

function hourLabel(iso) {
  return new Date(iso).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
}

function dayLabel(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("ru-RU", { weekday: "short" });
}

async function geocode(city) {
  const params = new URLSearchParams({ name: city, count: "1", language: "ru", format: "json" });
  const response = await fetch(`${geocodingUrl}?${params}`);
  if (!response.ok) throw new Error("Город не найден");
  const data = await response.json();
  const item = data.results?.[0];
  if (!item) throw new Error("Город не найден");
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
      "sunrise",
      "sunset",
      "uv_index_max",
      "precipitation_sum",
      "precipitation_probability_max",
      "wind_speed_10m_max",
      "wind_gusts_10m_max",
    ].join(","),
  });
  const response = await fetch(`${forecastUrl}?${params}`);
  if (!response.ok) throw new Error("Не удалось получить прогноз");
  return response.json();
}

function renderCurrent(location, data) {
  const current = data.current;
  const daily = data.daily;
  const [description] = describe(current.weather_code);
  $("#locationName").textContent = location.country ? `${location.name}, ${location.country}` : location.name;
  $("#temperature").textContent = `${round(current.temperature_2m)}°`;
  $("#condition").textContent = description;
  $("#range").textContent = `Макс. ${round(daily.temperature_2m_max[0])}° Мин. ${round(daily.temperature_2m_min[0])}°`;
}

function renderHourly(data) {
  const holder = $("#hourly");
  const template = $("#hourTemplate");
  holder.textContent = "";
  data.hourly.time.slice(0, 24).forEach((time, index) => {
    const node = template.content.cloneNode(true);
    const [, icon] = describe(data.hourly.weather_code[index]);
    node.querySelector(".hour").textContent = index === 0 ? "Сейчас" : hourLabel(time);
    node.querySelector(".hour-icon").textContent = icon;
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
    const [, icon] = describe(data.daily.weather_code[index]);
    const width = Math.max(18, ((high - low) / Math.max(1, max - min)) * 100);
    const row = document.createElement("article");
    row.className = "day-row";
    row.innerHTML = `
      <strong>${index === 0 ? "Сегодня" : dayLabel(time)}</strong>
      <span>${icon}</span>
      <span class="bar" style="width:${width}%"></span>
      <span class="daily-meta">${round(low)}° / ${round(high)}°</span>
    `;
    holder.append(row);
  });
}

function renderStats(data) {
  const current = data.current;
  const daily = data.daily;
  const hourly = data.hourly;
  const first24 = (key) => hourly[key].slice(0, 24);
  const avg = (values) => Math.round(values.reduce((sum, value) => sum + Number(value), 0) / values.length);
  const stats = [
    ["Ощущается", `${round(current.apparent_temperature)}°`, "С учетом ветра и влажности"],
    ["Влажность", `${current.relative_humidity_2m}%`, `Средняя за сутки: ${avg(first24("relative_humidity_2m"))}%`],
    ["Ветер", `${round(current.wind_speed_10m)} км/ч`, `Порывы до ${round(current.wind_gusts_10m)} км/ч`],
    ["Давление", `${round(current.pressure_msl)} гПа`, `Среднее за сутки: ${avg(first24("pressure_msl"))} гПа`],
    ["UV индекс", `${daily.uv_index_max[0]}`, "Максимум сегодня"],
    ["Осадки", `${daily.precipitation_sum[0]} мм`, `Шанс до ${daily.precipitation_probability_max[0]}%`],
    ["Видимость", `${(Math.min(...first24("visibility")) / 1000).toFixed(1)} км`, "Минимум за 24 часа"],
    ["Солнце", daily.sunset[0].slice(-5), `Восход ${daily.sunrise[0].slice(-5)}`],
  ];
  $("#stats").innerHTML = stats
    .map(
      ([label, value, note]) => `
        <article>
          <div class="stat-label">${label}</div>
          <div class="stat-value">${value}</div>
          <div class="stat-note">${note}</div>
        </article>
      `,
    )
    .join("");
}

async function update(location = state.location) {
  try {
    state.location = location;
    $("#condition").textContent = "Обновляем прогноз";
    const data = await loadForecast(location);
    renderCurrent(location, data);
    renderHourly(data);
    renderDaily(data);
    renderStats(data);
  } catch (error) {
    $("#condition").textContent = error.message || "Не удалось загрузить погоду";
  }
}

function useBrowserLocation() {
  if (!navigator.geolocation) {
    $("#condition").textContent = "Геолокация недоступна";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      update({
        name: "Моя геолокация",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    },
    () => {
      $("#condition").textContent = "Разрешите доступ к геолокации";
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
    $("#condition").textContent = error.message || "Город не найден";
  }
});

$("#geoButton").addEventListener("click", useBrowserLocation);
$("#refreshButton").addEventListener("click", () => update());

window.Telegram?.WebApp?.ready();
window.Telegram?.WebApp?.expand();

update();
