document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('plug-btn');
    const cable = document.getElementById('ethernet-cable');
    const sound = document.getElementById('click-sound');

    let isPluggedIn = false;

    btn.addEventListener('click', () => {
        if (!isPluggedIn) {
            // Animate cable
            cable.classList.add('plugged-in');
            
            // Play sound with a slight delay to match the visual hitting the port
            setTimeout(() => {
                sound.currentTime = 0; // Reset sound to start
                sound.play();
            }, 100); 

            btn.textContent = "Unplug Cable";
            isPluggedIn = true;
        } else {
            // Unplug it
            cable.classList.remove('plugged-in');
            btn.textContent = "Insert Cable";
            isPluggedIn = false;
        }
    });
});
/* LED Styling */
.led {
    width: 12px;
    height: 12px;
    background-color: #313244; /* Dark grey when unplugged */
    position: absolute;
    top: 4px;
    border-radius: 2px;
    box-shadow: inset 0 0 3px black;
    transition: background-color 0.1s;
}

.left-led { left: 6px; }
.right-led { right: 6px; }

/* The Solid Green Link Light */
.led.link-active {
    background-color: #a6e3a1; 
    box-shadow: 0 0 10px #a6e3a1, inset 0 0 2px white;
}

/* The Blinking Amber/Green Activity Light */
.led.act-active {
    background-color: #a6e3a1; 
    box-shadow: 0 0 10px #a6e3a1;
    animation: network-traffic 0.3s infinite;
}

/* Simulating random packet activity */
@keyframes network-traffic {
    0% { opacity: 1; }
    25% { opacity: 0.2; }
    50% { opacity: 1; }
    75% { opacity: 0.5; }
    100% { opacity: 0; }
}
