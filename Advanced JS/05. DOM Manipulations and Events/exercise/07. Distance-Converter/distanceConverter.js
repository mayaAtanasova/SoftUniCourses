function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', onClick);
    
    const mConv = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };
    
    function onClick(){
        const valueToConvert = Number(document.getElementById('inputDistance').value);
        const selectFm = document.getElementById('inputUnits');
        const selectTo = document.getElementById('outputUnits');
        if(!isNaN(valueToConvert)){
            let fmUnit = selectFm.value;
            let toUnit = selectTo.value;
            let fmMtrs = valueToConvert * mConv[fmUnit];
            let result = fmMtrs / mConv[toUnit];
            document.getElementById('outputDistance').value = result;
        }
    }
}