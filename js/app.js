baguetteBox.run(".gallery");



const searchBar = document.querySelector("#search");


searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const caption = document.querySelectorAll(".gallery a");

  for (i = 0; i < caption.length; i++) {
    const text = document.getElementsByTagName('a')[i].getAttribute('data-caption').toLowerCase();
    const imageSearch = text.indexOf(term)
    if (imageSearch > -1) {
      (document.getElementsByTagName('a')[i]).style.display = 'block';
    } else {
        (document.getElementsByTagName('a')[i]).style.display = 'none';
    }
  };
});
