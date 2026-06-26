/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.6s";
    }, 1200);

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.getElementById("typing-text");

const roles = [

    "Java Full Stack Developer",
    "Spring Boot Developer",
    "Backend Developer",
    "Frontend Developer",
    "Software Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


/* =========================================
   SCROLL PROGRESS BAR
========================================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";
});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML =
        navLinks.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
});


/* =========================================
   CLOSE MENU ON LINK CLICK
========================================= */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.innerHTML =
                '<i class="fa-solid fa-bars"></i>';
        });

    });


/* =========================================
   ACTIVE NAVBAR LINK
========================================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");
        }
    });

});


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .timeline-item"
    );

function revealOnScroll() {

    const trigger =
        window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top =
            element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");
            element.classList.add("reveal");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================================
   COUNTER ANIMATION
========================================= */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const increment =
            target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText = target;
            }
        };

        updateCounter();
    });

    counterStarted = true;
}

window.addEventListener("scroll", () => {

    const aboutSection =
        document.querySelector("#about");

    if (!aboutSection) return;

    const top =
        aboutSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        startCounters();
    }
});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const form =
    document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs =
            form.querySelectorAll(
                "input, textarea"
            );

        let valid = true;

        inputs.forEach(input => {

            if (
                input.value.trim() === ""
            ) {

                valid = false;

                input.style.border =
                    "2px solid red";

            } else {

                input.style.border =
                    "2px solid #22c55e";
            }
        });

        if (valid) {

            alert(
                "Message Sent Successfully!"
            );

            form.reset();

            inputs.forEach(input => {

                input.style.border = "none";
            });

        } else {

            alert(
                "Please fill all required fields."
            );
        }
    });

}


/* =========================================
   PARTICLE BACKGROUND
========================================= */

const particleContainer =
    document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 60; i++) {

        const particle =
            document.createElement("span");

        const size =
            Math.random() * 6 + 2;

        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;

        particle.style.position =
            "absolute";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            "rgba(56,189,248,.4)";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animation =
            `floatParticle ${
                Math.random() * 10 + 5
            }s linear infinite`;

        particleContainer.appendChild(
            particle
        );
    }

    const style =
        document.createElement("style");

    style.innerHTML = `

    @keyframes floatParticle {

        from {

            transform:
                translateY(0px);
        }

        to {

            transform:
                translateY(-100vh);
        }
    }
    `;

    document.head.appendChild(style);
}


/* =========================================
   STICKY NAVBAR SHADOW
========================================= */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow = "none";
    }
});


/* =========================================
   SMOOTH FADE IN HERO
========================================= */

window.addEventListener("load", () => {

    const heroContent =
        document.querySelector(
            ".hero-content"
        );

    const heroImage =
        document.querySelector(
            ".hero-image"
        );

    heroContent.classList.add(
        "fade-up"
    );

    heroImage.classList.add(
        "fade-up"
    );
});


/* =========================================
   CONSOLE SIGNATURE
========================================= */

console.log(
`
===================================
 Portfolio by Asmit Singh
 Java Full Stack Developer
===================================
`
);

// =========================
// Contact Form EmailJS
// =========================

emailjs.init("dcip1OZfjha5GS9Xy");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
};

    emailjs.send(
        "service_ob1a1qf",
        "template_fljkn6w",
        params
    )

    .then(function () {

        alert("Message Sent Successfully!");

        contactForm.reset();

    })

    .catch(function (error) {

        console.error(error);

        alert("Failed To Send Message!");

    });

});