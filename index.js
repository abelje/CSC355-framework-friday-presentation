import { createTimeline, createTimer, animate, stagger, splitText, utils, createDraggable, spring } from 'animejs';

const [ $logo ] = utils.$('.logo.js');
const [ $button ] = utils.$('button');
let rotations = 0;

// Created a bounce animation loop
animate('.logo.js', {
    scale: [
        { to: 1.25, ease: 'inOut(3)', duration: 200 },
        { to: 1, ease: spring({ bounce: .7 }) }
    ],
    loop: true,
    loopDelay: 250,
});

// Make the logo draggable around its center
createDraggable('.logo.js', {
    container: [0, 0, 0, 0],
    releaseEase: spring({ bounce: .7 })
});

// Animate logo rotation on click
const rotateLogo = () => {
    rotations++;
    $button.innerText = `rotations: ${rotations}`;
    animate($logo, {
        rotate: rotations * 360,
        ease: 'out(4)',
        duration: 1500,
    });
}

$button.addEventListener('click', rotateLogo);

// animation example
const { chars } = splitText('h2', { words: false, chars: true });

animate(chars, {
    // Property keyframes
    y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    // Property specific parameters
    rotate: {
        from: '-1turn',
        delay: 0
    },
    delay: stagger(50),
    ease: 'inOutCirc',
    loopDelay: 1000,
    loop: true
});

// Timeline example

const [ $timer01, $timer02, $timer03 ] = utils.$('.timer');

const timer1 = createTimer({
    duration: 1500,
    onUpdate: self => $timer01.innerHTML = self.currentTime,
});

const tl = createTimeline()
    .sync(timer1)
    .add({
        duration: 500,
        onUpdate: self => $timer02.innerHTML = self.currentTime,
    })
    .add({
        onUpdate: self => $timer03.innerHTML = self.currentTime,
        duration: 1000
});

const [ $reset ] = utils.$('.reset');
const resetTimeline = () => {
    tl.restart();
    $timer01.innerHTML = timer1.currentTime;
    $timer02.innerHTML = timer1.currentTime;
    $timer03.innerHTML = timer1.currentTime;
}

$reset.addEventListener('click', resetTimeline);