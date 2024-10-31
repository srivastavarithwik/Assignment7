const timerLabel = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let interval; 
let seconds = 0;

const updateTimer = async() => { 
    return new Promise(resolve => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const formattedTime = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        timerLabel.textContent = formattedTime;
        resolve();
    });
}

const startTimer = async() =>  { 
    startButton.disabled = true;

    interval = setInterval(async () => { 
        await updateTimer();
        seconds++;
    }, 1000);
}

const stopTimer = () => {
    clearInterval(interval); 
    startButton.disabled = false;
    datePicker.disabled = false;
}

const resetTimer = () => {
    clearInterval(interval); 
    seconds = 0;
    updateTimer();
    startButton.disabled = false;
    datePicker.disabled = false;
}



const datePicker = document.getElementById('datePicker');

const setInitialDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    datePicker.value = currentDate;
}

setInitialDate();

datePicker.addEventListener('keydown', function(e) {
    e.preventDefault(); 
});

datePicker.addEventListener('click', function() {
    this.blur();
});


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

setInitialDateTime();
updateTimer();