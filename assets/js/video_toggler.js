
// when page is ready
document.addEventListener('DOMContentLoaded', function() {
    // add an click listener to both buttons
    var togglePlay = document.getElementById('toggler-play'),
        toggleMute = document.getElementById('toggler-mute'),
        video = document.getElementById('video');

        console.log(togglePlay);

    // play / pause button
    togglePlay.addEventListener('click', function () {

        //check current condition of a video
        if (video.paused){
            video.play();
            togglePlay.innerHTML = 'Pause';
        } else {
            video.pause();
            togglePlay.innerHTML = 'Play';
        }

    });

    // mute / unmute button
    toggleMute.addEventListener('click', function () {

        //check current condition of a video
        if (video.muted){
            video.muted = false;
            toggleMute.innerHTML = 'Mute';
        } else {
            video.muted = true;
            toggleMute.innerHTML = 'Unmute';
        }

    });
});