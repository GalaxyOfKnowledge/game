// Initialize game when window loads
window.onload = function() {
    initGame();
    resizeGame();
};

// Track pressed keys
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    ' ': false,
    'z': false,
    't': false,
    'b': false,
    'Escape': false
};

// Game constants
const BOSS_WAVE = 10;
const TRIVIA_LASER_MAX = 100;

// Game states
const STATE_MENU = 0;
const STATE_PLAYING = 1;
const STATE_GAME_OVER = 2;
const STATE_HIGHSCORE = 3;
const STATE_SETTINGS = 4;
const STATE_WIN = 5;
const STATE_TUTORIAL = 6;
const STATE_WAVE = 7;
const STATE_QUIZ = 8;
const STATE_OBJECTIVES = 9;

// Initialize canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let CANVAS_WIDTH = window.innerWidth;
let CANVAS_HEIGHT = window.innerHeight;

// Set dynamic sizing
function resizeGame() {
    CANVAS_WIDTH = window.innerWidth;
    CANVAS_HEIGHT = window.innerHeight;
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    
    if (player) {
        player.x = CANVAS_WIDTH/2 - player.width/2;
        player.y = CANVAS_HEIGHT - player.height - 50;
    }
    
    if (bossActive && boss) {
        boss.x = CANVAS_WIDTH/2 - boss.width/2;
    }
}

window.addEventListener('resize', resizeGame);

// Initialize game
function initGame() {
    loadHighScores();
    loadSettings();
    resizeGame();
    setupEventListeners();
    requestAnimationFrame(gameLoop);
}
