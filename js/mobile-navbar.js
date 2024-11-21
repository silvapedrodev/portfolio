/* Função responsável por chamar o menu mobile */

export function navBar() {
  const menu = document.querySelector(".mobile-menu")
  const nav = document.querySelector(".nav-menu")
  const btnClose = document.querySelector(".btnClose")
  const btnOpen = document.querySelector(".btnOpen")
  const btnMenu = document.querySelectorAll("nav li a")
  const mobileBreakpoint = 840 // valor deo breakpoint definido no css

  // --- eventos do botão de menu mobile ---

  menu.addEventListener("click", () => {
    // abre o menu somente se estiver no tamanho mobile (max: 840px) 
    if(window.innerWidth <= mobileBreakpoint) {
      nav.classList.toggle("active")
      btnOpen.classList.toggle("active")
      btnClose.classList.toggle("active")
    }
    
    if(nav.classList.contains("active")) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  })

  // ---- Fecha o menu ao clicar em algum link --- 

  btnMenu.forEach(button => {
    button.addEventListener("click", () => {
      if(window.innerWidth <= mobileBreakpoint) {
        nav.classList.toggle("active")
        btnOpen.classList.toggle("active")
        btnClose.classList.toggle("active")
        document.body.classList.remove("no-scroll");
      }
    })
  })

  // --- Garante o estado correto ao redimensionar a janela --- 

  window.addEventListener("resize", () => {
    if (window.innerWidth > mobileBreakpoint) {
      // Garante que o menu esteja fechado e o scroll ativo no modo desktop
      nav.classList.remove("active");
      btnOpen.classList.remove("active");
      btnClose.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
}
