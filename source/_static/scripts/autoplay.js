document.addEventListener('DOMContentLoaded', () => {
    function playPauseVideo(videoId) {
        const video = document.getElementById(videoId);

        let lastIntersectionState = 'outside';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (lastIntersectionState === 'outside') {
                        video.play();
                        lastIntersectionState = 'inside';
                    }
                } else {
                    if (lastIntersectionState === 'inside') {
                        video.pause();
                        lastIntersectionState = 'outside';
                    }
                }
            });
        }, { threshold: 0.5 });

        observer.observe(document.querySelector(`#${videoId}`));

        // Clean up the observer when the video is removed from the DOM
        video.addEventListener('remove', () => {
            observer.unobserve(video);
        });
    }

    // Initialize all videos
    const videos = document.querySelectorAll('.video-container video');
    videos.forEach((video) => {
        playPauseVideo(video.id);
    });
});
