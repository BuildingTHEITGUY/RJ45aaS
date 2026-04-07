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
