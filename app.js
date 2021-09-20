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

// BUTTONS --------------------------------------------------
const buttonList = [
    hiHatBtn = document.getElementById('hh'),
    snareBtn = document.getElementById('sd'),
    bassDrumBtn = document.getElementById('bd'),
    trashBtn = document.getElementById('lc'),
    highTomBtn = document.getElementById('lt'),
    lowTomBtn = document.getElementById('rt'),
    bassTomBtn = document.getElementById('bt'),
    rideBtn = document.getElementById('rc'),
]

// LOGIC ----------------------------------------------------



const keyDownHandler = event => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`button[data-key="${event.keyCode}"]`);
    const image = document.querySelector(`img[data-key="${event.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('active');

    if (!image) return;
    picClean.classList.add('non-active');
    image.classList.remove('non-active');

}

const keyUpHandler = event => {
    const key = document.querySelector(`button[data-key="${event.keyCode}"`);
    const image = document.querySelector(`img[data-key="${event.keyCode}"]`);

    key.classList.remove('active');

    picClean.classList.remove('non-active');
    image.classList.add('non-active');
}

const clickHandler = event => {
    const audio = document.querySelector(`audio[data-key="${event.target.dataset.key}"]`);
    const image = document.querySelector(`img[data-key="${event.target.dataset.key}"]`);

    audio.currentTime = 0;
    audio.play();

    picClean.classList.add('non-active');
    image.classList.remove('non-active');

    setTimeout(() => {
        picClean.classList.remove('non-active');
        image.classList.add('non-active');
    }, 200);
}

const buttons = buttonList.map(button => button.addEventListener('click', clickHandler))


window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);