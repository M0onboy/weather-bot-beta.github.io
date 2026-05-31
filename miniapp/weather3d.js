import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

const container = document.querySelector("#webglWeather");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const state = {
  mode: "clear",
  night: false,
  ready: false,
  width: 1,
  height: 1,
  clock: new THREE.Clock(),
  particles: null,
  particleData: [],
  clouds: [],
  flash: 0,
};

let renderer;
let scene;
let camera;
let glow;
const textures = {};

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

function init() {
  if (!container || reducedMotion.matches || !supportsWebGL()) return;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1200);
  camera.position.set(0, 0, 520);

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 1.2));

  glow = new THREE.Mesh(
    new THREE.SphereGeometry(76, 48, 48),
    new THREE.MeshBasicMaterial({ color: 0xffd36f, transparent: true, opacity: 0.18 }),
  );
  glow.position.set(-160, -90, -120);
  scene.add(glow);

  state.ready = true;
  document.body.classList.add("webgl-ready");
  resize();
  setModeFromBody();
  animate();
}

function clearSceneWeather() {
  if (state.particles) {
    scene.remove(state.particles);
    state.particles.geometry.dispose();
    state.particles.material.dispose();
    state.particles = null;
  }
  state.clouds.forEach((cloud) => {
    scene.remove(cloud);
    cloud.geometry.dispose();
    cloud.material.dispose();
  });
  state.clouds = [];
  state.particleData = [];
}

function spriteTexture(type) {
  if (textures[type]) return textures[type];
  const canvas = document.createElement("canvas");
  canvas.width = 96;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");

  if (type === "rain") {
    const gradient = ctx.createLinearGradient(38, 8, 58, 88);
    gradient.addColorStop(0, "rgba(210,245,255,0)");
    gradient.addColorStop(0.28, "rgba(210,245,255,0.88)");
    gradient.addColorStop(1, "rgba(120,205,255,0)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 6;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(34, 12);
    ctx.lineTo(60, 84);
    ctx.stroke();
  } else if (type === "snow") {
    const gradient = ctx.createRadialGradient(48, 48, 0, 48, 48, 44);
    gradient.addColorStop(0, "rgba(255,255,255,0.95)");
    gradient.addColorStop(0.32, "rgba(255,255,255,0.55)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(48, 48, 44, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "cloud") {
    const gradient = ctx.createRadialGradient(48, 48, 0, 48, 48, 46);
    gradient.addColorStop(0, "rgba(255,255,255,0.32)");
    gradient.addColorStop(0.46, "rgba(220,235,255,0.16)");
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(48, 50, 44, 22, 0, 0, Math.PI * 2);
    ctx.fill();
  } else {
    const gradient = ctx.createRadialGradient(48, 48, 0, 48, 48, 42);
    gradient.addColorStop(0, "rgba(255,248,214,0.98)");
    gradient.addColorStop(0.18, "rgba(255,248,214,0.72)");
    gradient.addColorStop(1, "rgba(255,248,214,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(48, 48, 42, 0, Math.PI * 2);
    ctx.fill();
  }

  textures[type] = new THREE.CanvasTexture(canvas);
  textures[type].colorSpace = THREE.SRGBColorSpace;
  return textures[type];
}

function particleCount(mode) {
  const mobile = window.innerWidth < 460;
  if (mode === "rain") return mobile ? 420 : 720;
  if (mode === "storm") return mobile ? 560 : 900;
  if (mode === "snow") return mobile ? 260 : 460;
  if (mode === "clear") return mobile ? 95 : 160;
  return mobile ? 120 : 180;
}

function createParticles(mode) {
  const count = particleCount(mode);
  const positions = new Float32Array(count * 3);
  const data = [];
  const spreadX = state.width * 0.72;
  const spreadY = state.height * 0.72;

  for (let i = 0; i < count; i += 1) {
    const info = {
      x: THREE.MathUtils.randFloatSpread(spreadX * 2),
      y: THREE.MathUtils.randFloatSpread(spreadY * 2),
      z: THREE.MathUtils.randFloat(-220, 180),
      speed: 1,
      drift: 0,
      phase: Math.random() * Math.PI * 2,
    };

    if (mode === "rain" || mode === "storm") {
      info.speed = THREE.MathUtils.randFloat(mode === "storm" ? 12 : 9, mode === "storm" ? 22 : 17);
      info.drift = THREE.MathUtils.randFloat(-4.2, -2.0);
    } else if (mode === "snow") {
      info.speed = THREE.MathUtils.randFloat(0.7, 1.9);
      info.drift = THREE.MathUtils.randFloat(-0.45, 0.45);
    } else {
      info.speed = THREE.MathUtils.randFloat(0.15, 0.45);
      info.drift = THREE.MathUtils.randFloat(-0.18, 0.18);
    }

    data.push(info);
    positions[i * 3] = info.x;
    positions[i * 3 + 1] = info.y;
    positions[i * 3 + 2] = info.z;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const isNight = document.body.classList.contains("theme-night");
  const textureType = mode === "rain" || mode === "storm" ? "rain" : mode === "snow" ? "snow" : "star";
  const material = new THREE.PointsMaterial({
    color: mode === "clear" ? (isNight ? 0xdcecff : 0xfff2bd) : mode === "snow" ? 0xffffff : 0xc7f0ff,
    map: spriteTexture(textureType),
    size: mode === "rain" || mode === "storm" ? 30 : mode === "snow" ? 18 : isNight ? 7 : 4,
    sizeAttenuation: true,
    transparent: true,
    opacity: mode === "clear" ? (isNight ? 0.62 : 0.28) : mode === "snow" ? 0.7 : 0.48,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    alphaTest: 0.02,
  });

  state.particles = new THREE.Points(geometry, material);
  state.particleData = data;
  scene.add(state.particles);
}

function createClouds(mode) {
  const count = mode === "cloudy" ? 16 : mode === "storm" ? 10 : 5;
  const color = mode === "storm" ? 0x9aa4d9 : 0xffffff;
  for (let i = 0; i < count; i += 1) {
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color,
      map: spriteTexture("cloud"),
      transparent: true,
      opacity: mode === "storm" ? 0.16 : 0.18,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    const cloud = new THREE.Mesh(geometry, material);
    cloud.scale.set(THREE.MathUtils.randFloat(190, 360), THREE.MathUtils.randFloat(80, 150), 1);
    cloud.position.set(
      THREE.MathUtils.randFloatSpread(state.width * 1.2),
      THREE.MathUtils.randFloat(-state.height * 0.34, state.height * 0.34),
      THREE.MathUtils.randFloat(-260, -60),
    );
    cloud.userData.speed = THREE.MathUtils.randFloat(0.04, 0.16);
    cloud.userData.phase = Math.random() * Math.PI * 2;
    scene.add(cloud);
    state.clouds.push(cloud);
  }
}

function rebuildWeather() {
  if (!state.ready) return;
  clearSceneWeather();
  const isNight = document.body.classList.contains("theme-night");
  glow.visible = !isNight && (state.mode === "clear" || state.mode === "cloudy");
  glow.material.opacity = state.mode === "clear" ? 0.2 : 0.08;

  if (state.mode === "cloudy" || state.mode === "storm" || state.mode === "rain" || state.mode === "snow") createClouds(state.mode);
  if (["rain", "snow", "storm", "clear"].includes(state.mode)) createParticles(state.mode);
}

function setMode(mode) {
  const normalized = ["clear", "cloudy", "rain", "snow", "storm"].includes(mode) ? mode : "clear";
  const isNight = document.body.classList.contains("theme-night");
  if (state.mode === normalized && state.night === isNight && state.particles) return;
  state.mode = normalized;
  state.night = isNight;
  rebuildWeather();
}

function setModeFromBody() {
  const mode = ["clear", "cloudy", "rain", "snow", "storm"].find((item) => document.body.classList.contains(`theme-${item}`));
  setMode(mode || "clear");
  rebuildWeather();
}

function resize() {
  if (!state.ready) return;
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  camera.aspect = state.width / state.height;
  camera.updateProjectionMatrix();
  renderer.setSize(state.width, state.height);
  rebuildWeather();
}

function updateParticles(delta) {
  if (!state.particles) return;
  const positions = state.particles.geometry.attributes.position.array;
  const boundaryY = state.height * 0.62;
  const boundaryX = state.width * 0.72;

  state.particleData.forEach((item, index) => {
    if (state.mode === "rain" || state.mode === "storm") {
      item.y -= item.speed * delta * 60;
      item.x += item.drift * delta * 60;
      if (item.y < -boundaryY || item.x < -boundaryX) {
        item.y = boundaryY;
        item.x = THREE.MathUtils.randFloatSpread(boundaryX * 2);
      }
    } else if (state.mode === "snow") {
      item.phase += delta;
      item.y -= item.speed * delta * 60;
      item.x += (item.drift + Math.sin(item.phase) * 0.18) * delta * 60;
      if (item.y < -boundaryY) {
        item.y = boundaryY;
        item.x = THREE.MathUtils.randFloatSpread(boundaryX * 2);
      }
    } else {
      item.phase += delta * item.speed;
      item.y += Math.sin(item.phase) * 0.05;
      item.x += item.drift * delta * 60;
      if (item.x > boundaryX) item.x = -boundaryX;
      if (item.x < -boundaryX) item.x = boundaryX;
    }

    positions[index * 3] = item.x;
    positions[index * 3 + 1] = item.y;
    positions[index * 3 + 2] = item.z;
  });

  state.particles.geometry.attributes.position.needsUpdate = true;
}

function updateClouds(delta) {
  const boundaryX = state.width * 0.75;
  state.clouds.forEach((cloud) => {
    cloud.position.x += cloud.userData.speed * delta * 60;
    cloud.position.y += Math.sin(performance.now() * 0.00018 + cloud.userData.phase) * delta * 2.5;
    cloud.rotation.z = Math.sin(performance.now() * 0.0001 + cloud.position.y) * 0.018;
    if (cloud.position.x > boundaryX) cloud.position.x = -boundaryX;
  });
}

function animate() {
  if (!state.ready || reducedMotion.matches) return;
  const delta = Math.min(0.033, state.clock.getDelta());
  updateParticles(delta);
  updateClouds(delta);

  if (state.mode === "storm" && Math.random() < 0.012) state.flash = 0.35;
  if (state.flash > 0) {
    renderer.setClearColor(0xffffff, state.flash);
    state.flash *= 0.68;
  } else {
    renderer.setClearColor(0x000000, 0);
  }

  if (glow.visible) {
    glow.rotation.y += delta * 0.12;
    glow.position.y = -state.height * 0.18 + Math.sin(performance.now() * 0.0004) * 8;
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

window.weather3D = { setMode };
window.addEventListener("weather-mode-change", (event) => setMode(event.detail?.mode));
window.addEventListener("resize", resize);
reducedMotion.addEventListener?.("change", () => {
  if (reducedMotion.matches) {
    document.body.classList.remove("webgl-ready");
  } else if (!state.ready) {
    init();
  }
});

init();
