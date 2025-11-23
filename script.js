let tone = [
  { key: "a", src: "./assets/audio/A2.mp3" },
  { key: "b", src: "./assets/audio/A4.mp3" },
  { key: "c", src: "./assets/audio/A6.mp3" },
  { key: "d", src: "./assets/audio/C2.mp3" },
  { key: "e", src: "./assets/audio/C3.mp3" },
  { key: "f", src: "./assets/audio/C4.mp3" },
  { key: "g", src: "./assets/audio/C5.mp3" },
  { key: "h", src: "./assets/audio/C6.mp3" },
  { key: "i", src: "./assets/audio/C7.mp3" },
  { key: "j", src: "./assets/audio/C8.mp3" },
  { key: "k", src: "./assets/audio/Ds1.mp3" },
  { key: "l", src: "./assets/audio/Ds2.mp3" },
  { key: "m", src: "./assets/audio/Ds3.mp3" },
  { key: "n", src: "./assets/audio/Ds4.mp3" },
  { key: "o", src: "./assets/audio/Ds5.mp3" },
  { key: "p", src: "./assets/audio/Ds6.mp3" },
  { key: "q", src: "./assets/audio/Ds7.mp3" },
];

let buttons = document.querySelectorAll("button");
let aud = document.querySelector('audio');

/* buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let htmll = btn.className;
    for(let i = 0; i<tone.length; i++) {
        if(tone[i].key === htmll){
            aud.src = tone[i].src
        }
    }
    
  });
}); */

buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        let key = btn.dataset.key;

        let sound = tone.find((t)=> t.key === key);

        if(sound) {
            aud.src = sound.src;
            aud.play()
        }
    })
})


