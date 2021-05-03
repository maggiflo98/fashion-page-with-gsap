// alert("loading of images may cause slowing down of browser");

gsap.from("img", {
  duration: 3,
  scale: 0.5,
  y: 40,
  ease: "power1.inOut",
  hover: scale(1.5),
  stagger: {
    grid: [7, 15],
    from: 11,
    axis: "y",
    amount: 1.5,
  },
});
