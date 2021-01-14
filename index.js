let play=document.getElementById("play")
let pause=document.getElementById("Pause")
let audio=document.createElement("audio")
audio.src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3"
play.addEventListener('click',playsong)
function playsong(){
    audio.play()
}
pause.addEventListener('click',pausesong)
function pausesong(){
    audio.pause()
}
