// Player object
let player = {
    x: CANVAS_WIDTH / 2 - 25,
    y: CANVAS_HEIGHT - 90,
    width: 50,
    height: 30,
    speed: 5,
    durability: {
        default: 3,
        bangka: 3,
        jeepney: 3
    },
    score: 0,
    powerups: {
        barongShield: false,
        jeepneyBoost: false,
        tiniklingMode: false
    },
    shipSkin: 'default',
    availableShips: {
        default: true,
        bangka: false,
        jeepney: false
    },
    triviaLaser: 0,
    specialAbilities: {
        default: { cooldown: 0, maxCooldown: 300 },
        bangka: { cooldown: 0, maxCooldown: 450 },
        jeepney: { cooldown: 0, maxCooldown: 240 }
    }
};

function drawPlayer() {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';
    
    // Draw shield if active
    if (bossActive || waveTransitionActive || player.powerups.barongShield) {
        drawShield();
    }
    
    // Draw the appropriate ship
    switch(player.shipSkin) {
        case 'default':
            drawDefaultShip();
            break;
        case 'bangka':
            drawBangkaShip();
            break;
        case 'jeepney':
            drawJeepneyShip();
            break;
    }
    
    ctx.restore();
}

function drawBangkaShip() {
    // Redesigned bangka (outrigger boat) - no sail
    ctx.fillStyle = '#8B4513';
    // Boat hull
    ctx.beginPath();
    ctx.moveTo(
        Math.round(player.x + player.width/2),
        Math.round(player.y + player.height/3)
    );
    ctx.lineTo(
        Math.round(player.x),
        Math.round(player.y + player.height)
    );
    ctx.lineTo(
        Math.round(player.x + player.width),
        Math.round(player.y + player.height)
    );
    ctx.closePath();
    ctx.fill();
    
    // Outriggers
    ctx.fillStyle = '#5D2906';
    // Left outrigger
    ctx.fillRect(
        Math.round(player.x - 15),
        Math.round(player.y + player.height/2),
        15, 5
    );
    // Right outrigger
    ctx.fillRect(
        Math.round(player.x + player.width),
        Math.round(player.y + player.height/2),
        15, 5
    );
    
    // Boat details
    ctx.fillStyle = '#5D2906';
    for (let i = 0; i < 3; i++) {
        ctx.fillRect(
            Math.round(player.x + 10 + i*15),
            Math.round(player.y + player.height - 10),
            10, 5
        );
    }
    
    // Add ship glow
    ctx.shadowColor = '#8B4513';
    ctx.shadowBlur = 15;
    ctx.fill();
    ctx.shadowBlur = 0;
}

// Other player functions...
