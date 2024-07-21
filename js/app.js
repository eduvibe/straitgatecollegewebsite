/* scripts.js */

document.querySelector('.menu-icon').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const icon = document.querySelector('.menu-icon');
    icon.classList.toggle('close');
});



    document.getElementById('toggleButton').addEventListener('click', function() {
        var moreInfo = document.getElementById('moreInfo');
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            moreInfo.style.display = 'none';
            this.textContent = 'Read More';
        }
    });






document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const mainContent = document.getElementById('main-content');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const sectionId = event.target.getAttribute('href').substring(1);
            loadSection(sectionId);
        });
    });

    const loadSection = (sectionId) => {
        navLinks.forEach(link => link.classList.remove('active'));
        document.querySelector(`.nav-links a[href="#${sectionId}"]`).classList.add('active');
        
        // Here you would fetch and display the content for the sectionId
        // For simplicity, we'll just update the main content
        mainContent.innerHTML = `<section id="${sectionId}"><h2>${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}</h2><p>Content for ${sectionId} goes here...</p></section>`;
    };
});






