document.addEventListener("DOMContentLoaded", function () {
    const mediaPlayers = document.querySelectorAll('media-player');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    mediaPlayers.forEach(mediaPlayer => {
        mediaPlayer.addEventListener('can-play', () => {
            observer.observe(mediaPlayer); // Observe the media player once it's ready to play
        });
    });

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.hasAttribute('data-can-play')) {
                    setTimeout(() => {
                        playMedia(entry.target)
                            .then(() => {
                                setDataAttributes(entry.target, { playing: true, paused: false });
                            })
                            .catch(error => {
                                console.error('Failed to play media:', error);
                            });
                    }, 200);
                }
            } else {
                entry.target.pause();
                setDataAttributes(entry.target, { playing: false, paused: true });
            }
        });
    }

    // Function to set data attributes on an element
    function setDataAttributes(element, attributes) {
        for (const key in attributes) {
            element.setAttribute('data-' + key, attributes[key]);
        }
    }

    // Function to play media with a promise-based API
    function playMedia(mediaElement) {
        return new Promise((resolve, reject) => {
            const playPromise = mediaElement.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        resolve(); // Resolve the promise when playback starts
                    })
                    .catch(error => {
                        reject(error); // Reject the promise if playback fails
                    });
            } else {
                resolve(); // For browsers that do not return a promise
            }
        });
    }
});
