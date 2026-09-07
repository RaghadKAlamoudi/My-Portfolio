/* =========================================
   PORTFOLIO JAVASCRIPT
   Raghad Alamoudi
========================================= */


/* =========================================
   PAGE INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    const menuButton =
        document.querySelector(".menu-button");

    const navbar =
        document.querySelector(".navbar");


    if (menuButton && navbar) {

        menuButton.addEventListener("click", () => {

            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {

                menuButton.textContent = "✕";

                menuButton.setAttribute(
                    "aria-label",
                    "Close navigation"
                );

            } else {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        });

    }


    /* =========================================
       CLOSE MOBILE MENU WHEN LINK IS CLICKED
    ========================================= */

    const navLinks =
        document.querySelectorAll(".nav-list a");


    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (navbar) {

                navbar.classList.remove("active");

            }

            if (menuButton) {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        });

    });


    /* =========================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", (event) => {

        if (!navbar || !menuButton) {
            return;
        }


        const clickedInsideNavbar =
            navbar.contains(event.target);

        const clickedMenuButton =
            menuButton.contains(event.target);


        if (
            !clickedInsideNavbar &&
            !clickedMenuButton &&
            navbar.classList.contains("active")
        ) {

            navbar.classList.remove("active");

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-label",
                "Open navigation"
            );

        }

    });


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements =
        document.querySelectorAll(
            ".section-title, " +
            ".about-content, " +
            ".skill-card, " +
            ".experience-card, " +
            ".project-card, " +
            ".education-card, " +
            ".certificate-card, " +
            ".volunteer-card, " +
            ".conference-card, " +
            ".contact-content"
        );


    /*
        Add the reveal class to each element.
    */

    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    /*
        Observe elements as they enter
        the screen.
    */

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        /*
            Start observing elements.
        */

        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    } else {

        /*
            Fallback for older browsers.
        */

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }


    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            ".nav-list a"
        );


    if ("IntersectionObserver" in window) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            const currentSection =
                                entry.target.getAttribute(
                                    "id"
                                );


                            navigationLinks.forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active"
                                    );


                                    const linkTarget =
                                        link.getAttribute(
                                            "href"
                                        );


                                    if (
                                        linkTarget ===
                                        `#${currentSection}`
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }

                    });

                },
                {
                    rootMargin:
                        "-30% 0px -60% 0px",

                    threshold: 0
                }
            );


        sections.forEach((section) => {

            sectionObserver.observe(section);

        });

    }


    /* =========================================
       HEADER SHADOW ON SCROLL
    ========================================= */

    const header =
        document.querySelector(".header");


    const handleHeaderScroll = () => {

        if (!header) {
            return;
        }


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );


    /* =========================================
       BACK TO TOP BUTTON
    ========================================= */

    const backToTop =
        document.createElement("button");


    backToTop.className =
        "back-to-top";


    backToTop.innerHTML = "↑";


    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );


    document.body.appendChild(
        backToTop
    );


    /*
        Show/hide button while scrolling.
    */

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    /*
        Scroll to the top.
    */

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* =========================================
       PROJECT IMAGE FALLBACK
    ========================================= */

    const projectImages =
        document.querySelectorAll(
            ".project-image img"
        );


    projectImages.forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";


                if (image.parentElement) {

                    image.parentElement.classList.add(
                        "image-error"
                    );

                }

            }
        );

    });


    /* =========================================
       CURRENT YEAR
    ========================================= */

    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerYear) {

        const currentYear =
            new Date().getFullYear();


        footerYear.innerHTML =
            `© ${currentYear} Raghad Alamoudi. All Rights Reserved.`;

    }


    /* =========================================
       EMAIL BUTTON
    ========================================= */

    const emailLinks =
        document.querySelectorAll(
            'a[href^="mailto:"]'
        );


    emailLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const email =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !email ||
                    email.includes(
                        "your-email@example.com"
                    )
                ) {

                    event.preventDefault();


                    alert(
                        "Please add your professional email address first."
                    );

                }

            }
        );

    });


    /* =========================================
       PROJECT GITHUB PLACEHOLDER CHECK
    ========================================= */

    const githubLinks =
        document.querySelectorAll(
            'a[href="https://github.com/"]'
        );


    githubLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                alert(
                    "Please replace this link with your GitHub profile or project repository."
                );

            }
        );

    });


    /* =========================================
       KEYBOARD ACCESSIBILITY
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            /*
                Close mobile navigation
                with Escape.
            */

            if (
                event.key === "Escape" &&
                navbar &&
                navbar.classList.contains(
                    "active"
                )
            ) {

                navbar.classList.remove(
                    "active"
                );


                if (menuButton) {

                    menuButton.textContent =
                        "☰";


                    menuButton.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }

            }

        }
    );


    /* =========================================
       PAGE LOADED
    ========================================= */

    document.body.classList.add(
        "page-loaded"
    );

});