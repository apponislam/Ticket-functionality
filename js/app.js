document.getElementById("bus-ticket").addEventListener("click", function buyticket(event) {
    const seatArray = [A1, A2, A3, A4, B1, B2, B3, B4, C1, C2, C3, C4, D1, D2, D3, D4, E1, E2, E3, E4, F1, F2, F3, F4, G1, G2, G3, G4, H1, H2, H3, H4, I1, I2, I3, I4];
    const eventName = event.target;
    // let seatArray2 = [];

    if (!eventName.classList.contains("bg-bg1")) {
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
            const parentdiv = document.getElementById("parentdiv");
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
            const grandPrice = document.getElementById("grandprice");
            const currentSeatTextn = currentSeatn.innerText;
            const seatNumbern = parseInt(currentSeatTextn);
            const newSeatn = seatNumbern + 550;
            currentSeatn.innerText = newSeatn;
            grandPrice.innerText = newSeatn;
            console.log(newSeatn);



            const numberField = document.getElementById("numberfield");
            const nextBtn = document.getElementById("nextbtn");

            numberField.addEventListener('keyup', function () {
                if (numberField.value.trim() !== '' && 0 <= newSeat) {
                    nextBtn.removeAttribute('disabled');
                } else {
                    nextBtn.setAttribute('disabled', true);
                }
            });


            if (3 < newSeat) {

                const inputbtn = document.getElementById("applybtn");
                inputbtn.disabled = false;
                document.getElementById("bus-ticket").removeEventListener("click", buyticket);

                // break;
                // stop.propagation();
            }
        }
    }



});



const inputfield = document.getElementById("couponbtn");

inputfield.addEventListener("keyup", function (event) {
    console.log(inputfield.value);
    const inputbtn = document.getElementById("applybtn");
    inputbtn.addEventListener("click", function apply() {
        const totalPrice = document.getElementById("totalprice");
        const grandPrice = document.getElementById("grandprice");
        if (inputfield.value.toLowerCase().includes("new15")) {
            const totalPrice1 = totalPrice.innerText;
            const totalPrice2 = parseFloat(totalPrice1);
            const newPrice = (totalPrice2 / 100) * 85;
            grandPrice.innerText = newPrice;
            console.log(newPrice);

            const newdiv1 = document.createElement('div');
            newdiv1.classList.add('flex', 'items-center', 'justify-between', 'my-4', 'font-medium', 'hidden');
            const parentdiv = document.getElementById("parentdiv2");
            parentdiv.appendChild(newdiv1);

            const newp1 = document.createElement('p');
            newp1.innerText = "Discount";
            newdiv1.appendChild(newp1);

            const newp2 = document.createElement('p');
            const discount = totalPrice2 - newPrice;
            newp2.innerText = "BDT " + "-" + discount;
            newdiv1.appendChild(newp2);

            const inputfulldiv = document.getElementById("inputdiv");
            inputfulldiv.style.display = "none";

            const parentdiv3 = document.getElementById("parentdiv3");
            parentdiv3.style.display = "none";

            console.log(newdiv1);

        };

        if (inputfield.value.toLowerCase().includes("couple 20")) {
            const totalPrice1 = totalPrice.innerText;
            const totalPrice2 = parseFloat(totalPrice1);
            const newPrice = (totalPrice2 / 100) * 80;
            grandPrice.innerText = newPrice;
            console.log(newPrice);

            const newdiv1 = document.createElement('div');
            newdiv1.classList.add('flex', 'items-center', 'justify-between', 'my-4', 'font-medium', 'hidden');
            const parentdiv = document.getElementById("parentdiv2");
            parentdiv.appendChild(newdiv1);

            const newp1 = document.createElement('p');
            newp1.innerText = "Discount";
            newdiv1.appendChild(newp1);

            const newp2 = document.createElement('p');
            const discount = totalPrice2 - newPrice;
            newp2.innerText = "BDT " + "-" + discount;
            newdiv1.appendChild(newp2);

            const inputfulldiv = document.getElementById("inputdiv");
            inputfulldiv.style.display = "none";

            const parentdiv3 = document.getElementById("parentdiv3");
            parentdiv3.style.display = "none";

            console.log(newdiv1);
        } else {
            const newdiv1 = document.createElement('div');
            newdiv1.classList.add('flex', 'items-center', 'justify-between', 'my-4', 'font-medium', 'hidden', 'text-red-600');
            const parentdiv = document.getElementById("parentdiv3");
            parentdiv.appendChild(newdiv1);

            const newp1 = document.createElement('p');
            newp1.innerText = "Invalid Coupon Code";
            newdiv1.appendChild(newp1);
        }
    });
});