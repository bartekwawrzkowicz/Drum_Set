// BUTTONS --------------------------------------------------
const hiHat = document.getElementById('hh');
const snare = document.getElementById('sd');
const bassDrum = document.getElementById('bd');
const leftCymbal = document.getElementById('lc');
const leftTom = document.getElementById('lt');
const rightTom = document.getElementById('rt');
const bassTom = document.getElementById('bt');
const rightCymbal = document.getElementById('rc');

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


toggleView = (picture) => {
    picture.classList.toggle('non-active');
    picClean.classList.toggle('non-active');
    setTimeout(() => {
        picture.classList.toggle('non-active'), picClean.classList.toggle('non-active')
    }, 100);
}

toggleButtonView = (button) => {
    button.classList.toggle('active');
    setTimeout(() => {
        button.classList.toggle('active')
    }, 100);
}

playDrum = event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"`);
    if (!audio) return;
    audio.currentTime = 0;

    audio.play()

}




window.addEventListener('keydown', playDrum);