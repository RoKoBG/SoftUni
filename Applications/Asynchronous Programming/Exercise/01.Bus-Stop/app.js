async function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const stopName = document.getElementById("stopName");
    const buses = document.getElementById("buses");
    buses.innerHTML ='';

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    try {
        const response = await fetch(url);
        if(!response.ok){
            let error = new Error();
            error.status = response.status;
            error.statusText = response.statusText;
            throw error;
        }
        const data = await response.json();
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
            const listElement = document.createElement("li");
            listElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
            buses.appendChild(listElement);
        });
    } catch (error) {
     stopName.textContent = `Error`;
    }
}
