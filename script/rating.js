        
function setRating(value) {
    let selectedRating = 0;
    selectedRating = value;
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < value) {
            star.innerHTML = "&#9733";
        } else {
            star.innerHTML = "&#9734";
        }
    });
}