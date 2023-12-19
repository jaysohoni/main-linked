console.log("test");
const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JKUzkiLCJzdWIiOiI4WU42QkgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd2VjZyB3c29jIHdhY3Qgd294eSB3dGVtIHd3ZWkgd2NmIHdzZXQgd2xvYyB3cmVzIiwiZXhwIjoxNzAyOTYyNzM0LCJpYXQiOjE3MDI5MzM5MzR9.XN4LJnPLxptSZBzLcNt0JJi9UzhRKPE-48CDqAtPpx4";

const { exec } = require('node:child_process');

var date = "2023-12-16";



// GET profile data
const curlCommand = 'curl -i -H "Authorization: Bearer '+access_token+'"  \
https://api.fitbit.com/1/user/-/profile.json';

exec(curlCommand, (error, stdout, stderr) => {
    console.log("\nGET user profile data\n");
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(stdout);
  console.log("\n\n\n");
});

// GET steps, floors, distance travelled data, calories burnt


const curlCommand2 = 'curl -H "Authorization: Bearer '+access_token+'"  \
https://api.fitbit.com/1/user/-/activities/date/' + date +'.json';

exec(curlCommand2, (error, stdout, stderr) => {
    console.log("\nGET steps, floors, distance travelled data, calories burnt\n");
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(stdout);

  //steps
  const steps = JSON.parse(stdout).summary.steps;
  console.log(steps);


  //distance
  const distance = JSON.parse(stdout).summary.distances[0].distance;
  console.log(distance);

  //calories
  const calories = JSON.parse(stdout).summary.caloriesOut;
  console.log(calories);


  console.log("\n\n\n");


});

// Get Heart rate data



const curlCommand3 = 'curl -i -H "Authorization: Bearer '+access_token+'"  \
https://api.fitbit.com/1/user/-/activities/heart/date/'+date+'/1d/1sec.json';

exec(curlCommand3, (error, stdout, stderr) => {
    console.log("\nGET Heart rate\n");
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(stdout);
  console.log("\n\n\n");
});


// Get Sleep data

const curlCommand4 = 'curl -H "Authorization: Bearer '+access_token+'"  \
https://api.fitbit.com/1.2/user/-/sleep/date/'+date+'.json';

exec(curlCommand4, (error, stdout, stderr) => {
  console.log("\nGET sleep data\n");
if (error) {
  console.error(`Error: ${error}`);
  return;
}
console.log(stdout);
//steps
const deep = JSON.parse(stdout).summary.stages.deep;
console.log(deep);


//distance
const light = JSON.parse(stdout).summary.stages.light;
console.log(light);

//calories
const rem = JSON.parse(stdout).summary.stages.rem;
console.log(rem);

const awake = JSON.parse(stdout).summary.stages.wake;
console.log(awake);

console.log("\n\n\n");


});
