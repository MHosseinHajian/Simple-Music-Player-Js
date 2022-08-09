let audioElem = document.querySelector('audio')
let playElem = document.querySelector('.fa-play-circle')
let pauseElem = document.querySelector('.fa-pause-circle')
let stopElem = document.querySelector('.fa-stop-circle')
let currentTime = document.querySelector('.currentTime')
let backward = document.querySelector('.fa-step-backward')
let forward = document.querySelector('.fa-step-forward')
let musicLists = [
    'assets/music/1.mp3',
    'assets/music/2.mp3',
]

function currentTimes(){
    let standardTime = Math.floor(audioElem.currentTime)
    if(Math.floor(audioElem.currentTime)<10){
        standardTime = "00" + ":" + "0" + Math.floor(audioElem.currentTime)
    }
    if(Math.floor(audioElem.currentTime)>=10){
        standardTime = "00" + ":" + Math.floor(audioElem.currentTime)
    }
    if(Math.floor(audioElem.currentTime)>=60){
        if(Math.floor(audioElem.currentTime%60)<10){
            standardTime = "0"+Math.floor(audioElem.currentTime/60) + ":" + "0" +Math.floor(audioElem.currentTime%60)
        }
        else{
            standardTime = "0"+Math.floor(audioElem.currentTime/60) + ":" + Math.floor(audioElem.currentTime%60)
        }
    }
    if(Math.floor(audioElem.currentTime)>=60){
        if(Math.floor(audioElem.currentTime%60)<10){
            standardTime = "0"+Math.floor(audioElem.currentTime/60) + ":" + "0" +Math.floor(audioElem.currentTime%60)
        }
        else{
            standardTime = "0"+Math.floor(audioElem.currentTime/60) + ":" + Math.floor(audioElem.currentTime%60)
        }
    }
    currentTime.innerHTML = standardTime 
}
setInterval(currentTimes,1000)

function playMusic(){
    audioElem.play()
    playElem.style.display="none"
    pauseElem.style.display="inline-block"
}
playElem.addEventListener('click',playMusic)

function pauseMusic(){
    audioElem.pause()
    playElem.style.display="inline-block"
    pauseElem.style.display="none"
}
pauseElem.addEventListener('click',pauseMusic)

function stopMusic(){
    audioElem.currentTime = 0
    audioElem.pause()
    playElem.style.display="inline-block"
    pauseElem.style.display="none"
}
stopElem.addEventListener('click',stopMusic)

let music = 0
function forwardMusic(){
    music++
    if(musicLists.length-1>=music){
        audioElem.src=musicLists[music]
    }else{
        audioElem.src=musicLists[0]
        music=0
    }
    audioElem.play()
}
forward.addEventListener('click',forwardMusic)

function backwardMusic(){
    music--
    if(music<0){
        audioElem.src=musicLists[musicLists.length-1]
        music=musicLists.length-1
    }else{
        audioElem.src=musicLists[music]
    }
    audioElem.play()
}
backward.addEventListener('click',backwardMusic)