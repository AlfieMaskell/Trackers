const graphBars = document.querySelectorAll('.logo-graph-bar');

// Growth Animation on Graph Bars
graphBars.forEach((bar, index) => {

    // Initial Animation Properties
    bar.style.setProperty('--current-height', "1%");
    bar.style.setProperty('--target-height', bar.getAttribute('data-height'));
    bar.style.animation

    // Animation End Event Listener
    bar.addEventListener('animationend', () => {
        bar.style.height = bar.getAttribute('data-height');
        bar.style.setProperty('--current-height', bar.getAttribute('data-height'));
        bar.style.animation = "none";
    });
});
    
