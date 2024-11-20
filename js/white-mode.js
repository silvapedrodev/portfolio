// Função que chama o modo claro (White Mode)

export function addWhiteMode() {
  const html = document.querySelector("html")
  const btnDark = document.querySelector("#dark")
  const btnWhite = document.querySelector("#white")


  function whiteMode(event) {
    if (event.type == "click") {
      html.classList.toggle("white-mode")
      btnDark.classList.toggle("active")
      btnWhite.classList.toggle("active")
    }
  }

  btnDark.addEventListener("click", whiteMode)
  btnWhite.addEventListener("click", whiteMode)
}
