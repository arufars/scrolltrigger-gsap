gsap.registerPlugin(ScrollTrigger);


gsap.to(
    ".lay1",
    {
        scrollTrigger: {
            trigger: ".lay1",
            start: "center 700",
        },
        duration: 2,
        x: 30,
        skewX: 0,
        xPercent: 100,
        ease: "power2.inOut",
    },
    "+=1"
);
gsap.to(
    ".lay2",
    {
        scrollTrigger: {
            trigger: ".lay2",
            start: "center 700",
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
    ".img1",
    {
        scrollTrigger: {
            trigger: ".img1",
            start: "center 700",
        },
        duration: 2,
        scale: 1,
        ease: "power2.inOut",
    },
    "+=300px"
);
gsap.to(
    ".img2",
    {
        scrollTrigger: {
            trigger: ".img2",
            start: "center 700",
        },
        duration: 2,
        delay: 0.5,
        scale: 1,
        ease: "power2.inOut",
    },
    "+=300px"
);


gsap.to(
    ".first",
    {
        scrollTrigger: {
            trigger: "img",
            start: "center 700",
        },
        duration: 1.5,
        x: 1,
        opacity: .8,
        delay: 1,
        ease: "power2.Out",
    },
    "+=1"
);
gsap.to(
    ".second",
    {
        scrollTrigger: {
            trigger: ".second",
            start: "center 700",
        },
        duration: 1.5,
        x: 1,
        opacity: .8,
        delay: 2,
        ease: "power2.Out",
    },
    "+=1"
);

gsap.fromTo(".up",{opacity: 0, y: 100}, {
    autoAlpa: 1,
    opacity:1,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
    y: 1
})

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

// visibility
gsap.to("section", 0, {css:{visibility: "visible"}})

