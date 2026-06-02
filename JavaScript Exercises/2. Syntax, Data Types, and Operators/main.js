// const → fixed event data
const eventName = "Community Music Night";
const eventDate = "2026-06-10";

// let → changing seats
let availableSeats = 50;

// template literal output
function showEvent() {
    const eventDetails = document.getElementById("eventDetails");

    eventDetails.innerHTML = `
        <h2>${eventName}</h2>
        <p>Date: ${eventDate}</p>
        <p>Seats Available: ${availableSeats}</p>
    `;
}

// initial display
showEvent();

// registration function
function register() {
    if (availableSeats > 0) {
        availableSeats--;   // using --
        alert("Registration successful!");
    } else {
        alert("No seats available!");
    }

    showEvent(); // update UI
    console.log(`Remaining seats: ${availableSeats}`);
}