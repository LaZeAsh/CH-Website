document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.animated');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('fade-in-up')) {
                    entry.target.style.animation = 'fadeInUp 1s forwards';
                } else {
                    entry.target.style.animation = 'fadeIn 1s forwards';
                }
                observer.unobserve(entry.target);
            }
        });
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
