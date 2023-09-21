function setupProgressBar(buttonId, progressBarId, timerDisplayId, points, duration) {
    document.getElementById(buttonId).addEventListener('click', function() {
        let progressBar = document.getElementById(progressBarId);
        let timerDisplay = document.getElementById(timerDisplayId);
        let scoreDisplay = document.getElementById('scoreDisplay');
        if (progressBar.getAttribute('aria-valuenow') > 0 && progressBar.getAttribute('aria-valuenow') < 100) {
            return;
        }
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuenow', 0);
        timerDisplay.textContent = '0';
        let targetTime = duration * 1000;
        let startTime = new Date().getTime();
        function updateProgressAndTimer() {
            let currentTime = new Date().getTime();
            let elapsedTime = currentTime - startTime;
            if (elapsedTime >= targetTime) {
                progressBar.style.width = '100%';
                progressBar.setAttribute('aria-valuenow', 100);
                timerDisplay.textContent = duration;
                let currentScore = parseInt(scoreDisplay.textContent, 10);
                scoreDisplay.textContent = (currentScore + points).toString();
                setTimeout(() => {
                    progressBar.style.width = '0%';
                    progressBar.setAttribute('aria-valuenow', 0);
                }, 500);
                return;
            }
            let progressPercentage = (elapsedTime / targetTime) * 100;
            progressBar.style.width = progressPercentage + '%';
            progressBar.setAttribute('aria-valuenow', progressPercentage);
            timerDisplay.textContent = Math.floor(elapsedTime / 1000).toString();
            requestAnimationFrame(updateProgressAndTimer);
        }
        updateProgressAndTimer();
    });
}

setupProgressBar('startProgress', 'progressBar', 'timerDisplay', 5, 10);
setupProgressBar('startProgress2', 'progressBar2', 'timerDisplay2', 20, 12);
setupProgressBar('startProgress3', 'progressBar3', 'timerDisplay3', 50, 12);
setupProgressBar('startProgress4', 'progressBar4', 'timerDisplay4', 100, 12);
setupProgressBar('startProgress5', 'progressBar5', 'timerDisplay5', 150, 15);
setupProgressBar('startProgress6', 'progressBar6', 'timerDisplay6', 200, 20);
setupProgressBar('startProgress7', 'progressBar7', 'timerDisplay7', 300, 25);
setupProgressBar('startProgress8', 'progressBar8', 'timerDisplay8', 500, 30);
