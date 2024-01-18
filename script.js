// This function updates the content of the page based on the section clicked.
function updateContent(section) {
    const content = document.getElementById('content');
    let htmlContent = '';
    switch(section) {
        case 'Devices':
            // Generate HTML content for the Devices list with lock status.
            htmlContent = `
                <h2>Devices</h2>
                <ul>
                    <li>Front Door - <span id="front-door-status">Locked</span></li>
                    <li>Back Door - <span id="back-door-status">Unlocked</span></li>
                    <li>Window - <span id="window-status">Locked</span></li>
                </ul>`;
            break;
        case 'Bluetooth':
            htmlContent = '<h2>Bluetooth</h2><p>Bluetooth settings...</p>';
            break;
        case 'Location':
            htmlContent = '<h2>Location</h2><p>Location services...</p>';
            break;
        case 'Settings':
            htmlContent = '<h2>Settings</h2><p>App settings...</p>';
            break;
        case 'Description':
            htmlContent = '<h2>Descriptions</h2><p>Description details...</p>';
            break;
        default:
            htmlContent = '<p>Please select a section.</p>';
    }
    content.innerHTML = htmlContent;
    // Reset animation to trigger fade-in effect.
    content.style.animation = 'none';
    setTimeout(() => content.style.animation = 'fadeIn 0.5s', 0);
}

// This function handles the user login.
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Check if the credentials are correct.
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('appContent').style.display = 'block';
    } else {
        alert('Invalid Credentials');
    }
}

// Event listeners for nav buttons can be added here if not already in HTML.
document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have buttons with classes 'nav-button' and a data-section attribute.
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateContent(this.getAttribute('data-section'));
        });
    });
});
// This function updates the content of the page based on the section clicked.
function updateContent(section) {
    const content = document.getElementById('content');
    let htmlContent = '';
    switch(section) {
        case 'Devices':
            // Generate HTML content for the Devices list with lock status.
            htmlContent = `
                <h2>Devices</h2>
                <ul>
                    <li>Front Door - <span id="front-door-status">Locked</span></li>
                    <li>Back Door - <span id="back-door-status">Unlocked</span></li>
                    <li>Window - <span id="window-status">Locked</span></li>
                </ul>`;
            break;
        case 'Bluetooth':
            htmlContent = '<h2>Bluetooth</h2><p>Bluetooth settings...</p>';
            break;
        case 'Location':
            htmlContent = '<h2>Location</h2><p>Location services...</p>';
            break;
        case 'Settings':
            htmlContent = '<h2>Settings</h2><p>App settings...</p>';
            break;
        case 'Description':
            htmlContent = '<h2>Descriptions</h2><p>Description details...</p>';
            break;
        default:
            htmlContent = '<p>Please select a section.</p>';
    }
    content.innerHTML = htmlContent;
    // Reset animation to trigger fade-in effect.
    content.style.animation = 'none';
    setTimeout(() => content.style.animation = 'fadeIn 0.5s', 0);
}

// This function handles the user login.
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Check if the credentials are correct.
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('appContent').style.display = 'block';
    } else {
        alert('Invalid Credentials');
    }
}

// Event listeners for nav buttons can be added here if not already in HTML.
document.addEventListener('DOMContentLoaded', function() {
    // Assuming you have buttons with classes 'nav-button' and a data-section attribute.
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateContent(this.getAttribute('data-section'));
        });
    });
});
// JavaScript Code
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for nav buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateContent(this.getAttribute('data-section'));
        });
    });
});

function updateContent(section) {
    const content = document.getElementById('content');
    let htmlContent = '';
    switch(section) {
        case 'Devices':
            htmlContent = `
                <h2>Devices</h2>
                <ul>
                    <li><img class="device-image" src="https://i.imgur.com/gl342Zl.jpg" alt="Front Door"> Front Door - <span contenteditable="true" class="editable" id="front-door-status">Locked</span></li>
                    <li><img class="device-image" src="https://i.imgur.com/58c32c7.jpg" alt="Back Door"> Back Door - <span contenteditable="true" class="editable" id="back-door-status">Unlocked</span></li>
                    <li><img class="device-image" src="https://i.imgur.com/b4pazIG.jpg" alt="Window"> Window - <span contenteditable="true" class="editable" id="window-status">Locked</span></li>
                </ul>`;
            break;
        case 'Bluetooth':
            htmlContent = '<h2>Bluetooth</h2><p>Bluetooth settings...</p>';
            break;
        case 'Location':
            htmlContent = '<h2>Location</h2><p>Location services...</p>';
            break;
        case 'Settings':
            htmlContent = '<h2>Settings</h2><p>App settings...</p>';
            break;
        case 'Description':
            htmlContent = '<h2>Descriptions</h2><p>Description details...</p>';
            break;
        default:
            htmlContent = '<p>Please select a section.</p>';
    }
    content.innerHTML = htmlContent;
    // Reset animation to trigger fade-in effect.
    content.style.animation = 'none';
    setTimeout(() => content.style.animation = 'fadeIn 0.5s', 0);
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('appContent').style.display = 'block';
    } else {
        alert('Invalid Credentials');
    }
}
// JavaScript Code
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for nav buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            updateContent(this.getAttribute('data-section'));
        });
    });
});

function updateContent(section) {
    const content = document.getElementById('content');
    let htmlContent = '';
    switch(section) {
        case 'Devices':
            htmlContent = `
                <h2>Devices</h2>
                <ul>
                    <li><img class="device-image" src="https://i.imgur.com/gl342Zl.jpg" alt="Front Door"> <span contenteditable="true" class="editable">Front Door</span> - Locked</li>
                    <li><img class="device-image" src="https://i.imgur.com/XRGQpiH.jpeg" alt="Back Door"> <span contenteditable="true" class="editable">Back Door</span> - Unlocked</li>
                    <li><img class="device-image" src="https://i.imgur.com/b4pazIG.jpg" alt="Window"> <span contenteditable="true" class="editable">Window</span> - Locked</li>
                </ul>`;
            break;
        // ... other cases ...
    }
    content.innerHTML = htmlContent;
    // Reset animation to trigger fade-in effect.
    content.style.animation = 'none';
    setTimeout(() => content.style.animation = 'fadeIn 0.5s', 0);
  
}

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('appContent').style.display = 'block';
    } else {
        alert('Invalid Credentials');
    }
}
// ... other existing JavaScript code ...

function updateContent(section) {
    const content = document.getElementById('content');
    let htmlContent = '';
    switch(section) {
        case 'Devices':
            htmlContent = `
                <h2>Devices</h2>
                <ul>
                    <li><img class="device-image" src="https://i.imgur.com/gl342Zl.jpg" alt="Front Door"> 
                        <span contenteditable="true" class="editable">Front Door</span> - 
                        <span id="front-door-status">Locked</span>
                    </li>
                    <li><img class="device-image" src="https://i.imgur.com/XRGQpiH.jpeg" alt="Back Door"> 
                        <span contenteditable="true" class="editable">Back Door</span> - 
                        <span id="back-door-status">Unlocked</span>
                    </li>
                    <li><img class="device-image" src="https://i.imgur.com/b4pazIG.jpg" alt="Window"> 
                        <span contenteditable="true" class="editable">Window</span> - 
                        <span id="window-status">Locked</span>
                    </li>
                </ul>`;
            break;
        case 'Bluetooth':
            htmlContent = `
                <h2>WiFi</h2>
                <div class="wifi-container">
                    <div class="wifi-badge" onclick="connectWifi()">Connect to WiFi</div>
                </div>`;
            break;
        // ... other cases ...
    }
    content.innerHTML = htmlContent;
}

function connectWifi() {
    const wifiBadge = document.querySelector('.wifi-badge');
    wifiBadge.innerHTML = 'Connecting to WiFi...';
    // Add any additional logic for WiFi connection here
}

// ... rest of your existing JavaScript code ...
function getRandomWifiNames(count) {
    const networks = [];
    const prefixes = ["Home", "Guest", "Office", "Public", "Secure", "Fast"];
    const suffixes = ["WiFi", "Network", "Net", "Internet", "Hub", "Access"];

    for (let i = 0; i < count; i++) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const number = Math.floor(Math.random() * 100);
        networks.push(`${prefix}-${suffix}-${number}`);
    }

    return networks;
}
// ... existing JavaScript code ...

function updateContent(section) {
    const content = document.getElementById('content');
    let htmlContent = '';
    switch (section) {
        case 'Devices':
            htmlContent = `
                <h2>Devices</h2>
                <ul>
                    <li><img class="device-image" src="https://i.imgur.com/gl342Zl.jpg" alt="Front Door"> 
                        <span contenteditable="true" class="editable">Front Door</span> - 
                        <span id="front-door-status">Locked</span>
                    </li>
                    <li><img class="device-image" src="https://i.imgur.com/XRGQpiH.jpeg" alt="Back Door"> 
                        <span contenteditable="true" class="editable">Back Door</span> - 
                        <span id="back-door-status">Unlocked</span>
                    </li>
                    <li><img class="device-image" src="https://i.imgur.com/b4pazIG.jpg" alt="Window"> 
                        <span contenteditable="true" class="editable">Window</span> - 
                        <span id="window-status">Locked</span>
                    </li>
                </ul>`;
            break;
        case 'Bluetooth':
            const wifiNetworks = getRandomWifiNames(5); // Generate 5 random WiFi networks
            htmlContent = '<h2>Select Your WiFi</h2><ul>';
            wifiNetworks.forEach(network => {
                htmlContent += `<li onclick="connectToNetwork('${network}')">${network}</li>`;
            });
            htmlContent += '</ul>';
            break;
         case 'Location':
            htmlContent = `<h2>Location</h2><div id="locationDisplay">Fetching your current location...</div>`;
            getCurrentLocation();
            break;
     case 'Settings':
            htmlContent = `
                <h2>Settings</h2>
                <p>Manage your app settings here.</p>
                <button id="logOffButton" class="log-off-btn">Log Off</button>`;
            break;
         case 'Description':
            htmlContent = `
                <h2>Connection Guide</h2>
                <p>Follow these steps to connect your sensor to WiFi using Seed Studio:</p>
                <ol>
                    <li>Ensure your sensor is powered on and in range of a WiFi network.</li>
                    <li>Open the WiFi settings on your device and search for available networks.</li>
                    <li>Select your network's name' from the list.</li>
                    <li>Enter the password if prompted (default is '12345678').</li>
                    <li>Once connected through the sensor, make sure to rename the sensor to your preference</li>
                  
                </ol>
                <p>Note: Make sure to update the WiFi credentials in your sensor settings if your home network details change.</p>`;
            break;
        // ... other cases ...
    }

    content.innerHTML = htmlContent;
}

function connectWifi() {
    const wifiBadge = document.querySelector('.wifi-badge');
    wifiBadge.innerHTML = 'Connecting to WiFi...';
    // Add any additional logic for WiFi connection here
}

function getRandomWifiNames(count) {
    const networks = [];
    const prefixes = ["Home", "Guest", "Office", "Public", "Secure", "Fast"];
    const suffixes = ["WiFi", "Network", "Net", "Internet", "Hub", "Access"];

    for (let i = 0; i < count; i++) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const number = Math.floor(Math.random() * 100);
        networks.push(`${prefix}-${suffix}-${number}`);
    }

    return networks;
}

function connectToNetwork(networkName) {
    alert(`Connecting to network: ${networkName}`);
    // Add your logic for connecting to a specific network
    // This is just a placeholder function
}

document.addEventListener('DOMContentLoaded', function() {
    // Existing event listeners
    // ...

    // Log Off Button Event Listener
    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'logOffButton') {
            logOff();
        }
    });
});

function logOff() {
    // Log-off logic
    alert("You have been logged off.");
    // Redirect to login page or hide certain elements
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('appContent').style.display = 'none';
    // Clear any session/storage data if needed
}
function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    document.getElementById('locationDisplay').innerHTML = `Latitude: ${latitude} <br>Longitude: ${longitude}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('locationDisplay').innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('locationDisplay').innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById('locationDisplay').innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('locationDisplay').innerHTML = "An unknown error occurred."
            break;
    }
}
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('appContent').style.display = 'block';
        updateContent('Devices'); // Load the Devices section immediately after login
    } else {
        alert('Invalid Credentials');
    }
 function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap, showError);
    } else {
        document.getElementById('map').innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    new google.maps.Map(document.getElementById('map'), mapOptions);
} 
}
