# Framework Friday: Anime.JS
1. Use timer attribute to have an active timer for the entire class period
## Steps to Install
1. ```npm install vite --save-dev```
2. ```npm install animejs```
3. Add below to package.json in place of scripts:
   ```
   "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
   }
   ```
4. Run website using ```npm run dev```.

## Strengths
1. Very modular in use of imports, callbacks, and methods.
2. Access to a lot of different Animations.
3. Great Documentation on the website.

## Weaknesses
1. Verbose, Hard to understand at first.
2. 

## Objects
You can find objects that anime.js has by using their website: [https://animejs.com/documentation](https://animejs.com/documentation).
- Importing
  - Functions can be imported with the import command in the js file.
  
    ```js
    import { createTimeline, utils, createDraggable} from 'animejs';
    ```
- Utils
  - A Collection of utility functions for animation tasks. 
    - This library works by targeting class or html type. you target them like this:
      ```js
      const [ $logo ] = utils.$('.logo.js');
      const [ $button ] = utils.$('button');
      ```
      ```html
      <div class="largeCenteredRow">
          <svg class="logo js" preserveAspectRatio="xMidYMid meet" viewBox="0 0 630 630">
      <path fill="currentColor" d="M577,0 C606.271092,0 630,23.7289083 630,53 L630,577 C630,606.271092 606.271092,630 577,630 L53,630 C23.7289083,630 0,606.271092 0,577 L0,53 C0,23.7289083 23.7289083,0 53,0 L577,0 Z M479.5,285.89 C426.63,285.89 392.8,319.69 392.8,364.09 C392.8,411.808 420.615238,434.63146 462.622716,452.742599 L478.7,459.64 L483.441157,461.719734 C507.57404,472.359996 521.8,479.858 521.8,498.94 C521.8,515.88 506.13,528.14 481.6,528.14 C452.4,528.14 435.89,512.91 423.2,492.19 L375.09,520.14 C392.47,554.48 427.99,580.68 482.97,580.68 C539.2,580.68 581.07,551.48 581.07,498.18 C581.07,448.74 552.67,426.75 502.37,405.18 L487.57,398.84 L485.322788,397.859899 C461.5199,387.399087 451.17,380.1172 451.17,362.89 C451.17,348.52 462.16,337.52 479.5,337.52 C496.5,337.52 507.45,344.69 517.6,362.89 L563.7,333.29 C544.2,298.99 517.14,285.89 479.5,285.89 Z M343.09,289.27 L283.89,289.27 L283.89,490.57 C283.89,520.16 271.62,527.77 252.17,527.77 C231.83,527.77 223.37,513.82 214.07,497.32 L165.88,526.495 C179.84,556.04 207.29,580.57 254.69,580.57 C307.15,580.57 343.09,552.67 343.09,491.37 L343.09,289.27 Z"/></svg>
      </div>
      <div class="mediumRow">
          <fieldset class="controls">
              <button>rotations: 0</button>
          </fieldset>
      </div>
      ```

- Draggable
    - Adds draggable items to DOM Elements
    - Create the Draggable Item using ```createDraggable(target, parameters)```
        - Has axes parameters such as:
            - locking x and y directions

                ```js
                import { createDraggable } from 'animejs';
      
                createDraggable('.square.enabled', {
                  x: true
                });
              
                createDraggable('.square.disabled', {
                  x: false
                });
                ```        

            - snapping to an area
            - mapping to an area
    - Methods
        - enable, disable
        - setX, setY
        - reset, stop, revert

- Timer
    - createTimer:
      ```js
      const timer = createTimer({
        duration: 2000,
        onUpdate: self => $time.innerHTML = self.iterationCurrentTime,
        loop: true,
      });
      ```
    - Callbacks: Can execute functions during a timer playback
      - onBegin, onComplete, onUpdate, onLoop, onPause
    - Methods: control over the timing, behavior, and progression of the timer.
      - resume, pause, alternate
        ```js
        const resumeTimer = () => timer.resume();
        const pauseTimer = () => timer.pause();
        const alternateTimer = () => timer.alternate();
         
        $resumeButton.addEventListener('click', resumeTimer);
        $pauseButton.addEventListener('click', pauseTimer);
        $alternateButton.addEventListener('click', alternateTimer);
        ```

- Animations
  - Can target CSS and DOM elements. Ways you can animate are translations, scaling, opacity, rotations and more!
    - Example:
      ```js
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
      ```
      
- Timeline
  - Synchronize animations, timers, and callbacks together.
  - Setup:
    ```js
    timeline.add(target, animationParameters, position);
    timeline.add(timerParameters, position);
    timeline.sync(timelineB, position);
    timeline.call(callbackFunction, position);
    timeline.label(labelName, position);
    ```
  - Methods:
    - Pause, play, restart, resume
    - add, sync, call, label, set
  - Creation example
    
    ```js
    const tl = createTimeline({ defaults: { duration: 750 } });

    tl.label('start')
    .add('.square', { x: '15rem' }, 500)
    .add('.circle', { x: '15rem' }, 'start')
    .add('.triangle', { x: '15rem', rotate: '1turn' }, '<-=500');
    ```
    
- SVG support
- Text
  - ```splitText```