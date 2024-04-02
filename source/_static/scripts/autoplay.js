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
        mediaPlayer.addEventListener('can-play', () => {
            observer.observe(mediaPlayer); // Trigger update
        });
    });

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Delay autoplay if the page is loaded via anchor link
                setTimeout(() => {
                    if (!entry.target.hasAttribute('data-playing') && entry.target.hasAttribute('data-can-play')) {
                        playMedia(entry.target)
                            .then(() => {
                                entry.target.setAttribute('playing', 'true');
                            })
                            .catch(error => {
                                console.error('Failed to play media:', error);
                            });
                    }
                }, 200);
            } else {
                entry.target.pause();
                entry.target.setAttribute('paused', 'true');
            }
        });
    }

    // Function to play media with a promise-based API
    function playMedia(mediaElement) {
        return new Promise((resolve, reject) => {
            const playPromise = mediaElement.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        resolve();
                    })
                    .catch(error => {
                        reject(error);
                    });
            } else {
                resolve(); // For browsers that do not return a promise
            }
        });
    }
});
