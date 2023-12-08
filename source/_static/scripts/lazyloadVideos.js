// load and start lozad
const observer = lozad('.lozad', {
  loaded: function(el) {
    // Custom callback on successful load
    el.classList.add('lozad'); // You can add a class for fading in the loaded content
  }
});
observer.observe();