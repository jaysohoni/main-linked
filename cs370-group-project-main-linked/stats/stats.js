document.addEventListener('DOMContentLoaded', function() {
    var accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JKUzkiLCJzdWIiOiI4WU42QkgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd2VjZyB3c29jIHdhY3Qgd294eSB3dGVtIHd3ZWkgd2NmIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNzAzMDIxMTc0LCJpYXQiOjE3MDI5OTIzNzR9.xJ6Vu4FuruSW6GiLL_PK603TU_ex0fhlkAmHkmPTeV8';
    var date = new Date().toJSON().slice(0,10);
    

    // Fetch floors, active minutes from Fitbit API
    fetch('https://api.fitbit.com/1/user/-/activities/date/' + date +'.json', {
        headers: {
            'Authorization': 'Bearer ' + accessToken, 
        },
    })
        .then(response => response.json())
        .then(fitbitData => {
        
            var floors = document.getElementById('fbox1');
            floors.textContent = fitbitData.summary.floors;
            
            var activeMins = document.getElementById('abox1');
            if((fitbitData.summary.fairlyActiveMinutes + fitbitData.summary.veryActiveMinutes) <= 0){
                activeMins.textContent = "0 minutes";
            }
            else{
                activeMins.textContent = (fitbitData.fairlyActiveMinutes) + (fitbitData.veryActiveMinutes);
            }

            var restingHR = document.getElementById('rbox1');
            restingHR.textContent = fitbitData.summary.restingHeartRate;

        })

        .catch(error => console.error('Error fetching Fitbit data:', error));





        //fetch breathing rate from Fitbit API

        fetch('https://api.fitbit.com/1/user/-/br/date/'+date+'/all.json', {
        headers: {
            'Authorization': 'Bearer ' + accessToken, // Replace YOUR_ACCESS_TOKEN with your actual access token
        },
        })

        .then(response => response.json())
        .then(fitbitData => {

             var bRate = document.getElementById('brbox1');
             if(fitbitData.br[0].value.fullSleepSummary.breathingRate == null){
                    bRate.textContent = "0";
             }
             else{
                bRate.textContent = fitbitData.br[0].value.fullSleepSummary.breathingRate.toFixed(0);
             }

        })
        .catch(error => console.error('Error fetching Fitbit data:', error));


        //fetch Heart rate Variability from Fitbit API

        fetch('https://api.fitbit.com/1/user/-/hrv/date/'+date+'.json', {
        headers: {
            'Authorization': 'Bearer ' + accessToken, // Replace YOUR_ACCESS_TOKEN with your actual access token
        },
        })

        .then(response => response.json())
        .then(fitbitData => {
            var hrV = document.getElementById('hbox1');
            if(fitbitData.hrv[0].value.dailyRmssd == null){
                hrV.textContent = "0";
            }
            else{
                hrV.textContent = (fitbitData.hrv[0].value.dailyRmssd).toFixed(0);
            }
            
             
           

        })
        .catch(error => console.error('Error fetching Fitbit data:', error));

        //fetch blood oxygen from Fitbit API

        fetch('https://api.fitbit.com/1/user/-/spo2/date/'+date+'.json', {
        headers: {
            'Authorization': 'Bearer ' + accessToken, // Replace YOUR_ACCESS_TOKEN with your actual access token
        },
        })

        .then(response => response.json())
        .then(fitbitData => {

             var bloodO2 = document.getElementById('bobox1');
                if(fitbitData.value.avg == null){
                    bloodO2.textContent = "0";
                }
                else{
                    bloodO2.textContent = (fitbitData.value.avg).toFixed(0);
                }
            
           

        })
        .catch(error => console.error('Error fetching Fitbit data:', error));


});
