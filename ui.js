// Settings wheel
const settingsWheel = document.getElementById('settingsWheel');
settingsWheel.addEventListener('click', () => {
    sounds.menuOpen.play();
    showSettings();
});

function showSettings() {
    gameState = STATE_SETTINGS;
    document.getElementById('menuScreen').style.display = 'none';
    document.getElementById('settingsScreen').style.display = 'flex';
}

function updateHUD() {
    document.getElementById('scoreDisplay').textContent = player.score;
    document.getElementById('comboCount').textContent = `${comboCount}x`;
    updateDurabilityDisplay();
    updatePowerupStatus();
}

// Other UI functions...
