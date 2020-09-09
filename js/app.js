baguetteBox.run(".gallery");



const searchBar = document.querySelector("#search");


searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const caption = document.querySelectorAll(".gallery a");
  const imgText = document.getElementsByTagName('a');

  for (i = 0; i < caption.length; i++) {
    const text = imgText[i].getAttribute('data-caption').toLowerCase();
    const imageSearch = text.indexOf(term)
    if (imageSearch > -1) {
      imgText[i].style.display = 'block';
    } else {
        imgText[i].style.display = 'none';
    }
  }
});
