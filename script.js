function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  const alt = document.querySelector("#profile img alt")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")

    img.setAttribute("alt", "Homem de camisa preto em um fundo branco")
  } else {
    // se tiver sem light mode, adicionar manter a imagem
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Homem de camisa preto e no fundo Paisagens de Árvores",
    )
  }
}
/*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
    */
