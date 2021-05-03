gsap.from(".circle", {
  duration: 3,
  x: 300,
  opacity: 0,
  scale: 0.5,
  ease: "easeIn",
  delay: 2,
});
gsap.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut,
});
gsap.from(
  ".nav-link ul li ",
  1,
  {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut,
    stagger: 0.2,
  },
  0.08
);

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
// tl.to('.text', { x: "0%", duration: 2, stagger: 1 });
// tl.to('.slider', { x: "-100%", duration: 5, delay: 0.5 });
// tl.to('.intro', { x: "-100%", duration: 5 }, "-=1");
