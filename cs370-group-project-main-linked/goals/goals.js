document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch input goals and display
    function fetchUpdatedGoals() {
        fetch('/MyDBgoals')
            .then(response => response.json())
            .then(goals => {
                // Display only the latest goal
                const latestGoal = goals.length > 0 ? goals[goals.length - 1] : null;

                if (latestGoal) {
                    // Populate input fields with the latest goal
                    document.getElementById('new-goal-form-input').value = latestGoal.newGoal;
                    document.getElementById('steps-input').value = latestGoal.steps;
                    document.getElementById('weight-input').value = latestGoal.weight;
                    document.getElementById('distance-input').value = latestGoal.distance;
                    document.getElementById('heart-rate-input').value = latestGoal.heartRate;
                    document.getElementById('calorie-intake-input').value = latestGoal.calorieIntake;
                    document.getElementById('sleep-input').value = latestGoal.sleep;
                    document.getElementById('exercise-input').value = latestGoal.exercise;
                    document.getElementById('workout-input').value = latestGoal.workout;
                }
            })
            .catch(error => {
                console.error('Error fetching updated goals:', error);
            });
    }

    // Call fetchUpdatedGoals when the page loads to display inputted goals
    fetchUpdatedGoals();

    document.getElementById('save-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get values from user input fields:
        const newGoal = document.getElementById('new-goal-form-input').value;

        // Get other values from other input fields:
        const steps = document.getElementById('steps-input').value;
        const weight = document.getElementById('weight-input').value;
        const distance = document.getElementById('distance-input').value;
        const heartRate = document.getElementById('heart-rate-input').value;
        const calorieIntake = document.getElementById('calorie-intake-input').value;
        const sleep = document.getElementById('sleep-input').value;
        const exercise = document.getElementById('exercise-input').value;
        const workout = document.getElementById('workout-input').value;

        // Create a data object to send to the server:
        const data = {
            newGoal: newGoal,
            steps: steps,
            weight: weight,
            distance: distance,
            heartRate: heartRate,
            calorieIntake: calorieIntake,
            sleep: sleep,
            exercise: exercise,
            workout: workout,
        };

        // Backend API endpoint to save goals:
        // const apiURL = 'progresspulse.com/api/goals';   //replace with the link of the api to goals

        // POST request to the backend API:
        fetch('/MyDBgoals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            // Successful save
            .then(response => response.json())
            .then(result => {
                console.log('Data saved successfully:', result);
                alert('Goal saved successfully!!!');

                // Display listed goals:
                fetchUpdatedGoals();
            })
            // Error occurring on server side
            .catch(error => {
                console.error('Error saving your goal:', error);
                alert('An error occurred while saving your goal');
            });
    });
});