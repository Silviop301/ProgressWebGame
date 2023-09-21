let hasShowed1 = false;
let hasShowed2 = false;
let hasShowed3 = false;
let hasShowed4 = false;
let hasShowed5 = false;
let hasShowed6 = false;
let hasShowed7 = false;


function updateUpgradesVisibility() {
    let scoreDisplay = document.getElementById('scoreDisplay');
    let score = parseInt(scoreDisplay.textContent, 10);

    let upgrade1 = document.getElementById('upgrade1');
    if (score >= 15 && !hasShowed1) {
        upgrade1.removeAttribute('disabled');
        upgrade1.textContent = 'MamaHuevo digo glugluglgu';
        hasShowed1 = true;
    } else if (score >= 100 && !hasShowed2) {
        let upgrade2 = document.getElementById('upgrade2');
        upgrade2.removeAttribute('disabled');
        upgrade2.textContent = 'Upgrade 2';
        hasShowed2 = true;
    } else if (score >= 250 && !hasShowed3) {
        let upgrade3 = document.getElementById('upgrade3');
        upgrade3.removeAttribute('disabled');
        upgrade3.textContent = 'Upgrade 3';
        hasShowed3 = true;
    } else if (score >= 500 && !hasShowed4) {
        let upgrade4 = document.getElementById('upgrade4');
        upgrade4.removeAttribute('disabled');
        upgrade4.textContent = 'Upgrade 4';
        hasShowed4 = true;
    } else if (score >= 1000 && !hasShowed5) {
        let upgrade5 = document.getElementById('upgrade5');
        upgrade5.removeAttribute('disabled');
        upgrade5.textContent = 'Upgrade 5';
        hasShowed5 = true;
    } else if (score >= 1500 && !hasShowed6) {
        let upgrade6 = document.getElementById('upgrade6');
        upgrade6.removeAttribute('disabled');
        upgrade6.textContent = 'Upgrade 6';
        hasShowed6 = true;
    } else if (score >= 5000 && !hasShowed7) {
        let upgrade7 = document.getElementById('upgrade7');
        upgrade7.removeAttribute('disabled');
        upgrade7.textContent = 'Upgrade 7';
        hasShowed7 = true;
    }}
setInterval(updateUpgradesVisibility, 500);