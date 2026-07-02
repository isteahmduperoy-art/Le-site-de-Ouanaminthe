// Fonksyon pou navige ant paj yo
function showPage(pageId) {
    // Redireksyon pou paj prensipal la
    if (pageId === 'home') {
        window.location.href = '../index.html';
    } else {
        // Redireksyon pou lòt paj yo nan katab 'components'
        window.location.href = 'components/' + pageId + '.html';
    }
}

// Fonksyon pou mete klas 'active' sou lyen navigasyon an
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');

        if (currentPath.includes(linkHref)) {
            link.classList.add('active');
        }
    });
}

// Lè paj la chaje, mete lyen navigasyon aktif la
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();

    // Ajoute lazy loading pou imaj yo
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});
