import { createTimeline, createTimer, animate, stagger, splitText, utils, createDraggable, spring } from 'animejs';

const [ $logo ] = utils.$('.logo.js');
const [ $button ] = utils.$('button');
let rotations = 0;

// Created a bounce animation loop
animate('', {
    scale: [
        { to: 1.25, ease: 'inOut(3)', duration: 200 },
        { to: 1, ease: spring({ bounce: .7 }) }
    ],
    loop: true,
    loopDelay: 250,
});

// Make the logo draggable around its center


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

// create Timer


const tl = createTimeline()
    .sync()
    .add({

    })
    .add({

});

// set button to reset timer timeline
const [ $reset ] = utils.$('.reset');
const resetTimeline = () => {

}

$reset.addEventListener('click', resetTimeline);