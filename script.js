const cursor = document.querySelector('.cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const interactives = document.querySelectorAll('a, button, .skill-badge, .cert-card, .card, input, textarea');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const backToTop = document.getElementById("backToTop");
window.addEventListener('scroll', () => {
    backToTop.style.display = (window.pageYOffset > 500) ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fonction de défilement pour la section Réalisations
function scrollProjects(direction) {
    const slider = document.getElementById('projectsSlider');
    const scrollAmount = 380; 
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}