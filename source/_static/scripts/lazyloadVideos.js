const observer = lozad('.lozad', {
  rootMargin: '10px 0px', // syntax similar to that of CSS Margin
  threshold: 0.1, // ratio of element convergence
  enableAutoReload: true // it will reload the new image when validating attributes changes
});
observer.observe();

// load and configure ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

let allVideoDivs = gsap.utils.toArray('.wrapper');

allVideoDivs.forEach((videoDiv, i) => {
  let videoElem = videoDiv.querySelector('video');

  ScrollTrigger.create({
    trigger: videoElem,
    start: 'top top',
    end: '+=500',
    markers: false,
    onEnter: () => videoElem.play(),
    onEnterBack: () => videoElem.play(),
    onLeave: () => videoElem.pause(),
    onLeaveBack: () => videoElem.pause(),
  });
});