// load and start lozad
const observer = lozad();
observer.observe();

// load and configure ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

let allVideoDivs = gsap.utils.toArray('.wrapper');

allVideoDivs.forEach((videoDiv, i) => {
  
  let videoElem = videoDiv.querySelector('video')
  
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