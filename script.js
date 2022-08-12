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