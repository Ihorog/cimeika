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
});
