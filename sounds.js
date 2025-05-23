const sounds = {
    shoot: new Audio('mixkit-game-whip-shot-1512.wav'),
    enemyShoot: new Audio('mixkit-arrow-whoosh-1491.wav'),
    explosion: new Audio('mixkit-arcade-game-explosion-1699.wav'),
    powerup: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3'),
    correct: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3'),
    wrong: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'),
    bossSpawn: new Audio('mixkit-dinosaur-monster-roar-1976.wav'),
    shipChange: new Audio('mixkit-arcade-retro-jump-223 (1).wav'),
    win: new Audio('mixkit-winning-chimes-2015.wav'),
    combo: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-extra-bonus-in-a-video-game-2045.mp3'),
    waveComplete: new Audio('mixkit-arcade-bonus-alert-767.wav'),
    hit: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-retro-changing-tab-206.mp3'),
    menuSelect: new Audio('mixkit-gear-fast-lock-tap-2857.wav'),
    menuHover: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-horror-ambience-228.mp3'),
    laser: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-laser-weapon-shot-1671.mp3'),
    slowmo: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3'),
    heal: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3'),
    shield: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-magic-spell-shimmer-2367.mp3'),
    menuOpen: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3'),
    ambient: new Audio('https://assets.mixkit.co/sfx/preview/mixkit-forest-ambience-1681.mp3')
};

// Set volume for all sounds
function initSounds() {
    Object.values(sounds).forEach(sound => {
        sound.volume = settings.soundEffects ? 0.5 : 0;
    });
    backgroundMusic.volume = settings.musicVolume;
}
