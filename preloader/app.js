//function that deletes the preloader object

window.addEventListener('load', () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preload-finish");
})