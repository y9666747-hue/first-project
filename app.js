const prog = document.querySelectorAll('.progress-bar');
const section = document.querySelector('.skills');

window.onscroll = function() {
	if (window.scrollY >= section.offsetTop - 1500) {
		prog.forEach((pro) => {
			pro.style.width = pro.dataset.width;
		});
	}
}

// green sock right-img
gsap.fromTo('.right-img', {y: 100,opacity : 0, duration: 1}, {y: 0,opacity: 1, duration : 2});
gsap.fromTo('.left h1', {x: -100,opacity : 0, duration: 1}, {x: 0,opacity: 1, duration : 2});
gsap.fromTo('.left p', {x: -100,opacity : 0, duration: 1}, {x: 0,opacity: 1, duration : 2});
gsap.fromTo('.left button', {x: -100,opacity : 0, duration: 1}, {x: 0,opacity: 1, duration : 2});
gsap.fromTo('.left .icons', {x: -100,opacity : 0, duration: 1}, {x: 0,opacity: 1, duration : 2});

// cards
// gsap.fromTo(
//   ['.card-1', '.card-2', '.card-3', '.card-4'],
//   { y: 50, opacity: 0 },
//   {
//     y: 0,
//     opacity: 1,
//     duration: 1.5,
//     ease: "power3.out",
//     stagger: 0.2
//   }
// );