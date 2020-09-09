const search = document.querySelector("#search");
const caption = document.querySelectorAll(".gallery a");

const handleSearch = (event) => {
  const searchTerm = event.target.value.toLowerCase();

  caption.forEach((caption) => {
    const text = caption.textContent.toLowerCase();
    const box = caption.firstElementChild;

    if (text.indexOf(searchTerm) > -1) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
};

// search.addEventListener('keyup', 'handleSearch');

const search = new Filter("search", "data-caption");
