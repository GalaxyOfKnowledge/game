// Boss variables
let boss = null;
let bossActive = false;
let bossHealth = 0;
let bossMaxHealth = 0;

class Enemy {
    constructor() {
        this.type = ['kapre', 'aswang', 'sarimanok'][Math.floor(Math.random() * 3)];
        this.initStats();
        this.x = Math.random() * (CANVAS_WIDTH - this.width);
        this.y = -this.height;
    }
    
    initStats() {
        if (this.type === 'kapre') {
            this.width = 60;
            this.height = 50;
            this.health = 3;
            this.speed = enemySpeed * 0.7;
            this.shootChance = 0.3;
        } else if (this.type === 'aswang') {
            this.width = 30;
            this.height = 20;
            this.health = 1;
            this.speed = enemySpeed * 1.5;
            this.shootChance = 0.5;
        } else { // sarimanok
            this.width = 45;
            this.height = 45;
            this.health = 2;
            this.speed = enemySpeed;
            this.shootChance = 0.4;
        }
    }
    
    shoot() {
        if (bossActive) {
            // Boss shoots tracking bullets
            const angle = Math.atan2(
                player.y + player.height/2 - (this.y + this.height),
                player.x + player.width/2 - (this.x + this.width/2)
            );
            
            enemyBullets.push({
                x: this.x + this.width/2,
                y: this.y + this.height,
                width: 8,
                height: 8,
                speed: 2 * (slowMoActive ? 0.5 : 1),
                angle: angle,
                isTracking: true
            });
            sounds.enemyShoot.play();
        } else if (Math.random() < this.shootChance) {
            enemyBullets.push({
                x: this.x + this.width/2,
                y: this.y + this.height,
                width: 5,
                height: 10,
                speed: 3 * (slowMoActive ? 0.5 : 1),
                isTracking: false
            });
            sounds.enemyShoot.play();
        }
    }
    
    // Other enemy methods...
}

// Other enemy-related functions...
