document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Ocultar el loader después de 4 segundos
    setTimeout(function () {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 4000); // 4000 milisegundos = 4 segundos
});
