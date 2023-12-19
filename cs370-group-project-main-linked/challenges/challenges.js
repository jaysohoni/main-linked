document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If you need pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },

        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent page refresh

        const challenge = document.getElementById('challenge').value;
        console.log('Challenge value:', challenge);

        // Send a POST request to the backend
        fetch('/MyDBchallenges', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            challenge: challenge,
            }),
            responseType: 'json',
        })
        .then(response => response.json())
        .then(data => {
            console.log('Response from server:', data);

            alert('Challenge created successfully!');
            // Clear the form fields
            document.getElementById('challenge').value = '';
        })
        .catch(error => {
            console.error('Error creating challenge:', error);

            alert('An error occurred while creating the challenge.');
        });
    });
});