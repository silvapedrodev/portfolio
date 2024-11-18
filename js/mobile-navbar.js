/* Função responsável por chamar o menu mobile */

export function navBar() {
  const menu = document.querySelector(".mobile-menu")
  const nav = document.querySelector(".nav-menu")
  const btnClose = document.querySelector(".btnClose")
  const btnOpen = document.querySelector(".btnOpen")

  menu.addEventListener("click", () => {
    nav.classList.toggle("active")
    btnOpen.classList.toggle("active")
    btnClose.classList.toggle("active")
    document.body.classList.toggle('no-scroll')
  })
}
