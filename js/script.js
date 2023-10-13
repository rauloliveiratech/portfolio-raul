document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.cabeçalho-link a');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove o "#" do href
            scrollToSection(targetId);
        });
    });

    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const typed = new Typed("span", {
        strings: [,"Web Developer.", "Front-end Developer.", "Raul Oliveira."],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        // } else {
        //     entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));