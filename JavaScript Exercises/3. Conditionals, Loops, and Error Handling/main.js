// Event list
const events = [
    { name: "Music Night", date: "2026-06-10", seats: 5 },
    { name: "Art Workshop", date: "2025-01-01", seats: 10 }, // past
    { name: "Tech Meetup", date: "2026-07-15", seats: 0 },   // full
    { name: "Yoga Session", date: "2026-08-20", seats: 8 }
];

const eventList = document.getElementById("eventList");

// current date
const today = new Date();

// Loop through events
events.forEach((event, index) => {

    const eventDate = new Date(event.date);

    // if-else condition to filter invalid events
    if (eventDate < today || event.seats <= 0) {
        console.log(`Hidden: ${event.name}`);
    } else {

        // create event card
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <p>Seats: <span id="seat-${index}">${event.seats}</span></p>
            <button onclick="register(${index})">Register</button>
            <hr>
        `;

        eventList.appendChild(div);
    }
});


// Registration with error handling
function register(index) {
    try {
        if (!events[index]) {
            throw new Error("Event not found");
        }

        if (events[index].seats <= 0) {
            throw new Error("No seats available");
        }

        // reduce seat count
        events[index].seats--;

        // update UI
        document.getElementById(`seat-${index}`).innerText = events[index].seats;

        alert("Registration successful!");
        console.log("Registered for:", events[index].name);

    } catch (error) {
        alert(error.message);
        console.error("Error:", error.message);
    }
}