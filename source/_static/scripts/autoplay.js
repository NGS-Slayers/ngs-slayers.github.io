document.addEventListener("DOMContentLoaded", function () {
    const mediaPlayers = document.querySelectorAll('media-player');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    mediaPlayers.forEach(mediaPlayer => {
        observer.observe(mediaPlayer);
    });

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Delay autoplay if the page is loaded via anchor link
                setTimeout(() => {
                    if (!entry.target.hasAttribute('data-playing') && entry.target.hasAttribute('data-can-play')) {
                        entry.target.play();
                    }
                }, 200);
            } else {
                entry.target.pause();
            }
        });
    }
});