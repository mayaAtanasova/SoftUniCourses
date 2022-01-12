function solve() {
    const info = document.getElementById('info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stopId = {name: 'Depot', next: 'depot'};


    async function getData() {
        try{
            const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId.next}`);
            if (res.status != 200){
                throw new Error ('Something went wrong!');
            }
            let data = await res.json();
            return data;
        }catch(error){
            info.innerText = error;
        }
    }

    async function depart() {
        let nextStop = await getData();
        console.log(nextStop);
        info.innerText = `Next stop ${nextStop.name}`;
        stopId = nextStop;
        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    async function arrive() {
        info.innerText = `Arriving at ${stopId.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();