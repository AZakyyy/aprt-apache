document.addEventListener("DOMContentLoaded", function () {
    // Typing Effect (untuk Hero Section)
    const typingElement = document.querySelector(".typing");
    const textArray = ["Web Developer", "UI/UX Designer", "Freelancer"];
    let textIndex = 0;
    let charIndex = 0;
    function typeText() {
        if (charIndex < textArray[textIndex].length) {
            typingElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 1500);
        }
    }
    function eraseText() {
        if (charIndex > 0) {
            typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, 500);
        }
    }
    typeText();

    // Parallax Effect
    window.addEventListener("scroll", function () {
        document.querySelector(".hero").style.backgroundPositionY = window.scrollY * 0.5 + "px";
    });

    // Mouse Trail Effect
    document.addEventListener("mousemove", function (e) {
        let trail = document.createElement("div");
        trail.className = "mouse-trail";
        trail.style.left = e.pageX + "px";
        trail.style.top = e.pageY + "px";
        document.body.appendChild(trail);
        setTimeout(() => {
            trail.remove();
        }, 500);
    });

    // Animate Skill Bars on Scroll
    const skillBars = document.querySelectorAll(".skill-progress");
    function animateSkills() {
        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute("style").split(":")[1];
        });
    }
    window.addEventListener("scroll", function () {
        if (document.querySelector("#skills").getBoundingClientRect().top < window.innerHeight) {
            animateSkills();
        }
    });

    // Floating Particles
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        });
        requestAnimationFrame(drawParticles);
    }
    drawParticles();
});
