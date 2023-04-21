const observer = lozad();
observer.observe();

const coolVideo = document.querySelector('.lozad');
observer.triggerLoad(coolVideo);