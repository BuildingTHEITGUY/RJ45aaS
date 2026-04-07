document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('plug-btn');
    const cable = document.getElementById('ethernet-cable');
    const sound = document.getElementById('click-sound');
    
    // Grab the new LEDs
    const linkLed = document.getElementById('led-link');
    const actLed = document.getElementById('led-act');

    let isPluggedIn = false;

    btn.addEventListener('click', () => {
        if (!isPluggedIn) {
            // Animate cable
            cable.classList.add('plugged-in');
            
            // Wait for the physical "click"
            setTimeout(() => {
                // 1. TURN ON LEDS FIRST (So they never fail)
                if (linkLed) linkLed.classList.add('link-active');
                if (actLed) actLed.classList.add('act-active');

                // 2. PLAY SOUND SECOND
                try {
                    if (sound) {
                        sound.currentTime = 0; 
                        sound.play();
                    }
                } catch (error) {
                    console.log("Sound skipped, but lights are on!");
                }
            }, 150); 

            btn.textContent = "Unplug Cable";
            isPluggedIn = true;
        } else {
            // Unplug it and instantly kill the lights
            cable.classList.remove('plugged-in');
            if (linkLed) linkLed.classList.remove('link-active');
            if (actLed) actLed.classList.remove('act-active');
            
            btn.textContent = "Insert Cable";
            isPluggedIn = false;
        }
    });
});
