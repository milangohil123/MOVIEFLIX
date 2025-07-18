const movieGrid = document.getElementById("movieGrid");
const pagination = document.getElementById("pagination");
const sectionTitle = document.getElementById("sectionTitle");

let currentCategory = "home";
let currentPage = 1;

// ✅ Your complete data object here (add your actual data below)
const data = {
  home: [
     {
      title: "Super Man",
      poster: "assets/posters/superman.jpg",
      downloads: {
        "480p": "https://gyanigurus.info/view/687241755b83b",
        "720p": "https://gyanigurus.info/view/687241a07a43c",
        "1080p": "https://gyanigurus.info/view/68724186ca4b4"
      }
    },
    {
      title: "F1",
      poster: "assets/posters/f1.jpg",
      downloads: {
        "480p": "https://gyanigurus.info/view/685f8978d46b1",
        "720p": "https://gyanigurus.info/view/685f8946033b2",
        "1080p": "https://gyanigurus.info/view/685f890a75587"
      }
    },
    {
      title: "Sitaare Zameen Par",
      poster: "assets/posters/sitarre.jpg",
      downloads: {
        "480p": "https://gyanigurus.info/view/6876a4d83ba7e",
        "720p": "https://gyanigurus.info/view/6876a4e9a7357",
        "1080p": "https://gyanigurus.info/view/6876a4c9c9765"
      }
    },
    {
      title: "Maalik",
      poster: "assets/posters/mallik.jpg",
      downloads: {
        "480p": "https://gyanigurus.info/view/687150fd4e000",
        "720p": "https://gyanigurus.info/view/68715111bca05",
        "1080p": "https://gyanigurus.info/view/687150e453e05"
      }
    },
    {
      title: "Maa",
      poster: "assets/posters/maa.jpg",
      downloads: {
        "480p": "https://gyanigurus.info/view/685ee3206bf38",
        "720p": "https://gyanigurus.info/view/685ee3206bf38",
        "1080p": "https://gyanigurus.info/view/685ee3206bf38"
      }
    },
    {
      title: "Ankhon ki Gustaakhiyan",
      poster: "assets/posters/ankhho.jpg",
      downloads: {
        "480p": "https://leechpro.blog/archives/30223",
        "720p": "https://gyanigurus.info/view/685f8946033b2",
        "1080p": "https://gyanigurus.info/view/685f890a75587"
      }
    },
  ],

  movies: {
    1: [
      {
        title: "The Batman",
        poster: "assets/posters/batman.jpg",
        downloads: {
          "480p": "#",
          "720p": "#",
          "1080p": "#"
        }
      }
    ],
    2: [
      {
        title: "Iron Man",
        poster: "assets/posters/ironman.jpg",
        downloads: {
          "480p": "#",
          "720p": "#",
          "1080p": "#"
        }
      }
    ]
  },

  series: {
    1: [
      {
        title: "Stranger Things",
        poster: "assets/posters/stranger.jpg",
        downloads: {
          "480p": "#",
          "720p": "#",
          "1080p": "#"
        }
      }
    ],
    2: [
      {
        title: "Loki",
        poster: "assets/posters/loki.jpg",
        downloads: {
          "480p": "#",
          "720p": "#",
          "1080p": "#"
        }
      }
    ]
  },

  "hollywood-movies": [
    {
      title: "Jurassic World Rebirth",
      poster: "assets/posters/jura.jpg",
      downloads: {
        "480p": "",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "Final Destination Bloodlines",
      poster: "assets/posters/Final_Destination_Bloodlines_(2025)_poster.jpg",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "The Monkey",
      poster: "assets/posters/monkey.jpeg",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    }
    ,
    {
      title: "A Working Man",
      poster: "assets/posters/GB_WORKMAN_VERT_MAIN_ALT_2764x4096_INTL-691x1024.jpg",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    }
    ,
    {
      title: "Heads of State",
      poster: "assets/posters/head.jpg",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "Warfare",
      poster: "assets/posters/Warfare_film_poster.jpg",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "M3GAN 2.0",
      poster: "assets/posters/megan.jpg",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "How to Train Your Dragon",
      poster: "assets/posters/traindragon.webp",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "Wall to Wall",
      poster: "assets/posters/Wall to Wall.webp",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "Oddity",
      poster: "assets/posters/oddidity.webp",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "Boonie Bears: The Wild Life",
      poster: "assets/posters/Boonie BearsThe Wild Life.webp",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "Ballerina",
      poster: "assets/posters/ballerinanew.jpg",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },
    {
      title: "Clown in a Cornfield",
      poster: "assets/posters/Clown in a Cornfield.webp",
      downloads: {
        "480p": "#",
        "720p": "#",
        "1080p": "#"
      }
    },

  ]
};

// ✅ Render cards (same for any category)
function renderCards(items) {
  movieGrid.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <div class="downloads">
        <a href="${item.downloads["480p"]}" target="_blank">480p</a>
        <a href="${item.downloads["720p"]}" target="_blank">720p</a>
        <a href="${item.downloads["1080p"]}" target="_blank">1080p</a>
      </div>
    `;
    movieGrid.appendChild(card);
  });
}

// ✅ Home loader
function loadHome() {
  currentCategory = "home";
  sectionTitle.textContent = "Now Running in Theaters";
  pagination.innerHTML = "";
  renderCards(data.home);
}

// ✅ Movies / Series paginated object logic
function switchCategory(category) {
  currentCategory = category;
  sectionTitle.textContent = category === "movies" ? "Available Movies" : "Available Series";
  renderObjectPagination(category);
  loadObjectPage(category, 1);
}

function renderObjectPagination(category) {
  pagination.innerHTML = "";
  const totalPages = Object.keys(data[category]).length;
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => loadObjectPage(category, i);
    pagination.appendChild(btn);
  }
}

function loadObjectPage(category, page) {
  currentPage = page;
  const items = data[category][page] || [];
  renderCards(items);
}

// ✅ Inner category like bollywood-movies
function setCategory(category) {
  currentCategory = category;
  sectionTitle.textContent = category.replace('-', ' ').toUpperCase();

  const items = data[category];
  if (Array.isArray(items)) {
    const totalPages = Math.ceil(items.length / 6);
    renderArrayPagination(items, totalPages);
    renderCards(items.slice(0, 6));
  } else {
    movieGrid.innerHTML = `<p style="padding: 1rem;">No content available for "${category}".</p>`;
    pagination.innerHTML = "";
  }
}

function renderArrayPagination(items, totalPages) {
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => {
      const start = (i - 1) * 6;
      const end = start + 6;
      currentPage = i;
      renderCards(items.slice(start, end));
    };
    pagination.appendChild(btn);
  }
}
function searchMovies() {
  const input = document.getElementById("searchInput").value.toUpperCase().trim();
  if (input === "") {
    loadHome();
    return;
  }

  function toggleSearch() {
  const container = document.querySelector('.search-container');
  container.classList.toggle('active');

  const input = document.getElementById('searchInput');
  if (container.classList.contains('active')) {
    input.focus();
  } else {
    input.value = "";
    loadHome();
  }
}

  const allItems = [];

  // Collect all entries from home + movies object + series object + inner categories
  if (Array.isArray(data.home)) allItems.push(...data.home);

  // For object-type categories (like movies, series)
  ["movies", "series"].forEach(category => {
    if (typeof data[category] === "object") {
      Object.values(data[category]).forEach(arr => allItems.push(...arr));
    }
  });

  // Inner category arrays
  Object.keys(data).forEach(key => {
    if (Array.isArray(data[key]) && key !== "home") {
      allItems.push(...data[key]);
    }
  });

  // Filter results by uppercase match
  const results = allItems.filter(item =>
    item.title.toUpperCase().includes(input)
  );

  currentCategory = "search";
  sectionTitle.textContent = `Search Results for "${input}"`;
  pagination.innerHTML = "";

  if (results.length > 0) {
    renderCards(results.slice(0, 6));
    renderArrayPagination(results, Math.ceil(results.length / 6));
  } else {
    movieGrid.innerHTML = `<p style="padding: 1rem;">No results found for "${input}".</p>`;
  }
}

function toggleSearch() {
  const container = document.getElementById('searchContainer');
  container.classList.toggle('active');

  const input = document.getElementById('searchInput');
  if (container.classList.contains('active')) {
    input.focus();
  } else {
    input.value = "";
    loadHome();
  }
}

// ✅ Hero slideshow
const heroSection = document.getElementById("heroSection");
const heroImages = [
  "assets/posters/squid.jpg",
  "assets/posters/supermanposter.jpg  ",
  "assets/posters/ballerina-movie-3840x2160-22626.jpg"
];
let currentHero = 0;

function cycleHeroImages() {
  currentHero = (currentHero + 1) % heroImages.length;
  heroSection.style.backgroundImage = `url('${heroImages[currentHero]}')`;
}

setInterval(cycleHeroImages, 4000);

// ✅ Auto load home
window.onload = loadHome;
