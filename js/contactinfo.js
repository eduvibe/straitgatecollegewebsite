document.addEventListener('DOMContentLoaded', () => {
    const contactInfo = document.querySelector('.contact-info');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Downscroll
            contactInfo.classList.add('hidden');
        } else {
            // Upscroll
            contactInfo.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    })

}
)