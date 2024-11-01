// Inicijalizacija AOS
AOS.init();

// Glavni kod koji se izvršava nakon učitavanja DOM-a
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect kod
    const text = "Welkom op mijn portfolio website!";
    const typedTextElement = document.getElementById('typed-text');
    const restContent = document.getElementById('rest-content');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typedTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                restContent.style.opacity = '1';
                restContent.style.transition = 'opacity 1s ease-in-out';
            }, 500);
        }
    }

    typeWriter();

    // Cursor light kod
    const cursorLight = document.getElementById('cursor-light');
    if (cursorLight) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            cursorLight.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
        });
    } else {
        console.error('Element s ID-om "cursor-light" nije pronađen.');
    }
});