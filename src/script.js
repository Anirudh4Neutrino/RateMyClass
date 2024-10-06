// Select all class-card elements
const cards = document.querySelectorAll('.class-card');
const popup = document.querySelector('.popup-menu');
const overlay = document.querySelector('.popup-overlay');
const popupContent = document.querySelector('.popup-content');
const closePopupBtn = document.querySelector('.close-popup');

// Function to show the popup
function showPopup() {
    popup.classList.add('show');
    popup.style.opacity = '1';
    overlay.classList.add('show');
    overlay.style.opacity = '1';
}

// Function to hide the popup
function hidePopup() {
    popup.classList.remove('show');
    overlay.classList.remove('show');
}

// Handle card clicks to show the popup with respective class details
cards.forEach(card => {
    card.addEventListener('click', function() {
        const className = this.querySelector('.cName').innerText;
        const classDescription = this.querySelector('.cDes').innerText || "No description available.";
        const rating = this.querySelector('.bigNumber').innerText;
        const credits = this.querySelector('.littleText').innerText;
        showPopup();
    });
});

// Close popup when clicking the close button or the overlay
closePopupBtn.addEventListener('click', hidePopup);
overlay.addEventListener('click', hidePopup);
