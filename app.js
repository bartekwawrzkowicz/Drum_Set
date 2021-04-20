// BUTTONS --------------------------------------------------
const hiHat = document.getElementById('hh');
const snare = document.getElementById('sd');
const bassDrum = document.getElementById('bd');
const leftCymbal = document.getElementById('lc');
const leftTom = document.getElementById('lt');
const rightTom = document.getElementById('rt');
const bassTom = document.getElementById('bt');
const rightCymbal = document.getElementById('rc');

// SOUNDS ---------------------------------------------------
const hiHatSound = new Audio();
hiHatSound.src = "vendors/sound/hi_hat.wav";
const snareSound = new Audio();
snareSound.src = "vendors/sound/snare_drum.wav";
const bassDrumSound = new Audio();
bassDrumSound.src = "vendors/sound/bass_drum.wav";
const leftCymbalSound = new Audio();
leftCymbalSound.src = "vendors/sound/trash.wav";
const leftTomSound = new Audio();
leftTomSound.src = "vendors/sound/tom_left.wav";
const rightTomSound = new Audio();
rightTomSound.src = "vendors/sound/tom_right.wav";
const bassTomSound = new Audio();
bassTomSound.src = "vendors/sound/bass_tom.wav";
const rightCymbalSound = new Audio();
rightCymbalSound.src = "vendors/sound/trash2.wav";

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

playDrum = (key) => {
    if (key.keyCode == '65') {
        toggleView(picHiHat)
        toggleButtonView(hiHat)
        hiHatSound.currentTime = 0
        hiHatSound.play()
    } else if (key.keyCode == '83') {
        toggleView(picSnare)
        toggleButtonView(snare)
        snareSound.currentTime = 0
        snareSound.play()
    } else if (key.keyCode == '88') {
        toggleView(picBassDrum)
        toggleButtonView(bassDrum)
        bassDrumSound.currentTime = 0
        bassDrumSound.play()
    } else if (key.keyCode == '81') {
        toggleView(picLeftCymbal)
        toggleButtonView(leftCymbal)
        leftCymbalSound.currentTime = 0
        leftCymbalSound.play()
    } else if (key.keyCode == '87') {
        toggleView(picLeftTom)
        toggleButtonView(leftTom)
        leftTomSound.currentTime = 0
        leftTomSound.play()
    } else if (key.keyCode == '69') {
        toggleView(picRightTom)
        toggleButtonView(rightTom)
        rightTomSound.currentTime = 0
        rightTomSound.play()
    } else if (key.keyCode == '68') {
        toggleView(picBassTom)
        toggleButtonView(bassTom)
        bassTomSound.currentTime = 0
        bassTomSound.play()
    } else if (key.keyCode == '82') {
        toggleView(picRightCymbal)
        toggleButtonView(rightCymbal)
        rightCymbalSound.currentTime = 0
        rightCymbalSound.play()
    }
}



window.addEventListener('keydown', playDrum);