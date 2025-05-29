const images = [
  { src: "https://source.unsplash.com/400x300/?nature,forest", title: "Forest", category: "nature" },
  { src: "https://source.unsplash.com/400x300/?nature,river", title: "River", category: "nature" },
  { src: "https://source.unsplash.com/400x300/?animal,lion", title: "Lion", category: "animals" },
  { src: "https://source.unsplash.com/400x300/?animal,cat", title: "Cat", category: "animals" },
  { src: "https://source.unsplash.com/400x300/?city,night", title: "City Night", category: "cities" },
  { src: "https://source.unsplash.com/400x300/?city,skyline", title: "Skyline", category: "cities" },
  { src: "https://source.unsplash.com/400x300/?nature,mountain", title: "Mountain", category: "nature" },
  { src: "https://source.unsplash.com/400x300/?animal,dog", title: "Dog", category: "animals" }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function displayImages(filterText = "", category = "all") {
  gallery.innerHTML = "";

  const filtered = images.filter(img => {
    const matchesText = img.title.toLowerCase().includes(filterText.toLowerCase());
    const matchesCategory = category === "all" || img.category === category;
    return matchesText && matchesCategory;
  });

  if (filtered.length === 0) {
    gallery.innerHTML = "<p>No images found.</p>";
    return;
  }

  filtered.forEach(img => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");
    div.innerHTML = `<img src="${img.src}" alt="${img.title}" title="${img.title}" />`;
    gallery.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  displayImages(searchInput.value, categorySelect.value);
});

categorySelect.addEventListener("change", () => {
  displayImages(searchInput.value, categorySelect.value);
});

displayImages();
