// Entry point
import css from './styles.css';

// Images
import leaf from '../assets/leaf.png';
import forest from '../assets/forest.jpg';

// ====== MAIN ======

let chosenX = 0;
let chosenY = 0;

initialize();



// ====== FUNCTIONS ======

function moveLeaf (degrees = 0) {
    degrees += 2;
    if (degrees > 359) {
        degrees = 0;
    }

    const leaf = document.querySelector('.leaf');


    if (chosenX && chosenY) {
        leaf.style.top = (Math.cos(degrees*(Math.PI/180))*100 + chosenY) + 'px';
        leaf.style.left = (Math.sin(degrees*(Math.PI/180))*100 + chosenX) + 'px'
    }

    requestAnimationFrame(moveLeaf.bind(this, degrees));
}

function handleLeafClick (event) {
    chosenX = event.clientX;
    chosenY = event.clientY;
}

function initialize () {
    setBackgroundImg(forest);
    updateCssVariables();
    window.addEventListener('resize', handleResize);
    
    // Wrapper
    let body = document.querySelector('body');
    let newDiv = document.createElement('div');
    newDiv.classList.add('animationsWrapper');
    body.appendChild(newDiv);

    // Square
    addLeaf('animationsWrapper', 'firstLeaf');

    // Listener
    document.addEventListener('click', handleLeafClick)

    moveLeaf();
}

function setBackgroundImg(url) {
    const body = document.querySelector('body');
    body.style.backgroundImage = 'url(' + forest + ')';
}

function addLeaf (parentElement, ...args) {
    let newLeaf = document.createElement('img');
    newLeaf.src = leaf;

    newLeaf.style.top = '50%';
    newLeaf.style.left = '50%';
    
    newLeaf.classList.add('leaf');
    
    args.forEach((className) => {
        newLeaf.classList.add(className);
        });
        
        document.querySelector('.' + parentElement).appendChild(newLeaf);
    }

function handleResize () {
    updateCssVariables();
}

function updateCssVariables() {
    // Update height and width to viewport
    let root = document.querySelector(':root');
    root.style.setProperty('--doc-width', window.innerWidth + 'px');
    root.style.setProperty('--doc-height', window.innerHeight + 'px');

}
