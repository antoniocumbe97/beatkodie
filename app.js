const costumPlayer = document.querySelector('.player');
const btnPause = document.getElementById('pause');
const btnPlay = document.getElementById('play');
const btnNext = document.getElementById('next');
const time = document.getElementById('time');
const progress = document.getElementById('progress');

let player = document.getElementById('audioPlayer');

btnPlay.style.display = "none";
costumPlayer.style.display = "none";

progress.onchange = () => {
    player.currentTime = progress.value;
}

document.querySelectorAll('.track').forEach((element, i) => {
    element.addEventListener('click', (event) => {
        let cover = element.getAttribute('data-cover');
        let song = element.getAttribute('data-song');
        document.querySelector('.player__cover img').src = cover;
        document.querySelector('.beatMakers').style.padding = '0 0 140px 0';
        costumPlayer.style.display = 'flex';

        player.innerHTML = `<source src="${song}" type="audio/mp3">`;
        player.play();
        player.ontimeupdate = () => {
            progress.max = player.duration;
            if(player.ended){
                btnPause.style.display = "none";
                btnPlay.style.display = "inline";
                player.currentTime = 0;
            }
            time.innerHTML = showTime(player.currentTime);
            progress.value = player.currentTime;
        }
        
    });
});

const showTime = (duration) => {
    let minutes = Math.floor(duration / 60);
    let secunds = Math.floor(duration % 60);
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(secunds < 10){
        secunds = `0${secunds}`;
    }
    return `${minutes}:${secunds}`;
}

btnPause.addEventListener('click', (event) => {
    event.stopPropagation();
    btnPause.style.display = "none";
    btnPlay.style.display = "inline";
    player.pause();    
});

btnPlay.addEventListener('click', (event) => {
    event.stopPropagation();
    btnPlay.style.display = "none";
    btnPause.style.display = "inline";
    player.play();
});

btnNext.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Next');
});

/*
const player = {}
function createPlayer (){
    <audio controls id="audioPlayer"></audio>
}



let totaoProgress;
const close = document.getElementById('close');

close.addEventListener('click', (event) => {
    event.stopPropagation();
    player.pause();
    costumPlayer.remove();
});


*/