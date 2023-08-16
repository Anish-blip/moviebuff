function bookTicket(title, genre, showtime) {
    document.getElementById('selectedMovieTitle').textContent = title;
    document.getElementById('selectedMovieGenre').textContent = genre;
    document.getElementById('selectedMovieShowtime').textContent = showtime;

    document.querySelector('.booking-form').style.display = 'block';
}

function confirmBooking() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const selectedMovie = document.getElementById('selectedMovieTitle').textContent;
    const selectedShowtime = document.getElementById('selectedMovieShowtime').textContent;

    alert(`Booking confirmed for ${selectedMovie} at ${selectedShowtime}.\nName: ${name}\nEmail: ${email}`);
}
