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

        const newdiv1 = document.createElement('div');
        newdiv1.classList.add('flex', 'items-center', 'justify-between', 'mb-4', 'font-medium');
        var parentdiv = document.getElementById("parentdiv");
        parentdiv.appendChild(newdiv1);

        const newp1 = document.createElement('p');
        newp1.innerText = eventName.innerText;
        newdiv1.appendChild(newp1);

        const newp2 = document.createElement('p');
        newp2.innerText = "Economoy";
        newdiv1.appendChild(newp2);

        const newp3 = document.createElement('p');
        newp3.innerText = parseInt(550);
        newdiv1.appendChild(newp3);
        const prices = parseInt(newp3.innerText);
        console.log(parseInt(newp3.innerText));

        // const totalPrice = document.getElementById("total-price");
        // const updatePrice = prices + 0;
        // const updatePrice2 = updatePrice + 0;
        // console.log(updatePrice2);

        const currentSeatn = document.getElementById('totalprice');
        const currentSeatTextn = currentSeatn.innerText;
        const seatNumbern = parseInt(currentSeatTextn);
        const newSeatn = seatNumbern + 550;
        currentSeatn.innerText = newSeatn;
        console.log(newSeatn);


        if (3 < newSeat) {

            const inputbtn = document.getElementById("applybtn");
            inputbtn.disabled = false;
            document.getElementById("bus-ticket").removeEventListener("click", buyticket);

            // break;
            // stop.propagation();
        }
    }
});


// Get the input element by its ID
var inputElement = document.getElementById("couponbtn");

// Add a keyup event listener
inputElement.addEventListener("keyup", function () {
    console.log(inputElement.value);
    if (inputElement.value.toLowerCase().includes("new15")) {
        console.log("you got 15% discound");
    };
    if (inputElement.value.toLowerCase().includes("couple 20")) {
        console.log("you got 20% discount");
    }
});