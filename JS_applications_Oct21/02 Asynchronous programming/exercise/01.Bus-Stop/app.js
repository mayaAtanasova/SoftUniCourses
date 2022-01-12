function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const submintBtn = document.getElementById('submit');
    const busList = document.getElementById('buses');
    getBuses(stopId);

    async function getBuses(stopId){
        busList.replaceChildren();
        stopName.innerText = 'Loading...';
        submintBtn.disabled = true;
        try{
            const res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
            if(res.status != 200){
                throw new Error ('No data for this ID');
            }
            const data = await res.json();
            stopName.innerText = data.name;
            Object.entries(data.buses).forEach(bus => {
                const liEl = document.createElement('li');
                liEl.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                busList.appendChild(liEl);
                submintBtn.disabled = false;
            });
        }catch(error){
            stopName.innerText = 'Error';
            submintBtn.disabled = false;
        }
    }
}