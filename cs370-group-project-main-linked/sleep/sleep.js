document.addEventListener('DOMContentLoaded', function() {
var accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JKUzkiLCJzdWIiOiI4WU42QkgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd2VjZyB3c29jIHdhY3Qgd294eSB3dGVtIHd3ZWkgd2NmIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNzAzMDIxMTc0LCJpYXQiOjE3MDI5OTIzNzR9.xJ6Vu4FuruSW6GiLL_PK603TU_ex0fhlkAmHkmPTeV8';
var date = new Date().toJSON().slice(0,10);


fetch('https://api.fitbit.com/1.2/user/-/sleep/date/'+date+'.json', {
        headers: {
            'Authorization': 'Bearer ' + accessToken, // Replace YOUR_ACCESS_TOKEN with your actual access token
        },
    })
        .then(response => response.json())
        .then(fitbitData => {
            // Display sleep data
            var sleepDuration = document.getElementById('sleepDurationBox');
            if(fitbitData.summary.totalMinutesAsleep<60){
                sleepDuration.textContent = (fitbitData.summary.totalMinutesAsleep) + " minutes";
            }
            else{
                sleepDuration.textContent = (fitbitData.summary.totalMinutesAsleep/60).toFixed(2) + " hours";
            }
            
            
            var deepSleep = document.getElementById('deepSleepBox');
            if(fitbitData.summary.stages.deep<60){
                deepSleep.textContent = (fitbitData.summary.stages.deep) + " minutes";
            }
            else{
                deepSleep.textContent = (fitbitData.summary.stages.deep/60).toFixed(2) + " hours";
            }
           

            var lightSleep = document.getElementById('lightSleepBox');
            if(fitbitData.summary.stages.light<60){
                lightSleep.textContent = (fitbitData.summary.stages.light) + " minutes";
            }
            else{
                lightSleep.textContent = (fitbitData.summary.stages.light/60).toFixed(2) + " hours";
            }

            var rem = document.getElementById('remBox');
            if(fitbitData.summary.stages.rem<60){
                rem.textContent = (fitbitData.summary.stages.rem) + " minutes";
            }
            else{
                rem.textContent = (fitbitData.summary.stages.rem/60).toFixed(2) + " hours";
            }

            var awake = document.getElementById('awakeBox');
            if(fitbitData.summary.stages.wake<60){
                awake.textContent = (fitbitData.summary.stages.wake) + " minutes";
            }
            else{
                awake.textContent = (fitbitData.summary.stages.wake/60).toFixed(2) + " hours";
            }
           

        })
        .catch(error => console.error('Error fetching Fitbit data:', error));
    });
