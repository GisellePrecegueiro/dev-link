function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  //toggle faz todo o if/else

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}

  //pegar tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }
}
