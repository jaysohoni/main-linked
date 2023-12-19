document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch input profiles and display
    function fetchUpdatedProfile() {
        fetch('/MyDBprofile')
            .then(response => response.json())
            .then(profiles => {
                // Display only the latest profile
                const latestprofile = profiles.length > 0 ? profiles[profiles.length - 1] : null;

                if (latestprofile) {
                    // Populate input fields with the latest profile
                    document.getElementById('user').value = latestprofile.user;
                    document.getElementById('email').value = latestprofile.email;
                    document.getElementById('age').value = latestprofile.age;
                    document.getElementById('gender').value = latestprofile.gender;
                    document.getElementById('height').value = latestprofile.height;
                    document.getElementById('weight').value = latestprofile.weight;
                } else {
                    // Alert the user when there is no profile information
                    alert('No user information found.');
                }
            })
            .catch(error => {
                console.error('Error fetching updated profile:', error);
            });
    }

    // Call fetchUpdatedProfile when the page loads to display inputted profiles
    fetchUpdatedProfile();

    document.getElementById('save-btn').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get values from user input fields:
        const user = document.getElementById('user').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;
        const height = document.getElementById('height').value;
        const weight = document.getElementById('weight').value;

        // Check if there is user information
        if (!user || !email || !age || !gender || !height || !weight) {
            alert('Please provide complete user information before saving.');
            return;
        }

        // Create a data object to send to the server:
        const data = {
            user: user,
            email: email,
            age: age,
            gender: gender,
            height: height,
            weight: weight,
        };

        // POST request to the backend API:
        fetch('/MyDBprofile', {
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
                alert('Profile saved successfully!!!');

                // Display profile:
                fetchUpdatedProfile();
                window.location.href = '/dashboard';
            })
            // Error occurring on server side
            .catch(error => {
                console.error('Error saving your profile:', error);
                alert('An error occurred while saving your profile');
            });
    });
});
