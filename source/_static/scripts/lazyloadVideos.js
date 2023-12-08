document.addEventListener('DOMContentLoaded', function() {
  yall();

  // load and configure ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  let allVideoDivs = gsap.utils.toArray('.wrapper');

  allVideoDivs.forEach((videoDiv, i) => {
    let videoElem = videoDiv.querySelector('video:not(.completed):not(.selected)');

    ScrollTrigger.create({
      trigger: videoElem,
      start: 'top 80%',
      end: 'top -40%',
      markers: false,
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });
  });
})