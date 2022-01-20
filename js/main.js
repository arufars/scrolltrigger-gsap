gsap.registerPlugin(ScrollTrigger);

gsap.to(
    ".overlay",
    {
        scrollTrigger: {
            trigger: ".overlay",
            // markers: true,
            start: "center 700",
            // end: "200 center",
            // scrub: true
        },
        duration: 2,
        x: 30,
        skewX: 0,
        xPercent: 100,
        delay: 0.5,
        ease: "power2.inOut",
    },
    "+=1"
);
gsap.to(
    "img",
    {
        scrollTrigger: {
            trigger: "img",
            // end: "200 center",
            // markers: true,
            start: "center 700",
            // scrub: true
        },
        duration: 2,
        // delay: 2,
        delay: 0.5,
        scale: 1,
        ease: "power2.inOut",
    },
    "+=300px"
);

gsap.to(
    ".project-info",
    {
        scrollTrigger: {
            trigger: "img",
            // end: "200 center",
            // markers: true,
            start: "center 700",
            // scrub: true
        },
        duration: 1.5,
        x: 1,
        opacity: 1,
        delay: 2,
        ease: "power2.Out",
    },
    "+=1"
);

gsap.from(".up", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
});

gsap.from(
    ".small-title",
    {
        duration: 1,
        delay: 0.5,
        opacity: 0,
        ease: "power4.out",
        y: 30,
    },
    "-=1"
);

gsap.from(
    ".sub-title",
    {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
    },
    "-=.2"
);
gsap.from(
    ".project-link",
    {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.easeOut",
    },
    "-=.1"
);

// scroll magic
window.history.scrollRestoration = "manual"
