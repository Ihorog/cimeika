document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for navigation
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = event.target.getAttribute('href');
            loadPage(targetPage);
        });
    });

    // Function to load pages dynamically
    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector('main').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Function to start the journey
    window.startJourney = function() {
        loadPage('pages/home.html');
    };

    // Initial load of the home page
    loadPage('pages/home.html');

    // Fetch and display real-time weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=0dd0656884eea8329f4f432cc0bc8010`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('weather-data').textContent = `${data.weather[0].description}, ${data.main.temp}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));

    // Fetch and display real-time time data
    setInterval(() => {
        const now = new Date();
        document.getElementById('time-data').textContent = now.toLocaleTimeString();
    }, 1000);

    // Fetch and display real-time astrological data
    fetch(`https://api.freeastrologyapi.com/forecast?sign=aries&apikey=SI4I4N5GJ32gRX5iSL1Qea4TqgDtIy8o9RyvDfxW`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('astrology-data').textContent = data.forecast;
        })
        .catch(error => console.error('Error fetching astrological data:', error));
});
