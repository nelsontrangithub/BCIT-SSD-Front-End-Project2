document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body');
    const btn = document.querySelector('.hamburger');
    btn.onclick = function () {
        body.classList.toggle('show');
    }
});