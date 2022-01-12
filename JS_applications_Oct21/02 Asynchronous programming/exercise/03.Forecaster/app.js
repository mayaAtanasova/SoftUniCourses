function attachEvents() {
    const location = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');
    const content = document.getElementById('content');
    const conditions = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    };
    
    submitBtn.addEventListener('click', displayForecast);

    async function displayForecast() {

        //initial cleanup
        let errorDiv = document.getElementById('error-div');
        if (errorDiv != null) {
            content.removeChild(errorDiv);
        }

        let currentChildren = Array.from(currentDiv.children);
        let nextChildren = Array.from(upcomingDiv.children);

        currentChildren.forEach(child => {
            if (child.className != 'label') {
                child.remove();
            }
        });
        nextChildren.forEach(child => {
            if (child.className != 'label') {
                child.remove();
            }
        });
        //get the forecast data for today and next 3 days
        let { today, next3days } = await getForecastForLocation();

        //create DOM elements
        const currDiv = e('div', { className: 'forecasts' },
            e('span', { className: 'condition symbol' }, conditions[today.forecast.condition]),
            e('span', { className: 'condition' },
                e('span', { className: 'forecast-data' }, today.name),
                e('span', { className: 'forecast-data' }, `${today.forecast.low}${conditions.Degrees}/${today.forecast.high}${conditions.Degrees}`),
                e('span', { className: 'forecast-data' }, today.forecast.condition)
            )
        );
        const nextDiv = e('div', { className: 'forecast-info' },
            e('span', { className: 'upcoming' },
                e('span', { className: 'symbol' }, conditions[next3days.forecast[0].condition]),
                e('span', { className: 'forecast-data' }, `${next3days.forecast[0].low}${conditions.Degrees}/${next3days.forecast[0].high}${conditions.Degrees}`),
                e('span', { className: 'forecast-data' }, next3days.forecast[0].condition)
            ),
            e('span', { className: 'upcoming' },
                e('span', { className: 'symbol' }, conditions[next3days.forecast[1].condition]),
                e('span', { className: 'forecast-data' }, `${next3days.forecast[1].low}${conditions.Degrees}/${next3days.forecast[1].high}${conditions.Degrees}`),
                e('span', { className: 'forecast-data' }, next3days.forecast[1].condition)
            ),
            e('span', { className: 'upcoming' },
                e('span', { className: 'symbol' }, conditions[next3days.forecast[2].condition]),
                e('span', { className: 'forecast-data' }, `${next3days.forecast[2].low}${conditions.Degrees}/${next3days.forecast[2].high}${conditions.Degrees}`),
                e('span', { className: 'forecast-data' }, next3days.forecast[2].condition)
            )
        );
        //append new DOM elements
        currentDiv.appendChild(currDiv);
        upcomingDiv.appendChild(nextDiv);
        //display the forecast div
        forecastDiv.style = 'display:block';
    }

    // get weather data for specific location
    async function getForecastForLocation() {

        try {
            const data = await getLocationsData();
            const locData = data.filter(x => x.name == location.value)[0];
            if (locData == undefined) {
                throw new Error('This locaiton is not in the database!');
            }
            let { name, code } = locData;
            const [today, next3days] = await Promise.all([
                getCurrentConditions(code),
                get3DayForecast(code)
            ]);
            return { today, next3days };

        } catch (error) {
            const errDiv = document.createElement('div');
            errDiv.innerText = error;
            errDiv.style.color = 'red';
            errDiv.style.background = 'yellow';
            errDiv.id = 'error-div';
            content.appendChild(errDiv);
        }
    }

}

attachEvents();



//get available locations
async function getLocationsData() {
    try {
        const res = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
        if (res.status != 200) {
            throw new Error('No data');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

//get current contitions
async function getCurrentConditions(code) {
    const res = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`);
    const currData = await res.json();
    return currData;
}
//get 3-day forecast
async function get3DayForecast(code) {
    const res = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`);
    const threeDayData = await res.json();
    return threeDayData;
}


function e(type, attributes, ...content) {
    const result = document.createElement(type);
    for (let prop in attributes) {
        result[prop] = attributes[prop];
    }

    content.forEach(el => {
        if (typeof el == 'string' || typeof el == 'number') {
            el = document.createTextNode(el);
        }
        result.appendChild(el);
    });
    return result;
}