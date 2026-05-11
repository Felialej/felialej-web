// =========================
// ABRIR SIEMPRE DESDE EL INICIO
// =========================
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const forceStartAtTop = () => {
  if (window.location.hash) {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });
};

window.addEventListener("DOMContentLoaded", forceStartAtTop);
window.addEventListener("load", () => {
  setTimeout(forceStartAtTop, 50);
});

// =========================
// MENÚ RESPONSIVE
// =========================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// =========================
// CURSOR PERSONALIZADO
// =========================
const cursor = document.querySelector(".cursor");
const cursorGlow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  cursorGlow.style.left = `${x}px`;
  cursorGlow.style.top = `${y}px`;
});

// =========================
// TRADUCCIONES
// =========================
const translations = {
  es: {
    pageTitle: "Felialej | Cantante y Productor",
    introLabel: "",
    introSubtitle: "Cargando...",
    navInicio: "Inicio",
    navSobreMi: "Sobre mí",
    navTemaDestacado: "Tema destacado",
    navMusica: "Música",
    navVideo: "Video",
    navGaleria: "Galería",
    navContacto: "Contacto",
    heroSubtitle: "Cantante & Productor",
    heroTitle: "Expresado en acordes y letras",
    heroDescription: "Artista de la ciudad de Villavicencio. Urbano, balada, pop.",
    btnEscucharTema: "Escuchar tema",
    btnVerGaleria: "Ver galería",
    fotoPrincipal: "Foto principal",
    fotoPrincipalTexto: "Luego pondremos aquí una foto tuya en concierto",
    sobreEtiqueta: "Conoce al artista",
    sobreTitulo: "Sobre Felialej",
    origenTitulo: "Origen",
    origenTexto: "Felialej es un cantante y productor de la ciudad de Villavicencio que se desmpeña principalmente en el género Urbano, pop y balada.",
    procesoTitulo: "Proceso",
    procesoTexto: "Su proyecto artístico combina interpretación, performance, producción musical y un sonido que busca ser más recordable.",
    escenarioTitulo: "Escenario",
    escenarioTexto: "Cada presentación y cada canción hacen parte de una evolución artística que une sonido, imagen y experiencia.",
    reproduceAhora: "Reproduce ahora",
    ultimoLanzamiento: "Último lanzamiento",
    spotifyPlayer: "Spotify Player",
    spotifyTexto: "Escucha el último lanzamiento de Felialej directamente desde Spotify y continúa explorando su música en las plataformas oficiales.",
    abrirSpotify: "Abrir en Spotify",
    plataformasOficiales: "Plataformas oficiales",
    musicaTitulo: "Música",
    spotifyCardTexto: "Escuchar música oficial",
    appleCardTexto: "Reproducir canciones oficiales",
    youtubeCardTexto: "Ver videos oficiales",
    videoEtiqueta: "Contenido audiovisual",
    videoTitulo: "Video destacado",
    videoLabel: "YouTube Player",
    videoNombre: "Felialej en video",
    videoTexto: "Reproduce este video directamente en la página y sigue explorando más contenido en el canal oficial de YouTube.",
    abrirYoutube: "Abrir en YouTube",
    momentosVisuales: "Momentos visuales",
    galeriaTitulo: "Galería",
    foto1: "Foto 1",
    foto2: "Foto 2",
    foto3: "Foto 3",
    foto4: "Foto 4",
    bookingContacto: "Booking y contacto",
    contactoTitulo: "Conecta con Felialej",
    contactoTexto: "Para colaboraciones, eventos, producción musical o contacto artístico, puedes conectar directamente por redes sociales y plataformas oficiales.",
    modalFoto: "Foto"
  },
  en: {
    pageTitle: "Felialej | Singer and Producer",
    introLabel: "Felialej",
    introSubtitle: "Loading musical experience",
    navInicio: "Home",
    navSobreMi: "About me",
    navTemaDestacado: "Featured track",
    navMusica: "Music",
    navVideo: "Video",
    navGaleria: "Gallery",
    navContacto: "Contact",
    heroSubtitle: "Singer & Producer",
    heroTitle: "Expressed through chords and lyrics",
    heroDescription: "Artist from the city of Villavicencio. Urban, ballad, pop.",
    btnEscucharTema: "Listen to track",
    btnVerGaleria: "View gallery",
    fotoPrincipal: "Main photo",
    fotoPrincipalTexto: "Later we will place here a photo of you in concert",
    sobreEtiqueta: "Meet the artist",
    sobreTitulo: "About Felialej",
    origenTitulo: "Origin",
    origenTexto: "Felialej is a singer and producer from the city of Villavicencio, mainly working in Urban, pop and ballad music.",
    procesoTitulo: "Process",
    procesoTexto: "His artistic project combines interpretation, performance, music production and a sound that seeks to be more memorable.",
    escenarioTitulo: "Stage",
    escenarioTexto: "Every performance and every song are part of an artistic evolution that brings together sound, image and experience.",
    reproduceAhora: "Play now",
    ultimoLanzamiento: "Latest release",
    spotifyPlayer: "Spotify Player",
    spotifyTexto: "Listen to Felialej's latest release directly from Spotify and keep exploring his music on the official platforms.",
    abrirSpotify: "Open in Spotify",
    plataformasOficiales: "Official platforms",
    musicaTitulo: "Music",
    spotifyCardTexto: "Listen to official music",
    appleCardTexto: "Play official songs",
    youtubeCardTexto: "Watch official videos",
    videoEtiqueta: "Audiovisual content",
    videoTitulo: "Featured video",
    videoLabel: "YouTube Player",
    videoNombre: "Felialej on video",
    videoTexto: "Play this video directly on the page and keep exploring more content on the official YouTube channel.",
    abrirYoutube: "Open in YouTube",
    momentosVisuales: "Visual moments",
    galeriaTitulo: "Gallery",
    foto1: "Photo 1",
    foto2: "Photo 2",
    foto3: "Photo 3",
    foto4: "Photo 4",
    bookingContacto: "Booking and contact",
    contactoTitulo: "Connect with Felialej",
    contactoTexto: "For collaborations, events, music production or artistic contact, you can connect directly through social media and official platforms.",
    modalFoto: "Photo"
  },
  pt: {
    pageTitle: "Felialej | Cantor e Produtor",
    introLabel: "Felialej",
    introSubtitle: "Carregando experiência musical",
    navInicio: "Início",
    navSobreMi: "Sobre mim",
    navTemaDestacado: "Tema em destaque",
    navMusica: "Música",
    navVideo: "Video",
    navGaleria: "Galeria",
    navContacto: "Contato",
    heroSubtitle: "Cantor & Produtor",
    heroTitle: "Expresso em acordes e letras",
    heroDescription: "Artista da cidade de Villavicencio. Urbano, balada, pop.",
    btnEscucharTema: "Ouvir tema",
    btnVerGaleria: "Ver galeria",
    fotoPrincipal: "Foto principal",
    fotoPrincipalTexto: "Depois colocaremos aqui uma foto sua em show",
    sobreEtiqueta: "Conheça o artista",
    sobreTitulo: "Sobre Felialej",
    origenTitulo: "Origem",
    origenTexto: "Felialej é um cantor e produtor da cidade de Villavicencio que atua principalmente nos gêneros Urbano, pop e balada.",
    procesoTitulo: "Processo",
    procesoTexto: "Seu projeto artístico combina interpretação, performance, produção musical e um som que busca ser mais memorável.",
    escenarioTitulo: "Palco",
    escenarioTexto: "Cada apresentação e cada música fazem parte de uma evolução artística que une som, imagem e experiência.",
    reproduceAhora: "Reproduzir agora",
    ultimoLanzamiento: "Último lançamento",
    spotifyPlayer: "Spotify Player",
    spotifyTexto: "Ouça o último lançamento de Felialej diretamente no Spotify e continue explorando sua música nas plataformas oficiais.",
    abrirSpotify: "Abrir no Spotify",
    plataformasOficiales: "Plataformas oficiais",
    musicaTitulo: "Música",
    spotifyCardTexto: "Ouvir música oficial",
    appleCardTexto: "Reproduzir músicas oficiais",
    youtubeCardTexto: "Ver vídeos oficiais",
    videoEtiqueta: "Conteúdo audiovisual",
    videoTitulo: "Vídeo em destaque",
    videoLabel: "YouTube Player",
    videoNombre: "Felialej em vídeo",
    videoTexto: "Reproduza este vídeo diretamente na página e continue explorando mais conteúdo no canal oficial do YouTube.",
    abrirYoutube: "Abrir no YouTube",
    momentosVisuales: "Momentos visuais",
    galeriaTitulo: "Galeria",
    foto1: "Foto 1",
    foto2: "Foto 2",
    foto3: "Foto 3",
    foto4: "Foto 4",
    bookingContacto: "Booking e contato",
    contactoTitulo: "Conecte-se com Felialej",
    contactoTexto: "Para colaborações, eventos, produção musical ou contato artístico, você pode se conectar diretamente pelas redes sociais e plataformas oficiais.",
    modalFoto: "Foto"
  }
};

let currentLanguage = localStorage.getItem("felialejLanguage") || "es";

const applyLanguage = (language) => {
  currentLanguage = language;
  localStorage.setItem("felialejLanguage", language);

  const selectedTexts = translations[language];

  document.documentElement.lang = language;
  document.title = selectedTexts.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");

    if (selectedTexts[translationKey]) {
      element.textContent = selectedTexts[translationKey];
    }
  });

  document.querySelectorAll(".language-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
};

document.querySelectorAll(".language-btn").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

applyLanguage(currentLanguage);

// =========================
// INTRO VISUAL AL CARGAR
// =========================
const introLoader = document.getElementById("introLoader");

window.addEventListener("load", () => {
  if (!introLoader) return;

  setTimeout(() => {
    introLoader.classList.add("hide");
  }, 1900);
});

// =========================
// BOTÓN FLOTANTE DE REDES
// =========================
const floatingSocials = document.querySelector(".floating-socials");
const floatingSocialBtn = document.getElementById("floatingSocialBtn");

floatingSocialBtn.addEventListener("click", () => {
  floatingSocials.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (!floatingSocials.contains(event.target)) {
    floatingSocials.classList.remove("active");
  }
});

// =========================
// EFECTO 3D EN TARJETAS
// =========================
const cards3D = document.querySelectorAll(
  ".about-card, .music-card, .gallery-item, .hero-image-card"
);

cards3D.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// =========================
// ANIMACIONES AL HACER SCROLL
// =========================
const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  section.classList.add("reveal");
});

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 120;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =========================
// MODAL DE GALERÍA
// =========================
const galleryItems = document.querySelectorAll(".gallery-item");
const imageModal = document.getElementById("imageModal");
const closeModal = document.getElementById("closeModal");
const modalContent = document.getElementById("modalContent");

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    const imageSource = image ? image.getAttribute("src") : "";
    const imageAlt = image ? image.getAttribute("alt") : `${translations[currentLanguage].modalFoto} ${index + 1}`;

    if (imageSource) {
      modalContent.innerHTML = `<img src="${imageSource}" alt="${imageAlt}" />`;
    } else {
      modalContent.innerHTML = `<p>${translations[currentLanguage].modalFoto} ${index + 1}</p>`;
    }

    imageModal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  imageModal.classList.remove("active");
});

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    imageModal.classList.remove("active");
  }
});

// =========================
// TEXTO DINÁMICO EN HERO
// =========================
const heroSubtitle = document.querySelector(".hero-subtitle");

const heroPhrases = {
  es: [
    "Cantante & Productor",
    "Desde Villavicencio, Colombia",
    "Urbano, balada y pop",
    "Evolución musical en redes sociales"
  ],
  en: [
    "Singer & Producer",
    "From Villavicencio, Colombia",
    "Urban, ballad and pop",
    "Musical evolution on social media"
  ],
  pt: [
    "Cantor & Produtor",
    "De Villavicencio, Colômbia",
    "Urbano, balada e pop",
    "Evolução musical nas redes sociais"
  ]
};

let phraseIndex = 0;

setInterval(() => {
  phraseIndex = (phraseIndex + 1) % heroPhrases[currentLanguage].length;

  heroSubtitle.style.opacity = "0";
  heroSubtitle.style.transform = "translateY(10px)";

  setTimeout(() => {
    heroSubtitle.textContent = heroPhrases[currentLanguage][phraseIndex];
    heroSubtitle.style.opacity = "1";
    heroSubtitle.style.transform = "translateY(0)";
  }, 250);
}, 2800);

// =========================
// EFECTO DE BRILLO EN BOTONES
// =========================
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);
  });
});

// =========================
// HEADER CON SOMBRA AL BAJAR
// =========================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// =========================
// PROGRESO DE SCROLL
// =========================
const scrollProgress = document.getElementById("scrollProgress");

const updateScrollProgress = () => {
  if (!scrollProgress) return;

  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

  scrollProgress.style.width = `${progress}%`;
};

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("load", updateScrollProgress);

// =========================
// MENÚ ACTIVO SEGÚN SECCIÓN
// =========================
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
const observedSections = document.querySelectorAll("main section[id]");

const updateActiveLink = () => {
  let currentSectionId = "inicio";

  observedSections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 160 && rect.bottom >= 160) {
      currentSectionId = section.id;
    }
  });

  navAnchors.forEach((link) => {
    link.classList.toggle("active-link", link.getAttribute("href") === `#${currentSectionId}`);
  });
};

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// =========================
// CURSOR REACTIVO EN ELEMENTOS INTERACTIVOS
// =========================
const interactiveElements = document.querySelectorAll(
  "a, button, .music-card, .gallery-item, .about-card"
);

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor?.classList.add("hovered");
    cursorGlow?.classList.add("hovered");
  });

  element.addEventListener("mouseleave", () => {
    cursor?.classList.remove("hovered");
    cursorGlow?.classList.remove("hovered");
  });
});

// =========================
// FONDO CON PARALLAX SUAVE
// =========================
const backgroundBlobs = document.querySelectorAll(".background-effects span");

window.addEventListener("mousemove", (event) => {
  const moveX = (event.clientX / window.innerWidth - 0.5) * 18;
  const moveY = (event.clientY / window.innerHeight - 0.5) * 18;

  backgroundBlobs.forEach((blob, index) => {
    const depth = (index + 1) * 0.55;
    blob.style.marginLeft = `${moveX * depth}px`;
    blob.style.marginTop = `${moveY * depth}px`;
  });
});

// =========================
// AVISO TIKTOK EN NAVEGADOR DE INSTAGRAM
// =========================
const tikTokUrl = "https://www.tiktok.com/@felialej/";
const instagramBrowserNotice = document.getElementById("instagramBrowserNotice");
const instagramBrowserClose = document.getElementById("instagramBrowserClose");
const copyTikTokLink = document.getElementById("copyTikTokLink");

const isInstagramInAppBrowser = () => {
  return /Instagram/i.test(navigator.userAgent);
};

const openInstagramTikTokNotice = () => {
  if (!instagramBrowserNotice) return;

  instagramBrowserNotice.classList.add("active");
  instagramBrowserNotice.setAttribute("aria-hidden", "false");
};

const closeInstagramTikTokNotice = () => {
  if (!instagramBrowserNotice) return;

  instagramBrowserNotice.classList.remove("active");
  instagramBrowserNotice.setAttribute("aria-hidden", "true");
};

document.querySelectorAll('a[href*="tiktok.com/@felialej"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!isInstagramInAppBrowser()) return;

    event.preventDefault();
    openInstagramTikTokNotice();
  });
});

instagramBrowserClose?.addEventListener("click", closeInstagramTikTokNotice);

instagramBrowserNotice?.addEventListener("click", (event) => {
  if (event.target === instagramBrowserNotice) {
    closeInstagramTikTokNotice();
  }
});

copyTikTokLink?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(tikTokUrl);
    copyTikTokLink.textContent = "Enlace copiado";
  } catch (error) {
    copyTikTokLink.textContent = "Copia: @felialej";
  }

  setTimeout(() => {
    copyTikTokLink.textContent = "Copiar enlace";
  }, 2200);
});

