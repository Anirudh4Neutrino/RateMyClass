// Select all class-card elements
const cards = document.querySelectorAll('.class-card');

// Function to handle card click and toggle expansion
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Check if the card is already expanded
        if (this.classList.contains('expanded')) {
            this.classList.remove('expanded');
            document.body.classList.remove('expanded-card');
        } else {
            // Remove expanded class from any currently expanded card
            document.querySelectorAll('.class-card.expanded').forEach(expandedCard => {
                expandedCard.classList.remove('expanded');
            });
            
            // Add expanded class to clicked card
            this.classList.add('expanded');
            document.body.classList.add('expanded-card');
        }
    });
});
