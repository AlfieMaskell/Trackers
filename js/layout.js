const graphBars = document.querySelectorAll('.logo-graph-bar');

// Growing Graph Bars on DOM Load
document.addEventListener('DOMContentLoaded', function() {

    // Handling Animation
    graphBars.forEach((bar) => {
        const targetHeight = bar.getAttribute('data-height');

        // Animation Code
        bar.style.setProperty('--target-height', targetHeight);
        bar.style.animation = "growBarFromStart 1s forwards";
    });

});


// Graph Bar Containers
const graphBarsContainers = document.querySelectorAll('.logo-graph-bar-container');

// Event Listeners for Mouse Over on Bars
graphBarsContainers.forEach((barContainer) => {
    // Get Child of Container 
    
    barContainer.addEventListener('mouseover', function() {
        bar = barContainer.querySelector('.logo-graph-bar');
        bar.style.animation = "shrinkBar 1s forwards";
    });

    barContainer.addEventListener('mouseout', function() {
        bar = barContainer.querySelector('.logo-graph-bar');
        bar.style.setProperty('--current-height', getComputedStyle(bar).height);
        bar.style.animation = "growBarFromCurrent 1s forwards";
    });
});