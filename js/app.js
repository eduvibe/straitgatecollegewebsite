/* scripts.js */


document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click', function() {
        header.classList.add('nav-open');
    });

    closeIcon.addEventListener('click', function() {
        header.classList.remove('nav-open');
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



//see more function handling
// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.managment-see-more').addEventListener('click', function() {
//         var moreMembers = document.getElementById('more-members');
//         if (moreMembers.classList.contains('hidden')) {
//             moreMembers.classList.remove('hidden');
//             moreMembers.style.display = 'flex';
//             this.innerHTML = 'see less <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>';
//         } else {
//             moreMembers.classList.add('hidden');
//             moreMembers.style.display = 'none';
//             this.innerHTML = 'see more <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>';
//         }
//     });
// });



