// PICTURES -------------------------------------------------
const picClean = document.getElementById('clean');
const picHiHat = document.getElementById('hi-hat');
const picSnare = document.getElementById('snare');
const picBassDrum = document.getElementById('bass-drum');
const picLeftCymbal = document.getElementById('left-cymbal');
const picLeftTom = document.getElementById('left-tom');
const picRightTom = document.getElementById('right-tom');
const picBassTom = document.getElementById('bass-tom');
const picRightCymbal = document.getElementById('right-cymbal');

// LOGIC ----------------------------------------------------

const playDrum = event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`button[data-sound="${event.keyCode}"]`);
    const image = document.querySelector(`img[data-key="${event.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('active');

    picClean.classList.add('non-active');
    image.classList.remove('non-active');
}

const removeTransition = event => {
    const key = document.querySelector(`button[data-sound="${event.keyCode}"`);
    const image = document.querySelector(`img[data-key="${event.keyCode}"]`);

    key.classList.remove('active');

    picClean.classList.remove('non-active');
    image.classList.add('non-active');
}

window.addEventListener('keydown', playDrum);
window.addEventListener('keyup', removeTransition);