// JavaScript code to handle the interactive features of the travel website

// Function to change the background color of the header
document.addEventListener('DOMContentLoaded', function() {
    // Change welcome message after 3 seconds
    setTimeout(function() {
        document.getElementById('welcomeMessage').textContent = 'Discover the Land of the Rising Sun';
    }, 3000);
});

// Function to change the background color of the header
function changeHeaderColor() {
    const header = document.querySelector('.header');
    // Toggle between default red and a blue color
    if (header.style.backgroundColor === 'var(--japan-red)' || header.style.backgroundColor === '') {
        header.style.backgroundColor = '#4169e1'; // Royal blue
    } else {
        header.style.backgroundColor = 'var(--japan-red)';
    }
}

// Modify CSS styles via JavaScript
function toggleHighlight(tourId) {
    const tourCard = document.getElementById(tourId);
    tourCard.classList.toggle('highlight');
}

// Toggle special offer visibility
function toggleSpecialOffer() {
    const specialOffer = document.getElementById('specialOffer');
    if (specialOffer.style.display === 'none') {
        specialOffer.style.display = 'block';
    } else {
        specialOffer.style.display = 'none';
    }
}

// Add or remove elements when a button is clicked
let tourCounter = 0;

function addTour() {
    tourCounter++;
    
    // Create new list item
    const newTour = document.createElement('li');
    newTour.textContent = `Tour Package ${tourCounter}`;
    
    // Add the new tour to the list
    document.getElementById('tourItems').appendChild(newTour);
    
    // Update the counter display
    document.getElementById('itemCount').textContent = tourCounter;
}

function removeTour() {
    if (tourCounter > 0) {
        // Get the tour items list
        const tourItems = document.getElementById('tourItems');
        
        // Remove the last tour from the list
        tourItems.removeChild(tourItems.lastChild);
        
        // Decrement the counter
        tourCounter--;
        
        // Update the counter display
        document.getElementById('itemCount').textContent = tourCounter;
    }
}