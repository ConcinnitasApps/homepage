
(function () {
    const textEle = document.getElementById('coming-soon');
    setTimeout(() => {
        textEle.classList.add('text-breathe');
        textEle.classList.remove('animate-up');
    }, 1000)
})();
