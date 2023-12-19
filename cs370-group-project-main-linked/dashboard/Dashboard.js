document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from Fitbit API

    var date = new Date().toJSON().slice(0,10);

    fetch('https://api.fitbit.com/1/user/-/activities/date/' + date +'.json', {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JKUzkiLCJzdWIiOiI4WU42QkgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd2VjZyB3c29jIHdhY3Qgd294eSB3dGVtIHd3ZWkgd2NmIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNzAzMDIxMTc0LCJpYXQiOjE3MDI5OTIzNzR9.xJ6Vu4FuruSW6GiLL_PK603TU_ex0fhlkAmHkmPTeV8', 
        },
    })
        .then(response => response.json())
        .then(fitbitData => {
            // Display floors data
            var stepsContainer = document.getElementById('Steps-box');
            stepsContainer.textContent = fitbitData.summary.steps;
            
            var distanceContainer = document.getElementById('Distance-box');
            distanceContainer.textContent = fitbitData.summary.distances[0].distance;

            var caloriesContainer = document.getElementById('Calories-box');
            caloriesContainer.textContent =  fitbitData.summary.caloriesOut;
        })
        .catch(error => console.error('Error fetching Fitbit data:', error));

    fetch('https://api.fitbit.com/1/user/-/activities/heart/date/'+date+'/1d/1sec.json', {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JKUzkiLCJzdWIiOiI4WU42QkgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd2VjZyB3c29jIHdhY3Qgd294eSB3dGVtIHd3ZWkgd2NmIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNzAzMDIxMTc0LCJpYXQiOjE3MDI5OTIzNzR9.xJ6Vu4FuruSW6GiLL_PK603TU_ex0fhlkAmHkmPTeV8', 
        },
    })
    .then(response => response.json())
    .then(fitbitData => {
        // Display latest heart rate data
        var latestHeartRate = fitbitData['activities-heart-intraday'].dataset.slice(-1)[0].value;
        var heartRateContainer = document.getElementById('Heart-rate-box');
        heartRateContainer.textContent = latestHeartRate;
    })
    .catch(error => console.error('Error fetching Fitbit data:', error));

});
