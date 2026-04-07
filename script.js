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
            
            // Wait for the physical "click" before turning on lights
            setTimeout(() => {
                sound.currentTime = 0; 
                sound.play();
                
                // Turn on the LEDs!
                linkLed.classList.add('link-active');
                actLed.classList.add('act-active');
            }, 150); 

            btn.textContent = "Unplug Cable";
            isPluggedIn = true;
        } else {
            // Unplug it and instantly kill the lights
            cable.classList.remove('plugged-in');
            linkLed.classList.remove('link-active');
            actLed.classList.remove('act-active');
            
            btn.textContent = "Insert Cable";
            isPluggedIn = false;
        }
    });
});
