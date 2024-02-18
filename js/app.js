document.getElementById("bus-ticket").addEventListener("click", function buyticket(event) {
    const seatArray = [A1, A2, A3, A4, B1, B2, B3, B4, C1, C2, C3, C4, D1, D2, D3, D4, E1, E2, E3, E4, F1, F2, F3, F4, G1, G2, G3, G4, H1, H2, H3, H4, I1, I2, I3, I4];
    const eventName = event.target;
    // let seatArray2 = [];

    if (seatArray.includes(eventName)) {
        eventName.classList.add('bg-bg1', 'text-white');
        console.log(eventName);

        const currentSeat = document.getElementById('current-seat');
        const currentSeatText = currentSeat.innerText;
        const seatNumber = parseInt(currentSeatText);
        const newSeat = seatNumber + 1;
        currentSeat.innerText = newSeat;
        console.log(newSeat);

        const availableSeat = document.getElementById('available-seat');
        const availableSeatText = availableSeat.innerText;
        const availableNumber = parseInt(availableSeatText);
        const newAvailableSeat = availableNumber - 1;
        availableSeat.innerText = newAvailableSeat;
        console.log(newAvailableSeat);

        if (3 < newSeat) {

            const inputField = document.getElementById("applybtn");
            inputField.disabled = false;
            document.getElementById("bus-ticket").removeEventListener("click", buyticket);

            // break;
            // stop.propagation();
        }
    }

});