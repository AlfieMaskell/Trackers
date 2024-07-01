const graphBars = document.querySelectorAll('.logo-graph-bar');

// Event Listeners Bars
graphBars.forEach((bar) => {
    bar.style.setProperty('--current-height', "1%"); 
    bar.style.setProperty('--target-height', (Math.random() * 100).toFixed() + "%");

    // Animation End
    bar.addEventListener('animationiteration', function() {
        console.log("setting new values");
        bar.style.setProperty('--current-height', getComputedStyle(bar).height);
        bar.style.setProperty('--target-height', (Math.random() * 100).toFixed() + "%");
    });
    
});