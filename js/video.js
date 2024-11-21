var video = document.querySelector(".video");

window.addEventListener("load", function () {
    video.autoplay = false;
    video.loop = false;
});

document.querySelector("#play").addEventListener("click", function () {
    video.play();
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate *= 1.1;
    console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
    video.currentTime = video.currentTime + 10 > video.duration ? 0 : video.currentTime + 10;
    console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
    video.muted = !video.muted;
    document.querySelector("#mute").innerHTML = video.muted ? "Unmute" : "Mute";
});

document.querySelector("#slider").addEventListener("change", function () {
    video.volume = document.querySelector("#slider").value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
});

