// Paralax image animation

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tl.to(layer, {y: movement, ease: "linear"}, 0)
});

// Paragraphs 
// let paragraphsAnimation = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: "section",
// 		start: "-200 center",
// 		// end: "100px center",
// 		end: "200",
// 		scrub: true,
// 		// markers: true
// 		stragger: 1
// 	}})

// paragraphsAnimation.from("section", {
// 	opacity: 0, 
// 	y: 100
//   });

// paragraphsAnimation.to("section", {
// 	opacity: 1, 
// 	y: 0
// })


// Rematasi: https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()
ScrollTrigger.batch(".element", {
  //interval: 0.1, // time window (in seconds) for batching to occur. 
  //batchMax: 3,   // maximum batch size (targets)
  start: "-200 center",
  onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}}),
  onLeave: batch => gsap.set(batch, {opacity: 0, y: -100}),
  onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15}),
  onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100})
  // you can also define things like start, end, etc.
});

ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".box", {y: 0}));
