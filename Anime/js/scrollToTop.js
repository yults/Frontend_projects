const scrollToTop = () => {
    const topBtn = document.querySelector('#scrollToTopButton')
    topBtn.addEventListener('click', (event) => {
        event.preventDefault
        seamless.elementScrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
}
scrollToTop()