document.getElementById('upgrade1').addEventListener('click', function() {
    let div = document.getElementById('habilidade2');
    let scoreDisplay = document.getElementById('scoreDisplay');
    let score = parseInt(scoreDisplay.textContent, 10);
    div.removeAttribute('hidden');
    score = score - 15;
    scoreDisplay.textContent = score.toString();
});
document.getElementById('upgrade2').addEventListener('click', function() {
    let div = document.getElementById('habilidade3');
    div.removeAttribute('hidden');
    let scoreDisplay = document.getElementById('scoreDisplay');
    let score = parseInt(scoreDisplay.textContent, 10);
    score = score - 100;
    scoreDisplay.textContent = score.toString();
});
document.getElementById('upgrade3').addEventListener('click', function() {
    let div = document.getElementById('habilidade4');
    div.removeAttribute('hidden');
    let scoreDisplay = document.getElementById('scoreDisplay');
    let score = parseInt(scoreDisplay.textContent, 10);
    score = score - 500;
    scoreDisplay.textContent = score.toString();
});
document.getElementById('upgrade4').addEventListener('click', function() {
    let div = document.getElementById('habilidade5');
    div.removeAttribute('hidden');
    let scoreDisplay = document.getElementById('scoreDisplay');
    let score = parseInt(scoreDisplay.textContent, 10);
    score = score - 1000;
    scoreDisplay.textContent = score.toString();
});
document.getElementById('upgrade5').addEventListener('click', function() {
    let div = document.getElementById('habilidade6');
    div.removeAttribute('hidden');
    let scoreDisplay = document.getElementById('scoreDisplay');
    let score = parseInt(scoreDisplay.textContent, 10);
    score = score - 1500;
    scoreDisplay.textContent = score.toString();
});
document.getElementById('upgrade6').addEventListener('click', function() {
    let div = document.getElementById('habilidade7');
    div.removeAttribute('hidden');
    let scoreDisplay = document.getElementById('scoreDisplay');
    let score = parseInt(scoreDisplay.textContent, 10);
    score = score - 3000;
    scoreDisplay.textContent = score.toString();
});
document.getElementById('upgrade7').addEventListener('click', function() {
    let div = document.getElementById('habilidade8');
    div.removeAttribute('hidden');
    let scoreDisplay = document.getElementById('scoreDisplay');
    let score = parseInt(scoreDisplay.textContent, 10);
    score = score - 5000;
    scoreDisplay.textContent = score.toString();
});
