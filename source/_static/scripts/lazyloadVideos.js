// load and start lozad
const observer = lozad('.lozad', {
  loaded: function(el) {
    // Custom callback on successful load
    el.classList.add('lozad'); // You can add a class for fading in the loaded content
  }
});
observer.observe();

document.addEventListener('DOMContentLoaded', function() {
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
});