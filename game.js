// Game variables
let gameState = STATE_MENU;
let bullets = [];
let enemies = [];
let enemyBullets = [];
let powerups = [];
let bulletCooldown = 0;
let enemySpawnRate = 60;
let enemySpawnTimer = 0;
let enemySpeed = 1.0;
let enemyShootTimer = 0;
let enemyShootRate = 120;
let comboCount = 0;
let comboTimeout = 0;
let wave = 1;
let enemiesInWave = 0;
let enemiesDefeated = 0;
let waveDifficultyModifier = 1.0;

// Main game loop
function gameLoop() {
    // Clear canvas with a subtle starfield effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    // Draw stars (pixel-style)
    drawStars();
    
    if (gameState === STATE_PLAYING) {
        updateGameState();
        handlePlayerInput();
        spawnEnemies();
        updateEntities();
        checkCollisions();
        updatePowerupTimers();
    }
    
    drawEntities();
    
    // Continue game loop
    requestAnimationFrame(gameLoop);
}

function updateGameState() {
    // Update combo timer
    if (comboTimeout > 0) {
        comboTimeout--;
        if (comboTimeout === 0) {
            comboCount = 0;
            updateHUD();
        }
    }
    
    // Check if wave is complete (not in boss wave)
    if (!bossActive && !waveTransitionActive && enemiesDefeated >= enemiesInWave) {
        startWaveTransition();
    }
}

// Other game functions...
