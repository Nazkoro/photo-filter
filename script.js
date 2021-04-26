const inputs = document.querySelectorAll('.filters input')
const outputs = document.querySelectorAll('.filters output')
const btnReset = document.querySelector('.btn-reset')
const fullscreen = document.querySelector('.fullscreen')
const btnNext = document.querySelector('.btn-next')
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const download = document.querySelector('.btn-save');


fullscreen.addEventListener('click',toggleFullScreen)
btnReset.addEventListener('click',clear)

let date = new Date();

// час в вашем текущем часовом поясе
let time = date.getHours() ;
let temp =''
if(time>5 && time<12)  temp = 'morning'
if(time>11 && time<18)  temp = 'day'
if(time>17 && time<24)  temp = 'evening'
if(time>=0 && time<6)  temp = 'night'
console.log(time)
console.log(temp)
 
function next() {
  
  let count = 1;

  return function() {

    if(count>20){
       count =1
    }
    if(count>9 && count<21){
      document.getElementById("myImage").src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${temp}/${count}.jpg`;
     } else{
      document.getElementById("myImage").src=`https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${temp}/0${count}.jpg`;
     }
     console.log(count)

    return count++; 
  };
}
 let counter = next()

 btnNext.addEventListener('click',counter)


function clear(){
  r0.value=0
  r2.value=0
  r3.value=100
  r4.value=0
  r1.value=0
  
  i0.value = 0
  i1.value = 0
  i2.value =0
  i3.value =100
  i4.value =0
  document.documentElement.style.setProperty(`--blur`, '0px' )
  document.documentElement.style.setProperty(`--invert`, '0%' )
  document.documentElement.style.setProperty(`--sepia`, '0%' )
  document.documentElement.style.setProperty(`--saturate`, '100%' )
  document.documentElement.style.setProperty(`--hue`, '0deg' )
  // inputs.style.
}
function fun0() {
  var rng0=document.getElementById('r0'); //rng - это ползунок
  var i0=document.getElementById('i0'); // i1 - input
 i0.value=rng0.value;
}

function fun1() {
  var rng=document.getElementById('r1'); //rng - это ползунок
  var i1=document.getElementById('i1'); // i1 - input
 i1.value=rng.value;
}
function fun2() {
  var rng2=document.getElementById('r2'); //rng - это ползунок
  var i2=document.getElementById('i2'); // i1 - input
 i2.value=rng2.value;
}
function fun3() {
  var rng3=document.getElementById('r3'); //rng - это ползунок
  var i3=document.getElementById('i3'); // i1 - input
 i3.value=rng3.value;
}
function fun4() {
  var rng4=document.getElementById('r4'); //rng - это ползунок
  var i4=document.getElementById('i4'); // i1 - input
 i4.value=rng4.value;
}
function handleUpdate() {

    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    drawImage();

    // console.log(ctx.filter = `${this.name}(${this.value+suffix})`)

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));







const fileInput = document.querySelector('.btn-load--input');
const imageContainer = document.querySelector('.img-container');

fileInput.addEventListener('change', function(e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imageContainer.innerHTML = "";
    imageContainer.append(img);
  }
  reader.readAsDataURL(file);
});


// реализация кнопки fullscreen
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

document.addEventListener("keypress", function(e) {
  if (e.keyCode === 27) {
    toggleFullScreen();
  }
}, false);




function drawImage() {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous'); 
  img.src= document.getElementById("myImage").src
  // img.src = "https://upload.wikimedia.org/wikipedia/commons/c/c9/Зимний_пейзаж.jpg";
  img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    // ctx.filter = 'blur(10px)';
    
    ctx.filter = `blur(${(i0.value)*1.8}px) invert(${(i1.value)*1.25}%) sepia(${(i2.value)*2.4}%) saturate(${(i3.value)*2.2}%) hue-rotate(${(i4.value)*0.5}deg)`;
    // ctx.filter = `blur(${i0.value}px) invert(${1}) sepia(${0.5})`;
    // console.log(`blur(${i0.value}px) invert(${i1.value}%) sepia(${i2.value}%) saturate(${i3.value}%) hue(${i4.value}deg)`)
    ctx.drawImage(img, 0, 0);
  };  
}
btnNext.addEventListener('click',drawImage)
drawImage();

download.addEventListener('click', function(e) {
  
    var link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;

  });

