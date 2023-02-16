window.addEventListener("load", solve);

function solve() {
    const makeInput = document.getElementById("make");
    const modelInput = document.getElementById("model");
    const yearInput = document.getElementById("year");
    const fuelInput = document.getElementById("fuel");
    const origCostInput = document.getElementById("original-cost");
    const sellPriceInput = document.getElementById("selling-price");
    const publishBtn = document.getElementById("publish");

    publishBtn.addEventListener("click", publish);

    function publish(e) {
        e.preventDefault();

        const make = makeInput.value;
        2018;
        const model = modelInput.value;
        const year = Number(yearInput.value);
        const fuel = fuelInput.value;
        const origCost = Number(origCostInput.value);
        const sellPrice = Number(sellPriceInput.value);

        if (
            make == "" ||
            model == "" ||
            year == "" ||
            fuel == "" ||
            origCost == "" ||
            sellPrice == "" ||
            sellPrice < origCost
        ) {
            return;
        }

        const tableBody = document.getElementById("table-body");
        const tr = document.createElement("tr");

        tr.classList.add("row");
        tr.innerHTML = `
        <td>${make}</td>
        <td>${model}</td>
        <td>${year}</td>
        <td>${fuel}</td>
        <td>${origCost}</td>
        <td>${sellPrice}</td>
        <td> 
           <button class="action-btn edit">Edit</button>
           <button class="action-btn sell">Sell</button>
        </td>
        `;

        tr.querySelector(".action-btn.edit").addEventListener("click", edit);
        tr.querySelector(".action-btn.sell").addEventListener("click", sell);

        tableBody.appendChild(tr);
        makeInput.value = "";
        modelInput.value = "";
        yearInput.value = "";
        fuelInput.value = "";
        origCostInput.value = "";
        sellPriceInput.value = "";

        function edit() {
            makeInput.value = make;
            modelInput.value = model;
            yearInput.value = year;
            fuelInput.value = fuel;
            origCostInput.value = origCost;
            sellPriceInput.value = sellPrice;
            tr.remove();
        }
        function sell() {
            const diff = Number(sellPrice) - Number(origCost);
            const ul = document.getElementById("cars-list");
            const li = document.createElement("li");
            li.classList.add("each-list");
            li.innerHTML = `
            
            <span>${make} ${model}</span>
            <span>${year}</span>
            <span>${diff}</span>

            `;
            ul.appendChild(li);
            let profitStr = document.getElementById("profit");
            profitStr.textContent = (Number(profitStr.textContent)+Number(diff)).toFixed(2)
            tr.remove();
        }
    }
}
