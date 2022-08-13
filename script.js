function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu a")
  const tabContent = document.querySelectorAll(".js-tabcontent .content__item")

  if (tabMenu.length && tabContent.length) {
    function activeTab(event, index) {
      event.preventDefault()

      tabContent.forEach(contentItem => {
        contentItem.classList.remove("ativo")
      })

      tabContent[index].classList.add("ativo")
    }

    tabMenu.forEach((link, index) => {
      link.addEventListener("click", () => {
        activeTab(event, index)
      })
    })
  }
}

initTabNav()

function initAccordion() {
  const accordion = document.querySelectorAll(".js-accordion h3")

  if (accordion.length) {
    function activeAccordion() {
      this.classList.toggle("ativo")
      this.nextElementSibling.classList.toggle("ativo")
    }

    accordion.forEach(item => {
      item.addEventListener("click", activeAccordion)
    })
  }
}

initAccordion()