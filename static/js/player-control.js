document.addEventListener("DOMContentLoaded", function () {
    const audioElement = document.querySelector("audio");
    const player = document.querySelector(".player");

    if (audioElement) {
        // Show the player when the audio starts
        audioElement.addEventListener("play", function () {
            player.classList.add("show");
        });

        // Optionally, hide the player when the audio stops
        audioElement.addEventListener("pause", function () {
            player.classList.remove("show");
        });
    }
});
