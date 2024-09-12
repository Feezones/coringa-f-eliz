const audioPlayer = document.getElementById('audioPlayer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

startButton.addEventListener('click', () => {
    audioPlayer.play();
});

stopButton.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reseta o tempo do áudio
});
